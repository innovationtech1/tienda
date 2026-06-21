"""
Genera lib/products.ts con 50 productos de cocina reales, basados en
investigación de bestsellers de Amazon (Amazon Best Sellers Kitchen &
Dining, Food Network, HGTV, NBC Select — ver fuentes consultadas).

Cada producto trae un "searchTerm" usado para:
  a) construir el link de búsqueda de afiliado (placeholder)
  b) nombrar el archivo de imagen placeholder generado
"""

import json

# (id, nombre, descripción corta, descripción larga, precio, categoría,
#  rating, reviews, badge_o_None)
PRODUCTS = [
    # ---------- COCCIÓN ----------
    ("freidora-aire-ninja", "Ninja Freidora de Aire Digital",
     "La marca más vendida en freidoras de aire en Amazon.",
     "Cocina con hasta 75% menos grasa, con cesta antiadherente y panel digital de programas preestablecidos. Una de las categorías más vendidas de pequeños electrodomésticos en Amazon.",
     "$70 – $130", "Cocción", 4.7, 42000, "Más vendido"),
    ("termometro-instantaneo-alpha-grillers", "Alpha Grillers Termómetro Digital Instantáneo",
     "Lectura de temperatura en 2-3 segundos, sonda plegable magnética.",
     "Termómetro de cocina best-seller en Amazon: lectura casi instantánea, sonda plegable que se guarda dentro del cuerpo, y base magnética para pegarlo al refrigerador.",
     "$13 – $20", "Cocción", 4.7, 89000, "Más vendido"),
    ("olla-coccion-lenta-wifi", "Olla de Cocción Lenta Inteligente WiFi",
     "Controla y ajusta el tiempo de cocción desde la app, estés donde estés.",
     "Conectividad WiFi para iniciar, pausar o ajustar la temperatura remotamente. Mantiene la comida caliente automáticamente al terminar el ciclo de cocción.",
     "$50 – $85", "Cocción", 4.5, 7600, None),
    ("tapa-freidora-aire-instant-pot", "Instant Pot Tapa de Freidora de Aire",
     "Convierte tu olla de presión existente en freidora de aire, sin comprar otro aparato.",
     "Solución de espacio: si ya tienes una Instant Pot, esta tapa añade la función de air fryer sin ocupar más espacio en la cocina.",
     "$60 – $90", "Cocción", 4.5, 18300, None),
    ("plancha-electrica-griddle", "Plancha Eléctrica para Cocina (Griddle)",
     "Cocina panqueques, huevos, hamburguesas y más sin usar la estufa.",
     "Superficie antiadherente de gran tamaño, ideal para desayunos familiares o comidas rápidas entre semana sin ensuciar varias sartenes.",
     "$40 – $90", "Cocción", 4.5, 9800, None),
    ("waflera-mini-dash", "Dash Mini Waflera",
     "Waffles individuales en minutos, compacta y fácil de guardar.",
     "Una de las wafleras más vendidas de Amazon por su tamaño compacto, ideal para porciones individuales y para quienes tienen poco espacio en la cocina.",
     "$13 – $20", "Cocción", 4.7, 45000, None),

    # ---------- PREPARACIÓN ----------
    ("picadora-fullstar", "Fullstar Picador de Vegetales 4 en 1",
     "Pica, espiraliza y rebana en segundos, con contenedor incluido.",
     "Uno de los gadgets de cocina más vendidos de Amazon: pica vegetales y frutas en segundos con distintas cuchillas intercambiables, y el contenedor evita ensuciar la tabla de cortar.",
     "$20 – $30", "Preparación", 4.5, 95000, "Más vendido"),
    ("pelador-electrico-rotato", "Pelador Eléctrico de Papas y Vegetales",
     "Pela kilos de papas en minutos, casi sin esfuerzo manual.",
     "Gadget compacto que automatiza el pelado de papas y otros vegetales redondeados, reduciendo el tiempo de preparación de horas a minutos.",
     "$20 – $35", "Preparación", 4.3, 8700, None),
    ("tijeras-cocina-kitchenaid", "KitchenAid Tijeras de Cocina Multiusos",
     "Acero inoxidable resistente, aptas para lavavajillas, con funda protectora.",
     "Tijeras de cocina todo-uso de una de las marcas más reconocidas en electrodomésticos, con mango ergonómico antideslizante y funda de protección incluida.",
     "$15 – $25", "Preparación", 4.7, 31000, None),
    ("colador-escurridor-snap", "Colador Snap-On para Ollas",
     "Se ajusta a tu olla existente para escurrir pasta o grasa sin sacar un colador aparte.",
     "Clip que se ajusta al borde de la olla y permite escurrir agua o grasa directamente, evitando usar y lavar un colador adicional.",
     "$10 – $18", "Preparación", 4.4, 41100, None),
    ("robot-cocina-multifuncion", "Robot de Cocina Multifunción",
     "Pica, mezcla, cocina al vapor y amasa en un solo aparato compacto.",
     "Combina las funciones de procesador, batidora y vaporera, con cuchillas de acero inoxidable y control de velocidad variable.",
     "$45 – $80", "Preparación", 4.4, 5320, None),
    ("rallador-queso-multiusos", "Rallador de Queso y Vegetales Multiusos",
     "Varias caras intercambiables para rallar, cortar en juliana y más.",
     "Diseño compacto que reemplaza varios utensilios sueltos, con base antideslizante y contenedor para recoger lo rallado sin ensuciar el mesón.",
     "$12 – $20", "Preparación", 4.6, 22500, None),

    # ---------- MEDICIÓN ----------
    ("bascula-digital-etekcity", "Etekcity Báscula Digital de Cocina",
     "Pesa ingredientes al gramo exacto, con pantalla LCD y función tara.",
     "Una de las básculas de cocina más vendidas de Amazon. Mide en gramos, onzas, libras y mililitros, con función de tara para pesar varios ingredientes en el mismo recipiente.",
     "$13 – $20", "Medición", 4.7, 78000, "Más vendido"),
    ("bascula-amazon-basics", "Amazon Basics Báscula Digital de Cocina",
     "Opción económica y confiable, hasta 11 libras de capacidad.",
     "Alternativa de marca propia de Amazon: pantalla LCD, función tara, múltiples unidades de medida, y batería incluida.",
     "$10 – $15", "Medición", 4.5, 33000, None),
    ("set-medidoras-magneticas", "Set de Cucharas Medidoras Magnéticas Apilables",
     "Se mantienen unidas con imanes incorporados, ahorran espacio en el cajón.",
     "Diseño inteligente: las cucharas se apilan y se mantienen unidas gracias a imanes integrados, evitando que se separen y se pierdan en el cajón.",
     "$10 – $16", "Medición", 4.6, 19400, None),
    ("tabla-cortar-bascula", "Tabla de Cortar con Báscula Integrada",
     "Corta y pesa al mismo tiempo: dos pasos en uno solo.",
     "Tabla de bambú con sensores de peso integrados y pantalla digital incorporada en el borde, ideal para seguir recetas con precisión.",
     "$30 – $50", "Medición", 4.4, 2876, None),
    ("termometro-carne-bluetooth", "Termómetro de Carne con Bluetooth",
     "Controla el punto de cocción desde tu celular sin abrir el horno ni la parrilla.",
     "Sonda inalámbrica conectada por Bluetooth a una app que avisa cuando la carne, pollo o pescado alcanza la temperatura interna exacta.",
     "$30 – $70", "Medición", 4.6, 15800, None),

    # ---------- CONSERVACIÓN ----------
    ("selladora-vacio-cuisinart", "Cuisinart Selladora al Vacío One-Touch",
     "Conserva alimentos hasta 5 veces más tiempo con un solo botón.",
     "Extrae el aire con un solo botón y sella con tira protectora, ideal para comprar al por mayor y ahorrar. Protege también alimentos delicados como berries y pasteles.",
     "$45 – $90", "Conservación", 4.6, 9400, None),
    ("bolsas-vacio-rollos", "Rollos de Bolsas para Selladora al Vacío",
     "Compatibles con la mayoría de selladoras, grado comercial, libres de BPA.",
     "Pack de rollos cortables al tamaño que necesites, pensado para sous vide y congelación de alimentos a granel.",
     "$15 – $25", "Conservación", 4.6, 24500, None),
    ("organizador-tapas-storalid", "YouCopia Organizador de Tapas para Contenedores",
     "Acaba con el caos de tapas sueltas en el armario de plásticos.",
     "Divisores ajustables que organizan tapas de contenedores por tamaño, evitando que la gaveta o el armario se conviertan en un caos cada vez que buscas la tapa correcta.",
     "$20 – $35", "Conservación", 4.6, 27000, None),
    ("contenedores-vidrio-hermeticos", "Set de Contenedores de Vidrio Herméticos",
     "Aptos para horno, microondas y lavavajillas, con tapas a presión.",
     "Set apilable de contenedores de vidrio resistente, ideal para meal prep y para conservar sobras sin absorber olores ni manchas.",
     "$30 – $55", "Conservación", 4.7, 38900, None),
    ("organizador-especias-giratorio", "Organizador de Especias Giratorio con Etiquetas",
     "24 frascos herméticos en un carrusel que aprovecha cada centímetro de alacena.",
     "Diseño de dos niveles giratorios que organiza hasta 24 especias en poco espacio, con frascos herméticos transparentes y etiquetas removibles.",
     "$25 – $40", "Conservación", 4.7, 15230, None),

    # ---------- BEBIDAS ----------
    ("cafetera-programable-molino", "Cafetera Programable con Molino Integrado",
     "Muele el grano y prepara tu café automáticamente a la hora que elijas.",
     "Molino cónico integrado que muele justo antes de preparar, conservando aroma y sabor. Programa la hora de inicio la noche anterior.",
     "$70 – $120", "Bebidas", 4.5, 6543, None),
    ("licuadora-personal-ninja", "Ninja Licuadora Personal Compacta",
     "Smoothies listos en 60 segundos, directo en el vaso para llevar.",
     "Motor de alta potencia que tritura hielo, frutas congeladas y vegetales fibrosos sin dejar grumos, con vasos individuales para llevar incluidos.",
     "$40 – $70", "Bebidas", 4.6, 27600, None),
    ("espumador-leche-electrico", "Espumador de Leche Eléctrico Portátil",
     "Espuma cremosa en segundos para café, matcha o chocolate caliente.",
     "Varilla eléctrica recargable o a baterías, compacta, que mejora cualquier bebida casera con espuma de calidad de cafetería.",
     "$10 – $18", "Bebidas", 4.5, 41000, None),
    ("exprimidor-electrico-citricos", "Exprimidor Eléctrico de Cítricos",
     "Jugo fresco en segundos, con filtro de pulpa ajustable y sistema antigoteo.",
     "Motor potente que extrae el máximo jugo de naranjas, limones y toronjas, con filtro ajustable según prefieras más o menos pulpa.",
     "$30 – $60", "Bebidas", 4.4, 6100, None),
    ("hervidor-electrico-temperatura", "Hervidor Eléctrico con Control de Temperatura",
     "Programa la temperatura exacta para té, café de filtro o biberones.",
     "Hervidor de acero inoxidable con ajuste de temperatura preciso, ideal para distintos tipos de té que requieren temperaturas distintas.",
     "$35 – $60", "Bebidas", 4.6, 12700, None),

    # ---------- ORGANIZACIÓN ----------
    ("organizador-ollas-cabinet", "Organizador de Ollas y Sartenes Ajustable",
     "8 niveles ajustables para acomodar ollas, sartenes y bandejas de horno.",
     "Termina con la pila de ollas desordenada bajo el mostrador: organiza verticalmente y deja cada pieza accesible sin tener que sacar todo lo demás.",
     "$25 – $45", "Organización", 4.6, 14200, None),
    ("organizador-tapas-ollas", "Organizador de Tapas de Ollas para Gabinete",
     "Se adhiere sin taladrar, libera espacio de gabinete para las tapas.",
     "Sistema de instalación sin perforar que organiza tapas de ollas y sartenes en la puerta del gabinete, aprovechando espacio que normalmente se desperdicia.",
     "$15 – $25", "Organización", 4.5, 9300, None),
    ("toallero-bajo-gabinete", "Toallero de Cocina para Bajo Gabinete",
     "Mantiene la toalla de cocina siempre a mano, sin ocupar el mesón.",
     "Se instala fácilmente bajo el gabinete o en la puerta del horno, manteniendo la toalla accesible mientras cocinas sin que estorbe.",
     "$8 – $15", "Organización", 4.4, 32500, None),
    ("organizador-bolsas-vacio-cocina", "Organizador de Bolsas de Plástico para Cocina",
     "Dispensador de pared para bolsas recicladas o de almacenamiento.",
     "Solución simple para dejar de amontonar bolsas plásticas en un cajón: las organiza y dispensa una por una desde la pared o el interior del gabinete.",
     "$10 – $18", "Organización", 4.4, 12400, None),
    ("carrito-cocina-rodante", "Carrito de Cocina Rodante con Estantes",
     "Espacio de almacenamiento extra que se mueve a donde lo necesites.",
     "Ideal para cocinas pequeñas: añade superficie de trabajo y almacenamiento adicional, con ruedas para reubicarlo según la necesidad del momento.",
     "$45 – $90", "Organización", 4.5, 8100, None),
    ("ganchos-utensilios-pared", "Riel con Ganchos para Utensilios de Cocina",
     "Cuelga tus utensilios más usados a la vista, libera espacio en cajones.",
     "Riel de acero inoxidable con ganchos removibles, pensado para utensilios de uso diario que no quieres estar buscando en el cajón.",
     "$15 – $28", "Organización", 4.6, 17800, None),

    # ---------- LIMPIEZA Y MANTENIMIENTO ----------
    ("panos-cocina-algodon", "Set de Paños de Cocina de Algodón Waffle",
     "Ultra absorbentes y de secado rápido, pack de 6 unidades.",
     "Toallas de cocina 100% algodón con textura waffle que absorbe más que las toallas de tela común, y se secan rápido para evitar malos olores.",
     "$12 – $20", "Limpieza", 4.6, 28900, None),
    ("cepillo-limpieza-utensilios", "Cepillo de Limpieza para Utensilios y Botellas",
     "Llega a rincones difíciles en licuadoras, termos y biberones.",
     "Set de cepillos de distintos tamaños para limpiar a fondo utensilios con espacios estrechos que las esponjas normales no alcanzan.",
     "$10 – $18", "Limpieza", 4.5, 16700, None),
    ("dispensador-jabon-platos", "Dispensador de Jabón para Lavaplatos con Soporte de Esponja",
     "Mantiene el jabón y la esponja organizados junto al fregadero.",
     "Dispensador recargable que evita los envases de jabón desordenados junto al fregadero, con espacio integrado para la esponja.",
     "$12 – $20", "Limpieza", 4.4, 9800, None),
    ("tapete-secado-platos", "Tapete de Secado para Platos de Silicona",
     "Absorbe agua y protege el mesón, se enrolla para guardar fácilmente.",
     "Alternativa moderna al escurridor tradicional: se seca rápido, no acumula moho como las toallas, y se enrolla para guardar en poco espacio.",
     "$15 – $25", "Limpieza", 4.5, 21300, None),

    # ---------- PARRILLA Y EXTERIOR ----------
    ("termometro-parrilla-inalambrico", "Termómetro Inalámbrico para Parrilla y Ahumador",
     "Monitorea varias piezas de carne a la vez desde tu celular.",
     "Sistema con múltiples sondas que permite vigilar distintos cortes de carne simultáneamente sin tener que estar abriendo la tapa de la parrilla.",
     "$35 – $80", "Parrilla", 4.6, 9200, None),
    ("cesta-parrilla-rodante", "Cesta Giratoria para Parrilla",
     "Voltea vegetales y carnes parejo, sin que se caigan entre las rejillas.",
     "Cesta de acero inoxidable con mango de madera que gira completa, ideal para asar vegetales o trozos pequeños sin perder piezas en el carbón.",
     "$20 – $35", "Parrilla", 4.5, 8400, None),

    # ---------- HORNEADO ----------
    ("tapetes-silicona-horneado", "Set de Tapetes de Silicona para Horneado",
     "Reemplaza el papel encerado, reutilizable y antiadherente.",
     "Tapetes de fibra de vidrio recubiertos de silicona que distribuyen el calor parejo y eliminan la necesidad de papel encerado desechable.",
     "$12 – $22", "Horneado", 4.7, 32100, None),
    ("papel-pergamino-horno", "Papel Pergamino para Horno sin Blanquear",
     "Apto para horno hasta 425°F, libre de cloro, rollo de 45 pies.",
     "Papel antiadherente de uso desechable, una de las opciones más vendidas para forrar bandejas de horno y facilitar la limpieza posterior.",
     "$8 – $14", "Horneado", 4.6, 19500, None),
    ("manga-pastelera-reutilizable", "Set de Manga Pastelera y Boquillas Reutilizables",
     "Decora pasteles y galletas con boquillas intercambiables, lavable.",
     "Kit completo de repostería con manga de silicona reutilizable y múltiples boquillas, pensado para quienes hornean con frecuencia.",
     "$15 – $25", "Horneado", 4.6, 11200, None),
    ("bascula-postres-precision", "Báscula de Precisión para Repostería",
     "Mide en incrementos de 0.1g, ideal para recetas exactas de pastelería.",
     "Báscula de alta precisión pensada específicamente para repostería, donde pequeñas diferencias de peso afectan el resultado final.",
     "$15 – $22", "Horneado", 4.6, 8700, None),

    # ---------- ELECTRODOMÉSTICOS PEQUEÑOS ----------
    ("tostadora-2-rebanadas", "Tostadora Compacta de 2 Rebanadas",
     "6 niveles de tostado, ranura ancha apta para pan artesanal.",
     "Tostadora de diseño compacto pensada para cocinas pequeñas, con función de recalentado y apagado automático antiatasco.",
     "$25 – $45", "Electrodomésticos", 4.5, 14800, None),
    ("batidora-mano-electrica", "Batidora de Mano Eléctrica Multivelocidad",
     "Bate, mezcla y monta claras en minutos, con accesorios incluidos.",
     "Batidora manual con varias velocidades y accesorios intercambiables (varillas, ganchos para masa), ideal para repostería casera frecuente.",
     "$20 – $40", "Electrodomésticos", 4.6, 23400, None),
    ("microondas-compacto-digital", "Microondas Compacto Digital",
     "Panel digital con programas preestablecidos, ideal para espacios reducidos.",
     "Tamaño compacto pensado para cocinas pequeñas, apartamentos o como segundo microondas, con potencia suficiente para el uso diario.",
     "$60 – $110", "Electrodomésticos", 4.5, 9100, None),
    ("freidora-aire-doble-cesta", "Freidora de Aire de Doble Cesta",
     "Cocina dos alimentos distintos al mismo tiempo, sincronizados.",
     "Dos compartimentos independientes que permiten cocinar dos alimentos diferentes y que terminen al mismo tiempo, ideal para familias.",
     "$90 – $150", "Electrodomésticos", 4.6, 16700, "Tendencia 2026"),
    ("olla-arrocera-multifuncion", "Olla Arrocera Multifunción",
     "Arroz perfecto cada vez, con funciones extra de vapor y mantenimiento de calor.",
     "Más allá de cocinar arroz: incluye función de vaporera para vegetales y mantiene la comida caliente automáticamente al terminar.",
     "$30 – $55", "Electrodomésticos", 4.6, 12300, None),

    # ---------- CULTIVO Y FRESCURA ----------
    ("minicultivo-hidroponico-aerogarden", "AeroGarden Mini Jardín Hidropónico de Interior",
     "Hierbas frescas todo el año en tu mesón, sin tierra y sin complicaciones.",
     "Sistema hidropónico con luz LED de crecimiento integrada, pensado para cultivar hierbas y vegetales pequeños en interiores durante todo el año.",
     "$70 – $110", "Cultivo en casa", 4.5, 11200, "Tendencia 2026"),
    ("frasco-conservacion-hierbas", "Frasco Conservador de Hierbas Frescas",
     "Mantén el cilantro, perejil o albahaca frescos hasta 3 semanas.",
     "Diseño tipo florero con depósito de agua que alarga significativamente la vida de las hierbas frescas, evitando que se marchiten en pocos días.",
     "$12 – $20", "Cultivo en casa", 4.5, 6700, None),
]


def slugify_term(name: str) -> str:
    return name


def build_ts():
    lines = []
    lines.append("// =============================================================")
    lines.append("// CATÁLOGO DE PRODUCTOS — innovationTECH")
    lines.append("// =============================================================")
    lines.append("// 50 productos de cocina en general, basados en investigación de")
    lines.append("// bestsellers reales de Amazon (Amazon Best Sellers Kitchen & Dining,")
    lines.append("// Food Network, HGTV, NBC Select).")
    lines.append("//")
    lines.append("// IMPORTANTE SOBRE LOS LINKS:")
    lines.append("// Los \"affiliateLink\" son links de BÚSQUEDA en Amazon (no de un")
    lines.append("// producto específico), porque el ASIN exacto y el precio cambian")
    lines.append("// con el tiempo. Antes de publicar:")
    lines.append("//   1. Busca el nombre del producto en Amazon.")
    lines.append("//   2. Elige la variante/marca que prefieras vender.")
    lines.append("//   3. Genera tu link de afiliado real con SiteStripe.")
    lines.append("//   4. Reemplaza \"TU-ID-AFILIADO-20\" por tu tag real.")
    lines.append("//")
    lines.append("// IMPORTANTE SOBRE LAS IMÁGENES:")
    lines.append("// Las imágenes son placeholders ilustrativos generados localmente")
    lines.append("// (ver /scripts/generate_product_placeholders.py). Reemplázalas por")
    lines.append("// fotos reales del producto cuando tengas tu cuenta de Amazon")
    lines.append("// Associates aprobada (ver README.md, sección 'Imágenes de producto').")
    lines.append("// =============================================================")
    lines.append("")
    lines.append("export type Product = {")
    lines.append("  id: string;")
    lines.append("  name: string;")
    lines.append("  shortDescription: string;")
    lines.append("  longDescription: string;")
    lines.append("  priceRange: string;")
    lines.append("  category: string;")
    lines.append("  rating: number; // 1 a 5")
    lines.append("  reviewCount: number;")
    lines.append("  image: string;")
    lines.append("  affiliateLink: string;")
    lines.append('  badge?: string; // ej: "Más vendido", "Tendencia 2026"')
    lines.append("};")
    lines.append("")
    lines.append('export const SITE_NICHE = "Cocina y hogar";')
    lines.append("")
    lines.append("export const CATEGORIES = [")
    seen_cats = []
    for p in PRODUCTS:
        cat = p[5]
        if cat not in seen_cats:
            seen_cats.append(cat)
    for cat in seen_cats:
        lines.append(f'  "{cat}",')
    lines.append("] as const;")
    lines.append("")
    lines.append("export const products: Product[] = [")

    for (pid, name, short_desc, long_desc, price, cat, rating, reviews, badge) in PRODUCTS:
        search_term = name.replace('"', '')
        lines.append("  {")
        lines.append(f'    id: "{pid}",')
        lines.append(f'    name: "{json.dumps(name, ensure_ascii=False)[1:-1]}",')
        lines.append(f'    shortDescription: "{json.dumps(short_desc, ensure_ascii=False)[1:-1]}",')
        lines.append(f'    longDescription:')
        lines.append(f'      "{json.dumps(long_desc, ensure_ascii=False)[1:-1]}",')
        lines.append(f'    priceRange: "{price}",')
        lines.append(f'    category: "{cat}",')
        lines.append(f'    rating: {rating},')
        lines.append(f'    reviewCount: {reviews},')
        lines.append(f'    image: "/products/{pid}.jpg",')
        amazon_query = search_term.replace(" ", "+")
        lines.append(f'    affiliateLink: "https://www.amazon.com/s?k={amazon_query}&tag=TU-ID-AFILIADO-20",')
        if badge:
            lines.append(f'    badge: "{badge}",')
        lines.append("  },")

    lines.append("];")
    lines.append("")
    lines.append("export function getProductById(id: string): Product | undefined {")
    lines.append("  return products.find((p) => p.id === id);")
    lines.append("}")
    lines.append("")
    lines.append("export function getProductsByCategory(category: string): Product[] {")
    lines.append('  if (category === "Todas") return products;')
    lines.append("  return products.filter((p) => p.category === category);")
    lines.append("}")
    lines.append("")

    return "\n".join(lines)


with open("/home/claude/proyecto-innovationtech1/lib/products.ts", "w") as f:
    f.write(build_ts())

print(f"Generados {len(PRODUCTS)} productos en lib/products.ts")
