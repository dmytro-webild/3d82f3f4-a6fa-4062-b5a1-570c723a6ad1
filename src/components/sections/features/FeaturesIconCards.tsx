import TextAnimation from "@/components/ui/TextAnimation";
import Button from "@/components/ui/Button";
import HoverPattern from "@/components/ui/HoverPattern";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { LucideIcon } from "lucide-react";
import { resolveIcon } from "@/utils/resolve-icon";

type FeatureItem = {
  icon: string | LucideIcon;
  title: string;
  description: string;
};

interface FeaturesIconCardsProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  features: FeatureItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesIconCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  features,
  textAnimation,
}: FeaturesIconCardsProps) => {
  return (
    <section aria-label="Features icon cards section" className="flex flex-col gap-8 md:gap-10 py-20">
      <div className="flex flex-col items-center gap-2 w-content-width mx-auto">
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
          {features.map((feature) => {
            const FeatureIcon = resolveIcon(feature.icon);
            return (
            <div key={feature.title} className="flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 h-full card rounded">
              <HoverPattern className="flex items-center justify-center aspect-square rounded bg-foreground/5 shadow shadow-foreground/5">
                <div className="relative z-10 flex items-center justify-center size-12 md:size-14 2xl:size-16 primary-button rounded shadow">
                  <FeatureIcon className="size-4 text-primary-cta-text" strokeWidth={1.5} />
                </div>
              </HoverPattern>
              <div className="flex flex-col gap-1 p-3 xl:p-3.5 2xl:p-4">
                <h3 className="text-2xl font-semibold leading-snug">{feature.title}</h3>
                <p className="text-base leading-snug">{feature.description}</p>
              </div>
            </div>
            );
          })}
        </GridOrCarousel>
      </ScrollReveal>
    </section>
  );
};

export default FeaturesIconCards;
