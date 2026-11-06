import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import { useButtonClick } from "@/hooks/useButtonClick";

gsap.registerPlugin(ScrollTrigger);

interface HeroWorkScrollStackProps {
  tag: string;
  title: string;
  titleHighlight: string;
  description: string;
  descriptionMuted: string;
  primaryButton: { text: string; href: string; avatarSrc: string; avatarLabel: string };
  sectionTag: string;
  sectionTitle: string;
  sectionDescription: string;
  items: [
    { title: string; description: string; imageSrc: string; tag: string },
    { title: string; description: string; imageSrc: string; tag: string },
    { title: string; description: string; imageSrc: string; tag: string }
  ];
  secondaryButton?: { text: string; href: string };
  heroAnimationDelay?: number;
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const HeroWorkScrollStack = ({
  tag,
  title,
  titleHighlight,
  description,
  descriptionMuted,
  primaryButton,
  sectionTag,
  sectionTitle,
  sectionDescription,
  items,
  secondaryButton,
  heroAnimationDelay,
  textAnimation,
}: HeroWorkScrollStackProps) => {
  const animationRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const handlePrimaryClick = useButtonClick(primaryButton.href);
  const handleSecondaryClick = useButtonClick(secondaryButton?.href || "#");

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    const ctx = gsap.context(() => {
      const cardRefs = [card1Ref.current, card2Ref.current, card3Ref.current];
      const placeholder = placeholderRef.current;
      if (!placeholder) return;

      const placeholderRect = placeholder.getBoundingClientRect();
      const placeholderCenterY = placeholderRect.top + placeholderRect.height / 2;

      if (isDesktop) {
        // DESKTOP: Scrub animation tied to scroll position
        const xOffsets = ["32rem", "14.5rem", "-1.8rem"];
        const yAdjustments = [0, -48, 0];
        const rotations = [-5, 0, 5];
        const scales = [1.35, 1.3, 1.25];
        const zIndexes = [30, 20, 10];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: animationRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        cardRefs.forEach((card, i) => {
          if (!card) return;
          const cardRect = card.getBoundingClientRect();
          const cardCenterY = cardRect.top + cardRect.height / 2;
          const yOffset = placeholderCenterY - cardCenterY;

          gsap.set(card, {
            x: xOffsets[i],
            y: yOffset + yAdjustments[i],
            rotation: rotations[i],
            scale: scales[i],
            zIndex: zIndexes[i],
            willChange: "transform",
            force3D: true,
          });

          tl.to(card, { x: 0, y: 0, rotation: 0, scale: 1, duration: 0.4, ease: "none" }, 0);
          tl.to(card, { zIndex: 1, duration: 0.1, ease: "none" }, 0.3);
        });
      } else {
        // MOBILE: Toggle animation - play/reverse on scroll
        const xOffsets = ["2.5rem", "0.5rem", "-1rem"];
        const yAdjustments = [-10, -30, 10];
        const rotations = [-5, 0, 5];
        const scales = [0.65, 0.7, 0.75];
        const zIndexes = [30, 20, 10];

        cardRefs.forEach((card, i) => {
          if (!card) return;
          const cardRect = card.getBoundingClientRect();
          const cardCenterY = cardRect.top + cardRect.height / 2;
          const yOffset = placeholderCenterY - cardCenterY;

          gsap.set(card, {
            x: xOffsets[i],
            y: yOffset + yAdjustments[i],
            rotation: rotations[i],
            scale: scales[i],
            zIndex: zIndexes[i],
            willChange: "transform",
            force3D: true,
          });

          gsap.to(card, {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: placeholder,
              start: "top 35%",
              toggleActions: "play none none reverse",
            },
          });
        });
      }
    }, animationRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={animationRef}>
      <div id="hero" data-section="hero">
        <section aria-label="Hero section" className="relative h-fit md:h-svh pt-30 pb-20 md:py-0 flex items-center overflow-hidden md:overflow-visible">
          <HeroBackgroundSlot />

          <div className="w-content-width mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: heroAnimationDelay ?? 0 }}
                className="w-full md:w-[46%] flex flex-col items-center md:items-start gap-3"
              >
                <div className="card backdrop-blur flex items-center gap-2 px-3 py-1 rounded">
                  <span className="size-2 rounded-full bg-green-500 animate-pulsate [--accent:#22c55e]" />
                  <p className="text-sm leading-snug font-medium text-foreground">{tag}</p>
                </div>

                <h1 className="text-6xl md:text-7xl 2xl:text-8xl font-medium leading-[1.05] tracking-tight text-center md:text-left">
                  <span className="inline pb-[0.1em] -mb-[0.1em] bg-linear-to-r from-foreground to-primary-cta bg-clip-text text-transparent">
                    {title}{" "}
                    <span className="font-bold">{titleHighlight}</span>
                  </span>
                </h1>

                <p className="text-base md:text-lg font-medium leading-snug text-center text-balance md:text-left max-w-[95%]">
                  {description}{" "}
                  <span className="text-foreground/50">{descriptionMuted}</span>
                </p>

                <a
                  href={primaryButton.href}
                  onClick={handlePrimaryClick}
                  className="group flex items-center gap-3 mt-2 text-primary-cta-text rounded-full pl-3 pr-6 py-3 w-fit primary-button transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="card p-px rounded-full transition-transform duration-500 ease-out group-hover:-rotate-6">
                      <img
                        src={primaryButton.avatarSrc}
                        className="w-9 h-9 rounded-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="grid grid-cols-[0fr] group-hover:grid-cols-[1fr] transition-all duration-500 ease-out">
                      <div className="overflow-hidden flex items-center">
                        <span className="text-primary-cta-text text-sm font-medium mx-2 transition-transform duration-500 ease-out -translate-x-3 group-hover:translate-x-0">
                          +
                        </span>
                        <div className="card p-px rounded-full shrink-0 transition-transform duration-500 ease-out -translate-x-5 group-hover:translate-x-0 group-hover:rotate-6">
                          <span className="w-9 h-9 rounded-full flex items-center justify-center">
                            <span className="text-foreground text-xs font-bold">{primaryButton.avatarLabel}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-base font-medium whitespace-nowrap">{primaryButton.text}</span>
                </a>
              </motion.div>

              <div ref={placeholderRef} className="w-full md:w-[54%] relative h-80 md:h-96">
                <div className="absolute inset-0 card rounded-2xl md:hidden" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="work" data-section="work">
        <section aria-label="Work section" className="py-20 md:pt-0">
          <div className="flex flex-col gap-8 w-content-width mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                <p>{sectionTag}</p>
              </div>

              <TextAnimation
                text={sectionTitle}
                variant={textAnimation}
                gradientText={true}
                tag="h2"
                className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
              />

              <TextAnimation
                text={sectionDescription}
                variant={textAnimation}
                gradientText={false}
                tag="p"
                className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {items.map((item, index) => {
                const cardRef = index === 0 ? card1Ref : index === 1 ? card2Ref : card3Ref;
                return (
                  <div key={item.title} className="flex flex-col gap-3 xl:gap-4 2xl:gap-5">
                    <div
                      ref={cardRef}
                      className="aspect-4/3 rounded-2xl shadow-2xl relative card p-2 xl:p-3 2xl:p-4"
                    >
                      <div className="w-full h-full aspect-4/3 rounded-xl overflow-hidden relative">
                        <ImageOrVideo imageSrc={item.imageSrc} className="w-full h-full object-cover" />
                        <span className="absolute bottom-2 left-2 xl:bottom-3 xl:left-3 2xl:bottom-4 2xl:left-4 px-3 py-1.5 text-xs font-medium text-primary-cta-text rounded-full backdrop-blur-xl bg-primary-cta-text/15 border border-primary-cta-text/20">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                    <p className="text-lg md:text-xl lg:text-2xl leading-snug">
                      <span className="font-semibold text-foreground">{item.title}. </span>
                      <span className="text-foreground/50">{item.description}</span>
                    </p>
                  </div>
                );
              })}
            </div>

            {secondaryButton && (
              <div className="flex justify-center">
                <a
                  href={secondaryButton.href}
                  onClick={handleSecondaryClick}
                  className="group flex items-center gap-2 px-6 py-3 text-base font-medium rounded-full secondary-button text-secondary-cta-text transition-all duration-300"
                >
                  <span>{secondaryButton.text}</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroWorkScrollStack;
