import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

type HeroSplitVerticalMarqueeTallProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  leftItems: ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never })[];
  rightItems: ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never })[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
};

const HeroSplitVerticalMarqueeTall = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  leftItems,
  rightItems,
  textAnimation,
}: HeroSplitVerticalMarqueeTallProps) => {
  const duplicatedLeft = [...leftItems, ...leftItems, ...leftItems, ...leftItems];
  const duplicatedRight = [...rightItems, ...rightItems, ...rightItems, ...rightItems];

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

        <div className="w-full md:w-1/2 h-100 md:h-[75vh] flex gap-2 xl:gap-3 2xl:gap-4 overflow-hidden">
          <div className="flex-1 overflow-hidden mask-fade-y-medium">
            <div className="flex flex-col gap-2 xl:gap-3 2xl:gap-4 animate-marquee-vertical">
              {duplicatedLeft.map((item, index) => (
                <div key={index} className="shrink-0 aspect-4/5 p-1 xl:p-2 2xl:p-3 card rounded overflow-hidden">
                  <ImageOrVideo imageSrc={item.imageSrc} videoSrc={item.videoSrc} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-hidden mask-fade-y-medium">
            <div className="flex flex-col gap-2 xl:gap-3 2xl:gap-4 animate-marquee-vertical-reverse">
              {duplicatedRight.map((item, index) => (
                <div key={index} className="shrink-0 aspect-4/5 p-1 xl:p-2 2xl:p-3 card rounded overflow-hidden">
                  <ImageOrVideo imageSrc={item.imageSrc} videoSrc={item.videoSrc} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplitVerticalMarqueeTall;
