import type { LucideIcon } from "lucide-react";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import LoopCarousel from "@/components/ui/LoopCarousel";
import Button from "@/components/ui/Button";
import { useButtonClick } from "@/hooks/useButtonClick";
import { resolveIcon } from "@/utils/resolve-icon";

type FeatureItem = {
  title: string;
  description: string;
  buttonIcon: string | LucideIcon;
  buttonHref?: string;
  buttonOnClick?: () => void;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesMediaCarouselProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: FeatureItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeatureMediaCarouselCard = ({ item }: { item: FeatureItem }) => {
  const handleClick = useButtonClick(item.buttonHref, item.buttonOnClick);
  const Icon = resolveIcon(item.buttonIcon);

  return (
    <div className="relative overflow-hidden aspect-square md:aspect-3/2 rounded">
      <ImageOrVideo imageSrc={item.imageSrc} videoSrc={item.videoSrc} className="absolute inset-0" />
      <div className="absolute inset-x-4 bottom-4 xl:inset-x-5 xl:bottom-5 2xl:inset-x-6 2xl:bottom-6 flex items-center justify-between gap-5 p-4 xl:p-5 2xl:p-6 card rounded backdrop-blur-sm">
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="text-2xl font-semibold leading-snug truncate">{item.title}</h3>
          <p className="text-base leading-snug truncate">{item.description}</p>
        </div>
        <a
          href={item.buttonHref}
          onClick={handleClick}
          aria-label="View more"
          className="flex items-center justify-center shrink-0 size-9 cursor-pointer primary-button rounded-full"
        >
          <Icon className="size-4 text-primary-cta-text" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
};

const FeaturesMediaCarousel = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
  textAnimation,
}: FeaturesMediaCarouselProps) => {
  return (
    <section aria-label="Features section" className="w-full py-20">
      <div className="flex flex-col w-full gap-8 md:gap-10">
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

        <LoopCarousel>
          {items.map((item) => (
            <FeatureMediaCarouselCard key={item.title} item={item} />
          ))}
        </LoopCarousel>
      </div>
    </section>
  );
};

export default FeaturesMediaCarousel;
