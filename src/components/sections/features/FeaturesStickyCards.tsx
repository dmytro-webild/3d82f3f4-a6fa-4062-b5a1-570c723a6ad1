"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import { cls } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type FeatureItem = {
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
} & (
    | { leftImageSrc: string; leftVideoSrc?: never }
    | { leftVideoSrc: string; leftImageSrc?: never }
  ) & (
    | { rightImageSrc: string; rightVideoSrc?: never }
    | { rightVideoSrc: string; rightImageSrc?: never }
  );

interface FeaturesStickyCardsProps {
  items: FeatureItem[];
}

const CardFrame = ({
  imageSrc,
  videoSrc,
  cardRef,
  className = "",
}: {
  imageSrc?: string;
  videoSrc?: string;
  cardRef: (el: HTMLDivElement | null) => void;
  className?: string;
}) => (
  <div ref={cardRef} className={cls("card rounded p-1 overflow-hidden", className)}>
    <ImageOrVideo
      imageSrc={imageSrc}
      videoSrc={videoSrc}
      className="w-full h-full object-cover rounded"
    />
  </div>
);

const FeaturesStickyCards = ({
  items,
}: FeaturesStickyCardsProps) => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileImageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    const getAnimationConfig = (itemIndex: number, isLeftCard: boolean) => {
      const isOddItem = itemIndex % 2 === 1;
      if (isLeftCard) {
        return {
          from: { xPercent: -225, rotation: -45 },
          to: { rotation: isOddItem ? 10 : -10 },
        };
      } else {
        return {
          from: { xPercent: 225, rotation: 45 },
          to: { rotation: isOddItem ? -10 : 10 },
        };
      }
    };

    const animateCards = (isMobile: boolean) => {
      items.forEach((_, itemIndex) => {
        [0, 1].forEach((cardIndex) => {
          const refIndex = itemIndex * 2 + cardIndex;
          const element = isMobile
            ? mobileImageRefs.current[refIndex]
            : imageRefs.current[refIndex];

          if (element) {
            const isLeftCard = cardIndex === 0;

            const fromConfig = isMobile
              ? {
                xPercent: isLeftCard ? -150 : 150,
                rotation: isLeftCard ? -25 : 25,
              }
              : getAnimationConfig(itemIndex, isLeftCard).from;

            const toConfig = isMobile
              ? {
                xPercent: 0,
                rotation: 0,
                duration: 1,
                scrollTrigger: {
                  trigger: element,
                  start: "top 90%",
                  end: "top 50%",
                  scrub: 1,
                },
              }
              : {
                xPercent: 0,
                rotation: getAnimationConfig(itemIndex, isLeftCard).to.rotation,
                scrollTrigger: {
                  trigger: triggerRefs.current[itemIndex],
                  start: "top bottom",
                  end: "top top",
                  scrub: 1,
                },
              };

            gsap.fromTo(element, fromConfig, toConfig);
          }
        });
      });
    };

    mm.add("(max-width: 767px)", () => animateCards(true));
    mm.add("(min-width: 768px)", () => animateCards(false));

    return () => {
      mm.revert();
      imageRefs.current = [];
      mobileImageRefs.current = [];
      triggerRefs.current = [];
    };
  }, [items]);

  const sectionHeightStyle = { height: `${items.length * 100}vh` };

  return (
    <section aria-label="Features sticky cards section" className="py-20 overflow-hidden md:overflow-visible">
      <div className="flex flex-col gap-8">
        <div className="hidden md:flex relative" style={sectionHeightStyle}>
          <div
            className="absolute top-0 left-0 flex flex-col w-6/10 mx-auto right-0 z-10"
            style={sectionHeightStyle}
          >
            {items.map((item, index) => (
              <div
                key={index}
                ref={(el) => { triggerRefs.current[index] = el; }}
                className="w-full mx-auto h-screen flex justify-center items-center"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-col items-center justify-center text-sm card rounded h-8 w-8 mb-1">
                    <p>{index + 1}</p>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-semibold text-center text-balance">{item.title}</h3>
                  <p className="md:max-w-6/10 text-lg leading-snug text-center">{item.description}</p>
                  {(item.primaryButton || item.secondaryButton) && (
                    <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
                      {item.primaryButton && <Button text={item.primaryButton.text} href={item.primaryButton.href} variant="primary" />}
                      {item.secondaryButton && <Button text={item.secondaryButton.text} href={item.secondaryButton.href} variant="secondary" animationDelay={0.1} />}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
            {items.map((item, itemIndex) => (
              <div key={itemIndex} className="h-screen w-full absolute top-0 left-0">
                <div className="w-content-width mx-auto h-full flex flex-row justify-between items-center">
                  <CardFrame
                    imageSrc={item.leftImageSrc}
                    videoSrc={item.leftVideoSrc}
                    cardRef={(el) => {
                      imageRefs.current[itemIndex * 2] = el;
                    }}
                    className="w-25/100 xl:w-27/100 2xl:w-29/100 h-[70vh]"
                  />
                  <CardFrame
                    imageSrc={item.rightImageSrc}
                    videoSrc={item.rightVideoSrc}
                    cardRef={(el) => {
                      imageRefs.current[itemIndex * 2 + 1] = el;
                    }}
                    className="w-25/100 xl:w-27/100 2xl:w-28/100 h-[70vh]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden flex flex-col gap-20 w-content-width mx-auto">
          {items.map((item, itemIndex) => (
            <div key={itemIndex} className="flex flex-col gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col items-center justify-center text-sm card rounded h-8 w-8 mb-1">
                  <p>{itemIndex + 1}</p>
                </div>
                <h3 className="text-4xl md:text-5xl font-semibold text-center text-balance">{item.title}</h3>
                <p className="text-base md:text-lg leading-snug text-center">{item.description}</p>
                {(item.primaryButton || item.secondaryButton) && (
                  <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
                    {item.primaryButton && <Button text={item.primaryButton.text} href={item.primaryButton.href} variant="primary" />}
                    {item.secondaryButton && <Button text={item.secondaryButton.text} href={item.secondaryButton.href} variant="secondary" animationDelay={0.1} />}
                  </div>
                )}
              </div>
              <div className="flex flex-row gap-3 justify-center">
                <CardFrame
                  imageSrc={item.leftImageSrc}
                  videoSrc={item.leftVideoSrc}
                  cardRef={(el) => {
                    mobileImageRefs.current[itemIndex * 2] = el;
                  }}
                  className="w-1/2 aspect-9/16"
                />
                <CardFrame
                  imageSrc={item.rightImageSrc}
                  videoSrc={item.rightVideoSrc}
                  cardRef={(el) => {
                    mobileImageRefs.current[itemIndex * 2 + 1] = el;
                  }}
                  className="w-1/2 aspect-9/16"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesStickyCards;
