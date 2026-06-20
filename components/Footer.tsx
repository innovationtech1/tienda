import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-cream-deep">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-charcoal">
              innovation<span className="text-terracotta">TECH</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-charcoal-soft">
              Probamos y comparamos gadgets de cocina para que tu próxima compra
              sea la correcta a la primera.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-charcoal">Navegación</p>
            <ul className="mt-3 space-y-2 text-sm text-charcoal-soft">
              <li>
                <Link href="/#catalogo" className="hover:text-terracotta">
                  Catálogo de productos
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="hover:text-terracotta">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="hover:text-terracotta">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-charcoal">Aviso de afiliados</p>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
              Como Afiliado de Amazon, innovationTECH gana por compras
              calificadas realizadas a través de los enlaces de este sitio,
              sin costo adicional para ti.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-charcoal/10 pt-6 text-xs text-charcoal-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} innovationTECH. Todos los derechos reservados.</p>
          <p>Los precios y disponibilidad mostrados son referenciales y pueden variar en Amazon.</p>
        </div>
      </div>
    </footer>
  );
}
