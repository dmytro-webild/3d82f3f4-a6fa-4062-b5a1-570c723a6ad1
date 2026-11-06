import type { LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { resolveIcon } from "@/utils/resolve-icon";

type Metric = {
  icon: string | LucideIcon;
  title: string;
  value: string;
};

const MetricsIconCards = ({
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
          {metrics.map((metric) => {
            const IconComponent = resolveIcon(metric.icon);
            return (
              <div key={metric.value} className="flex flex-col items-center justify-center gap-3 xl:gap-3.5 2xl:gap-4 p-6 xl:p-7 2xl:p-8 min-h-70 xl:min-h-80 2xl:min-h-90 h-full card rounded">
                <div className="flex items-center justify-center gap-2 min-w-0">
                  <div className="flex items-center justify-center shrink-0 size-8 primary-button rounded">
                    <IconComponent className="h-2/5 w-2/5 text-primary-cta-text" strokeWidth={1.5} />
                  </div>
                  <span className="text-xl truncate min-w-0">{metric.title}</span>
                </div>
                <span className="text-9xl md:text-8xl font-semibold leading-none truncate">{metric.value}</span>
              </div>
            );
          })}
        </GridOrCarousel>
      </ScrollReveal>
    </div>
  </section>
);

export default MetricsIconCards;
