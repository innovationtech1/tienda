import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0e1b33]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
            <Image
              src="/logo-innovationtech.png"
              alt="InnovationTECH logo"
              width={48}
              height={48}
              className="h-full w-full object-contain drop-shadow-md"
              priority
            />
          </span>
          <span className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            <span className="logo-innovation">Innovation</span>
            <span className="logo-tech">TECH</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          <Link
            href="/#catalogo"
            className="text-sm font-medium text-white/80 transition-colors hover:text-[#e85d4a]"
          >
            Catálogo
          </Link>
          <Link
            href="/sobre-nosotros"
            className="text-sm font-medium text-white/80 transition-colors hover:text-[#e85d4a]"
          >
            Sobre nosotros
          </Link>
          <Link
            href="/#catalogo"
            className="rounded-full bg-terracotta px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#e85d4a]"
          >
            Ver selección
          </Link>
        </nav>

        <Link
          href="/#catalogo"
          className="rounded-full bg-terracotta px-4 py-2 text-sm font-medium text-white sm:hidden"
        >
          Ver
        </Link>
      </div>
    </header>
  );
}
