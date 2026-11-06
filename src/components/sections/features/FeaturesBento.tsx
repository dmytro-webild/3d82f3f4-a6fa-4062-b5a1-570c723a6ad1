import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InfoCardMarquee from "@/components/ui/InfoCardMarquee";
import TiltedStackCards from "@/components/ui/TiltedStackCards";
import AnimatedBarChart from "@/components/ui/AnimatedBarChart";
import OrbitingIcons from "@/components/ui/OrbitingIcons";
import IconTextMarquee from "@/components/ui/IconTextMarquee";
import ChatMarquee from "@/components/ui/ChatMarquee";
import ChecklistTimeline from "@/components/ui/ChecklistTimeline";
import MediaStack from "@/components/ui/MediaStack";
import type { LucideIcon } from "lucide-react";

type IconInput = string | LucideIcon;

type FeatureCard = { title: string; description: string } & (
  | { bentoComponent: "info-card-marquee"; infoCards: { icon: IconInput; label: string; value: string }[] }
  | { bentoComponent: "tilted-stack-cards"; stackCards: [{ icon: IconInput; title: string; subtitle: string; detail: string }, { icon: IconInput; title: string; subtitle: string; detail: string }, { icon: IconInput; title: string; subtitle: string; detail: string }] }
  | { bentoComponent: "animated-bar-chart" }
  | { bentoComponent: "orbiting-icons"; centerIcon: IconInput; orbitIcons: IconInput[] }
  | { bentoComponent: "icon-text-marquee"; centerIcon: IconInput; marqueeTexts: string[] }
  | { bentoComponent: "chat-marquee"; aiIcon: IconInput; userIcon: IconInput; exchanges: { userMessage: string; aiResponse: string }[]; placeholder: string }
  | { bentoComponent: "checklist-timeline"; heading: string; subheading: string; checklistItems: [{ label: string; detail: string }, { label: string; detail: string }, { label: string; detail: string }]; completedLabel: string }
  | { bentoComponent: "media-stack"; mediaItems: [{ imageSrc?: string; videoSrc?: string }, { imageSrc?: string; videoSrc?: string }, { imageSrc?: string; videoSrc?: string }] }
);

const getBentoComponent = (feature: FeatureCard) => {
  switch (feature.bentoComponent) {
    case "info-card-marquee": return <InfoCardMarquee items={feature.infoCards} />;
    case "tilted-stack-cards": return <TiltedStackCards items={feature.stackCards} />;
    case "animated-bar-chart": return <AnimatedBarChart />;
    case "orbiting-icons": return <OrbitingIcons centerIcon={feature.centerIcon} items={feature.orbitIcons} />;
    case "icon-text-marquee": return <IconTextMarquee centerIcon={feature.centerIcon} texts={feature.marqueeTexts} />;
    case "chat-marquee": return <ChatMarquee aiIcon={feature.aiIcon} userIcon={feature.userIcon} exchanges={feature.exchanges} placeholder={feature.placeholder} />;
    case "checklist-timeline": return <ChecklistTimeline heading={feature.heading} subheading={feature.subheading} items={feature.checklistItems} completedLabel={feature.completedLabel} />;
    case "media-stack": return <MediaStack items={feature.mediaItems} />;
  }
};

const FeaturesBento = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  features,
  textAnimation,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  features: FeatureCard[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => (
  <section aria-label="Features bento section" className="py-20">
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
      <ScrollReveal variant="fade-blur">
        <GridOrCarousel>
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 card rounded h-full">
              <div className="relative h-72 overflow-hidden rounded p-3 xl:p-3.5 2xl:p-4 bg-foreground/5 shadow shadow-foreground/5">{getBentoComponent(feature)}</div>
              <div className="flex flex-col gap-1 p-3 xl:p-3.5 2xl:p-4">
                <h3 className="text-2xl font-semibold leading-snug">{feature.title}</h3>
                <p className="text-base leading-snug">{feature.description}</p>
              </div>
            </div>
          ))}
        </GridOrCarousel>
      </ScrollReveal>
    </div>
  </section>
);

export default FeaturesBento;
