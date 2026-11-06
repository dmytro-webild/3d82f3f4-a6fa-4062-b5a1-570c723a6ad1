import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

type HeroBillboardCarouselProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  items: ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never })[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
};

const HeroBillboardCarousel = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
  textAnimation,
}: HeroBillboardCarouselProps) => {
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <section
      aria-label="Hero section"
      className="relative flex flex-col items-center justify-center gap-8 md:gap-10 w-full min-h-svh pt-25 pb-20 md:pt-30"
    >
      <HeroBackgroundSlot />
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

      <div className="w-content-width mx-auto overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee-horizontal" style={{ animationDuration: "60s" }}>
          {duplicated.map((item, i) => (
            <div key={i} className="shrink-0 w-60 md:w-75 2xl:w-80 aspect-4/5 mr-3 md:mr-5 p-2 xl:p-3 2xl:p-4 card rounded-lg overflow-hidden">
              <ImageOrVideo
                imageSrc={item.imageSrc}
                videoSrc={item.videoSrc}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBillboardCarousel;
