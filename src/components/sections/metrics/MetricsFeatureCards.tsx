import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Metric = {
  value: string;
  title: string;
  features: string[];
};

const MetricsFeatureCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  metrics,
  textAnimation,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  metrics: Metric[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => (
  <section aria-label="Metrics section" className="py-20">
    <div className="flex flex-col gap-8 md:gap-10">
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
          {metrics.map((metric) => (
            <div key={metric.value} className="flex flex-col justify-between gap-4 xl:gap-5 2xl:gap-6 p-6 xl:p-7 2xl:p-8 h-full card rounded">
              <div className="flex flex-col gap-0 min-w-0">
                <span className="text-8xl md:text-7xl font-semibold leading-none truncate">{metric.value}</span>
                <span className="text-xl truncate">{metric.title}</span>
              </div>

              <div className="flex flex-col gap-3 pt-5 border-t border-foreground/5">
                {metric.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="flex items-center justify-center shrink-0 size-6 primary-button rounded">
                      <Check className="size-3 text-primary-cta-text" strokeWidth={2} />
                    </div>
                    <span className="text-sm leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </GridOrCarousel>
      </ScrollReveal>
    </div>
  </section>
);

export default MetricsFeatureCards;
