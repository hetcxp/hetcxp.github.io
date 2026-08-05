from PIL import Image, ImageDraw

# 1. Cursor perfecto
img = Image.new('RGBA', (32, 32), (0, 0, 0, 0))
d = ImageDraw.Draw(img)
# Flecha clásica de macOS
points = [(4, 4), (12, 28), (16, 20), (24, 24), (27, 21), (19, 17), (28, 12)]
d.polygon(points, fill=(0, 0, 0, 255), outline=(255, 255, 255, 255), width=2)
img.save("cursor.png")

# 2. Efecto de Click (Ripple estático pero semitransparente que superpondremos)
img_r = Image.new('RGBA', (64, 64), (0, 0, 0, 0))
d_r = ImageDraw.Draw(img_r)
d_r.ellipse([0, 0, 64, 64], fill=(255, 0, 0, 120))
d_r.ellipse([16, 16, 48, 48], fill=(255, 0, 0, 180))
img_r.save("ripple.png")

print("PNGs listos y transparentes")
