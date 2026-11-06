import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";

const SocialProofMarquee = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  names,
  textAnimation,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  names: string[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => {
  return (
    <section aria-label="Social proof section" className="py-20">
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

        <ScrollReveal variant="fade-blur" className="w-content-width mx-auto overflow-hidden mask-fade-x">
          <div className="flex w-max animate-marquee-horizontal" style={{ animationDuration: "45s" }}>
            {[...names, ...names, ...names, ...names].map((name, index) => (
              <div key={index} className="shrink-0 mx-3 px-5 py-3 rounded card">
                <span className="text-2xl font-semibold whitespace-nowrap opacity-75">{name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SocialProofMarquee;
