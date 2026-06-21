import { products } from "@/lib/products";
import ProductCatalog from "@/components/ProductCatalog";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-charcoal/10">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #C4622D 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #6B7A5E 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-terracotta/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-terracotta-deep">
            Selección curada · Actualizada este mes
          </p>

          <h1 className="max-w-2xl text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-6xl">
            {products.length} productos de cocina que de verdad valen el espacio en tu casa
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-charcoal-soft">
            Comparamos especificaciones, leímos miles de reseñas y descartamos
            lo que no sirve. Esto es lo que queda: una selección amplia,
            organizada por categoría, de lo que más se vende en Amazon.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#catalogo"
              className="rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-terracotta"
            >
              Ver el catálogo completo
            </a>
            <span className="text-sm text-charcoal-soft">
              Sin registros · Sin spam · Directo a Amazon
            </span>
          </div>
        </div>
      </section>

      {/* ============ CATÁLOGO ============ */}
      <section id="catalogo" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
              Catálogo de cocina y hogar
            </h2>
            <p className="mt-2 max-w-md text-charcoal-soft">
              Filtra por categoría o busca directamente lo que necesitas.
            </p>
          </div>
        </div>

        <ProductCatalog />
      </section>

      {/* ============ CONFIANZA / CÓMO ELEGIMOS ============ */}
      <section className="border-t border-charcoal/10 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display text-3xl font-semibold text-charcoal">
            Cómo elegimos
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="font-display text-2xl font-semibold text-terracotta">Reseñas</p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                Leemos cientos de reseñas reales en Amazon, priorizando
                comentarios con fotos y compras verificadas.
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-terracotta">Especificaciones</p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                Comparamos materiales, garantía y funciones reales frente a lo
                que promete el empaque.
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-terracotta">Relación precio-uso</p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                Descartamos lo que se usa una vez y termina en un cajón. Solo
                queda lo que se gana un lugar fijo en tu cocina.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
