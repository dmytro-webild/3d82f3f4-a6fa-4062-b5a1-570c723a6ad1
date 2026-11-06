import { useState, useEffect, useRef } from "react";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import Transition from "@/components/ui/Transition";
import Button from "@/components/ui/Button";

type FeatureItem = {
  title: string;
  description: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesTimelineCardsProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: [FeatureItem, FeatureItem, FeatureItem];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesTimelineCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
  textAnimation,
}: FeaturesTimelineCardsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setProgress(0);
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [activeIndex]);

  useEffect(() => {
    if (progress === 100) {
      setActiveIndex((i) => (i + 1) % items.length);
    }
  }, [progress, items.length]);

  const handleCardClick = (index: number) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  return (
    <section aria-label="Features timeline section" className="py-20">
      <div className="flex flex-col w-content-width mx-auto gap-8 md:gap-10">
        <div className="flex flex-col items-center gap-2">
          <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
            <p>{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={true}
            tag="h2"
            className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
          />

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
              {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>}
              {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />}
            </div>
          )}
        </div>

        <Transition className="flex flex-col gap-5">
          <div className="relative aspect-square md:aspect-10/4 overflow-hidden card rounded">
            <Transition key={activeIndex} transitionType="fade" className="absolute inset-px overflow-hidden rounded">
              <ImageOrVideo imageSrc={items[activeIndex].imageSrc} videoSrc={items[activeIndex].videoSrc} className="absolute inset-0" />
            </Transition>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {items.map((item, index) => (
              <div
                key={item.title}
                data-active={index === activeIndex}
                onClick={() => handleCardClick(index)}
                className="flex flex-col justify-between gap-4 xl:gap-5 2xl:gap-6 p-6 xl:p-7 2xl:p-8 card rounded transition-opacity duration-300 opacity-50 data-[active=true]:opacity-100 cursor-pointer data-[active=true]:cursor-default hover:opacity-75 data-[active=true]:hover:opacity-100"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-center size-8 primary-button rounded">
                    <span className="text-sm font-medium text-primary-cta-text">{index + 1}</span>
                  </div>
                  <h3 className="mt-1 text-3xl font-medium leading-tight text-balance">{item.title}</h3>
                  <p className="text-base leading-tight text-balance">{item.description}</p>
                </div>
                <div className="relative w-full h-px overflow-hidden">
                  <div className="absolute inset-0 bg-foreground/20" />
                  <div className="absolute inset-y-0 left-0 bg-foreground transition-[width] duration-100" style={{ width: index === activeIndex ? `${progress}%` : index < activeIndex ? "100%" : "0%" }} />
                </div>
              </div>
            ))}
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default FeaturesTimelineCards;
