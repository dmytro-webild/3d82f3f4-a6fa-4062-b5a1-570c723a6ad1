import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

type AboutParallaxHighlightProps = {
  tag: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  badge?: string;
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ frontImageSrc: string; frontVideoSrc?: never } | { frontVideoSrc: string; frontImageSrc?: never }) &
  ({ backImageSrc: string; backVideoSrc?: never } | { backVideoSrc: string; backImageSrc?: never });

const AboutParallaxHighlight = ({ tag, title, titleHighlight, description, primaryButton, secondaryButton, frontImageSrc, frontVideoSrc, backImageSrc, backVideoSrc, badge, textAnimation }: AboutParallaxHighlightProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const fgY = useTransform(scrollYProgress, [0, 1], ["120px", "-120px"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-60px", "60px"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={sectionRef}
      aria-label="About section"
      className="relative py-20"
    >
      <div className="mx-auto w-content-width">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-45/100 flex flex-col gap-3">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
              <p>{tag}</p>
            </div>
            <motion.h2
              className="text-7xl 2xl:text-8xl leading-[1.15] font-normal text-balance"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20%" }}
              transition={{ staggerChildren: 0.04 }}
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
                          hidden: { opacity: 0, y: "50%" },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  );
                });
              })()}
            </motion.h2>
            <TextAnimation
              text={description}
              variant={textAnimation}
              gradientText={false}
              tag="p"
              className="md:max-w-8/10 text-lg md:text-xl leading-snug text-balance"
            />
            {(primaryButton || secondaryButton) && (
              <div className="flex flex-wrap gap-3 mt-2 md:mt-3">
                {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>}
                {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />}
              </div>
            )}
          </div>

          <div className="w-full md:w-55/100 relative h-100 md:h-125 xl:h-150 2xl:h-175">
            <div className="absolute top-0 right-0 w-75/100 h-full overflow-hidden rounded">
              <motion.div className="w-full h-full" style={{ y: bgY, scale: bgScale }}>
                <ImageOrVideo imageSrc={backImageSrc} videoSrc={backVideoSrc} className="rounded" />
              </motion.div>
              {badge && (
                <span className="absolute top-2 right-2 xl:top-3 xl:right-3 2xl:top-4 2xl:right-4 px-3 py-1.5 text-xs text-foreground font-medium card rounded">
                  {badge}
                </span>
              )}
            </div>

            <motion.div
              className="absolute top-15/100 left-0 w-65/100 h-70/100 z-10 overflow-hidden rounded"
              style={{ y: fgY }}
            >
              <ImageOrVideo imageSrc={frontImageSrc} videoSrc={frontVideoSrc} className="rounded" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutParallaxHighlight;
