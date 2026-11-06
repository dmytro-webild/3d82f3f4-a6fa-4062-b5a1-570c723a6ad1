import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";

type PricingPlan = {
  tag: string;
  price: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  features: string[];
};

const PricingLayeredCards = ({
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

      <ScrollReveal variant="slide-up">
        <GridOrCarousel>
          {plans.map((plan) => (
            <div key={plan.tag} className="flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 h-full card rounded">
              <div className="flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 secondary-button rounded">
                <div className="px-3 py-1 w-fit text-sm card rounded">
                  <p>{plan.tag}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-5xl md:text-6xl font-semibold">{plan.price}</span>
                  <span className="text-base font-medium">{plan.description}</span>
                </div>

                <div className="flex flex-col gap-3">
                  <Button text={plan.primaryButton.text} href={plan.primaryButton.href} variant="primary" className="w-full" />
                  {plan.secondaryButton && <Button text={plan.secondaryButton.text} href={plan.secondaryButton.href} variant="secondary" className="w-full" />}
                </div>
              </div>

              <div className="flex flex-col gap-3 p-3 xl:p-3.5 2xl:p-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="flex items-center justify-center shrink-0 size-6 primary-button rounded">
                      <Check className="size-3 text-primary-cta-text" strokeWidth={2} />
                    </div>
                    <span className="text-base leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </GridOrCarousel>
      </ScrollReveal>
    </div>
  </section>
);

export default PricingLayeredCards;
