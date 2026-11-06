import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

type HeroBillboardScrollProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const HeroBillboardScroll = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  videoSrc,
  textAnimation,
}: HeroBillboardScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section aria-label="Hero section" className="relative">
      <HeroBackgroundSlot />
      <div
        ref={containerRef}
        className="pt-25 pb-20 md:pt-30 perspective-distant"
      >
        <div className="w-content-width mx-auto">
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
        </div>

        <div className="w-content-width mx-auto mt-8 p-2 card rounded overflow-hidden rotate-x-20 md:hidden">
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="aspect-4/5" />
        </div>

        <motion.div
          style={{ rotateX: rotate, scale }}
          className="w-content-width mx-auto mt-12 2xl:mt-8 p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden hidden md:block"
        >
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="aspect-video" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBillboardScroll;
