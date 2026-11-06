import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AvatarGroup from "@/components/ui/AvatarGroup";

type HeroBillboardProps = {
  tag?: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  avatarsSrc?: string[];
  avatarsLabel?: string;
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const HeroBillboard = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  avatarsSrc,
  avatarsLabel,
  imageSrc,
  videoSrc,
  textAnimation,
}: HeroBillboardProps) => {
  return (
    <section aria-label="Hero section" className="relative pt-25 pb-20 md:pt-30">
      <HeroBackgroundSlot />
      <div className="flex flex-col gap-12 md:gap-15 w-content-width mx-auto">
        <div className="flex flex-col items-center gap-3 text-center">
          {avatarsSrc && avatarsSrc.length > 0 ? (
            <AvatarGroup avatarsSrc={avatarsSrc} label={avatarsLabel} className="mb-1" />
          ) : tag ? (
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
              <p>{tag}</p>
            </div>
          ) : null}

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
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
          </div>
        </div>

        <ScrollReveal variant="fade-blur" delay={0.2} className="w-full p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden">
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="aspect-4/5 md:aspect-video" />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroBillboard;
