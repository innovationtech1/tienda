import Image from "next/image";
import type { Product } from "@/lib/products";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="flex items-center gap-0.5" aria-label={`Calificación ${rating} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill={i < full ? "#C9A04E" : "#E5DDC9"}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.8l-5.2 2.7 1-5.8L1.6 7.6l5.8-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-deep">
        <span className="absolute left-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-charcoal/90 font-display text-xs font-semibold text-cream">
          {index + 1}
        </span>
        {product.badge && (
          <span className="absolute right-3 top-3 z-10 rounded-full bg-terracotta px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-sage">
            {product.category}
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-charcoal">
            {product.name}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-charcoal-soft">
          {product.shortDescription}
        </p>

        <div className="flex items-center gap-2">
          <Stars rating={product.rating} />
          <span className="text-xs text-charcoal-soft">
            {product.rating} ({product.reviewCount.toLocaleString("es")})
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-display text-base font-semibold text-charcoal">
            {product.priceRange}
          </span>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-terracotta"
          >
            Ver en Amazon
          </a>
        </div>
      </div>
    </article>
  );
}
