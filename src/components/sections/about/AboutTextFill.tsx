import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

type AboutTextFillProps = {
  tag?: string;
  title: string;
  description?: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const AboutTextFill = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  videoSrc,
  textAnimation,
}: AboutTextFillProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const words = title.split(" ");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "start 0.2"],
  });

  const Word = ({ word, index }: { word: string; index: number }) => {
    const start = index / words.length;
    const end = (index + 1) / words.length;
    const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
    return (
      <motion.span className="inline-block" style={{ opacity }}>
        {word}
      </motion.span>
    );
  };

  return (
    <section
      ref={sectionRef}
      aria-label="About section"
      className="py-20"
    >
      <div className="flex flex-col gap-8 md:gap-10 mx-auto w-content-width">
        <div className="flex flex-col items-center gap-2">
          {tag && (
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
              <p>{tag}</p>
            </div>
          )}

          <h2 className="md:max-w-8/10 text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-center text-balance">
            {words.map((word, i) => (
              <span key={i}>
                {i > 0 && " "}
                <Word word={word} index={i} />
              </span>
            ))}
          </h2>

          {description && (
            <TextAnimation
              text={description}
              variant={textAnimation}
              gradientText={false}
              tag="p"
              className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
            />
          )}

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
              {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>}
              {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />}
            </div>
          )}
        </div>

        <div className="overflow-hidden rounded aspect-square md:aspect-video">
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default AboutTextFill;
