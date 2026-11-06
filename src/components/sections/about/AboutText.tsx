import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";

interface AboutTextProps {
  title: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const AboutText = ({
  title,
  primaryButton,
  secondaryButton,
  textAnimation,
}: AboutTextProps) => {
  return (
    <section aria-label="About section" className="py-20">
      <div className="w-content-width mx-auto flex flex-col gap-2 items-center">
        <TextAnimation
          text={title}
          variant={textAnimation}
          gradientText={false}
          tag="h2"
          className="text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
        />

        {(primaryButton || secondaryButton) && (
          <div className="flex flex-wrap gap-3 justify-center mt-2 md:mt-3">
            {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />}
            {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutText;
