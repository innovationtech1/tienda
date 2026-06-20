import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad — innovationTECH",
};

export default function PoliticaPrivacidad() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
        Legal
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-charcoal sm:text-5xl">
        Política de privacidad
      </h1>

      <div className="prose mt-8 space-y-6 text-base leading-relaxed text-charcoal-soft">
        <p>
          Última actualización: {new Date().toLocaleDateString("es", { year: "numeric", month: "long" })}.
        </p>

        <div>
          <h2 className="font-display text-xl font-semibold text-charcoal">
            Qué información recopilamos
          </h2>
          <p className="mt-2">
            Este sitio puede usar herramientas de analítica básica (como
            Google Analytics o similares) para entender qué páginas y
            productos generan más interés. No recopilamos información
            personal identificable a menos que la proporciones
            voluntariamente.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-charcoal">
            Enlaces de afiliados
          </h2>
          <p className="mt-2">
            Como Afiliado de Amazon, innovationTECH gana por compras
            calificadas. Al hacer clic en un enlace hacia Amazon, sales de
            este sitio y quedas sujeto a la política de privacidad y
            términos de Amazon.com.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-charcoal">
            Cookies
          </h2>
          <p className="mt-2">
            Este sitio puede usar cookies técnicas necesarias para su
            funcionamiento, y cookies de analítica para medir tráfico de
            forma agregada y anónima.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-charcoal">
            Contacto
          </h2>
          <p className="mt-2">
            Si tienes preguntas sobre esta política, puedes contactarnos a
            través de los medios indicados en el sitio.
          </p>
        </div>
      </div>
    </section>
  );
}
