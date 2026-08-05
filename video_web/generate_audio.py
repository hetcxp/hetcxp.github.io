import asyncio
import json
import os
import re
from mutagen.mp3 import MP3
import edge_tts

# Notas de orador (1-indexed matching the slides)
speaker_notes = {
    1: "Bienvenido. En este tutorial vas a aprender cómo cargar un nuevo cliente en el Sistema Integrado Administrativo. Para comenzar, te encuentras en la pantalla principal del sistema. Haz clic en el menú Menús, ubicado en la barra superior.",
    2: "Se despliega el menú con las opciones disponibles. Dentro de la sección Opciones Administrativo, selecciona la opción Cuentas por Cobrar, Cobranzas, Vendedor.",
    3: "Ahora te encuentras en el módulo de Cuentas por Cobrar y Cobranza. En la barra de menú superior puedes ver las opciones Cliente, CxC, Anticipo, Cobranza y Vendedor. Haz clic en el botón Cliente.",
    4: "Se despliega un submenú con dos opciones: Gestionar Cliente e Informes de libros. Selecciona Gestionar Cliente.",
    5: "Se abre la ventana Buscar Cliente. En la parte superior tienes los botones de Insertar, Modificar, Eliminar, Consultar, Buscar e Informes, entre otros. En la lista puedes ver los clientes que vienen cargados por defecto en el sistema. Para agregar un nuevo cliente, haz clic en el botón Insertar.",
    6: "Se abre el formulario de inserción de cliente. Puedes observar que el campo Código ya viene predefinido con el valor cero cero cero cero cero cero cero cero cero uno. También ves el campo Cliente Desde, que te permite configurar la fecha en la cual inicias relación comercial con el cliente. Haz clic en el ícono de calendario junto a este campo.",
    7: "Se despliega un calendario correspondiente al mes de julio de dos mil veintiséis. Aquí puedes seleccionar la fecha deseada. Selecciona el día veintisiete.",
    8: "La fecha ha sido configurada como veintisiete de julio de dos mil veintiséis. Ahora, revisa el campo Status. Haz clic en el desplegable de Status.",
    9: "Al desplegar las opciones de Status, cuentas con cuatro estados disponibles: Activo, Inactivo, Restringido y Suspendido. Deja la opción que viene por defecto, Activo. Cierra el desplegable.",
    10: "Debajo del Status, encuentras la casilla Es Extranjero. Si tu cliente es extranjero, puedes marcar esta opción. En este caso, déjala sin marcar. Ahora, haz clic en el campo Número de RIF para ingresar el dato.",
    11: "Ingresa el número de RIF del cliente. En este ejemplo, colocamos Jota uno dos tres cuatro cinco seis siete ocho nueve. A continuación, haz clic en el campo Nombre para ingresar la razón social.",
    12: "Escribe la razón social del cliente. En este caso, Inversiones Cliente C.A. Ten en cuenta que el campo Número de NIT actualmente no se usa. Ahora, haz clic en el desplegable de Tipo de Contribuyente.",
    13: "Se despliegan dos opciones: Contribuyente y No Contribuyente. Selecciona Contribuyente.",
    14: "El tipo de contribuyente ha sido configurado. Ahora pasa a la pestaña de Datos Generales, que ya se encuentra activa. Haz clic en el campo Contacto para ingresar el nombre de la persona de contacto.",
    15: "Escribe el nombre del contacto. En este ejemplo, Pedro Pérez. Ahora, haz clic en el campo Teléfono.",
    16: "Ingresa el número de teléfono del cliente. En este caso, cero dos uno dos, guion, uno dos tres cuatro cinco seis siete. No es necesario rellenar el campo de número de fax. Haz clic en el campo E-mail.",
    17: "Ingresa el correo electrónico del cliente. En este ejemplo, inccliente arroba correo punto com. Ahora, haz clic en el campo Dirección.",
    18: "Escribe la dirección del cliente. En este caso, Urbanización Los Palos Grandes. A continuación, debes asignar la ciudad. Haz clic en el botón de tres puntos junto al campo Ciudad.",
    19: "Se abre la ventana Escoger Ciudad, mostrando una lista alfabética con todas las ciudades disponibles. Para buscar rápidamente, puedes usar el asterisco como comodín. Escribe asterisco, seguido de la palabra Caracas, en el campo de búsqueda.",
    20: "Has escrito asterisco Caracas en el campo de búsqueda. Ahora, haz clic en el botón Buscar.",
    21: "El sistema muestra los resultados que coinciden con tu búsqueda: Caracas y Los Caracas. Selecciona Caracas y haz clic en el botón Escoger.",
    22: "La ciudad Caracas ha sido asignada al cliente. Ahora, haz clic en el campo Zona Postal para ingresar el código postal.",
    23: "Ingresa la zona postal. En este caso, mil cuarenta. A continuación, configura la Zona de Cobranza. Haz clic en el botón de tres puntos junto a este campo.",
    24: "Se ha asignado la zona de cobranza. En este ejemplo, Maroa. Las zonas de cobranza pueden configurarse desde la opción Mantenimiento de Tablas. Ahora, revisa el campo Sector de Negocio. Haz clic en el botón de tres puntos junto a este campo.",
    25: "El Sector de Negocio viene por defecto como No Asignado. Si lo deseas, puedes agregar más sectores desde las tablas del sistema. También ves el Nivel de Precio para el Cliente, configurado en Precio uno. Ahora, si deseas registrar el cumpleaños del cliente, haz clic en el campo Día de cumpleaños.",
    26: "Ingresa el día de cumpleaños. En este ejemplo, veinticuatro. Completa también el mes ingresando el número correspondiente. Luego, desplázate hacia abajo para acceder a la sección Datos del Vendedor.",
    27: "Al desplazarte hacia abajo, encuentras la sección Datos del Vendedor con los campos Código y Nombre. Para asignar un vendedor al cliente, haz clic en el botón de tres puntos junto al campo Nombre.",
    28: "Se ha asignado el vendedor al cliente. En este caso, el código cero cero cero cero uno correspondiente a Oficina. Ahora, revisa la pestaña de Advertencias. Haz clic en ella.",
    29: "En la pestaña Advertencias puedes configurar la razón de una posible restricción o inactividad para el cliente. También cuentas con la opción de activar un aviso de situación especial. Continúa con la siguiente pestaña. Haz clic en Dirección de Despacho.",
    30: "En la pestaña Dirección de Despacho puedes asignarle al cliente una o varias direcciones de despacho mediante los botones de agregar y eliminar. Una vez completados todos los datos del cliente, procede a guardar el registro. Haz clic en el botón Insertar en la barra de acciones superior.",
    31: "El cliente ha sido insertado exitosamente. Puedes observar que el sistema ya presenta un nuevo formulario vacío con el siguiente código correlativo, listo para un nuevo registro. Para finalizar, haz clic en el botón Salir.",
    32: "De regreso en la ventana Buscar Cliente, puedes confirmar que el nuevo cliente, Inversiones Cliente C.A, aparece en la lista con su código, número de RIF y teléfono registrados correctamente. Con esto, has completado el proceso de inserción de un cliente en el sistema. Cierra la ventana para finalizar."
}

VOICE = "es-VE-SebastianNeural"
AUDIO_DIR = "audio"
os.makedirs(AUDIO_DIR, exist_ok=True)

def parse_slides_from_js():
    with open('../tutorial_web/app.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Extraer el array slides
    match = re.search(r'const slides = \[(.*?)\];', content, re.DOTALL)
    if not match:
        raise Exception("Could not find slides array in app.js")
    
    slides_str = match.group(1)
    
    # Extraer cada objeto (aproximadamente)
    # Buscamos patrones: { id: 1, image: "...", type: "...", hotspot: { x: ..., y: ..., w: ..., h: ... }, ... }
    slide_objs = []
    
    # Split by { id:
    parts = slides_str.split('{ id:')
    for p in parts[1:]:
        p = '{ id:' + p
        # Encontrar donde cierra la llave principal del slide
        close_idx = p.find('},')
        if close_idx == -1:
            close_idx = p.find('}')
            
        obj_str = p[:close_idx+1]
        
        # Parse fields
        id_m = re.search(r'id:\s*(\d+)', obj_str)
        img_m = re.search(r'image:\s*"([^"]+)"', obj_str)
        type_m = re.search(r'type:\s*"([^"]+)"', obj_str)
        
        hx = re.search(r'x:\s*([\d.]+)', obj_str)
        hy = re.search(r'y:\s*([\d.]+)', obj_str)
        hw = re.search(r'w:\s*([\d.]+)', obj_str)
        hh = re.search(r'h:\s*([\d.]+)', obj_str)
        
        if id_m and img_m and type_m and hx and hy and hw and hh:
            slide_id = int(id_m.group(1))
            stype = type_m.group(1)
            x, y, w, h = map(float, [hx.group(1), hy.group(1), hw.group(1), hh.group(1)])
            
            # target logic
            if stype == "click":
                tx = x + (w / 2)
                ty = y + (h / 2)
            else: # text
                tx = x
                ty = y + (h / 2)
                
            slide_objs.append({
                "id": slide_id,
                "image": f"images/{img_m.group(1)}",
                "type": stype,
                "cursorTarget": {"x": round(tx, 2), "y": round(ty, 2)}
            })
            
    return slide_objs

async def main():
    slides = parse_slides_from_js()
    output_data = []
    
    for slide in slides:
        sid = slide["id"]
        notes = speaker_notes.get(sid, "")
        
        audio_file = f"{AUDIO_DIR}/slide_{sid}.mp3"
        print(f"Generando audio para slide {sid}...")
        
        if not os.path.exists(audio_file):
            communicate = edge_tts.Communicate(notes, VOICE)
            await communicate.save(audio_file)
            
        # Obtener duracion
        audio_info = MP3(audio_file)
        duration = audio_info.info.length
        
        slide["audio"] = audio_file
        slide["duration"] = round(duration, 2)
        slide["speakerNotes"] = notes
        
        output_data.append(slide)
        
    with open("slide_data.json", "w", encoding="utf-8") as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)
        
    print("slide_data.json generado con exito. Total slides:", len(output_data))

if __name__ == "__main__":
    asyncio.run(main())
