import { ArrowUpRight, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import useProducts from "@/hooks/useProducts";

type ProductVariantCardsProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
  products?: {
    name: string;
    variant: string;
    price: string;
    imageSrc: string;
    onClick?: () => void;
  }[];
};

const ProductVariantCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  textAnimation,
  products: productsProp,
}: ProductVariantCardsProps) => {
  const { products: fetchedProducts, isLoading } = useProducts();
  const isFromApi = fetchedProducts.length > 0;
  const products = isFromApi
    ? fetchedProducts.map((p) => ({
        name: p.name,
        variant: p.variant || "",
        price: p.price,
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

        <ScrollReveal variant="fade-blur">
          <GridOrCarousel>
            {products.map((product) => (
              <button
                key={product.name}
                onClick={product.onClick}
                className="group h-full flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 text-left card rounded cursor-pointer"
              >
                <div className="relative aspect-square rounded overflow-hidden">
                  <ImageOrVideo
                    imageSrc={product.imageSrc}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center group-hover:bg-background/20 group-hover:backdrop-blur-xs transition-all duration-300">
                    <div className="flex items-center justify-center size-12 rounded-full primary-button opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                      <ArrowUpRight className="size-5 text-primary-cta-text" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 p-3 xl:p-3.5 2xl:p-4">
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <h3 className="text-2xl font-semibold truncate leading-snug text-balance">{product.name}</h3>
                    <p className="text-base text-foreground/75 truncate">{product.variant}</p>
                  </div>

                  <span className="text-xl font-medium shrink-0">{product.price}</span>
                </div>
              </button>
            ))}
          </GridOrCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductVariantCards;
