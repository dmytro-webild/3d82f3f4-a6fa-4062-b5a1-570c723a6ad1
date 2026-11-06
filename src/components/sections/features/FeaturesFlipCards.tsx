import { useState } from "react";
import { Plus } from "lucide-react";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

type FeatureItem = {
  title: string;
  descriptions: string[];
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesFlipCardsProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: FeatureItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeatureFlipCard = ({ item }: { item: FeatureItem }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full cursor-pointer perspective-[3000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        data-flipped={isFlipped}
        className="relative w-full h-full transition-transform duration-500 transform-3d data-[flipped=true]:transform-[rotateY(180deg)]"
      >
        <div className="flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 card rounded backface-hidden">
          <div className="flex items-start justify-between gap-5 p-3 xl:p-3.5 2xl:p-4">
            <h3 className="text-3xl font-semibold leading-snug text-balance">{item.title}</h3>
            <div className="flex items-center justify-center shrink-0 size-9 primary-button rounded-full">
              <Plus className="size-4 text-primary-cta-text" strokeWidth={2} />
            </div>
          </div>
          <div className="relative overflow-hidden aspect-4/5 rounded">
            <ImageOrVideo imageSrc={item.imageSrc} videoSrc={item.videoSrc} className="absolute inset-0" />
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 card rounded backface-hidden transform-[rotateY(180deg)]">
          <div className="flex items-start justify-between gap-5 p-3 xl:p-3.5 2xl:p-4">
            <h3 className="text-3xl font-semibold leading-snug text-balance">{item.title}</h3>
            <div className="flex items-center justify-center shrink-0 size-9 primary-button rounded-full">
              <Plus className="size-4 rotate-45 text-primary-cta-text" strokeWidth={2} />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2 p-3 xl:p-3.5 2xl:p-4 bg-foreground/5 shadow shadow-foreground/5 rounded">
            {item.descriptions.map((desc, index) => (
              <p key={index} className="text-base md:text-lg leading-snug text-balance">{desc}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturesFlipCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
  textAnimation,
}: FeaturesFlipCardsProps) => {
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
              <FeatureFlipCard key={item.title} item={item} />
            ))}
          </GridOrCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesFlipCards;
