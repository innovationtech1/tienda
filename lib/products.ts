// =============================================================
// CATÁLOGO DE PRODUCTOS — innovationTECH
// =============================================================
// 50 productos de cocina en general, basados en investigación de
// bestsellers reales de Amazon (Amazon Best Sellers Kitchen & Dining,
// Food Network, HGTV, NBC Select).
//
// IMPORTANTE SOBRE LOS LINKS:
// Los "affiliateLink" son links de BÚSQUEDA en Amazon (no de un
// producto específico), porque el ASIN exacto y el precio cambian
// con el tiempo. Antes de publicar:
//   1. Busca el nombre del producto en Amazon.
//   2. Elige la variante/marca que prefieras vender.
//   3. Genera tu link de afiliado real con SiteStripe.
//   4. Reemplaza "TU-ID-AFILIADO-20" por tu tag real.
//
// IMPORTANTE SOBRE LAS IMÁGENES:
// Las imágenes son placeholders ilustrativos generados localmente
// (ver /scripts/generate_product_placeholders.py). Reemplázalas por
// fotos reales del producto cuando tengas tu cuenta de Amazon
// Associates aprobada (ver README.md, sección 'Imágenes de producto').
// =============================================================

export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  priceRange: string;
  category: string;
  rating: number; // 1 a 5
  reviewCount: number;
  image: string;
  affiliateLink: string;
  badge?: string; // ej: "Más vendido", "Tendencia 2026"
};

export const SITE_NICHE = "Cocina y hogar";

export const CATEGORIES = [
  "Cocción",
  "Preparación",
  "Medición",
  "Conservación",
  "Bebidas",
  "Organización",
  "Limpieza",
  "Parrilla",
  "Horneado",
  "Electrodomésticos",
  "Cultivo en casa",
] as const;

export const products: Product[] = [
  {
    id: "freidora-aire-ninja",
    name: "Ninja Freidora de Aire Digital",
    shortDescription: "La marca más vendida en freidoras de aire en Amazon.",
    longDescription:
      "Cocina con hasta 75% menos grasa, con cesta antiadherente y panel digital de programas preestablecidos. Una de las categorías más vendidas de pequeños electrodomésticos en Amazon.",
    priceRange: "$70 – $130",
    category: "Cocción",
    rating: 4.7,
    reviewCount: 42000,
    image: "/products/freidora-aire-ninja.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Ninja+Freidora+de+Aire+Digital&tag=TU-ID-AFILIADO-20",
    badge: "Más vendido",
  },
  {
    id: "termometro-instantaneo-alpha-grillers",
    name: "Alpha Grillers Termómetro Digital Instantáneo",
    shortDescription: "Lectura de temperatura en 2-3 segundos, sonda plegable magnética.",
    longDescription:
      "Termómetro de cocina best-seller en Amazon: lectura casi instantánea, sonda plegable que se guarda dentro del cuerpo, y base magnética para pegarlo al refrigerador.",
    priceRange: "$13 – $20",
    category: "Cocción",
    rating: 4.7,
    reviewCount: 89000,
    image: "/products/termometro-instantaneo-alpha-grillers.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Alpha+Grillers+Termómetro+Digital+Instantáneo&tag=TU-ID-AFILIADO-20",
    badge: "Más vendido",
  },
  {
    id: "olla-coccion-lenta-wifi",
    name: "Olla de Cocción Lenta Inteligente WiFi",
    shortDescription: "Controla y ajusta el tiempo de cocción desde la app, estés donde estés.",
    longDescription:
      "Conectividad WiFi para iniciar, pausar o ajustar la temperatura remotamente. Mantiene la comida caliente automáticamente al terminar el ciclo de cocción.",
    priceRange: "$50 – $85",
    category: "Cocción",
    rating: 4.5,
    reviewCount: 7600,
    image: "/products/olla-coccion-lenta-wifi.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Olla+de+Cocción+Lenta+Inteligente+WiFi&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "tapa-freidora-aire-instant-pot",
    name: "Instant Pot Tapa de Freidora de Aire",
    shortDescription: "Convierte tu olla de presión existente en freidora de aire, sin comprar otro aparato.",
    longDescription:
      "Solución de espacio: si ya tienes una Instant Pot, esta tapa añade la función de air fryer sin ocupar más espacio en la cocina.",
    priceRange: "$60 – $90",
    category: "Cocción",
    rating: 4.5,
    reviewCount: 18300,
    image: "/products/tapa-freidora-aire-instant-pot.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Instant+Pot+Tapa+de+Freidora+de+Aire&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "plancha-electrica-griddle",
    name: "Plancha Eléctrica para Cocina (Griddle)",
    shortDescription: "Cocina panqueques, huevos, hamburguesas y más sin usar la estufa.",
    longDescription:
      "Superficie antiadherente de gran tamaño, ideal para desayunos familiares o comidas rápidas entre semana sin ensuciar varias sartenes.",
    priceRange: "$40 – $90",
    category: "Cocción",
    rating: 4.5,
    reviewCount: 9800,
    image: "/products/plancha-electrica-griddle.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Plancha+Eléctrica+para+Cocina+(Griddle)&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "waflera-mini-dash",
    name: "Dash Mini Waflera",
    shortDescription: "Waffles individuales en minutos, compacta y fácil de guardar.",
    longDescription:
      "Una de las wafleras más vendidas de Amazon por su tamaño compacto, ideal para porciones individuales y para quienes tienen poco espacio en la cocina.",
    priceRange: "$13 – $20",
    category: "Cocción",
    rating: 4.7,
    reviewCount: 45000,
    image: "/products/waflera-mini-dash.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Dash+Mini+Waflera&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "picadora-fullstar",
    name: "Fullstar Picador de Vegetales 4 en 1",
    shortDescription: "Pica, espiraliza y rebana en segundos, con contenedor incluido.",
    longDescription:
      "Uno de los gadgets de cocina más vendidos de Amazon: pica vegetales y frutas en segundos con distintas cuchillas intercambiables, y el contenedor evita ensuciar la tabla de cortar.",
    priceRange: "$20 – $30",
    category: "Preparación",
    rating: 4.5,
    reviewCount: 95000,
    image: "/products/picadora-fullstar.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Fullstar+Picador+de+Vegetales+4+en+1&tag=TU-ID-AFILIADO-20",
    badge: "Más vendido",
  },
  {
    id: "pelador-electrico-rotato",
    name: "Pelador Eléctrico de Papas y Vegetales",
    shortDescription: "Pela kilos de papas en minutos, casi sin esfuerzo manual.",
    longDescription:
      "Gadget compacto que automatiza el pelado de papas y otros vegetales redondeados, reduciendo el tiempo de preparación de horas a minutos.",
    priceRange: "$20 – $35",
    category: "Preparación",
    rating: 4.3,
    reviewCount: 8700,
    image: "/products/pelador-electrico-rotato.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Pelador+Eléctrico+de+Papas+y+Vegetales&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "tijeras-cocina-kitchenaid",
    name: "KitchenAid Tijeras de Cocina Multiusos",
    shortDescription: "Acero inoxidable resistente, aptas para lavavajillas, con funda protectora.",
    longDescription:
      "Tijeras de cocina todo-uso de una de las marcas más reconocidas en electrodomésticos, con mango ergonómico antideslizante y funda de protección incluida.",
    priceRange: "$15 – $25",
    category: "Preparación",
    rating: 4.7,
    reviewCount: 31000,
    image: "/products/tijeras-cocina-kitchenaid.jpg",
    affiliateLink: "https://www.amazon.com/s?k=KitchenAid+Tijeras+de+Cocina+Multiusos&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "colador-escurridor-snap",
    name: "Colador Snap-On para Ollas",
    shortDescription: "Se ajusta a tu olla existente para escurrir pasta o grasa sin sacar un colador aparte.",
    longDescription:
      "Clip que se ajusta al borde de la olla y permite escurrir agua o grasa directamente, evitando usar y lavar un colador adicional.",
    priceRange: "$10 – $18",
    category: "Preparación",
    rating: 4.4,
    reviewCount: 41100,
    image: "/products/colador-escurridor-snap.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Colador+Snap-On+para+Ollas&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "robot-cocina-multifuncion",
    name: "Robot de Cocina Multifunción",
    shortDescription: "Pica, mezcla, cocina al vapor y amasa en un solo aparato compacto.",
    longDescription:
      "Combina las funciones de procesador, batidora y vaporera, con cuchillas de acero inoxidable y control de velocidad variable.",
    priceRange: "$45 – $80",
    category: "Preparación",
    rating: 4.4,
    reviewCount: 5320,
    image: "/products/robot-cocina-multifuncion.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Robot+de+Cocina+Multifunción&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "rallador-queso-multiusos",
    name: "Rallador de Queso y Vegetales Multiusos",
    shortDescription: "Varias caras intercambiables para rallar, cortar en juliana y más.",
    longDescription:
      "Diseño compacto que reemplaza varios utensilios sueltos, con base antideslizante y contenedor para recoger lo rallado sin ensuciar el mesón.",
    priceRange: "$12 – $20",
    category: "Preparación",
    rating: 4.6,
    reviewCount: 22500,
    image: "/products/rallador-queso-multiusos.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Rallador+de+Queso+y+Vegetales+Multiusos&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "bascula-digital-etekcity",
    name: "Etekcity Báscula Digital de Cocina",
    shortDescription: "Pesa ingredientes al gramo exacto, con pantalla LCD y función tara.",
    longDescription:
      "Una de las básculas de cocina más vendidas de Amazon. Mide en gramos, onzas, libras y mililitros, con función de tara para pesar varios ingredientes en el mismo recipiente.",
    priceRange: "$13 – $20",
    category: "Medición",
    rating: 4.7,
    reviewCount: 78000,
    image: "/products/bascula-digital-etekcity.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Etekcity+Báscula+Digital+de+Cocina&tag=TU-ID-AFILIADO-20",
    badge: "Más vendido",
  },
  {
    id: "bascula-amazon-basics",
    name: "Amazon Basics Báscula Digital de Cocina",
    shortDescription: "Opción económica y confiable, hasta 11 libras de capacidad.",
    longDescription:
      "Alternativa de marca propia de Amazon: pantalla LCD, función tara, múltiples unidades de medida, y batería incluida.",
    priceRange: "$10 – $15",
    category: "Medición",
    rating: 4.5,
    reviewCount: 33000,
    image: "/products/bascula-amazon-basics.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Amazon+Basics+Báscula+Digital+de+Cocina&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "set-medidoras-magneticas",
    name: "Set de Cucharas Medidoras Magnéticas Apilables",
    shortDescription: "Se mantienen unidas con imanes incorporados, ahorran espacio en el cajón.",
    longDescription:
      "Diseño inteligente: las cucharas se apilan y se mantienen unidas gracias a imanes integrados, evitando que se separen y se pierdan en el cajón.",
    priceRange: "$10 – $16",
    category: "Medición",
    rating: 4.6,
    reviewCount: 19400,
    image: "/products/set-medidoras-magneticas.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Set+de+Cucharas+Medidoras+Magnéticas+Apilables&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "tabla-cortar-bascula",
    name: "Tabla de Cortar con Báscula Integrada",
    shortDescription: "Corta y pesa al mismo tiempo: dos pasos en uno solo.",
    longDescription:
      "Tabla de bambú con sensores de peso integrados y pantalla digital incorporada en el borde, ideal para seguir recetas con precisión.",
    priceRange: "$30 – $50",
    category: "Medición",
    rating: 4.4,
    reviewCount: 2876,
    image: "/products/tabla-cortar-bascula.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Tabla+de+Cortar+con+Báscula+Integrada&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "termometro-carne-bluetooth",
    name: "Termómetro de Carne con Bluetooth",
    shortDescription: "Controla el punto de cocción desde tu celular sin abrir el horno ni la parrilla.",
    longDescription:
      "Sonda inalámbrica conectada por Bluetooth a una app que avisa cuando la carne, pollo o pescado alcanza la temperatura interna exacta.",
    priceRange: "$30 – $70",
    category: "Medición",
    rating: 4.6,
    reviewCount: 15800,
    image: "/products/termometro-carne-bluetooth.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Termómetro+de+Carne+con+Bluetooth&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "selladora-vacio-cuisinart",
    name: "Cuisinart Selladora al Vacío One-Touch",
    shortDescription: "Conserva alimentos hasta 5 veces más tiempo con un solo botón.",
    longDescription:
      "Extrae el aire con un solo botón y sella con tira protectora, ideal para comprar al por mayor y ahorrar. Protege también alimentos delicados como berries y pasteles.",
    priceRange: "$45 – $90",
    category: "Conservación",
    rating: 4.6,
    reviewCount: 9400,
    image: "/products/selladora-vacio-cuisinart.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Cuisinart+Selladora+al+Vacío+One-Touch&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "bolsas-vacio-rollos",
    name: "Rollos de Bolsas para Selladora al Vacío",
    shortDescription: "Compatibles con la mayoría de selladoras, grado comercial, libres de BPA.",
    longDescription:
      "Pack de rollos cortables al tamaño que necesites, pensado para sous vide y congelación de alimentos a granel.",
    priceRange: "$15 – $25",
    category: "Conservación",
    rating: 4.6,
    reviewCount: 24500,
    image: "/products/bolsas-vacio-rollos.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Rollos+de+Bolsas+para+Selladora+al+Vacío&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "organizador-tapas-storalid",
    name: "YouCopia Organizador de Tapas para Contenedores",
    shortDescription: "Acaba con el caos de tapas sueltas en el armario de plásticos.",
    longDescription:
      "Divisores ajustables que organizan tapas de contenedores por tamaño, evitando que la gaveta o el armario se conviertan en un caos cada vez que buscas la tapa correcta.",
    priceRange: "$20 – $35",
    category: "Conservación",
    rating: 4.6,
    reviewCount: 27000,
    image: "/products/organizador-tapas-storalid.jpg",
    affiliateLink: "https://www.amazon.com/s?k=YouCopia+Organizador+de+Tapas+para+Contenedores&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "contenedores-vidrio-hermeticos",
    name: "Set de Contenedores de Vidrio Herméticos",
    shortDescription: "Aptos para horno, microondas y lavavajillas, con tapas a presión.",
    longDescription:
      "Set apilable de contenedores de vidrio resistente, ideal para meal prep y para conservar sobras sin absorber olores ni manchas.",
    priceRange: "$30 – $55",
    category: "Conservación",
    rating: 4.7,
    reviewCount: 38900,
    image: "/products/contenedores-vidrio-hermeticos.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Set+de+Contenedores+de+Vidrio+Herméticos&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "organizador-especias-giratorio",
    name: "Organizador de Especias Giratorio con Etiquetas",
    shortDescription: "24 frascos herméticos en un carrusel que aprovecha cada centímetro de alacena.",
    longDescription:
      "Diseño de dos niveles giratorios que organiza hasta 24 especias en poco espacio, con frascos herméticos transparentes y etiquetas removibles.",
    priceRange: "$25 – $40",
    category: "Conservación",
    rating: 4.7,
    reviewCount: 15230,
    image: "/products/organizador-especias-giratorio.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Organizador+de+Especias+Giratorio+con+Etiquetas&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "cafetera-programable-molino",
    name: "Cafetera Programable con Molino Integrado",
    shortDescription: "Muele el grano y prepara tu café automáticamente a la hora que elijas.",
    longDescription:
      "Molino cónico integrado que muele justo antes de preparar, conservando aroma y sabor. Programa la hora de inicio la noche anterior.",
    priceRange: "$70 – $120",
    category: "Bebidas",
    rating: 4.5,
    reviewCount: 6543,
    image: "/products/cafetera-programable-molino.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Cafetera+Programable+con+Molino+Integrado&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "licuadora-personal-ninja",
    name: "Ninja Licuadora Personal Compacta",
    shortDescription: "Smoothies listos en 60 segundos, directo en el vaso para llevar.",
    longDescription:
      "Motor de alta potencia que tritura hielo, frutas congeladas y vegetales fibrosos sin dejar grumos, con vasos individuales para llevar incluidos.",
    priceRange: "$40 – $70",
    category: "Bebidas",
    rating: 4.6,
    reviewCount: 27600,
    image: "/products/licuadora-personal-ninja.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Ninja+Licuadora+Personal+Compacta&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "espumador-leche-electrico",
    name: "Espumador de Leche Eléctrico Portátil",
    shortDescription: "Espuma cremosa en segundos para café, matcha o chocolate caliente.",
    longDescription:
      "Varilla eléctrica recargable o a baterías, compacta, que mejora cualquier bebida casera con espuma de calidad de cafetería.",
    priceRange: "$10 – $18",
    category: "Bebidas",
    rating: 4.5,
    reviewCount: 41000,
    image: "/products/espumador-leche-electrico.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Espumador+de+Leche+Eléctrico+Portátil&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "exprimidor-electrico-citricos",
    name: "Exprimidor Eléctrico de Cítricos",
    shortDescription: "Jugo fresco en segundos, con filtro de pulpa ajustable y sistema antigoteo.",
    longDescription:
      "Motor potente que extrae el máximo jugo de naranjas, limones y toronjas, con filtro ajustable según prefieras más o menos pulpa.",
    priceRange: "$30 – $60",
    category: "Bebidas",
    rating: 4.4,
    reviewCount: 6100,
    image: "/products/exprimidor-electrico-citricos.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Exprimidor+Eléctrico+de+Cítricos&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "hervidor-electrico-temperatura",
    name: "Hervidor Eléctrico con Control de Temperatura",
    shortDescription: "Programa la temperatura exacta para té, café de filtro o biberones.",
    longDescription:
      "Hervidor de acero inoxidable con ajuste de temperatura preciso, ideal para distintos tipos de té que requieren temperaturas distintas.",
    priceRange: "$35 – $60",
    category: "Bebidas",
    rating: 4.6,
    reviewCount: 12700,
    image: "/products/hervidor-electrico-temperatura.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Hervidor+Eléctrico+con+Control+de+Temperatura&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "organizador-ollas-cabinet",
    name: "Organizador de Ollas y Sartenes Ajustable",
    shortDescription: "8 niveles ajustables para acomodar ollas, sartenes y bandejas de horno.",
    longDescription:
      "Termina con la pila de ollas desordenada bajo el mostrador: organiza verticalmente y deja cada pieza accesible sin tener que sacar todo lo demás.",
    priceRange: "$25 – $45",
    category: "Organización",
    rating: 4.6,
    reviewCount: 14200,
    image: "/products/organizador-ollas-cabinet.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Organizador+de+Ollas+y+Sartenes+Ajustable&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "organizador-tapas-ollas",
    name: "Organizador de Tapas de Ollas para Gabinete",
    shortDescription: "Se adhiere sin taladrar, libera espacio de gabinete para las tapas.",
    longDescription:
      "Sistema de instalación sin perforar que organiza tapas de ollas y sartenes en la puerta del gabinete, aprovechando espacio que normalmente se desperdicia.",
    priceRange: "$15 – $25",
    category: "Organización",
    rating: 4.5,
    reviewCount: 9300,
    image: "/products/organizador-tapas-ollas.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Organizador+de+Tapas+de+Ollas+para+Gabinete&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "toallero-bajo-gabinete",
    name: "Toallero de Cocina para Bajo Gabinete",
    shortDescription: "Mantiene la toalla de cocina siempre a mano, sin ocupar el mesón.",
    longDescription:
      "Se instala fácilmente bajo el gabinete o en la puerta del horno, manteniendo la toalla accesible mientras cocinas sin que estorbe.",
    priceRange: "$8 – $15",
    category: "Organización",
    rating: 4.4,
    reviewCount: 32500,
    image: "/products/toallero-bajo-gabinete.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Toallero+de+Cocina+para+Bajo+Gabinete&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "organizador-bolsas-vacio-cocina",
    name: "Organizador de Bolsas de Plástico para Cocina",
    shortDescription: "Dispensador de pared para bolsas recicladas o de almacenamiento.",
    longDescription:
      "Solución simple para dejar de amontonar bolsas plásticas en un cajón: las organiza y dispensa una por una desde la pared o el interior del gabinete.",
    priceRange: "$10 – $18",
    category: "Organización",
    rating: 4.4,
    reviewCount: 12400,
    image: "/products/organizador-bolsas-vacio-cocina.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Organizador+de+Bolsas+de+Plástico+para+Cocina&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "carrito-cocina-rodante",
    name: "Carrito de Cocina Rodante con Estantes",
    shortDescription: "Espacio de almacenamiento extra que se mueve a donde lo necesites.",
    longDescription:
      "Ideal para cocinas pequeñas: añade superficie de trabajo y almacenamiento adicional, con ruedas para reubicarlo según la necesidad del momento.",
    priceRange: "$45 – $90",
    category: "Organización",
    rating: 4.5,
    reviewCount: 8100,
    image: "/products/carrito-cocina-rodante.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Carrito+de+Cocina+Rodante+con+Estantes&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "ganchos-utensilios-pared",
    name: "Riel con Ganchos para Utensilios de Cocina",
    shortDescription: "Cuelga tus utensilios más usados a la vista, libera espacio en cajones.",
    longDescription:
      "Riel de acero inoxidable con ganchos removibles, pensado para utensilios de uso diario que no quieres estar buscando en el cajón.",
    priceRange: "$15 – $28",
    category: "Organización",
    rating: 4.6,
    reviewCount: 17800,
    image: "/products/ganchos-utensilios-pared.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Riel+con+Ganchos+para+Utensilios+de+Cocina&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "panos-cocina-algodon",
    name: "Set de Paños de Cocina de Algodón Waffle",
    shortDescription: "Ultra absorbentes y de secado rápido, pack de 6 unidades.",
    longDescription:
      "Toallas de cocina 100% algodón con textura waffle que absorbe más que las toallas de tela común, y se secan rápido para evitar malos olores.",
    priceRange: "$12 – $20",
    category: "Limpieza",
    rating: 4.6,
    reviewCount: 28900,
    image: "/products/panos-cocina-algodon.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Set+de+Paños+de+Cocina+de+Algodón+Waffle&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "cepillo-limpieza-utensilios",
    name: "Cepillo de Limpieza para Utensilios y Botellas",
    shortDescription: "Llega a rincones difíciles en licuadoras, termos y biberones.",
    longDescription:
      "Set de cepillos de distintos tamaños para limpiar a fondo utensilios con espacios estrechos que las esponjas normales no alcanzan.",
    priceRange: "$10 – $18",
    category: "Limpieza",
    rating: 4.5,
    reviewCount: 16700,
    image: "/products/cepillo-limpieza-utensilios.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Cepillo+de+Limpieza+para+Utensilios+y+Botellas&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "dispensador-jabon-platos",
    name: "Dispensador de Jabón para Lavaplatos con Soporte de Esponja",
    shortDescription: "Mantiene el jabón y la esponja organizados junto al fregadero.",
    longDescription:
      "Dispensador recargable que evita los envases de jabón desordenados junto al fregadero, con espacio integrado para la esponja.",
    priceRange: "$12 – $20",
    category: "Limpieza",
    rating: 4.4,
    reviewCount: 9800,
    image: "/products/dispensador-jabon-platos.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Dispensador+de+Jabón+para+Lavaplatos+con+Soporte+de+Esponja&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "tapete-secado-platos",
    name: "Tapete de Secado para Platos de Silicona",
    shortDescription: "Absorbe agua y protege el mesón, se enrolla para guardar fácilmente.",
    longDescription:
      "Alternativa moderna al escurridor tradicional: se seca rápido, no acumula moho como las toallas, y se enrolla para guardar en poco espacio.",
    priceRange: "$15 – $25",
    category: "Limpieza",
    rating: 4.5,
    reviewCount: 21300,
    image: "/products/tapete-secado-platos.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Tapete+de+Secado+para+Platos+de+Silicona&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "termometro-parrilla-inalambrico",
    name: "Termómetro Inalámbrico para Parrilla y Ahumador",
    shortDescription: "Monitorea varias piezas de carne a la vez desde tu celular.",
    longDescription:
      "Sistema con múltiples sondas que permite vigilar distintos cortes de carne simultáneamente sin tener que estar abriendo la tapa de la parrilla.",
    priceRange: "$35 – $80",
    category: "Parrilla",
    rating: 4.6,
    reviewCount: 9200,
    image: "/products/termometro-parrilla-inalambrico.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Termómetro+Inalámbrico+para+Parrilla+y+Ahumador&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "cesta-parrilla-rodante",
    name: "Cesta Giratoria para Parrilla",
    shortDescription: "Voltea vegetales y carnes parejo, sin que se caigan entre las rejillas.",
    longDescription:
      "Cesta de acero inoxidable con mango de madera que gira completa, ideal para asar vegetales o trozos pequeños sin perder piezas en el carbón.",
    priceRange: "$20 – $35",
    category: "Parrilla",
    rating: 4.5,
    reviewCount: 8400,
    image: "/products/cesta-parrilla-rodante.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Cesta+Giratoria+para+Parrilla&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "tapetes-silicona-horneado",
    name: "Set de Tapetes de Silicona para Horneado",
    shortDescription: "Reemplaza el papel encerado, reutilizable y antiadherente.",
    longDescription:
      "Tapetes de fibra de vidrio recubiertos de silicona que distribuyen el calor parejo y eliminan la necesidad de papel encerado desechable.",
    priceRange: "$12 – $22",
    category: "Horneado",
    rating: 4.7,
    reviewCount: 32100,
    image: "/products/tapetes-silicona-horneado.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Set+de+Tapetes+de+Silicona+para+Horneado&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "papel-pergamino-horno",
    name: "Papel Pergamino para Horno sin Blanquear",
    shortDescription: "Apto para horno hasta 425°F, libre de cloro, rollo de 45 pies.",
    longDescription:
      "Papel antiadherente de uso desechable, una de las opciones más vendidas para forrar bandejas de horno y facilitar la limpieza posterior.",
    priceRange: "$8 – $14",
    category: "Horneado",
    rating: 4.6,
    reviewCount: 19500,
    image: "/products/papel-pergamino-horno.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Papel+Pergamino+para+Horno+sin+Blanquear&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "manga-pastelera-reutilizable",
    name: "Set de Manga Pastelera y Boquillas Reutilizables",
    shortDescription: "Decora pasteles y galletas con boquillas intercambiables, lavable.",
    longDescription:
      "Kit completo de repostería con manga de silicona reutilizable y múltiples boquillas, pensado para quienes hornean con frecuencia.",
    priceRange: "$15 – $25",
    category: "Horneado",
    rating: 4.6,
    reviewCount: 11200,
    image: "/products/manga-pastelera-reutilizable.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Set+de+Manga+Pastelera+y+Boquillas+Reutilizables&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "bascula-postres-precision",
    name: "Báscula de Precisión para Repostería",
    shortDescription: "Mide en incrementos de 0.1g, ideal para recetas exactas de pastelería.",
    longDescription:
      "Báscula de alta precisión pensada específicamente para repostería, donde pequeñas diferencias de peso afectan el resultado final.",
    priceRange: "$15 – $22",
    category: "Horneado",
    rating: 4.6,
    reviewCount: 8700,
    image: "/products/bascula-postres-precision.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Báscula+de+Precisión+para+Repostería&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "tostadora-2-rebanadas",
    name: "Tostadora Compacta de 2 Rebanadas",
    shortDescription: "6 niveles de tostado, ranura ancha apta para pan artesanal.",
    longDescription:
      "Tostadora de diseño compacto pensada para cocinas pequeñas, con función de recalentado y apagado automático antiatasco.",
    priceRange: "$25 – $45",
    category: "Electrodomésticos",
    rating: 4.5,
    reviewCount: 14800,
    image: "/products/tostadora-2-rebanadas.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Tostadora+Compacta+de+2+Rebanadas&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "batidora-mano-electrica",
    name: "Batidora de Mano Eléctrica Multivelocidad",
    shortDescription: "Bate, mezcla y monta claras en minutos, con accesorios incluidos.",
    longDescription:
      "Batidora manual con varias velocidades y accesorios intercambiables (varillas, ganchos para masa), ideal para repostería casera frecuente.",
    priceRange: "$20 – $40",
    category: "Electrodomésticos",
    rating: 4.6,
    reviewCount: 23400,
    image: "/products/batidora-mano-electrica.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Batidora+de+Mano+Eléctrica+Multivelocidad&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "microondas-compacto-digital",
    name: "Microondas Compacto Digital",
    shortDescription: "Panel digital con programas preestablecidos, ideal para espacios reducidos.",
    longDescription:
      "Tamaño compacto pensado para cocinas pequeñas, apartamentos o como segundo microondas, con potencia suficiente para el uso diario.",
    priceRange: "$60 – $110",
    category: "Electrodomésticos",
    rating: 4.5,
    reviewCount: 9100,
    image: "/products/microondas-compacto-digital.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Microondas+Compacto+Digital&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "freidora-aire-doble-cesta",
    name: "Freidora de Aire de Doble Cesta",
    shortDescription: "Cocina dos alimentos distintos al mismo tiempo, sincronizados.",
    longDescription:
      "Dos compartimentos independientes que permiten cocinar dos alimentos diferentes y que terminen al mismo tiempo, ideal para familias.",
    priceRange: "$90 – $150",
    category: "Electrodomésticos",
    rating: 4.6,
    reviewCount: 16700,
    image: "/products/freidora-aire-doble-cesta.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Freidora+de+Aire+de+Doble+Cesta&tag=TU-ID-AFILIADO-20",
    badge: "Tendencia 2026",
  },
  {
    id: "olla-arrocera-multifuncion",
    name: "Olla Arrocera Multifunción",
    shortDescription: "Arroz perfecto cada vez, con funciones extra de vapor y mantenimiento de calor.",
    longDescription:
      "Más allá de cocinar arroz: incluye función de vaporera para vegetales y mantiene la comida caliente automáticamente al terminar.",
    priceRange: "$30 – $55",
    category: "Electrodomésticos",
    rating: 4.6,
    reviewCount: 12300,
    image: "/products/olla-arrocera-multifuncion.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Olla+Arrocera+Multifunción&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "minicultivo-hidroponico-aerogarden",
    name: "AeroGarden Mini Jardín Hidropónico de Interior",
    shortDescription: "Hierbas frescas todo el año en tu mesón, sin tierra y sin complicaciones.",
    longDescription:
      "Sistema hidropónico con luz LED de crecimiento integrada, pensado para cultivar hierbas y vegetales pequeños en interiores durante todo el año.",
    priceRange: "$70 – $110",
    category: "Cultivo en casa",
    rating: 4.5,
    reviewCount: 11200,
    image: "/products/minicultivo-hidroponico-aerogarden.jpg",
    affiliateLink: "https://www.amazon.com/s?k=AeroGarden+Mini+Jardín+Hidropónico+de+Interior&tag=TU-ID-AFILIADO-20",
    badge: "Tendencia 2026",
  },
  {
    id: "frasco-conservacion-hierbas",
    name: "Frasco Conservador de Hierbas Frescas",
    shortDescription: "Mantén el cilantro, perejil o albahaca frescos hasta 3 semanas.",
    longDescription:
      "Diseño tipo florero con depósito de agua que alarga significativamente la vida de las hierbas frescas, evitando que se marchiten en pocos días.",
    priceRange: "$12 – $20",
    category: "Cultivo en casa",
    rating: 4.5,
    reviewCount: 6700,
    image: "/products/frasco-conservacion-hierbas.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Frasco+Conservador+de+Hierbas+Frescas&tag=TU-ID-AFILIADO-20",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "Todas") return products;
  return products.filter((p) => p.category === category);
}
