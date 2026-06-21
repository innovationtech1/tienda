"use client";

import { useMemo, useState } from "react";
import { products, CATEGORIES } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("Todas");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== "Todas") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, query]);

  const allCategories = ["Todas", ...CATEGORIES];

  return (
    <div>
      {/* Buscador */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-soft"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca un producto, ej: freidora, báscula, organizador..."
            className="w-full rounded-full border border-charcoal/15 bg-white py-3 pl-11 pr-4 text-sm text-charcoal placeholder:text-charcoal-soft/70 outline-none transition-colors focus:border-terracotta"
          />
        </div>
      </div>

      {/* Filtros de categoría */}
      <div className="mb-10 flex flex-wrap gap-2">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-charcoal text-cream"
                : "bg-white text-charcoal-soft border border-charcoal/10 hover:border-terracotta hover:text-terracotta"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Contador de resultados */}
      <p className="mb-6 text-sm text-charcoal-soft">
        {filtered.length === products.length
          ? `Mostrando los ${products.length} productos`
          : `${filtered.length} producto${filtered.length === 1 ? "" : "s"} encontrado${filtered.length === 1 ? "" : "s"}`}
      </p>

      {/* Grid de productos */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-charcoal/20 py-16 text-center">
          <p className="text-charcoal-soft">
            No encontramos productos que coincidan con tu búsqueda.
          </p>
        </div>
      )}
    </div>
  );
}
