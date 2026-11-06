import { motion } from "motion/react";
import { Check } from "lucide-react";

import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

type CreatorVideo = {
  videoSrc: string;
  name: string;
  followers: string;
  imageSrc: string;
};

type HeroBillboardCreatorProps = {
  tag: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryButton: { text: string; href: string };
  note: string;
  videos: CreatorVideo[];
  badgeText: string;
  textAnimation: "slide-up" | "fade-blur" | "fade";
};

const HeroBillboardCreator = ({
  tag,
  title,
  titleHighlight,
  description,
  primaryButton,
  note,
  videos,
  badgeText,
  textAnimation,
}: HeroBillboardCreatorProps) => {
  const duplicated = [...videos, ...videos, ...videos, ...videos];

  return (
    <section
      aria-label="Hero section"
      className="relative flex flex-col items-center justify-center gap-8 md:gap-10 w-full min-h-svh pt-25 pb-20 md:pt-30"
    >
      <HeroBackgroundSlot />
      <div className="flex flex-col items-center gap-3 w-content-width mx-auto text-center">
        <div className="mb-1 px-3 py-1 w-fit text-sm card rounded">
          <p>{tag}</p>
        </div>

        <motion.h1
          className="md:max-w-8/10 text-7xl 2xl:text-8xl font-semibold leading-[1.15] text-balance"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          transition={{ staggerChildren: 0.04 }}
        >
          <motion.span
            className="inline pb-[0.1em] -mb-[0.1em] bg-linear-to-r from-foreground to-primary-cta bg-clip-text text-transparent"
            variants={{ hidden: { opacity: 0, y: "50%" }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {title}{" "}
            {titleHighlight && (
              <span className="italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                {titleHighlight}
              </span>
            )}
          </motion.span>
        </motion.h1>

        <TextAnimation
          text={description}
          variant={textAnimation}
          gradientText={false}
          tag="p"
          className="md:max-w-7/10 text-lg md:text-xl leading-snug text-balance"
        />

        <div className="flex justify-center mt-2 md:mt-3">
          <Button text={primaryButton.text} href={primaryButton.href} />
        </div>

        <motion.div
          className="flex justify-center mt-2 md:mt-3 text-sm text-foreground/70"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="flex items-center gap-2">
            <div className="flex items-center justify-center size-4 primary-button rounded-full">
              <Check className="size-1/2 text-primary-cta-text" />
            </div>
            {note}
          </span>
        </motion.div>
      </div>

      <div className="w-content-width mx-auto overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee-horizontal" style={{ animationDuration: "60s" }}>
          {duplicated.map((video, i) => (
            <div
              key={i}
              className="relative shrink-0 mr-3 xl:mr-4 2xl:mr-5 w-60 md:w-75 2xl:w-80 aspect-4/5 overflow-hidden rounded-lg"
            >
              <div className="absolute z-10 top-3 left-3 xl:top-4 xl:left-4 2xl:top-5 2xl:left-5 px-2 py-1 xl:px-2.5 xl:py-1.5 2xl:px-3 2xl:py-2 text-xs font-medium rounded-sm border border-background/30 bg-background/50 backdrop-blur-md">
                {badgeText}
              </div>
              <ImageOrVideo
                videoSrc={video.videoSrc}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute -inset-x-px -bottom-px h-1/3 bg-background-accent/50 backdrop-blur-xl"
                style={{ maskImage: "linear-gradient(to bottom, transparent, black 60%)" }}
                aria-hidden="true"
              />
              <div className="absolute flex items-center inset-x-3 bottom-3 xl:inset-x-4 xl:bottom-4 2xl:inset-x-5 2xl:bottom-5 gap-2 xl:gap-2.5 2xl:gap-3">
                <ImageOrVideo
                  imageSrc={video.imageSrc}
                  className="size-10 md:size-11 2xl:size-12 rounded-full object-cover"
                />
                <div className="flex flex-col min-w-0">
                  <span className="flex items-center gap-1 text-base text-background font-semibold leading-snug truncate">
                    {video.name}
                    <img src="https://storage.googleapis.com/webild/default/templates/ai-ugc/verified-badge.webp" alt="Verified" className="shrink-0 h-[calc(var(--text-base)*1.25)] w-auto" />
                  </span>
                  <span className="text-base text-background/75 leading-snug truncate">{video.followers}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBillboardCreator;
