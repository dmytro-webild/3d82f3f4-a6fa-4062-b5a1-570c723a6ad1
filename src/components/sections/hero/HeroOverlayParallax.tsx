import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Button from "@/components/ui/Button";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import AvatarGroup from "@/components/ui/AvatarGroup";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";

type HeroOverlayParallaxProps = {
  avatarsSrc: string[];
  avatarsLabel: string;
  title: string;
  titleHighlight?: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const HeroOverlayParallax = ({
  imageSrc,
  videoSrc,
  avatarsSrc,
  avatarsLabel,
  title,
  titleHighlight,
  primaryButton,
  secondaryButton,
}: HeroOverlayParallaxProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0px", "150px"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={heroRef}
      aria-label="Hero section"
      className="relative h-screen w-full overflow-hidden flex flex-col"
    >
      <HeroBackgroundSlot />
      <motion.div
        className="absolute inset-0"
        style={{ y: imgY, scale: imgScale }}
      >
        <ImageOrVideo
          imageSrc={imageSrc}
          videoSrc={videoSrc}
          className="absolute inset-0 rounded-none"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex-1 flex items-center justify-center pb-8">
        <div className="flex flex-col items-center gap-6 w-content-width mx-auto text-center text-white">
          <motion.div
            className="p-2 pr-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20"
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <AvatarGroup avatarsSrc={avatarsSrc} size="sm" label={avatarsLabel} labelClassName="text-white/80" />
          </motion.div>

          <motion.h1
            className="text-9xl font-normal text-balance leading-none tracking-tight"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.25 }}
          >
            {(() => {
              const titleWords = title.split(" ");
              const highlightWords = titleHighlight ? titleHighlight.split(" ") : [];
              const allWords = [...titleWords, ...highlightWords];

              return allWords.map((word, i) => {
                const isHighlight = i >= titleWords.length;
                return (
                  <span key={i}>
                    {i > 0 && " "}
                    <motion.span
                      className={isHighlight ? "inline-block font-serif italic" : "inline-block"}
                      variants={{
                        hidden: { opacity: 0, y: "100%", filter: "blur(10px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                      }}
                      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              });
            })()}
          </motion.h1>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Button text={primaryButton.text} href={primaryButton.href} variant="primary" animate={false} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 1, delay: 1.05, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animate={false} />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2">
        <div className="h-2 w-14 rounded-full bg-white/30" />
      </div>
    </section>
  );
};

export default HeroOverlayParallax;
