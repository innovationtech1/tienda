import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-cream transition-transform duration-300 group-hover:rotate-12">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 10C4 7 7 4 12 4C17 4 20 7 20 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path d="M4 10H20V12C20 16 17 19 12 19C7 19 4 16 4 12V10Z" fill="currentColor" />
              <path d="M8 4V2.5M12 4V2M16 4V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-charcoal">
            innovation<span className="text-terracotta">TECH</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          <Link
            href="/#catalogo"
            className="text-sm font-medium text-charcoal-soft transition-colors hover:text-terracotta"
          >
            Catálogo
          </Link>
          <Link
            href="/sobre-nosotros"
            className="text-sm font-medium text-charcoal-soft transition-colors hover:text-terracotta"
          >
            Sobre nosotros
          </Link>
          <Link
            href="/#catalogo"
            className="rounded-full bg-charcoal px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-terracotta"
          >
            Ver selección
          </Link>
        </nav>

        <Link
          href="/#catalogo"
          className="rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-cream sm:hidden"
        >
          Ver
        </Link>
      </div>
    </header>
  );
}
