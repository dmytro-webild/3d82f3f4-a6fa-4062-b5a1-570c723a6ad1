import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import Button from "@/components/ui/Button";
import { cls } from "@/lib/utils";

type CarouselItem = {
  label: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

type FeaturesCarouselMarqueeProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: CarouselItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
};

const TAG_STYLES = [
  { pos: "-top-3 -left-2", rotate: "-rotate-3" },
  { pos: "-bottom-3 -right-2", rotate: "rotate-3" },
  { pos: "-top-3 -right-3", rotate: "rotate-6" },
  { pos: "-bottom-3 -left-3", rotate: "-rotate-3" },
  { pos: "-top-2 left-4", rotate: "-rotate-6" },
  { pos: "-bottom-2 right-4", rotate: "rotate-3" },
];

const FeaturesCarouselMarquee = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
  textAnimation,
}: FeaturesCarouselMarqueeProps) => {
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <section aria-label="Features carousel section" className="pt-20 pb-14">
      <div className="flex flex-col gap-2 md:gap-4">
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
          <div className="w-full overflow-hidden mask-fade-x-medium py-6">
            <div className="flex w-max animate-marquee-horizontal items-center" style={{ animationDuration: "60s" }}>
              {duplicated.map((item, i) => {
                const ts = TAG_STYLES[i % TAG_STYLES.length];
                return (
                  <div
                    key={i}
                    className="relative shrink-0 w-60 md:w-65 2xl:w-70 aspect-3/4 mr-3 md:mr-5 p-2 xl:p-3 2xl:p-4 card rounded-lg overflow-visible"
                  >
                    <ImageOrVideo
                      imageSrc={item.imageSrc}
                      videoSrc={item.videoSrc}
                      className="w-full h-full rounded-lg object-cover"
                    />
                    <div
                      className={cls(
                        "absolute px-5 py-2.5 rounded-full card z-10 flex items-center justify-center",
                        ts.pos,
                        ts.rotate
                      )}
                    >
                      <h3 className="text-base font-normal leading-none text-foreground">{item.label}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesCarouselMarquee;
