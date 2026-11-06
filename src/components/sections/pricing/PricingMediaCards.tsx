import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";

type PricingPlan = {
  tag: string;
  price: string;
  period: string;
  features: string[];
  primaryButton: { text: string; href: string };
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const PricingMediaCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  plans,
  textAnimation,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  plans: PricingPlan[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => (
  <section aria-label="Pricing section" className="py-20">
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

      <div className="flex flex-col gap-5 w-content-width mx-auto">
        {plans.map((plan) => (
          <ScrollReveal
            variant="slide-up"
            key={plan.tag}
            className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-10 card rounded"
          >
            <div className="w-full md:w-1/2 aspect-square md:aspect-4/3 rounded overflow-hidden">
              <ImageOrVideo imageSrc={plan.imageSrc} videoSrc={plan.videoSrc} />
            </div>

            <div className="flex flex-col justify-center gap-2 w-full md:w-1/2">
              <div className="px-3 py-1 mb-1 w-fit text-sm card rounded">
                <p>{plan.price}{plan.period}</p>
              </div>
              <h3 className="text-4xl md:text-5xl font-semibold leading-[1.15] text-balance">{plan.tag}</h3>

              <div className="flex flex-col gap-3 mt-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="flex items-center justify-center shrink-0 size-6 primary-button rounded">
                      <Check className="size-3 text-primary-cta-text" strokeWidth={2} />
                    </div>
                    <span className="text-base leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <Button text={plan.primaryButton.text} href={plan.primaryButton.href} variant="primary" className="w-fit mt-2 md:mt-3" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PricingMediaCards;
