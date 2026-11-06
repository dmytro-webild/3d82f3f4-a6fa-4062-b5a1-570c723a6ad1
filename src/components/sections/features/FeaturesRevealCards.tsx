import { Info } from "lucide-react";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

type FeatureItem = {
  title: string;
  description: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesRevealCardsProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: FeatureItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesRevealCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
  textAnimation,
}: FeaturesRevealCardsProps) => {
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
              {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />}
              {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />}
            </div>
          )}
        </div>

        <ScrollReveal variant="slide-up">
          <GridOrCarousel>
            {items.map((item, index) => (
              <div key={item.title} className="group relative overflow-hidden aspect-6/7 rounded">
                <ImageOrVideo imageSrc={item.imageSrc} videoSrc={item.videoSrc} className="absolute inset-0" />

                <div className="absolute top-4 left-4 xl:top-6 xl:left-6 2xl:top-8 2xl:left-8 z-20 perspective-[1000px]">
                  <div className="relative size-8 transform-3d transition-transform duration-400 group-hover:rotate-y-180">
                    <div className="absolute inset-0 flex items-center justify-center text-sm rounded bg-background backface-hidden text-foreground">
                      <p>{index + 1}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center rounded bg-background backface-hidden rotate-y-180">
                      <Info className="h-1/2 w-1/2 text-foreground" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                <div className="absolute -inset-x-px -bottom-px h-2/5 backdrop-blur-xl mask-fade-top-overlay" aria-hidden="true" />

                <div className="absolute inset-x-2 bottom-2 xl:inset-x-3 xl:bottom-3 2xl:inset-x-4 2xl:bottom-4 z-10">
                  <div className="relative flex flex-col gap-0 group-hover:gap-1 xl:group-hover:gap-2 2xl:group-hover:gap-3 p-2 xl:p-3 2xl:p-4 transition-all duration-400">
                    <div className="absolute inset-0 -z-10 card rounded translate-y-full opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100" />
                    <h3 className="text-2xl font-semibold leading-snug text-white transition-colors duration-400 group-hover:text-foreground">
                      {item.title}
                    </h3>
                    <div className="grid grid-rows-[0fr] transition-all duration-400 ease-out group-hover:grid-rows-[1fr]">
                      <p className="overflow-hidden text-sm leading-snug text-foreground opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                        {item.description}
                      </p>
                    </div>
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

export default FeaturesRevealCards;
