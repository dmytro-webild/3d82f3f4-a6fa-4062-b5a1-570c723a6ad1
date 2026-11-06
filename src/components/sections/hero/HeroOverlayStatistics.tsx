import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import AvatarGroup from "@/components/ui/AvatarGroup";

type HeroOverlayStatisticsProps = {
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  avatarsSrc?: string[];
  avatarsLabel?: string;
  statistics?: { title: string; subtitle: string }[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const HeroOverlayStatistics = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  videoSrc,
  avatarsSrc,
  avatarsLabel,
  statistics,
  textAnimation,
}: HeroOverlayStatisticsProps) => {
  return (
    <section
      aria-label="Hero section"
      className="relative w-full h-svh overflow-hidden flex flex-col justify-start mb-20"
    >
      <HeroBackgroundSlot />
      <ImageOrVideo
        imageSrc={imageSrc}
        videoSrc={videoSrc}
        className="absolute inset-0 w-full h-full object-cover rounded-none"
      />

      <div
        className="absolute z-10 w-[150vw] h-[150vw] left-0 top-0 -translate-x-1/2 -translate-y-1/2 backdrop-blur mask-[radial-gradient(circle,black_20%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-content-width mx-auto pt-35">
        <div className="flex flex-col gap-3 w-full md:w-6/10 lg:w-1/2 xl:w-45/100 2xl:w-4/10">
          {avatarsSrc && avatarsSrc.length > 0 && (
            <div className="w-fit mb-1 p-2 pr-4 backdrop-blur-xl bg-background/8 border border-background/15 rounded-full">
              <AvatarGroup avatarsSrc={avatarsSrc} size="sm" label={avatarsLabel} labelClassName="text-background" />
            </div>
          )}

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={true}
            tag="h1"
            className="text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-white text-balance"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="text-lg md:text-xl text-white leading-snug text-balance"
          />

          <div className="flex flex-wrap gap-3 mt-2 md:mt-3">
            <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />
          </div>
        </div>
      </div>

      {statistics && statistics.length > 0 && (
        <div className="absolute z-10 left-4 right-4 bottom-4 md:left-auto md:right-5 md:bottom-5 2xl:right-6 2xl:bottom-6 p-4 xl:p-5 2xl:p-6 backdrop-blur-xl bg-background/8 border border-background/15 rounded flex gap-3 xl:gap-4 2xl:gap-5">
          {statistics.map((stat, index) => (
            <div key={stat.title} className="flex items-center gap-5">
              {index > 0 && <div className="w-px self-stretch bg-background/15" />}
              <div className="flex flex-col">
                <h3 className="text-lg font-medium leading-snug text-background">{stat.title}</h3>
                <p className="text-base leading-snug text-background/60">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroOverlayStatistics;
