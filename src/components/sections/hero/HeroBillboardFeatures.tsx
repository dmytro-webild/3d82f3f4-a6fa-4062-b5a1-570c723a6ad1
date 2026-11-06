import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ActiveBadge from "@/components/ui/ActiveBadge";
import { resolveIcon } from "@/utils/resolve-icon";

type FeatureItem = {
  icon: string | LucideIcon;
  title: string;
  description: string;
};

type HeroBillboardFeaturesProps = {
  badge: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  features: FeatureItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const INTERVAL = 5000;

const HeroBillboardFeatures = ({
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  videoSrc,
  features,
  textAnimation,
}: HeroBillboardFeaturesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (features.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, [features.length]);

  const feature = features[currentIndex];
  const FeatureIcon = resolveIcon(feature.icon);

  return (
    <section aria-label="Hero section" className="relative pt-25 pb-20 md:pt-30">
      <HeroBackgroundSlot />
      <div className="flex flex-col gap-12 w-content-width mx-auto">
        <div className="flex flex-col items-center gap-3 text-center">
          <ActiveBadge text={badge} className="mb-1" />

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
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
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
              className="absolute top-4 right-4 xl:top-6 xl:right-6 2xl:top-8 2xl:right-8 max-w-xs p-2 xl:p-3 2xl:p-4 card rounded flex flex-col gap-2"
            >
              <FeatureIcon className="size-5 text-accent mb-0.5" strokeWidth={1.5} />
              <p className="text-base font-medium leading-snug">{feature.title}</p>
              <p className="text-sm text-foreground/75 leading-snug">{feature.description}</p>
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroBillboardFeatures;
