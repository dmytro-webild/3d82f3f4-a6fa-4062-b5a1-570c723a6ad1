import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";

interface AboutTextSplitProps {
  title: string;
  descriptions: string[];
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const AboutTextSplit = ({
  title,
  descriptions,
  primaryButton,
  secondaryButton,
  textAnimation,
}: AboutTextSplitProps) => {
  return (
    <section aria-label="About section" className="py-20">
      <div className="flex flex-col gap-20 mx-auto w-content-width">
        <div className="flex flex-col md:flex-row gap-3 md:gap-15">
          <div className="w-full md:w-1/2">
            <TextAnimation
              text={title}
              variant={textAnimation}
              gradientText={true}
              tag="h2"
              className="text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-balance"
            />
          </div>

          <div className="flex flex-col gap-2 w-full md:w-1/2">
            {descriptions.map((desc, index) => (
              <TextAnimation
                key={index}
                text={desc}
                variant={textAnimation}
                gradientText={false}
                tag="p"
                className="text-xl md:text-2xl leading-snug text-balance"
              />
            ))}

            {(primaryButton || secondaryButton) && (
              <div className="flex flex-wrap gap-3 mt-2 md:mt-3">
                {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>}
                {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />}
              </div>
            )}
          </div>
        </div>

        <div className="w-full border-b border-foreground/5" />
      </div>
    </section>
  );
};

export default AboutTextSplit;
