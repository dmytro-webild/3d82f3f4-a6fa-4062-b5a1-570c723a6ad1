import ImageOrVideo from "@/components/ui/ImageOrVideo";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { cls } from "@/lib/utils";

type FeatureItem = {
  title: string;
  description: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesBentoGridProps {
  tag: string;
  title: string;
  description: string;
  features: [FeatureItem, FeatureItem, FeatureItem, FeatureItem];
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesBentoGrid = ({
  tag,
  title,
  description,
  features,
  primaryButton,
  secondaryButton,
  textAnimation,
}: FeaturesBentoGridProps) => {
  const colSpans = ["md:col-span-5", "md:col-span-7", "md:col-span-7", "md:col-span-5"];

  return (
    <section aria-label="Features section" className="py-20">
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
              {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />}
              {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />}
            </div>
          )}
        </div>

        <ScrollReveal variant="fade" className="w-content-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {features.map((feature, index) => (
              <div key={feature.title} className={cls(colSpans[index], "flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 card rounded")}>
                <div className="h-60 xl:h-72 2xl:h-80 rounded overflow-hidden bg-foreground/5 shadow shadow-foreground/5">
                  <ImageOrVideo imageSrc={feature.imageSrc} videoSrc={feature.videoSrc} />
                </div>
                <div className="flex flex-col gap-1 p-3 xl:p-3.5 2xl:p-4">
                  <h3 className="text-2xl font-semibold leading-snug text-balance">{feature.title}</h3>
                  <p className="text-base leading-snug text-balance">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesBentoGrid;
