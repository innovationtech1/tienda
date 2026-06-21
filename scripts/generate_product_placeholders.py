"""
Genera imágenes placeholder simples y de buen gusto para cada uno de
los 50 productos, usando la paleta de marca de innovationTECH.

CUANDO TENGAS TUS PRODUCTOS REALES DE AMAZON:
Reemplaza estos archivos en /public/products/ por capturas o imágenes
reales del producto (Amazon permite su uso dentro del programa de
Afiliados, ver sus políticas operativas).
"""

import re
from PIL import Image, ImageDraw, ImageFont

PALETTE = {
    "cream": "#FAF6EF",
    "cream_deep": "#F1E9DA",
    "charcoal": "#2B2622",
    "terracotta": "#C4622D",
    "terracotta_deep": "#9C4A1F",
    "sage": "#6B7A5E",
    "sage_light": "#97A685",
    "gold": "#C9A04E",
}

W, H = 800, 600

ICON_RULES = [
    (r"freidora|fryer", "fryer"),
    (r"termometro", "thermo"),
    (r"sellado|vacio|bolsas-vacio", "seal"),
    (r"bascula", "scale"),
    (r"hidroponico|frasco-conservacion", "plant"),
    (r"licuadora|batidora-mano|espumador", "blender"),
    (r"exprimidor|jugo", "juicer"),
    (r"pelador", "peeler"),
    (r"especias|organizador", "spice"),
    (r"tabla-cortar", "board"),
    (r"cafetera|hervidor", "kettle"),
    (r"picadora|rallador|tijeras|colador|robot-cocina", "knife"),
    (r"olla|arrocera", "pot"),
    (r"plancha|waflera|tostadora|microondas", "appliance"),
    (r"panos|cepillo|dispensador-jabon|tapete-secado", "clean"),
    (r"parrilla|cesta-parrilla", "grill"),
    (r"tapetes-silicona|papel-pergamino|manga-pastelera", "bake"),
    (r"toallero|carrito|ganchos|tapas-ollas|tapas-storalid", "shelf"),
    (r"contenedores-vidrio", "jar"),
]

ACCENTS = [PALETTE["terracotta"], PALETTE["sage"], PALETTE["gold"], PALETTE["terracotta_deep"], PALETTE["sage_light"]]


def pick_icon(product_id: str) -> str:
    for pattern, icon in ICON_RULES:
        if re.search(pattern, product_id):
            return icon
    return "generic"


def draw_icon(draw, kind, cx, cy, s, color):
    lw = max(4, int(s * 0.045))

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
        for dx in [-0.28, 0, 0.28]:
            draw.rounded_rectangle(
                [cx + dx*s - s*0.1, cy - s*0.4, cx + dx*s + s*0.1, cy + s*0.4],
                radius=s*0.03, outline=color, width=lw
            )

    elif kind == "board":
        draw.rounded_rectangle([cx - s*0.45, cy - s*0.3, cx + s*0.45, cy + s*0.3], radius=s*0.1, outline=color, width=lw)
        draw.line([cx - s*0.3, cy + s*0.1, cx + s*0.3, cy + s*0.1], fill=color, width=max(2, lw//2))

    elif kind == "kettle":
        draw.pieslice([cx - s*0.35, cy - s*0.3, cx + s*0.35, cy + s*0.4], 0, 180, outline=color, width=lw)
        draw.line([cx - s*0.35, cy + s*0.05, cx + s*0.35, cy + s*0.05], fill=color, width=lw)
        draw.line([cx + s*0.3, cy - s*0.05, cx + s*0.5, cy - s*0.25], fill=color, width=lw)

    elif kind == "knife":
        draw.polygon([
            (cx - s*0.4, cy + s*0.05), (cx + s*0.3, cy - s*0.35),
            (cx + s*0.4, cy - s*0.25), (cx - s*0.25, cy + s*0.2),
        ], outline=color, width=lw)
        draw.line([cx - s*0.4, cy + s*0.05, cx - s*0.5, cy + s*0.35], fill=color, width=lw)

    elif kind == "pot":
        draw.rounded_rectangle([cx - s*0.4, cy - s*0.15, cx + s*0.4, cy + s*0.35], radius=s*0.05, outline=color, width=lw)
        draw.line([cx - s*0.55, cy, cx - s*0.4, cy], fill=color, width=lw)
        draw.line([cx + s*0.4, cy, cx + s*0.55, cy], fill=color, width=lw)
        draw.line([cx - s*0.4, cy - s*0.15, cx + s*0.4, cy - s*0.15], fill=color, width=max(2, lw//2))

    elif kind == "appliance":
        draw.rounded_rectangle([cx - s*0.4, cy - s*0.45, cx + s*0.4, cy + s*0.45], radius=s*0.08, outline=color, width=lw)
        draw.rectangle([cx - s*0.28, cy - s*0.3, cx + s*0.28, cy], outline=color, width=max(2, lw//2))
        draw.ellipse([cx - s*0.05, cy + s*0.18, cx + s*0.05, cy + s*0.28], fill=color)

    elif kind == "clean":
        draw.rounded_rectangle([cx - s*0.3, cy - s*0.4, cx + s*0.3, cy + s*0.4], radius=s*0.15, outline=color, width=lw)
        draw.line([cx - s*0.15, cy - s*0.1, cx + s*0.15, cy - s*0.1], fill=color, width=max(2, lw//2))
        draw.line([cx - s*0.15, cy + s*0.1, cx + s*0.15, cy + s*0.1], fill=color, width=max(2, lw//2))

    elif kind == "grill":
        draw.rounded_rectangle([cx - s*0.45, cy - s*0.1, cx + s*0.45, cy + s*0.35], radius=s*0.1, outline=color, width=lw)
        for dx in [-0.25, 0, 0.25]:
            draw.line([cx + dx*s, cy - s*0.1, cx + dx*s, cy + s*0.35], fill=color, width=max(2, lw//2))
        draw.arc([cx - s*0.3, cy - s*0.5, cx + s*0.3, cy], 180, 360, fill=color, width=lw)

    elif kind == "bake":
        draw.rounded_rectangle([cx - s*0.45, cy + s*0.1, cx + s*0.45, cy + s*0.3], radius=s*0.05, outline=color, width=lw)
        draw.arc([cx - s*0.45, cy - s*0.25, cx - s*0.05, cy + s*0.25], 0, 360, fill=color, width=lw)
        draw.arc([cx - s*0.05, cy - s*0.35, cx + s*0.45, cy + s*0.25], 0, 360, fill=color, width=lw)

    elif kind == "shelf":
        for i in range(3):
            y = cy - s*0.3 + i * s*0.3
            draw.line([cx - s*0.4, y, cx + s*0.4, y], fill=color, width=lw)
        draw.line([cx - s*0.4, cy - s*0.3, cx - s*0.4, cy + s*0.3], fill=color, width=max(2, lw//2))
        draw.line([cx + s*0.4, cy - s*0.3, cx + s*0.4, cy + s*0.3], fill=color, width=max(2, lw//2))

    elif kind == "jar":
        draw.rounded_rectangle([cx - s*0.3, cy - s*0.35, cx + s*0.3, cy + s*0.4], radius=s*0.06, outline=color, width=lw)
        draw.rectangle([cx - s*0.18, cy - s*0.48, cx + s*0.18, cy - s*0.35], outline=color, width=lw)

    else:
        draw.ellipse([cx - s*0.35, cy - s*0.35, cx + s*0.35, cy + s*0.35], outline=color, width=lw)
        draw.line([cx - s*0.15, cy, cx + s*0.15, cy], fill=color, width=max(2, lw//2))
        draw.line([cx, cy - s*0.15, cx, cy + s*0.15], fill=color, width=max(2, lw//2))


def make_product_image(icon_kind, accent, label, path, font):
    img = Image.new("RGB", (W, H), PALETTE["cream_deep"])
    draw = ImageDraw.Draw(img)
    draw.polygon([(0, H), (W*0.6, H), (W*0.3, 0), (0, 0)], fill=PALETTE["cream"])

    r = 170
    draw.ellipse([W/2 - r, H/2 - r - 20, W/2 + r, H/2 + r - 20], outline=accent, width=3)
    draw_icon(draw, icon_kind, W/2, H/2 - 20, 260, accent)

    bbox = draw.textbbox((0, 0), label, font=font)
    tw = bbox[2] - bbox[0]
    draw.text((W/2 - tw/2, H - 80), label, fill=PALETTE["charcoal"], font=font)

    img.save(path, quality=90)


def main():
    with open("/home/claude/proyecto-innovationtech1/scripts/build_products_catalog.py") as f:
        src = f.read()
    catalog_globals = {}
    exec(compile(src.split("def slugify_term")[0], "catalog", "exec"), catalog_globals)
    products = catalog_globals["PRODUCTS"]

    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 26)
    except Exception:
        font = ImageFont.load_default()

    count = 0
    for i, p in enumerate(products):
        pid, name = p[0], p[1]
        icon = pick_icon(pid)
        accent = ACCENTS[i % len(ACCENTS)]
        words = name.split()
        label = " ".join(words[:3]) if len(" ".join(words[:3])) <= 28 else " ".join(words[:2])
        out_path = f"/home/claude/proyecto-innovationtech1/public/products/{pid}.jpg"
        make_product_image(icon, accent, label, out_path, font)
        count += 1

    print(f"Generadas {count} imagenes placeholder en /public/products/")


if __name__ == "__main__":
    main()
