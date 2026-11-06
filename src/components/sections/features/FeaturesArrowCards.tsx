import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useButtonClick } from "@/hooks/useButtonClick";

type FeatureItem = {
  title: string;
  tags: string[];
  href?: string;
  onClick?: () => void;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const ArrowButton = ({ href, onClick }: { href?: string; onClick?: () => void }) => {
  const handleClick = useButtonClick(href, onClick);
  return (
    <a
      href={href}
      onClick={handleClick}
      className="group/arrow flex items-center justify-center shrink-0 size-9 primary-button rounded-full cursor-pointer transition-transform duration-300 hover:scale-110"
    >
      <ArrowUpRight className="size-4 text-primary-cta-text transition-transform duration-300 group-hover/arrow:rotate-45" strokeWidth={2} />
    </a>
  );
};

interface FeaturesArrowCardsProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: FeatureItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesArrowCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
  textAnimation,
}: FeaturesArrowCardsProps) => {
  return (
    <section aria-label="Features section" className="py-20">
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
            {items.map((item) => (
              <div key={item.title} className="flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 h-full card rounded group">
                <div className="relative aspect-square rounded overflow-hidden">
                  <ImageOrVideo imageSrc={item.imageSrc} videoSrc={item.videoSrc} className="transition-transform duration-500 ease-in-out group-hover:scale-105" />
                  <div className="absolute top-3 right-3 xl:top-3.5 xl:right-3.5 2xl:top-4 2xl:right-4">
                    <ArrowButton href={item.href} onClick={item.onClick} />
                  </div>
                </div>
                <div className="flex flex-col gap-1 p-3 xl:p-3.5 2xl:p-4">
                  <h3 className="text-2xl font-semibold leading-snug text-balance">{item.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-3">
                    {item.tags.map((itemTag) => (
                      <div key={itemTag} className="flex items-center h-9 px-3 text-sm card rounded">
                        <p>{itemTag}</p>
                      </div>
                    ))}
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

export default FeaturesArrowCards;
