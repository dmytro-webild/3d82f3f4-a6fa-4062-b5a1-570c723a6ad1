import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";

type HeroSplitMediaGridProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  items: [
    { imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never },
    { imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never }
  ];
  textAnimation: "slide-up" | "fade-blur" | "fade";
};

const HeroSplitMediaGrid = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
  textAnimation,
}: HeroSplitMediaGridProps) => {
  return (
    <section aria-label="Hero section" className="relative flex items-center h-fit md:h-svh pt-25 pb-20 md:py-0">
      <HeroBackgroundSlot />
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 w-content-width mx-auto">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
              <p>{tag}</p>
            </div>

            <TextAnimation
              text={title}
              variant={textAnimation}
              gradientText={true}
              tag="h1"
              className="text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-center md:text-left text-balance"
            />

            <TextAnimation
              text={description}
              variant={textAnimation}
              gradientText={false}
              tag="p"
              className="md:max-w-8/10 text-lg md:text-xl leading-snug text-center md:text-left text-balance"
            />

            <div className="flex flex-wrap max-md:justify-center gap-3 mt-2 md:mt-3">
              <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
              <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />
            </div>
          </div>
        </div>

        <ScrollReveal variant="fade" delay={0.2} className="w-full md:w-1/2 grid grid-cols-2 gap-2 xl:gap-3 2xl:gap-4">
          {items.map((item, index) => (
            <div key={index} className="h-80 md:h-[55vh] p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden">
              <ImageOrVideo imageSrc={item.imageSrc} videoSrc={item.videoSrc} />
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSplitMediaGrid;
