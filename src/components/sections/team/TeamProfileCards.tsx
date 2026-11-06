import { BadgeCheck } from "lucide-react";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useButtonClick } from "@/hooks/useButtonClick";

type TeamItem = {
  title: string;
  description: string;
  avatarSrc: string;
  buttonText: string;
  buttonHref?: string;
  buttonOnClick?: () => void;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const ProfileCard = ({ item }: { item: TeamItem }) => {
  const handleClick = useButtonClick(item.buttonHref, item.buttonOnClick);

  return (
    <div className="group relative overflow-hidden aspect-5/6 rounded">
      <ImageOrVideo imageSrc={item.imageSrc} videoSrc={item.videoSrc} className="absolute inset-0" />

      <a
        href={item.buttonHref}
        onClick={handleClick}
        className="absolute top-4 right-4 xl:top-6 xl:right-6 2xl:top-8 2xl:right-8 z-20 px-3 py-1 text-sm primary-button text-primary-cta-text rounded cursor-pointer"
      >
        {item.buttonText}
      </a>

      <div className="absolute -inset-x-px -bottom-px h-2/5 backdrop-blur-xl mask-fade-top-overlay" aria-hidden="true" />

      <div className="absolute inset-x-3 bottom-3 2xl:inset-x-4 2xl:bottom-4 z-10">
        <div className="relative flex flex-col gap-1 md:gap-0 md:group-hover:gap-1 p-3 2xl:p-4 transition-all duration-400">
          <div className="absolute inset-0 -z-10 card rounded translate-y-0 opacity-100 md:translate-y-full md:opacity-0 transition-all duration-400 ease-out md:group-hover:translate-y-0 md:group-hover:opacity-100" />

          <div className="flex items-center gap-2">
            <div className="size-8 shrink-0 overflow-hidden rounded secondary-button">
              <img src={item.avatarSrc} alt="" className="h-full w-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold leading-snug truncate text-foreground md:text-white transition-colors duration-400 md:group-hover:text-foreground">
              {item.title}
            </h3>
            <BadgeCheck className="size-5 shrink-0 text-foreground md:text-background transition-colors duration-400 md:group-hover:text-foreground" strokeWidth={2} />
          </div>

          <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] transition-all duration-400 ease-out md:group-hover:grid-rows-[1fr]">
            <p className="overflow-hidden text-base leading-snug text-foreground opacity-100 md:opacity-0 transition-opacity duration-400 md:group-hover:opacity-100">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamProfileCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
  textAnimation,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: TeamItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => (
  <section aria-label="Team section" className="py-20">
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
            {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>}
            {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />}
          </div>
        )}
      </div>

      <ScrollReveal variant="fade">
        <GridOrCarousel>
          {items.map((item) => (
            <ProfileCard key={item.title} item={item} />
          ))}
        </GridOrCarousel>
      </ScrollReveal>
    </div>
  </section>
);

export default TeamProfileCards;
