import TextAnimation from "@/components/ui/TextAnimation";
import Button from "@/components/ui/Button";
import BorderGlow from "@/components/ui/BorderGlow";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { LucideIcon } from "lucide-react";
import { resolveIcon } from "@/utils/resolve-icon";

type FeatureItem = {
  icon: string | LucideIcon;
  title: string;
  description: string;
};

interface FeaturesBorderGlowProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  features: FeatureItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesBorderGlow = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  features,
  textAnimation,
}: FeaturesBorderGlowProps) => {
  return (
    <section aria-label="Features border glow section" className="flex flex-col gap-8 md:gap-10 py-20">
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
            {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />}
            {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />}
          </div>
        )}
      </div>

      <ScrollReveal variant="fade-blur">
        <GridOrCarousel>
          {features.map((feature) => {
            const FeatureIcon = resolveIcon(feature.icon);
            return (
              <div key={feature.title} className="relative flex flex-col justify-between gap-4 xl:gap-5 2xl:gap-6 p-6 xl:p-7 2xl:p-8 mt-0.5 h-full min-h-60 md:min-h-70 2xl:min-h-80 card rounded">
                <div className="flex items-center justify-center size-12 md:size-14 2xl:size-16 primary-button rounded-full">
                  <FeatureIcon className="size-4 text-primary-cta-text" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-semibold leading-snug text-balance">{feature.title}</h3>
                  <p className="text-base leading-snug text-balance">{feature.description}</p>
                </div>
                <BorderGlow />
              </div>
            );
          })}
        </GridOrCarousel>
      </ScrollReveal>
    </section>
  );
};

export default FeaturesBorderGlow;
