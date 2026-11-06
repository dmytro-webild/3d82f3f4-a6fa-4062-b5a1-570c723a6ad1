import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import AvatarGroup from "@/components/ui/AvatarGroup";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";

type FeatureItem = {
  title: string;
  description: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

type BottomFeatureItem = FeatureItem & {
  primaryButton: { text: string; href: string };
  avatarsSrc?: string[];
  avatarsLabel?: string;
};

interface FeaturesGridSplitProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  topItems: [FeatureItem, FeatureItem];
  bottomItem: BottomFeatureItem;
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesGridSplit = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  topItems,
  bottomItem,
  textAnimation,
}: FeaturesGridSplitProps) => {
  return (
    <section aria-label="Features section" className="flex flex-col gap-8 md:gap-10 py-20">
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
            {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />}
          </div>
        )}
      </div>

      <div className="w-content-width mx-auto flex flex-col gap-3 xl:gap-3.5 2xl:gap-4">
        <ScrollReveal variant="slide-up" className="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-3.5 2xl:gap-4">
          {topItems.map((item) => (
            <div key={item.title} className="flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 card rounded">
              <div className="aspect-square rounded overflow-hidden bg-foreground/5 shadow shadow-foreground/5">
                <ImageOrVideo imageSrc={item.imageSrc} videoSrc={item.videoSrc} />
              </div>
              <div className="flex flex-col gap-1 p-3 xl:p-3.5 2xl:p-4">
                <h3 className="text-3xl font-semibold leading-snug text-balance">{item.title}</h3>
                <p className="text-lg leading-snug text-balance">{item.description}</p>
              </div>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal variant="slide-up">
          <div className="flex flex-col md:flex-row gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 card rounded">
            <div className="flex flex-col gap-1 justify-center md:w-1/2 p-3 xl:p-3.5 2xl:p-4">
              <h3 className="text-3xl font-semibold leading-snug text-balance">{bottomItem.title}</h3>
              <p className="text-lg leading-snug text-balance">{bottomItem.description}</p>
              <div className="flex flex-wrap items-center gap-3 mt-2 md:mt-3">
                <Button text={bottomItem.primaryButton.text} href={bottomItem.primaryButton.href} variant="primary" />
                {bottomItem.avatarsSrc && bottomItem.avatarsSrc.length > 0 && (
                  <AvatarGroup avatarsSrc={bottomItem.avatarsSrc} size="md" label={bottomItem.avatarsLabel} />
                )}
              </div>
            </div>
            <div className="md:w-1/2 rounded overflow-hidden bg-foreground/5 shadow shadow-foreground/5">
              <ImageOrVideo imageSrc={bottomItem.imageSrc} videoSrc={bottomItem.videoSrc} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesGridSplit;
