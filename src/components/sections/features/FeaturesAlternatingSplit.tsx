import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import { cls } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type FeatureItem = {
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesAlternatingSplitProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: FeatureItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesAlternatingSplit = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
  textAnimation,
}: FeaturesAlternatingSplitProps) => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((ref, position) => {
        if (!ref) return;

        const isLast = position === itemRefs.current.length - 1;

        gsap.timeline({
          scrollTrigger: {
            trigger: ref,
            start: "center center",
            end: "+=100%",
            scrub: true,
          },
        })
          .set(ref, { willChange: "opacity" })
          .to(ref, {
            ease: "none",
            opacity: isLast ? 1 : 0,
          });
      });
    });

    return () => ctx.revert();
  }, [items.length]);

  return (
    <section aria-label="Features section" className="py-20">
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-center w-content-width mx-auto gap-2">
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

        <div className="flex flex-col gap-5 md:gap-[6vh] w-content-width mx-auto">
          {items.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={cls("sticky top-[25vw] md:top-[12.5vh] h-[140vw] md:h-[75vh] flex flex-col gap-6 md:gap-10 p-6 md:p-10 card rounded", index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}
            >
              <div className="flex flex-col justify-center w-full md:w-1/2 gap-2">
                <div className="flex items-center justify-center size-9 mb-1 text-sm rounded primary-button text-primary-cta-text">
                  <p>{index + 1}</p>
                </div>
                <h3 className="text-4xl md:text-5xl font-semibold leading-[1.15] text-balance">{item.title}</h3>
                <p className="text-base md:text-lg leading-snug text-balance">{item.description}</p>
                {(item.primaryButton || item.secondaryButton) && (
                  <div className="flex flex-wrap gap-3 mt-2 md:mt-3">
                    {item.primaryButton && <Button text={item.primaryButton.text} href={item.primaryButton.href} variant="primary" />}
                    {item.secondaryButton && <Button text={item.secondaryButton.text} href={item.secondaryButton.href} variant="secondary" />}
                  </div>
                )}
              </div>
              <div className="w-full md:w-1/2 aspect-square rounded overflow-hidden">
                <ImageOrVideo imageSrc={item.imageSrc} videoSrc={item.videoSrc} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesAlternatingSplit;
