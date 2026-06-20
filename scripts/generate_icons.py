from PIL import Image, ImageDraw

def make_icon(size, path):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Fondo: charcoal con esquinas redondeadas (estilo "maskable")
    radius = int(size * 0.22)
    draw.rounded_rectangle([0, 0, size, size], radius=radius, fill="#2B2622")

    # Círculo terracota central (representa "tapa de olla")
    margin = size * 0.18
    draw.ellipse(
        [margin, margin, size - margin, size - margin],
        fill="#C4622D",
    )

    # Arco superior (forma de tapa/cúpula) en crema
    cx, cy = size / 2, size * 0.52
    r = size * 0.26
    draw.pieslice(
        [cx - r, cy - r, cx + r, cy + r],
        180, 360,
        fill="#FAF6EF",
    )
    draw.rectangle(
        [cx - r, cy, cx + r, cy + size * 0.14],
        fill="#FAF6EF",
    )

    # Manija (pequeño círculo dorado arriba)
    handle_r = size * 0.035
    draw.ellipse(
        [cx - handle_r, cy - r - handle_r * 2, cx + handle_r, cy - r],
        fill="#C9A04E",
    )

    img.save(path)
    print(f"Generado {path} ({size}x{size})")

make_icon(192, "/home/claude/proyecto-innovationtech1/public/icons/icon-192.png")
make_icon(512, "/home/claude/proyecto-innovationtech1/public/icons/icon-512.png")
make_icon(180, "/home/claude/proyecto-innovationtech1/public/icons/apple-touch-icon.png")
