import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import Button from "@/components/ui/Button";

const ContactCta = ({
  tag,
  text,
  primaryButton,
  secondaryButton,
  textAnimation,
}: {
  tag: string;
  text: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => {
  return (
    <section aria-label="Contact section" className="py-20">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="fade-blur">
          <div className="flex flex-col items-center gap-8 md:gap-10 py-20 px-8 rounded card">
            <div className="flex flex-col items-center gap-2">
              <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                <p>{tag}</p>
              </div>

              <TextAnimation
                text={text}
                variant={textAnimation}
                gradientText={true}
                tag="h2"
                className="md:max-w-8/10 text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance"
              />

              <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
                <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />
                <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactCta;
