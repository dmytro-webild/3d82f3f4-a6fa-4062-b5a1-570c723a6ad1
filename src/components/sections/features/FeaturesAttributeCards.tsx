import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { resolveIcon } from "@/utils/resolve-icon";
import type { LucideIcon } from "lucide-react";

type AttributeDetail = {
  icon: string | LucideIcon;
  label: string;
  value: string | number;
};

type FeatureItem = {
  title: string;
  tags: string;
  badge?: string | null;
  details: AttributeDetail[];
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesAttributeCardsProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: FeatureItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesAttributeCards = ({ tag, title, description, primaryButton, secondaryButton, items, textAnimation }: FeaturesAttributeCardsProps) => {
  return (
    <section aria-label="Features attribute cards section" className="py-20">
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
              {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />}
            </div>
          )}
        </div>

        <ScrollReveal variant="slide-up">
          <div className="w-content-width mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            {items.map((item) => (
              <div key={item.title} className="group flex flex-col gap-2 xl:gap-3 2xl:gap-4 h-full rounded">
                <div className="relative aspect-4/3 overflow-hidden rounded">
                  <ImageOrVideo imageSrc={item.imageSrc} videoSrc={item.videoSrc} className="rounded group-hover:scale-105 transition-transform duration-500" />
                  {item.badge && (
                    <span className="absolute top-2 left-2 xl:top-3 xl:left-3 2xl:top-4 2xl:left-4 px-3 py-1 text-sm text-foreground font-medium card rounded">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-semibold leading-snug">{item.title}</h3>
                  <p className="text-base leading-snug">{item.tags}</p>
                  <div className="flex items-center gap-3 text-base mt-0.5">
                    {item.details.map((detail) => {
                      const IconComponent = resolveIcon(detail.icon);
                      return (
                        <span key={detail.label} className="flex items-center gap-1">
                          <IconComponent className="size-[1em]" strokeWidth={1.5} />
                          {detail.label}: {detail.value}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesAttributeCards;
