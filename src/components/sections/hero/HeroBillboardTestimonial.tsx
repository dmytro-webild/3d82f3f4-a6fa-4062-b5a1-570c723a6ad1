import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cls } from "@/lib/utils";
import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Testimonial = {
  name: string;
  handle: string;
  text: string;
  rating: number;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

type HeroBillboardTestimonialProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  testimonials: Testimonial[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const INTERVAL = 5000;

const HeroBillboardTestimonial = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  videoSrc,
  testimonials,
  textAnimation,
}: HeroBillboardTestimonialProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  const testimonial = testimonials[currentIndex];

  return (
    <section aria-label="Hero section" className="relative pt-25 pb-20 md:pt-30">
      <HeroBackgroundSlot />
      <div className="flex flex-col gap-12 w-content-width mx-auto">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
            <p>{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={true}
            tag="h1"
            className="md:max-w-8/10 text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-center text-balance"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-lg md:text-xl leading-snug text-balance"
          />

          <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
            <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />
          </div>
        </div>

        <ScrollReveal variant="fade" delay={0.2} className="relative w-full p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden">
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="aspect-3/4 md:aspect-video" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4 xl:left-6 xl:bottom-6 xl:right-auto 2xl:left-8 2xl:bottom-8 max-w-sm p-4 xl:p-5 2xl:p-6 card rounded flex flex-col gap-3 xl:gap-4 2xl:gap-5"
            >
              <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={cls("size-5 text-accent", index < testimonial.rating ? "fill-accent" : "fill-transparent")}
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <p className="text-lg leading-snug text-balance">{testimonial.text}</p>

              <div className="flex items-center gap-3">
                <ImageOrVideo
                  imageSrc={testimonial.imageSrc}
                  videoSrc={testimonial.videoSrc}
                  className="size-10 md:size-11 2xl:size-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-base text-foreground leading-snug font-medium">{testimonial.name}</span>
                  <span className="text-base text-foreground/75 leading-snug">{testimonial.handle}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroBillboardTestimonial;
