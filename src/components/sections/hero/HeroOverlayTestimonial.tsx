import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cls } from "@/lib/utils";
import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

type Testimonial = {
  name: string;
  handle: string;
  text: string;
  rating: number;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

type HeroOverlayTestimonialProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  testimonials: Testimonial[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const INTERVAL = 5000;

const HeroOverlayTestimonial = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  videoSrc,
  testimonials,
  textAnimation,
}: HeroOverlayTestimonialProps) => {
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
    <section
      aria-label="Hero section"
      className="relative w-full h-svh overflow-hidden flex flex-col justify-start mb-20"
    >
      <HeroBackgroundSlot />
      <ImageOrVideo
        imageSrc={imageSrc}
        videoSrc={videoSrc}
        className="absolute inset-0 w-full h-full object-cover rounded-none"
      />

      <div
        className="absolute z-10 w-[150vw] h-[150vw] left-0 top-0 -translate-x-1/2 -translate-y-1/2 backdrop-blur mask-[radial-gradient(circle,black_20%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-content-width mx-auto pt-35">
        <div className="flex flex-col gap-3 w-full md:w-6/10 lg:w-1/2 xl:w-45/100 2xl:w-4/10">
          <div className="w-fit px-3 py-1 mb-1 text-sm card rounded">
            <p>{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={true}
            tag="h1"
            className="text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-white text-balance"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="text-lg md:text-xl text-white leading-snug text-balance"
          />

          <div className="flex flex-wrap gap-3 mt-2 md:mt-3">
            <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute z-10 left-4 right-4 bottom-4 md:left-auto md:right-5 md:bottom-5 2xl:right-6 2xl:bottom-6 md:max-w-25/100 2xl:max-w-2/10 p-4 xl:p-5 2xl:p-6 card rounded flex flex-col gap-3 xl:gap-4 2xl:gap-5"
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
    </section>
  );
};

export default HeroOverlayTestimonial;
