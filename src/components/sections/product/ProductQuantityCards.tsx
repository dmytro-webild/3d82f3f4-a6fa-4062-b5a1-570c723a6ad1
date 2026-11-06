import { useState } from "react";
import { Plus, Minus, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import useProducts from "@/hooks/useProducts";

type ProductQuantityCardsProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
  products?: {
    name: string;
    price: string;
    imageSrc: string;
    onAddToCart?: (quantity: number) => void;
  }[];
};

const ProductQuantityCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  textAnimation,
  products: productsProp,
}: ProductQuantityCardsProps) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const { products: fetchedProducts, isLoading } = useProducts();
  const isFromApi = fetchedProducts.length > 0;
  const products = isFromApi
    ? fetchedProducts.map((p) => ({
        name: p.name,
        price: p.price,
        imageSrc: p.imageSrc,
        onAddToCart: undefined as ((quantity: number) => void) | undefined,
      }))
    : productsProp;

  const getQuantity = (name: string) => quantities[name] || 1;

  const handleIncrement = (name: string) => {
    setQuantities((prev) => ({ ...prev, [name]: (prev[name] || 1) + 1 }));
  };

  const handleDecrement = (name: string) => {
    setQuantities((prev) => ({ ...prev, [name]: Math.max(1, (prev[name] || 1) - 1) }));
  };

  if (isLoading && !productsProp) {
    return (
      <section aria-label="Products section" className="py-20">
        <div className="w-content-width mx-auto flex justify-center">
          <Loader2 className="size-8 animate-spin text-foreground" strokeWidth={1.5} />
        </div>
      </section>
    );
  }

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section aria-label="Products section" className="py-20">
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-center w-content-width mx-auto gap-2">
          <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
            <p>{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={true}
            tag="h2"
            className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
          />

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
              {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>}
              {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />}
            </div>
          )}
        </div>

        <ScrollReveal variant="slide-up">
          <GridOrCarousel>
            {products.map((product) => (
              <div
                key={product.name}
                className="h-full flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 card rounded"
              >
                <div className="aspect-square rounded overflow-hidden">
                  <ImageOrVideo imageSrc={product.imageSrc} />
                </div>

                <div className="flex flex-col gap-3 p-3 xl:p-3.5 2xl:p-4">
                  <h3 className="text-2xl font-semibold truncate">{product.name}</h3>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleDecrement(product.name)}
                        className="flex items-center justify-center size-9 rounded secondary-button cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="size-4" strokeWidth={1.5} />
                      </button>

                      <span className="w-fit text-base text-center font-semibold">{getQuantity(product.name)}</span>

                      <button
                        onClick={() => handleIncrement(product.name)}
                        className="flex items-center justify-center size-9 rounded secondary-button cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="size-4" strokeWidth={1.5} />
                      </button>
                    </div>

                    <button
                      onClick={() => product.onAddToCart?.(getQuantity(product.name))}
                      className="h-9 px-5 rounded primary-button text-base text-primary-cta-text font-medium cursor-pointer"
                    >
                      {product.price}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </GridOrCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductQuantityCards;
