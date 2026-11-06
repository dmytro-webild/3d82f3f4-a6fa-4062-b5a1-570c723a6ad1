import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import AvatarGroup from "@/components/ui/AvatarGroup";

type HeroCenteredLogosProps = {
  avatarsSrc: string[];
  avatarText: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  names: string[];
  hideMedia?: boolean;
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const HeroCenteredLogos = ({
  avatarsSrc,
  avatarText,
  title,
  description,
  primaryButton,
  secondaryButton,
  names,
  imageSrc,
  videoSrc,
  hideMedia = false,
  textAnimation,
}: HeroCenteredLogosProps) => {
  return (
    <section aria-label="Hero section" className="relative h-svh flex flex-col mb-20">
      <HeroBackgroundSlot />
      {!hideMedia && (
        <div className="absolute inset-0 z-0">
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="size-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
      )}

      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 pt-8 w-content-width mx-auto text-center">
          <AvatarGroup avatarsSrc={avatarsSrc} label={avatarText} size="lg" />

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
            <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
          </div>
        </div>
      </div>

      <div className="relative z-10 w-content-width mx-auto pb-8 overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee-horizontal" style={{ animationDuration: "30s" }}>
          {[...names, ...names, ...names, ...names].map((name, index) => (
            <div key={index} className="shrink-0 mx-3 px-4 py-2 card rounded">
              <span className="text-xl font-semibold whitespace-nowrap text-foreground/75">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCenteredLogos;
