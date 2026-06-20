# innovationTECH

PWA de marketing de afiliados de Amazon — nicho: **gadgets de cocina inteligente**.

El sitio muestra un catálogo curado de 10 productos. Cada tarjeta enlaza
directamente a Amazon con tu link de afiliado. No hay carrito, no hay
pagos propios, no hay inventario — el modelo de negocio es 100% afiliados.

---

## 🚀 Cómo correrlo en tu computadora

### Requisitos previos
- [Node.js](https://nodejs.org/) versión 18 o superior instalado.

### Pasos

1. Descomprime este proyecto donde quieras (ej: en tu Escritorio, en una
   carpeta llamada `proyecto-innovationtech1`).
2. Abre una terminal dentro de esa carpeta.
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## ✏️ Lo primero que debes editar

### 1. Tus links de afiliado de Amazon (`lib/products.ts`)

Cada producto tiene un campo `affiliateLink` con un link de búsqueda
genérico de marcador de posición. Una vez tengas tu cuenta de **Amazon
Associates** aprobada:

1. Busca el producto real en Amazon.
2. Genera tu link de afiliado (con la herramienta "SiteStripe" de Amazon
   Associates, o desde tu panel).
3. Reemplaza el valor de `affiliateLink` en `lib/products.ts` por tu link
   real, que se ve algo así:
   ```
   https://www.amazon.com/dp/B0XXXXXXXX?tag=tuID-20
   ```

### 2. Tus 10 productos reales

El catálogo ya viene actualizado con productos reales e investigados
(marcas como Ninja, Cuisinart, AeroGarden, etc. — populares en
gadgets de cocina inteligente en Amazon). Aun así, antes de lanzar:

- Confirma en Amazon el modelo exacto y precio actual de cada producto
  (los precios cambian constantemente).
- Verifica que cada producto siga disponible y bien valorado.
- Ajusta nombres/descripciones en `lib/products.ts` si cambias de
  modelo o marca.

### 3. Imágenes de producto

Las imágenes actuales en `/public/products/` son **placeholders
ilustrativos** generados con la paleta de la marca (íconos simples,
no fotos reales) — esto es intencional, para no depender de imágenes
externas con derechos de autor inciertos.

Antes de lanzar, reemplázalas por imágenes reales:
1. Ve a la página del producto en Amazon.
2. Descarga la imagen principal del producto (Amazon permite su uso
   dentro del programa de Afiliados, consulta sus políticas operativas
   para los términos exactos).
3. Guárdala en `/public/products/` con el mismo nombre de archivo que
   ya está referenciado en `lib/products.ts` (ej.
   `freidora-aire-ninja.jpg`), o cambia la ruta en el campo `image`
   de ese producto.

Si prefieres regenerar los placeholders con otros colores/íconos, edita
y vuelve a correr `python3 scripts/generate_product_placeholders.py`
(requiere `pip install pillow`).

### 3. Activar fuentes de diseño (opcional, recomendado)

Este proyecto fue construido en un entorno aislado sin acceso a Google
Fonts, así que usa fuentes del sistema como respaldo. En tu máquina,
con internet, puedes activar las fuentes de diseño originales
(Fraunces + Figtree) así:

En `app/layout.tsx`, reemplaza el bloque de imports/declaración de
fuentes por:

```tsx
import { Fraunces, Figtree } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz", "SOFT", "WONK"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
```

Y aplica `${fraunces.variable} ${figtree.variable}` en el `className`
del `<body>`. También actualiza `--font-display` y `--font-sans` en
`app/globals.css` para apuntar a `var(--font-fraunces)` y
`var(--font-figtree)`.

---

## 📦 Cómo publicarlo (deploy) — gratis

### Opción recomendada: Vercel
1. Crea una cuenta gratis en [vercel.com](https://vercel.com).
2. Sube este proyecto a un repositorio de GitHub.
3. En Vercel, click en "New Project" → conecta tu repo → Deploy.
4. Listo: tu PWA queda publicada en una URL gratuita
   (`innovationtech.vercel.app`), y puedes conectar tu dominio propio
   después.

---

## ⚖️ Antes de lanzar — checklist legal

- [ ] Crea tu cuenta en [Amazon Associates](https://affiliate-program.amazon.com/).
- [ ] Reemplaza TODOS los `affiliateLink` de ejemplo por tus links reales.
- [ ] Revisa que el disclosure de afiliados (visible en el footer) siga ahí.
- [ ] Lee las [políticas operativas de Amazon Associates](https://affiliate-program.amazon.com/help/operating/policies)
      antes de promocionar el sitio.
- [ ] Recuerda: Amazon exige tu primera venta calificada dentro de los
      primeros 180 días o puede cerrar la cuenta de afiliado.

---

## 🗂️ Estructura del proyecto

```
app/
  layout.tsx              → Layout raíz (fuentes, metadata PWA)
  page.tsx                → Página principal (hero + catálogo)
  sobre-nosotros/page.tsx → Página "Sobre nosotros"
  politica-privacidad/    → Política de privacidad
  globals.css             → Paleta de colores y estilos base
components/
  Header.tsx               → Navegación superior
  Footer.tsx                → Pie de página con disclosure legal
  ProductCard.tsx           → Tarjeta individual de producto
  RegisterSW.tsx             → Registra el service worker (PWA)
lib/
  products.ts                → ⭐ EDITA AQUÍ tus 10 productos y links
public/
  manifest.json               → Configuración de instalación PWA
  sw.js                        → Service worker (funcionalidad offline)
  icons/                        → Íconos de la app
scripts/
  generate_icons.py              → Script que generó los íconos (opcional)
```

---

## 🔜 Próximos pasos sugeridos

1. Define tu nicho final (puede mantenerse "cocina inteligente" o cambiar).
2. Sustituye los 10 productos de ejemplo por productos reales investigados.
3. Activa tu cuenta de Amazon Associates y reemplaza los links.
4. Despliega en Vercel.
5. Comparte el link, mide clics con Google Analytics o Plausible.
6. Cuando tengas tráfico/ventas, considera solicitar acceso a la API
   de Amazon (PA-API) para automatizar precios y disponibilidad.
