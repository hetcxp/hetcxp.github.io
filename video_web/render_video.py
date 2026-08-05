import json
import os
import math
import sys
from moviepy import ImageClip, AudioFileClip, CompositeVideoClip, concatenate_videoclips, CompositeAudioClip

def ease_cubic_in_out(t):
    if t < 0.5:
        return 4 * t * t * t
    else:
        return 1 - math.pow(-2 * t + 2, 3) / 2

def main():
    print("Iniciando renderizado de MP4...")
    if not os.path.exists('slide_data.json'):
        print("Error: No se encontró slide_data.json en el directorio actual.")
        sys.exit(1)

    with open('slide_data.json', 'r') as f:
        slides = json.load(f)

    if not slides:
        print("No hay slides para procesar.")
        sys.exit(1)

    # Obtener dimensiones del primer slide
    first_img_path = slides[0]["image"]
    try:
        from PIL import Image
        first_img = Image.open(first_img_path)
        W, H = first_img.size
    except Exception as e:
        print("Error abriendo la primera imagen para dimensiones:", e)
        W, H = 1920, 1080 # Fallback 1080p

    final_clips = []
    
    # Cursor posición inicial: Centro de la pantalla
    curr_cx = W / 2
    curr_cy = H / 2

    # Intentar cargar assets locales
    cursor_img = "cursor.png" if os.path.exists("cursor.png") else None
    click_audio = "click.wav" if os.path.exists("click.wav") else None
    
    if not cursor_img:
        print("Advertencia: No se encontró cursor.png. El mouse no será visible.")

    for i, slide in enumerate(slides):
        print(f"Procesando slide {i+1}/{len(slides)}...")
        
        img_path = slide["image"]
        audio_path = slide["audio"]
        target = slide["cursorTarget"]
        
        # Coordenadas relativas a pixeles de la resolucion real
        tx_px = (target["x"] / 100.0) * W
        ty_px = (target["y"] / 100.0) * H
        
        # Audio
        audio_clip = AudioFileClip(audio_path)
        audio_duration = audio_clip.duration
        
        # El clip durará la narración + 1 segundo (movimiento) + 0.3 seg (reposo/click)
        slide_duration = audio_duration + 1.3
        
        bg_clip = ImageClip(img_path).with_duration(slide_duration)
        
        # Composicion de audios
        audios_to_mix = [audio_clip.with_start(0)]
        if click_audio:
            # Click suena justo cuando llega el mouse (desactivado por compatibilidad en mix)
            # sfx = AudioFileClip(click_audio).with_start(audio_duration + 0.95)
            # audios_to_mix.append(sfx)
            pass
            
        mixed_audio = CompositeAudioClip(audios_to_mix)
        bg_clip = bg_clip.with_audio(mixed_audio)
        
        # Armar capas del slide
        layers = [bg_clip]
        
        if cursor_img:
            # Función creadora de cierres (closures)
            def get_pos_func(start_pos, end_pos, move_start_time):
                def make_pos(t):
                    if t < move_start_time:
                        return start_pos
                    elif t > move_start_time + 1.0:
                        return end_pos
                    else:
                        progress = t - move_start_time
                        e = ease_cubic_in_out(progress)
                        cur_x = start_pos[0] + (end_pos[0] - start_pos[0]) * e
                        cur_y = start_pos[1] + (end_pos[1] - start_pos[1]) * e
                        return (cur_x, cur_y)
                return make_pos

            cursor_clip = ImageClip(cursor_img).with_duration(slide_duration)
            
            # Asignar animación
            pos_func = get_pos_func((curr_cx, curr_cy), (tx_px, ty_px), audio_duration)
            cursor_clip = cursor_clip.with_position(pos_func)
            
            layers.append(cursor_clip)
            
            # Agregar el efecto Ripple si es click o text (siempre que se detiene el mouse)
            if os.path.exists("ripple.png"):
                # Mostrarlo 0.3s a partir de que termina el movimiento (audio_duration + 1.0)
                # Centrado sobre el puntero. Como ripple.png es 64x64, restamos 32 al x y y.
                rx = tx_px - 32
                ry = ty_px - 32
                ripple_clip = ImageClip("ripple.png").with_duration(0.3).with_start(audio_duration + 1.0).with_position((rx, ry))
                layers.append(ripple_clip)
            
            # Actualizar origen para el proximo slide
            curr_cx = tx_px
            curr_cy = ty_px
            
        comp = CompositeVideoClip(layers)
        final_clips.append(comp)

    print("Ensamblando video final. Esto puede tardar varios minutos...")
    final_video = concatenate_videoclips(final_clips)
    final_video.write_videofile("tutorial_final.mp4", fps=24, codec="libx264", audio_codec="aac")
    print("Render completado exitosamente: tutorial_final.mp4")

if __name__ == "__main__":
    main()
