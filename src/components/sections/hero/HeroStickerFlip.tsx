import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { cls } from "@/lib/utils";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import { useButtonClick } from "@/hooks/useButtonClick";

gsap.registerPlugin(Draggable);

type SocialLink = {
  iconSrc: string;
  href: string;
  label: string;
};

type BackTextSegment =
  | { type: "text"; content: string }
  | { type: "highlight"; content: string }
  | { type: "photo"; src: string };

type HeroStickerFlipProps = {
  title: string;
  description: string;
  imageSrc: string;
  backTextSegments: BackTextSegment[];
  stickerImageSrcs: [string, string, string, string, string, string, string, string];
  socialLinks: SocialLink[];
  clickBadgeText: string;
};

const STICKER_POSITIONS = [
  { top: "6%", left: "14%", rotate: "-12deg", size: "w-20 md:w-28 2xl:w-32" },
  { top: "10%", right: "12%", rotate: "10deg", size: "w-24 md:w-30 2xl:w-36" },
  { top: "40%", left: "10%", rotate: "8deg", size: "w-20 md:w-28 2xl:w-32" },
  { top: "42%", right: "9%", rotate: "-6deg", size: "w-20 md:w-28 2xl:w-32" },
  { bottom: "20%", left: "12%", rotate: "-5deg", size: "w-24 md:w-30 2xl:w-36" },
  { bottom: "22%", right: "13%", rotate: "14deg", size: "w-20 md:w-28 2xl:w-32" },
  { bottom: "7%", left: "22%", rotate: "4deg", size: "w-20 md:w-28 2xl:w-32" },
  { bottom: "8%", right: "20%", rotate: "-10deg", size: "w-20 md:w-28 2xl:w-32" },
];

const SocialLinkItem = ({ link }: { link: SocialLink }) => {
  const handleClick = useButtonClick(link.href);

  return (
    <a
      href={link.href}
      onClick={handleClick}
      aria-label={link.label}
      className="size-10 md:size-11 2xl:size-12 flex items-center justify-center rounded-xl border border-foreground/15 text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-all"
    >
      <ImageOrVideo imageSrc={link.iconSrc} className="size-4/10 rounded-none" />
    </a>
  );
};

const HeroStickerFlip = ({
  title,
  description,
  imageSrc,
  backTextSegments,
  stickerImageSrcs,
  socialLinks,
  clickBadgeText,
}: HeroStickerFlipProps) => {
  const stickersRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (!stickersRef.current) return;

    const ctx = gsap.context(() => {
      const stickerElements = Array.from(
        stickersRef.current!.querySelectorAll<HTMLElement>("[data-sticker]")
      );

      stickerElements.forEach((el, i) => {
        gsap.set(el, { willChange: "transform", force3D: true });

        gsap.fromTo(
          el,
          { autoAlpha: 0, scale: 0.5, y: 30 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            delay: 0.8 + i * 0.08,
            ease: "back.out(2)",
          }
        );

        Draggable.create(el, {
          type: "x,y",
          bounds: stickersRef.current,
          dragResistance: 0.1,
          onPress() {
            gsap.to(el, {
              scale: 1.15,
              rotation: (Math.random() - 0.5) * 20,
              duration: 0.3,
              ease: "power2.out",
              overwrite: true,
            });
          },
          onRelease() {
            gsap.to(el, {
              scale: 1,
              rotation: 0,
              duration: 0.5,
              ease: "back.out(3)",
              overwrite: true,
            });
          },
        });
      });
    }, stickersRef);

    return () => ctx.revert();
  }, []);

  return (
    <section aria-label="Hero section" className="relative h-svh flex flex-col items-center justify-center overflow-hidden">
      <HeroBackgroundSlot />

      <div
        ref={stickersRef}
        className="absolute inset-0 pointer-events-auto z-0"
      >
        {stickerImageSrcs.map((src, i) => {
          const pos = STICKER_POSITIONS[i];
          const style: React.CSSProperties = {
            opacity: 0,
            visibility: "hidden",
            top: pos.top,
            bottom: pos.bottom,
            left: pos.left,
            right: pos.right,
            rotate: pos.rotate,
          };
          return (
            <div
              key={i}
              data-sticker
              className={cls("absolute cursor-grab active:cursor-grabbing", pos.size)}
              style={style}
            >
              <ImageOrVideo
                imageSrc={src}
                className="h-auto drop-shadow-lg rounded-none"
              />
            </div>
          );
        })}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-5 w-content-width mx-auto pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto cursor-pointer select-none"
          style={{ perspective: 800 }}
          onClick={() => setFlipped((f) => !f)}
          onMouseEnter={() => {
            if (window.innerWidth >= 768) setFlipped(true);
          }}
          onMouseLeave={() => {
            if (window.innerWidth >= 768) setFlipped(false);
          }}
        >
          <div
            className="relative size-60 md:size-75 2xl:size-85 transition-transform duration-1200 ease-[cubic-bezier(0.22,0.68,0,1.2)]"
            style={{
              transformStyle: "preserve-3d",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <div
              className="absolute inset-0 rounded-4xl bg-card p-2 xl:p-3 2xl:p-4 shadow-2x"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="w-full h-full rounded-3xl overflow-hidden relative">
                <ImageOrVideo
                  imageSrc={imageSrc}
                  className="rounded-none"
                />
                <div className="absolute top-3 left-3 px-3 py-1.5 md:px-3.5 md:py-2 2xl:px-4 2xl:py-2.5 card rounded-full flex items-center justify-center leading-none">
                  <span className="text-xs md:text-sm font-medium text-foreground">{clickBadgeText}</span>
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 rounded-4xl bg-card p-2 xl:p-3 2xl:p-4 shadow-2xl"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="w-full h-full rounded-3xl overflow-hidden bg-foreground flex items-center justify-center p-7 md:p-9 2xl:p-11">
                <p className="text-lg md:text-2xl 2xl:text-3xl leading-relaxed font-medium">
                  {backTextSegments.map((segment, i) => (
                    <span key={i}>
                      {segment.type === "text" && (
                        <span className="text-background/40">{segment.content}</span>
                      )}
                      {segment.type === "highlight" && (
                        <span className="text-background font-medium">{segment.content}</span>
                      )}
                      {segment.type === "photo" && (
                        <span className="inline-block align-middle size-9 md:size-10 2xl:size-11 rounded-lg overflow-hidden card p-0.5 mx-1 -mt-1">
                          <ImageOrVideo imageSrc={segment.src} className="rounded-md" />
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center gap-3 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-foreground"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-foreground/50 leading-snug"
          >
            {description}
          </motion.p>

          {socialLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mt-0.75 pointer-events-auto"
            >
              {socialLinks.map((link, i) => (
                <SocialLinkItem key={i} link={link} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroStickerFlip;
