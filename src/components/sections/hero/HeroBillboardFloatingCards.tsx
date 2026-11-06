import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { Check } from "lucide-react";
import { cls } from "@/lib/utils";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import AvatarGroup from "@/components/ui/AvatarGroup";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";

type FloatingCardPosition = "top-left" | "top-right" | "middle-left" | "middle-right";

type HeroBillboardFloatingCardsProps = {
  avatarsSrc: string[];
  avatarsLabel: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  note?: string;
  floatingCardsSrc: [string, string, string, string];
  logosSrc?: string[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const POSITIONS: FloatingCardPosition[] = ["top-left", "top-right", "middle-left", "middle-right"];

const FLOATING_CARD_CONFIG: Record<FloatingCardPosition, {
  position: string;
  rotation: string;
  size: string;
  animation: { duration: number; delay: number; yOffset: number; entryDelay: number };
}> = {
  "top-left": {
    position: "top-8 left-0",
    rotation: "-rotate-8",
    size: "size-20 xl:size-22 2xl:size-24",
    animation: { duration: 4, delay: 0, yOffset: -8, entryDelay: 0.3 },
  },
  "top-right": {
    position: "top-4 right-4",
    rotation: "rotate-10",
    size: "size-18 xl:size-20 2xl:size-22",
    animation: { duration: 5, delay: 1, yOffset: -10, entryDelay: 0.5 },
  },
  "middle-left": {
    position: "top-1/2 left-2",
    rotation: "rotate-6",
    size: "size-18 xl:size-20 2xl:size-22",
    animation: { duration: 4.5, delay: 0.5, yOffset: -9, entryDelay: 0.7 },
  },
  "middle-right": {
    position: "top-1/2 right-0",
    rotation: "-rotate-6",
    size: "size-20 xl:size-22 2xl:size-24",
    animation: { duration: 3.8, delay: 1.5, yOffset: -8, entryDelay: 0.9 },
  },
};

const HeroBillboardFloatingCards = ({
  avatarsSrc,
  avatarsLabel,
  title,
  description,
  primaryButton,
  secondaryButton,
  note,
  floatingCardsSrc,
  logosSrc,
  imageSrc,
  videoSrc,
  textAnimation,
}: HeroBillboardFloatingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section aria-label="Hero section" className="relative">
      <HeroBackgroundSlot />
      <div ref={containerRef} className="pt-25 pb-20 md:pt-30 perspective-distant">
        <div className="relative w-content-width mx-auto">
          {POSITIONS.map((position, index) => {
            const config = FLOATING_CARD_CONFIG[position];
            const src = floatingCardsSrc[index];
            if (!src) return null;
            return (
              <motion.div
                key={index}
                className={cls("absolute z-10 hidden md:block", config.position)}
                animate={{ y: [0, config.animation.yOffset, 0] }}
                transition={{ duration: config.animation.duration, repeat: Infinity, ease: "easeInOut", delay: config.animation.delay }}
              >
                <motion.div
                  className={cls("p-2 card rounded-2xl overflow-hidden", config.size, config.rotation)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: config.animation.entryDelay }}
                >
                  <img src={src} alt="" className="w-full h-full object-contain rounded-xl" />
                </motion.div>
              </motion.div>
            );
          })}

          <div className="flex flex-col items-center gap-3 md:max-w-8/10 mx-auto text-center">
            <div className="p-0.5 pr-3 mb-1 card rounded-full">
              <AvatarGroup avatarsSrc={avatarsSrc} label={avatarsLabel} />
            </div>

            <TextAnimation
              text={title}
              variant={textAnimation}
              gradientText={true}
              tag="h1"
              className="text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-center text-balance"
            />

            <TextAnimation
              text={description}
              variant={textAnimation}
              gradientText={false}
              tag="p"
              className="text-lg md:text-xl leading-snug text-balance"
            />

            <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
              <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />
              <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
            </div>

            {note && (
              <motion.div
                className="flex justify-center mt-2 md:mt-3 text-sm text-foreground/70"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="flex items-center gap-2">
                  <div className="flex items-center justify-center size-4 primary-button rounded-full">
                    <Check className="size-1/2 text-primary-cta-text" />
                  </div>
                  {note}
                </span>
              </motion.div>
            )}
          </div>
        </div>

        <div className="w-content-width mx-auto mt-8 p-2 card rounded overflow-hidden rotate-x-20 md:hidden">
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="aspect-4/5" />
        </div>

        <motion.div
          style={{ rotateX: rotate, scale }}
          className="w-content-width mx-auto mt-5 2xl:mt-2 p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden hidden md:block"
        >
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="aspect-video" />
        </motion.div>

        {logosSrc && logosSrc.length > 0 && (
          <ScrollReveal variant="fade-blur" className="w-content-width mx-auto mt-2 xl:mt-4 2xl:mt-6 overflow-hidden mask-fade-x">
            <div className="flex w-max animate-marquee-horizontal" style={{ animationDuration: "45s" }}>
              {[...logosSrc, ...logosSrc, ...logosSrc, ...logosSrc, ...logosSrc, ...logosSrc, ...logosSrc, ...logosSrc].map((logo, index) => (
                <div key={index} className="shrink-0 mx-1 xl:mx-2 2xl:mx-3 p-3 rounded card">
                  <img src={logo} alt="" className="h-8 w-auto object-contain rounded" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default HeroBillboardFloatingCards;
