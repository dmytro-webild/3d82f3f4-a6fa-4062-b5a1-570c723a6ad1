import type { LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { resolveIcon } from "@/utils/resolve-icon";

type SocialLink = {
  icon: string | LucideIcon;
  url: string;
};

type TeamMember = {
  name: string;
  role: string;
  description: string;
  socialLinks: SocialLink[];
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const TeamDetailedCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  members,
  textAnimation,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  members: TeamMember[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => (
  <section aria-label="Team section" className="py-20">
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col items-center gap-2 w-content-width mx-auto">
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

      <ScrollReveal variant="slide-up">
        <GridOrCarousel >
          {members.map((member) => (
            <div key={member.name} className="relative aspect-4/5 rounded overflow-hidden">
              <ImageOrVideo imageSrc={member.imageSrc} videoSrc={member.videoSrc} />

              <div className="absolute inset-x-4 bottom-4 xl:inset-x-5 xl:bottom-5 2xl:inset-x-6 2xl:bottom-6 flex flex-col gap-1 xl:gap-2 2xl:gap-3 p-4 xl:p-5 2xl:p-6 card backdrop-blur-sm rounded">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-2xl font-semibold leading-snug truncate">{member.name}</span>
                  <div className="px-3 py-1 text-sm secondary-button text-secondary-cta-text rounded">
                    <p className="truncate">{member.role}</p>
                  </div>
                </div>

                <p className="text-base leading-snug">{member.description}</p>

                <div className="flex gap-3 mt-1 md:mt-2">
                  {member.socialLinks.map((link, index) => {
                    const IconComponent = resolveIcon(link.icon);
                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center size-9 primary-button rounded"
                      >
                        <IconComponent className="h-2/5 w-2/5 text-primary-cta-text" strokeWidth={1.5} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </GridOrCarousel>
      </ScrollReveal>
    </div>
  </section>
);

export default TeamDetailedCards;
