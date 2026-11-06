import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cls } from "@/lib/utils";
import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import AutoFillText from "@/components/ui/AutoFillText";
import ScrollReveal from "@/components/ui/ScrollReveal";

type FloatingCard = {
  name: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const CARD_CONFIG = [
  { position: "left", bottom: "30%", aspect: "aspect-3/4", movement: "-100%" },
  { position: "right", bottom: "14%", aspect: "aspect-square", movement: "-75%" },
] as const;

type HeroBillboardBrandFloatingCardsProps = {
  brand: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  floatingCards: [FloatingCard, FloatingCard];
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const HeroBillboardBrandFloatingCards = ({
  brand,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  videoSrc,
  floatingCards,
  textAnimation,
}: HeroBillboardBrandFloatingCardsProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const leftCardY = useTransform(scrollYProgress, [0, 1], ["0%", CARD_CONFIG[0].movement]);
  const rightCardY = useTransform(scrollYProgress, [0, 1], ["0%", CARD_CONFIG[1].movement]);
  const cardYTransforms = [leftCardY, rightCardY];

  return (
    <section ref={heroRef} aria-label="Hero section" className="relative pt-25 pb-20 md:pt-30">
      <HeroBackgroundSlot />

      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          style={{ y: cardYTransforms[i], bottom: CARD_CONFIG[i].bottom }}
          className={cls(
            "absolute z-10 w-28 xl:w-48 2xl:w-52 p-1 xl:p-2 2xl:p-3 card rounded overflow-hidden shadow-xl",
            CARD_CONFIG[i].position === "left"
              ? "left-[calc((100vw-var(--width-content-width))/2)] translate-x-1/4 lg:-translate-x-1/2"
              : "right-[calc((100vw-var(--width-content-width))/2)] -translate-x-1/4 lg:translate-x-1/2"
          )}
        >
          <div className="relative">
            <ImageOrVideo
              imageSrc={card.imageSrc}
              videoSrc={card.videoSrc}
              className={cls("w-full object-cover rounded", CARD_CONFIG[i].aspect)}
            />
            <div className="absolute bottom-1 xl:bottom-2 2xl:bottom-3 inset-x-1 xl:inset-x-2 2xl:inset-x-3 card rounded p-1 xl:p-2 2xl:p-3">
              <h3 className="text-2xl md:text-3xl text-center truncate">{card.name}</h3>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="flex flex-col gap-10 md:gap-12 w-content-width mx-auto">
        <div className="flex flex-col items-end gap-5">
          <AutoFillText className="w-full font-semibold" paddingY="">{brand}</AutoFillText>

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="w-full md:w-1/2 text-lg md:text-2xl leading-snug text-balance text-right"
          />

          <div className="flex flex-wrap justify-end gap-3 mt-1 md:mt-2">
            <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
          </div>
        </div>

        <ScrollReveal variant="fade-blur" delay={0.2} className="w-full p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden">
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="aspect-4/5 md:aspect-video" />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroBillboardBrandFloatingCards;
