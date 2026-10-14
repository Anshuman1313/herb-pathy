export interface BakeryProductSectionProps {
  id: string;
  heading: string;
  subheading?: string;
  products: Product[];
  imageAspectRatio?: string; // e.g. "1/1", "4/3", "16/9"
}
export interface Product {
  id: number | string;
  name: string;
  price: string;
  image?: string;
}

export function BakeryProductSection({
  id,
  heading,
  subheading,
  products,
  imageAspectRatio = "1/1",
}: BakeryProductSectionProps) {
  return (
    <section id={id} className="w-full bg-brand-burgundy py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-2">
        <h2 className="text-brand-cream font-serif text-2xl sm:text-5xl">{heading}</h2>
        {subheading && (
          <p className="text-brand-cream/70 text-sm sm:text-base max-w-md">{subheading}</p>
        )}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center mt-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col bg-white rounded-3xl p-3 w-full max-w-xs">
            <div
              className="w-full rounded-2xl bg-[#efe9e2] flex items-center justify-center overflow-hidden"
              style={{ aspectRatio: imageAspectRatio }}
            >
              <img
                src={product.image ?? "/ds/ds1.webp"}
                alt={product.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col items-center gap-1 pt-4 pb-2">
              <span className="text-brand-brown font-serif text-lg">{product.name}</span>
              <span className="w-8 h-[2px] bg-brand-brown/60 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}