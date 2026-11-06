import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cls } from "@/lib/utils";

type StepItem = {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesDetailedStepsProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  steps: StepItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesDetailedSteps = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  steps,
  textAnimation,
}: FeaturesDetailedStepsProps) => {
  return (
    <section aria-label="Features detailed steps section" className="py-20">
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

        <div className="flex flex-col w-content-width mx-auto gap-5">
          {steps.map((step, index) => {
            const stepNumber = String(index + 1).padStart(2, "0");
            return (
              <ScrollReveal
                variant="slide-up"
                key={step.title}
                className="flex flex-col md:flex-row justify-between 2xl:w-8/10 mx-auto gap-6 p-6 md:p-10 card rounded overflow-hidden"
              >
                <div className="flex flex-col justify-between w-full md:w-1/2">
                  <div className="flex flex-col gap-2">
                    <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                      <p>{step.tag}</p>
                    </div>
                    <h3 className="text-7xl md:text-8xl font-semibold leading-[1.15] text-balance">{step.title}</h3>
                  </div>
                  <div className="block md:hidden w-full h-px my-5 bg-accent/20" />
                  <div className="flex flex-col gap-2">
                    <h4 className="text-2xl md:text-3xl font-semibold leading-snug text-balance">{step.subtitle}</h4>
                    <p className="text-base md:text-lg leading-snug text-balance">{step.description}</p>
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-35/100 gap-10">
                  <span className="hidden md:block self-end text-7xl md:text-8xl font-semibold text-accent">{stepNumber}</span>
                  <div className={cls("aspect-square rounded overflow-hidden", index % 2 === 0 ? "rotate-3" : "-rotate-3")}>
                    <ImageOrVideo imageSrc={step.imageSrc} videoSrc={step.videoSrc} />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesDetailedSteps;
