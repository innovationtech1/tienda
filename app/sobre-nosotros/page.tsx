import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nosotros — InnovationTECH",
  description: "Quiénes somos y por qué curamos los mejores productos de cocina y hogar.",
};

export default function SobreNosotros() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
        Sobre nosotros
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-charcoal sm:text-5xl">
        Menos cajones llenos de cosas sin usar
      </h1>

      <div className="prose mt-8 space-y-5 text-base leading-relaxed text-charcoal-soft">
        <p>
          InnovationTECH nació de una frustración simple: comprar productos de
          cocina que prometían mucho y terminaban acumulando polvo. Empezamos
          a comparar productos en serio — especificaciones, materiales,
          reseñas reales — antes de recomendar nada.
        </p>
        <p>
          Hoy seleccionamos un catálogo amplio de productos de cocina y hogar
          disponibles en Amazon, organizados por categoría, enfocados en lo
          que de verdad resuelve un problema cotidiano. No vendemos
          directamente: te conectamos con la compra en Amazon, donde ya
          confías en el proceso, el envío y las devoluciones.
        </p>
        <p>
          Como Afiliados de Amazon, ganamos una comisión por las compras
          calificadas que se hacen a través de nuestros enlaces, sin que eso
          cambie el precio que tú pagas.
        </p>
      </div>
    </section>
  );
}
