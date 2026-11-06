import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cls } from "@/lib/utils";

type MediaItem = { imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never };

interface HeroTiltedCardsProps {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  items: [MediaItem, MediaItem, MediaItem, MediaItem, MediaItem];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const HeroTiltedCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
  textAnimation,
}: HeroTiltedCardsProps) => {
  const marqueeItems = [...items, ...items];
  const galleryStyles = [
    "-rotate-6 z-10 -translate-y-5",
    "rotate-6 z-20 translate-y-5 -ml-15",
    "-rotate-6 z-30 -translate-y-5 -ml-15",
    "rotate-6 z-40 translate-y-5 -ml-15",
    "-rotate-6 z-50 -translate-y-5 -ml-15",
  ];

  return (
    <section aria-label="Hero section" className="relative h-svh md:h-auto pt-25 pb-20 md:pt-30">
      <HeroBackgroundSlot />
      <div className="flex flex-col items-center gap-12 md:gap-15 w-full md:w-content-width mx-auto">
        <div className="flex flex-col items-center gap-3 w-content-width mx-auto text-center">
          <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
            <p>{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={true}
            tag="h1"
            className="md:max-w-8/10 text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-center text-balance"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-lg md:text-xl leading-snug text-balance"
          />

          <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
            <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />
          </div>
        </div>

        <ScrollReveal variant="slide-up" delay={0.2} className="block md:hidden w-full overflow-hidden mask-padding-x">
          <div className="flex w-max animate-marquee-horizontal">
            {marqueeItems.map((item, index) => (
              <div key={index} className="shrink-0 w-[50vw] mr-5 aspect-4/5 p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden">
                <ImageOrVideo imageSrc={item.imageSrc} videoSrc={item.videoSrc} />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slide-up" delay={0.2} className="hidden md:flex justify-center items-center w-full">
          <div className="flex items-center justify-center">
            {items.map((item, index) => (
              <div
                key={index}
                className={cls(
                  "relative w-[23%] aspect-4/5 p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden shadow-lg transition-transform duration-500 ease-out hover:scale-110",
                  galleryStyles[index]
                )}
              >
                <ImageOrVideo imageSrc={item.imageSrc} videoSrc={item.videoSrc} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroTiltedCards;
