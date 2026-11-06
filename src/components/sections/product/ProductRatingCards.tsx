import { Star, Loader2 } from "lucide-react";
import { cls } from "@/lib/utils";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import useProducts from "@/hooks/useProducts";

type ProductRatingCardsProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
  products?: {
    brand: string;
    name: string;
    price: string;
    rating: number;
    reviewCount: string;
    imageSrc: string;
    onClick?: () => void;
  }[];
};

const ProductRatingCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  textAnimation,
  products: productsProp,
}: ProductRatingCardsProps) => {
  const { products: fetchedProducts, isLoading } = useProducts();
  const isFromApi = fetchedProducts.length > 0;
  const products = isFromApi
    ? fetchedProducts.map((p) => ({
        brand: p.brand || "",
        name: p.name,
        price: p.price,
        rating: p.rating || 0,
        reviewCount: p.reviewCount || "0",
        imageSrc: p.imageSrc,
        onClick: p.onProductClick,
      }))
    : productsProp;

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

        <ScrollReveal variant="fade">
          <GridOrCarousel>
            {products.map((product) => (
              <button
                key={product.name}
                onClick={product.onClick}
                className="group h-full flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 text-left card rounded cursor-pointer"
              >
                <div className="aspect-square rounded overflow-hidden">
                  <ImageOrVideo imageSrc={product.imageSrc} />
                </div>

                <div className="flex flex-col gap-2 p-3 xl:p-3.5 2xl:p-4">
                  <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                    <p className="truncate">{product.brand}</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium truncate">{product.name}</h3>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className={cls(
                              "size-5 text-accent",
                              index < Math.floor(product.rating) ? "fill-accent" : "fill-transparent"
                            )}
                            strokeWidth={1.5}
                          />
                        ))}
                      </div>
                      <p className="text-base">({product.reviewCount})</p>
                    </div>
                  </div>

                  <p className="text-2xl font-semibold mt-1">{product.price}</p>
                </div>
              </button>
            ))}
          </GridOrCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductRatingCards;
