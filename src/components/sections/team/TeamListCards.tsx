import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";

type TeamMember = {
  name: string;
  role: string;
  detail: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

type TeamGroup = {
  title: string;
  members: TeamMember[];
};

const TeamListCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  groups,
  textAnimation,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  groups: TeamGroup[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => (
  <section aria-label="Team section" className="py-20">
    <div className="flex flex-col gap-8 md:gap-10 w-content-width mx-auto">
      <div className="flex flex-col items-center gap-2">
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

      <ScrollReveal variant="slide-up" className="flex flex-col gap-8">
        {groups.map((group) => (
          <div key={group.title} className="p-6 md:p-10 card rounded">
            <h3 className="mb-4 xl:mb-5 2xl:mb-6 text-2xl md:text-3xl font-semibold">{group.title}</h3>

            <div className="flex flex-col divide-y divide-accent border-t border-accent">
              {group.members.map((member) => (
                <div key={member.name} className="flex items-center gap-4 xl:gap-5 2xl:gap-6 py-5 last:pb-0">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <ImageOrVideo
                      imageSrc={member.imageSrc}
                      videoSrc={member.videoSrc}
                      className="size-12 md:size-14 2xl:size-16 shrink-0 rounded-full object-cover"
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="text-base text-foreground font-medium leading-snug truncate">{member.name}</span>
                      <span className="text-base text-foreground/75 leading-snug truncate">{member.role}</span>
                    </div>
                  </div>
                  <span className="text-base md:text-lg font-medium shrink-0">{member.detail}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </ScrollReveal>
    </div>
  </section>
);

export default TeamListCards;
