import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import Transition from "@/components/ui/Transition";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Testimonial = {
  title: string;
  quote: string;
  name: string;
  role: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const TestimonialDetailedCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  testimonials,
  textAnimation,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  testimonials: Testimonial[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section aria-label="Testimonials section" className="py-20">
      <div className="flex flex-col gap-8 md:gap-10 w-content-width mx-auto">
        <div className="flex flex-col items-center gap-2">
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

        <ScrollReveal variant="slide-up" className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-6 p-6 md:p-10 rounded card">
            <Transition key={activeIndex} transitionType="fade" whileInView={false} className="flex flex-col gap-2">
              <h3 className="text-3xl md:text-4xl font-semibold leading-[1.15] text-balance">
                {activeTestimonial.title}
              </h3>

              <p className="text-base md:text-lg leading-snug text-balance">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </p>
            </Transition>

            <div className="h-px w-full md:hidden bg-foreground/50" />

            <div className="flex items-center justify-between gap-5">
              <Transition key={activeIndex} transitionType="fade" whileInView={false} className="flex flex-col min-w-0">
                <span className="text-base text-foreground font-semibold leading-snug truncate">{activeTestimonial.name}</span>
                <span className="text-base text-foreground/75 leading-snug truncate">{activeTestimonial.role}</span>
              </Transition>

              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="flex items-center justify-center size-9 cursor-pointer rounded primary-button"
                >
                  <ArrowLeft className="size-4 text-primary-cta-text" strokeWidth={1.5} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="flex items-center justify-center size-9 cursor-pointer rounded primary-button"
                >
                  <ArrowRight className="size-4 text-primary-cta-text" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          <Transition key={activeIndex} transitionType="fade" whileInView={false} className="relative min-h-80 h-full md:aspect-square rounded overflow-hidden">
            <ImageOrVideo imageSrc={activeTestimonial.imageSrc} videoSrc={activeTestimonial.videoSrc} />
          </Transition>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialDetailedCards;
