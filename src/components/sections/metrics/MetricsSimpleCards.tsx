import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Metric = {
  value: string;
  description: string;
};

const MetricsSimpleCards = ({
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
            <div key={metric.value} className="flex flex-col justify-between gap-6 p-6 md:p-10 min-h-60 md:min-h-70 2xl:min-h-80 h-full card rounded">
              <span className="text-9xl md:text-8xl font-semibold leading-none truncate">{metric.value}</span>
              <p className="text-base leading-snug text-balance">{metric.description}</p>
            </div>
          ))}
        </GridOrCarousel>
      </ScrollReveal>
    </div>
  </section>
);

export default MetricsSimpleCards;
