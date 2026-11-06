import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";

type FeatureItem = {
  title: string;
  description: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesMediaSimpleProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: FeatureItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesMediaSimple = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
  textAnimation,
}: FeaturesMediaSimpleProps) => {
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
            {items.map((item) => (
              <div key={item.title} className="flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 h-full card rounded">
                <div className="aspect-6/7 rounded overflow-hidden button-secondary shadow shadow-foreground/5">
                  <ImageOrVideo imageSrc={item.imageSrc} videoSrc={item.videoSrc} className="w-full h-full object-cover" />
                </div>
                <div className="p-3 xl:p-3.5 2xl:p-4">
                  <p className="text-2xl leading-tight">
                    <span className="font-semibold text-foreground">{item.title}. </span>
                    <span className="text-foreground/50">{item.description}</span>
                  </p>
                </div>
              </div>
            ))}
          </GridOrCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesMediaSimple;
