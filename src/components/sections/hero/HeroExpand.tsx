import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import AutoFillText from "@/components/ui/AutoFillText";
import { useButtonClick } from "@/hooks/useButtonClick";

const StaggerText = ({ text }: { text: string }) => (
  <span className="truncate overflow-hidden">
    {[...text].map((char, index) => (
      <span
        key={index}
        className="inline-block transition-transform duration-400 ease-out md:group-hover:-translate-y-[1.25em]"
        style={{ textShadow: "0 1.25em currentColor", transitionDelay: `${index * 0.01}s`, whiteSpace: char === " " ? "pre" : undefined }}
      >
        {char}
      </span>
    ))}
  </span>
);

type HeroExpandProps = {
  title: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  onComplete?: () => void;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const HeroExpand = ({
  title,
  videoSrc,
  imageSrc,
  primaryButton,
  secondaryButton,
  onComplete,
}: HeroExpandProps) => {
  const [showLoader, setShowLoader] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const handlePrimaryClick = useButtonClick(primaryButton.href);
  const handleSecondaryClick = useButtonClick(secondaryButton.href);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0px", "150px"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const expandTimer = setTimeout(() => setExpanded(true), 600);
    const hideTimer = setTimeout(() => {
      setShowLoader(false);
      onComplete?.();
    }, 1500);
    return () => {
      clearTimeout(expandTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-100 bg-background"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, clipPath: "inset(25% 20% 25% 20% round 24px)" }}
              animate={
                expanded
                  ? { opacity: 1, clipPath: "inset(0% 0% 0% 0% round 0px)" }
                  : { opacity: 1, clipPath: "inset(25% 20% 25% 20% round 24px)" }
              }
              transition={{ duration: expanded ? 1.4 : 1.2, ease: [0.76, 0, 0.24, 1] }}
            >
              <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="rounded-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section ref={sectionRef} aria-label="Hero section" className="relative w-full h-svh overflow-hidden mb-20">
        <motion.div className="absolute inset-0" style={{ y: videoY, scale: videoScale }}>
          <ImageOrVideo
            imageSrc={imageSrc}
            videoSrc={videoSrc}
            className="absolute inset-0 w-full h-full object-cover rounded-none"
          />
        </motion.div>

        <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-background/0" />

        <div className="absolute inset-0 z-10 flex flex-col justify-end pb-8 md:pb-12 xl:pb-16 2xl:pb-20">
          <div className="w-content-width mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={!showLoader ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full"
            >
              <AutoFillText className="font-medium text-white" paddingY="0">{title}</AutoFillText>
            </motion.div>

            <div className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={!showLoader ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                className="w-1/2 md:w-auto"
              >
                <a
                  href={primaryButton.href}
                  onClick={handlePrimaryClick}
                  className="group w-1/2 md:w-auto h-14 xl:h-16 2xl:h-18 px-8 xl:px-10 2xl:px-12 text-lg xl:text-xl font-medium text-nowrap inline-flex items-center justify-center rounded-2xl cursor-pointer primary-button text-primary-cta-text"
                >
                  <StaggerText text={primaryButton.text} />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={!showLoader ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="w-1/2 md:w-auto"
              >
                <a
                  href={secondaryButton.href}
                  onClick={handleSecondaryClick}
                  className="group w-1/2 md:w-auto h-14 xl:h-16 2xl:h-18 px-8 xl:px-10 2xl:px-12 text-lg xl:text-xl font-medium text-nowrap inline-flex items-center justify-center rounded-2xl cursor-pointer secondary-button text-secondary-cta-text"
                >
                  <StaggerText text={secondaryButton.text} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroExpand;
