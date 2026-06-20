// =============================================================
// CATÁLOGO DE PRODUCTOS — innovationTECH
// =============================================================
// Edita este archivo para cambiar los productos mostrados.
//
// IMPORTANTE SOBRE LOS LINKS:
// Los "affiliateLink" de abajo son links de BÚSQUEDA en Amazon
// (no de un producto específico), porque el ASIN exacto y el
// precio cambian con el tiempo. Antes de publicar:
//   1. Busca el nombre del producto en Amazon.
//   2. Elige la variante/marca que prefieras vender.
//   3. Genera tu link de afiliado real con SiteStripe (la barra
//      que aparece arriba cuando navegas Amazon con tu cuenta
//      de Associates activa).
//   4. Reemplaza "TU-ID-AFILIADO-20" por tu tag real en TODOS
//      los productos.
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
  badge?: string; // ej: "Más vendido", "Elección del editor"
};

export const SITE_NICHE = "Gadgets de cocina inteligente";

export const products: Product[] = [
  {
    id: "freidora-aire-ninja",
    name: "Ninja Freidora de Aire Digital",
    shortDescription: "La marca más vendida en freidoras de aire en Amazon, con varios programas de cocción.",
    longDescription:
      "Ninja es de las marcas más reconocidas en pequeños electrodomésticos de cocina, con freidoras de aire consistentemente entre las más vendidas de Amazon. Cocina con hasta 75% menos grasa, con cesta antiadherente y panel digital de programas preestablecidos.",
    priceRange: "$70 – $130",
    category: "Cocción",
    rating: 4.7,
    reviewCount: 42000,
    image: "/products/freidora-aire-ninja.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Ninja+Freidora+de+Aire+Digital&tag=TU-ID-AFILIADO-20",
    badge: "Más vendido",
  },
  {
    id: "termometro-carne-bluetooth",
    name: "Termómetro de Carne con Bluetooth (estilo ChefsTemp/MEATER)",
    shortDescription: "Controla el punto de cocción desde tu celular sin abrir el horno ni la parrilla.",
    longDescription:
      "Sonda inalámbrica conectada por Bluetooth a una app que avisa cuando la carne, pollo o pescado alcanza la temperatura interna exacta. Termómetros de este estilo (ChefsTemp, MEATER) están entre los gadgets de cocina mejor valorados de 2026 según reseñas especializadas.",
    priceRange: "$30 – $70",
    category: "Cocción",
    rating: 4.6,
    reviewCount: 15800,
    image: "/products/termometro-carne-bluetooth.jpg",
    affiliateLink: "https://www.amazon.com/s?k=termometro+carne+bluetooth+inalambrico&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "selladora-vacio-cuisinart",
    name: "Cuisinart Selladora al Vacío One-Touch",
    shortDescription: "Conserva alimentos hasta 5 veces más tiempo y protege berries, pasteles y pescado.",
    longDescription:
      "Extrae el aire con un solo botón y sella con tira protectora, ideal para comprar al por mayor y ahorrar. La presión de vacío suave también protege alimentos delicados como berries y pasteles, sin aplastarlos.",
    priceRange: "$45 – $90",
    category: "Conservación",
    rating: 4.6,
    reviewCount: 9400,
    image: "/products/selladora-vacio-cuisinart.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Cuisinart+Selladora+al+Vacio+One+Touch&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "bascula-digital-precision",
    name: "Báscula Digital de Cocina de Precisión",
    shortDescription: "Pesa ingredientes al gramo exacto, con pantalla táctil retroiluminada.",
    longDescription:
      "Ideal para quienes hornean o siguen recetas de precisión. Mide en gramos, onzas, libras y mililitros, con función de tara para pesar varios ingredientes en el mismo recipiente sin hacer cuentas.",
    priceRange: "$15 – $25",
    category: "Medición",
    rating: 4.7,
    reviewCount: 18452,
    image: "/products/bascula-digital-precision.jpg",
    affiliateLink: "https://www.amazon.com/s?k=bascula+digital+cocina&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "minicultivo-hidroponico-aerogarden",
    name: "AeroGarden Mini Jardín Hidropónico de Interior",
    shortDescription: "Hierbas frescas todo el año en tu mesón, sin tierra y sin complicaciones.",
    longDescription:
      "Convierte cualquier rincón de la cocina en un mini huerto. Sistema hidropónico con luz LED de crecimiento integrada, pensado para cultivar hierbas y vegetales pequeños en interiores durante todo el año — una de las tendencias de cocina inteligente que más ha crecido este año.",
    priceRange: "$70 – $110",
    category: "Cultivo en casa",
    rating: 4.5,
    reviewCount: 11200,
    image: "/products/minicultivo-hidroponico-aerogarden.jpg",
    affiliateLink: "https://www.amazon.com/s?k=AeroGarden+Mini+Jardin+Hidroponico&tag=TU-ID-AFILIADO-20",
    badge: "Tendencia 2026",
  },
  {
    id: "batidora-potente-ninja",
    name: "Ninja Licuadora Personal de Alta Potencia",
    shortDescription: "Smoothies listos en 60 segundos, directo en el vaso para llevar.",
    longDescription:
      "Motor de alta potencia que tritura hielo, frutas congeladas y vegetales fibrosos sin dejar grumos. Ideal para rutinas de desayuno rápido o batidos post-entreno, con vasos individuales para llevar.",
    priceRange: "$50 – $90",
    category: "Bebidas",
    rating: 4.6,
    reviewCount: 27600,
    image: "/products/batidora-potente-ninja.jpg",
    affiliateLink: "https://www.amazon.com/s?k=Ninja+Licuadora+Personal+Alta+Potencia&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "exprimidor-electrico-citricos",
    name: "Exprimidor Eléctrico de Cítricos (estilo Cuisinart)",
    shortDescription: "Jugo fresco en segundos, con filtro de pulpa ajustable y sistema antigoteo.",
    longDescription:
      "Motor potente que extrae el máximo jugo de naranjas, limones y toronjas. Sistema antigoteo y filtro ajustable según prefieras el jugo con más o menos pulpa — perfecto para rutinas de jugo fresco por la mañana.",
    priceRange: "$30 – $60",
    category: "Bebidas",
    rating: 4.4,
    reviewCount: 6100,
    image: "/products/exprimidor-electrico-citricos.jpg",
    affiliateLink: "https://www.amazon.com/s?k=exprimidor+electrico+citricos+Cuisinart&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "pelador-electrico-rotato",
    name: "Pelador Eléctrico de Papas y Vegetales (estilo Rotato Express)",
    shortDescription: "Pela kilos de papas en minutos, casi sin esfuerzo manual.",
    longDescription:
      "Gadget compacto que automatiza el pelado de papas y otros vegetales redondeados, reduciendo el tiempo de preparación de horas a minutos. Uno de los gadgets de cocina más virales de los últimos meses por lo mucho que ahorra en meal prep.",
    priceRange: "$20 – $35",
    category: "Preparación",
    rating: 4.3,
    reviewCount: 8700,
    image: "/products/pelador-electrico-rotato.jpg",
    affiliateLink: "https://www.amazon.com/s?k=pelador+electrico+papas+rotato&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "organizador-especias-giratorio",
    name: "Organizador de Especias Giratorio con Etiquetas",
    shortDescription: "24 frascos herméticos en un carrusel que aprovecha cada centímetro de alacena.",
    longDescription:
      "Diseño de dos niveles giratorios que organiza hasta 24 especias en poco espacio. Frascos herméticos transparentes con etiquetas removibles y tapa con dosificador ajustable.",
    priceRange: "$25 – $40",
    category: "Organización",
    rating: 4.7,
    reviewCount: 15230,
    image: "/products/organizador-especias-giratorio.jpg",
    affiliateLink: "https://www.amazon.com/s?k=organizador+especias+giratorio&tag=TU-ID-AFILIADO-20",
  },
  {
    id: "tabla-cortar-bascula",
    name: "Tabla de Cortar Inteligente con Báscula Integrada",
    shortDescription: "Corta y pesa al mismo tiempo: dos pasos en uno solo, sin ensuciar más utensilios.",
    longDescription:
      "Tabla de bambú con sensores de peso integrados y pantalla digital incorporada en el borde. Ideal para seguir recetas con precisión sin ensuciar una báscula aparte.",
    priceRange: "$30 – $50",
    category: "Medición",
    rating: 4.4,
    reviewCount: 2876,
    image: "/products/tabla-cortar-bascula.jpg",
    affiliateLink: "https://www.amazon.com/s?k=tabla+cortar+bascula+integrada&tag=TU-ID-AFILIADO-20",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
