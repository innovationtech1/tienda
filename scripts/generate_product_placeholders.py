"""
Genera imágenes placeholder simples y de buen gusto para cada producto,
usando la paleta de marca de innovationTECH. Sirven para que el sitio
se vea completo desde el primer día sin depender de hotlinking a
dominios externos (que pueden romperse o tener restricciones de copyright).

CUANDO TENGAS TUS PRODUCTOS REALES DE AMAZON:
Reemplaza estos archivos en /public/products/ por capturas o imágenes
reales del producto (Amazon permite el uso de sus imágenes de producto
dentro del programa de Afiliados, ver sus políticas operativas).
"""

from PIL import Image, ImageDraw, ImageFont

PALETTE = {
    "cream": "#FAF6EF",
    "cream_deep": "#F1E9DA",
    "charcoal": "#2B2622",
    "terracotta": "#C4622D",
    "sage": "#6B7A5E",
    "gold": "#C9A04E",
}

W, H = 800, 600

# (id_archivo, icono_simple, color_acento, etiqueta)
PRODUCTS = [
    ("freidora-aire-ninja", "fryer", PALETTE["terracotta"], "Freidora de Aire"),
    ("termometro-carne-bluetooth", "thermo", PALETTE["sage"], "Termómetro BT"),
    ("selladora-vacio-cuisinart", "seal", PALETTE["terracotta"], "Selladora al Vacío"),
    ("bascula-digital-precision", "scale", PALETTE["gold"], "Báscula Digital"),
    ("minicultivo-hidroponico-aerogarden", "plant", PALETTE["sage"], "Jardín Hidropónico"),
    ("batidora-potente-ninja", "blender", PALETTE["terracotta"], "Licuadora"),
    ("exprimidor-electrico-citricos", "juicer", PALETTE["gold"], "Exprimidor"),
    ("pelador-electrico-rotato", "peeler", PALETTE["sage"], "Pelador Eléctrico"),
    ("organizador-especias-giratorio", "spice", PALETTE["terracotta"], "Especiero Giratorio"),
    ("tabla-cortar-bascula", "board", PALETTE["gold"], "Tabla con Báscula"),
]


def draw_icon(draw, kind, cx, cy, scale, color):
    """Dibuja un ícono lineal simple según el tipo de producto."""
    s = scale
    lw = max(4, int(s * 0.04))

    if kind == "fryer":
        draw.rounded_rectangle([cx - s*0.45, cy - s*0.25, cx + s*0.45, cy + s*0.5], radius=s*0.12, outline=color, width=lw)
        draw.ellipse([cx - s*0.3, cy - s*0.45, cx + s*0.3, cy - s*0.15], outline=color, width=lw)
        draw.ellipse([cx - s*0.06, cy - s*0.36, cx + s*0.06, cy - s*0.24], fill=color)

    elif kind == "thermo":
        draw.line([cx, cy - s*0.45, cx, cy + s*0.2], fill=color, width=lw)
        draw.ellipse([cx - s*0.18, cy + s*0.15, cx + s*0.18, cy + s*0.5], outline=color, width=lw)
        draw.ellipse([cx - s*0.08, cy + s*0.25, cx + s*0.08, cy + s*0.4], fill=color)

    elif kind == "seal":
        draw.rounded_rectangle([cx - s*0.4, cy - s*0.3, cx + s*0.4, cy + s*0.3], radius=s*0.08, outline=color, width=lw)
        for i in range(-2, 3):
            draw.line([cx - s*0.3, cy + i*s*0.1, cx + s*0.3, cy + i*s*0.1], fill=color, width=max(2, lw//2))

    elif kind == "scale":
        draw.rounded_rectangle([cx - s*0.45, cy + s*0.05, cx + s*0.45, cy + s*0.4], radius=s*0.06, outline=color, width=lw)
        draw.rectangle([cx - s*0.2, cy - s*0.35, cx + s*0.2, cy + s*0.05], outline=color, width=lw)
        draw.text((cx, cy - s*0.15), "0.0", fill=color, anchor="mm")

    elif kind == "plant":
        draw.rounded_rectangle([cx - s*0.3, cy + s*0.1, cx + s*0.3, cy + s*0.45], radius=s*0.05, outline=color, width=lw)
        draw.line([cx, cy + s*0.1, cx, cy - s*0.3], fill=color, width=lw)
        draw.ellipse([cx - s*0.25, cy - s*0.45, cx + s*0.05, cy - s*0.15], outline=color, width=lw)
        draw.ellipse([cx - s*0.05, cy - s*0.5, cx + s*0.25, cy - s*0.2], outline=color, width=lw)

    elif kind == "blender":
        draw.polygon([
            (cx - s*0.25, cy - s*0.4), (cx + s*0.25, cy - s*0.4),
            (cx + s*0.15, cy + s*0.35), (cx - s*0.15, cy + s*0.35),
        ], outline=color, width=lw)
        draw.rounded_rectangle([cx - s*0.3, cy + s*0.35, cx + s*0.3, cy + s*0.48], radius=s*0.04, outline=color, width=lw)

    elif kind == "juicer":
        draw.ellipse([cx - s*0.4, cy - s*0.1, cx + s*0.4, cy + s*0.4], outline=color, width=lw)
        draw.ellipse([cx - s*0.18, cy - s*0.35, cx + s*0.18, cy - s*0.05], outline=color, width=lw)

    elif kind == "peeler":
        draw.line([cx - s*0.35, cy + s*0.35, cx + s*0.15, cy - s*0.3], fill=color, width=lw)
        draw.ellipse([cx + s*0.05, cy - s*0.42, cx + s*0.35, cy - s*0.18], outline=color, width=lw)

    elif kind == "spice":
        for i, dx in enumerate([-0.28, 0, 0.28]):
            draw.rounded_rectangle(
                [cx + dx*s - s*0.1, cy - s*0.4, cx + dx*s + s*0.1, cy + s*0.4],
                radius=s*0.03, outline=color, width=lw
            )

    elif kind == "board":
        draw.rounded_rectangle([cx - s*0.45, cy - s*0.3, cx + s*0.45, cy + s*0.3], radius=s*0.1, outline=color, width=lw)
        draw.line([cx - s*0.3, cy + s*0.1, cx + s*0.3, cy + s*0.1], fill=color, width=max(2, lw//2))


def make_product_image(product_id, icon_kind, accent, label, path):
    img = Image.new("RGB", (W, H), PALETTE["cream_deep"])
    draw = ImageDraw.Draw(img)

    # Franja diagonal sutil de fondo
    draw.polygon([(0, H), (W*0.6, H), (W*0.3, 0), (0, 0)], fill=PALETTE["cream"])

    # Círculo de acento detrás del ícono
    r = 170
    draw.ellipse([W/2 - r, H/2 - r - 20, W/2 + r, H/2 + r - 20], fill=accent + "22" if False else None, outline=accent, width=3)

    draw_icon(draw, icon_kind, W/2, H/2 - 20, 260, accent)

    # Etiqueta de texto abajo
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 28)
    except Exception:
        font = ImageFont.load_default()

    bbox = draw.textbbox((0, 0), label, font=font)
    tw = bbox[2] - bbox[0]
    draw.text((W/2 - tw/2, H - 80), label, fill=PALETTE["charcoal"], font=font)

    img.save(path, quality=90)
    print(f"Generado {path}")


for pid, icon, accent, label in PRODUCTS:
    make_product_image(pid, icon, accent, label, f"/home/claude/proyecto-innovationtech1/public/products/{pid}.jpg")
