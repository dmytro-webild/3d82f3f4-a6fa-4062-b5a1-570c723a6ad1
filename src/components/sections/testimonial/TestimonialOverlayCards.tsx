import { Star } from "lucide-react";
import { cls } from "@/lib/utils";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  rating: number;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const TestimonialOverlayCards = ({
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
}) => (
  <section aria-label="Testimonials section" className="py-20">
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

      <ScrollReveal variant="fade">
        <GridOrCarousel >
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="relative aspect-3/4 rounded overflow-hidden">
              <ImageOrVideo imageSrc={testimonial.imageSrc} videoSrc={testimonial.videoSrc} />

              <div className="absolute inset-x-4 bottom-4 xl:inset-x-5 xl:bottom-5 2xl:inset-x-6 2xl:bottom-6 flex flex-col gap-1 xl:gap-2 2xl:gap-3 p-4 xl:p-5 2xl:p-6 card rounded backdrop-blur-sm">
                <div className="flex gap-1.5 mb-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={cls(
                        "size-5 text-accent",
                        index < testimonial.rating ? "fill-accent" : "fill-transparent"
                      )}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <span className="text-2xl font-semibold leading-snug truncate">{testimonial.name}</span>

                <div className="flex flex-col">
                  <span className="text-base leading-snug truncate">{testimonial.role}</span>
                  <span className="text-base leading-snug truncate">{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </GridOrCarousel>
      </ScrollReveal>
    </div>
  </section>
);

export default TestimonialOverlayCards;
