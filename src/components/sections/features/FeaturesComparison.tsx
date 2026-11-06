import { Check, X } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface FeaturesComparisonProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  negativeItems: string[];
  positiveItems: string[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesComparison = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  negativeItems,
  positiveItems,
  textAnimation,
}: FeaturesComparisonProps) => {
  return (
    <section aria-label="Features comparison section" className="py-20">
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

        <ScrollReveal variant="slide-up" className="grid grid-cols-1 md:grid-cols-2 w-content-width md:w-6/10 mx-auto gap-5">
          <div className="flex flex-col gap-4 xl:gap-5 2xl:gap-6 p-6 xl:p-7 2xl:p-8 card rounded opacity-50">
            {negativeItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="flex items-center justify-center shrink-0 size-6 secondary-button rounded">
                  <X className="size-3 text-foreground" strokeWidth={2} />
                </div>
                <span className="text-base">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 xl:gap-5 2xl:gap-6 p-6 xl:p-7 2xl:p-8 card rounded">
            {positiveItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="flex items-center justify-center shrink-0 size-6 primary-button rounded">
                  <Check className="size-3 text-primary-cta-text" strokeWidth={2} />
                </div>
                <span className="text-base">{item}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesComparison;
