import type { LucideIcon } from "lucide-react";

import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import AvatarGroup from "@/components/ui/AvatarGroup";

type HeroOverlayMarqueeProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  avatarsSrc?: string[];
  avatarsLabel?: string;
  items: { text: string; icon: LucideIcon }[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const HeroOverlayMarquee = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  avatarsSrc,
  avatarsLabel,
  items,
  imageSrc,
  videoSrc,
  textAnimation,
}: HeroOverlayMarqueeProps) => {
  return (
    <section
      aria-label="Hero section"
      className="relative overflow-hidden flex flex-col justify-between mb-20 w-full h-svh"
    >
      <HeroBackgroundSlot />
      <ImageOrVideo
        imageSrc={imageSrc}
        videoSrc={videoSrc}
        className="absolute inset-0 object-cover w-full h-full rounded-none"
      />

      <div
        className="absolute z-10 left-0 top-0 w-[150vw] h-[150vw] -translate-x-1/2 -translate-y-1/2 backdrop-blur mask-[radial-gradient(circle,black_20%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto pt-35 w-content-width">
        <div className="flex flex-col gap-3 w-full md:w-6/10 lg:w-1/2 xl:w-45/100 2xl:w-4/10">
          <div className="mb-1 px-3 py-1 w-fit text-sm card rounded">
            <p>{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={true}
            tag="h1"
            className="text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-balance text-white"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="text-lg md:text-xl leading-snug text-balance text-white"
          />

          <div className="flex flex-wrap gap-3 mt-2 md:mt-3">
            <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
          </div>

          {avatarsSrc && avatarsSrc.length > 0 && (
            <div className="mt-3 md:mt-4">
              <AvatarGroup avatarsSrc={avatarsSrc} size="lg" label={avatarsLabel} labelClassName="text-primary-cta-text" />
            </div>
          )}
        </div>
      </div>

      <div className="relative z-10 overflow-hidden mx-auto pb-8 w-content-width mask-fade-x">
        <div className="flex w-max animate-marquee-horizontal" style={{ animationDuration: "30s" }}>
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center shrink-0 gap-1 mx-3 pl-2 pr-4 py-2 card rounded">
              <item.icon className="h-(--text-base) text-foreground" />
              <span className="whitespace-nowrap text-base font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroOverlayMarquee;
