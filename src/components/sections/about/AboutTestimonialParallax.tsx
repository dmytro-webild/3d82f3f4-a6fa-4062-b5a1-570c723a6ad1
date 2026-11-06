import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { Quote } from "lucide-react";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import TextAnimation from "@/components/ui/TextAnimation";
import { useButtonClick } from "@/hooks/useButtonClick";
import { resolveIcon } from "@/utils/resolve-icon";

type SocialLink = {
  icon: string | LucideIcon;
  label: string;
  href?: string;
  onClick?: () => void;
};

type AboutTestimonialParallaxProps = {
  tag: string;
  quote: string;
  author: string;
  role: string;
  socialLinks?: SocialLink[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const SocialLinkButton = ({ icon, label, href, onClick }: SocialLink) => {
  const Icon = resolveIcon(icon);
  const handleClick = useButtonClick(href, onClick);

  return (
    <a
      href={href}
      onClick={handleClick}
      className="flex items-center justify-center gap-2 h-9 px-3 text-sm rounded-full cursor-pointer backdrop-blur-xl bg-primary-cta-text/15 border border-primary-cta-text/20 text-primary-cta-text font-medium hover:bg-primary-cta-text/25 transition-all duration-300 ease-out"
    >
      <Icon className="size-4" strokeWidth={1.5} />
      <span>{label}</span>
    </a>
  );
};

const AboutTestimonialParallax = ({
  tag,
  quote,
  author,
  role,
  imageSrc,
  videoSrc,
  socialLinks,
  textAnimation,
}: AboutTestimonialParallaxProps) => {
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.6], [1.3, 1]);

  return (
    <section aria-label="About section" className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mx-auto w-content-width">
        <div className="relative md:col-span-3 p-10 md:p-20 card rounded">
          <div className="absolute flex items-center justify-center -top-7 -left-7 md:-top-8 md:-left-8 size-14 md:size-16 primary-button rounded">
            <Quote className="h-5/10 text-primary-cta-text" strokeWidth={1.5} />
          </div>

          <div className="relative flex flex-col justify-center gap-5 h-full">
            <div className="w-fit px-3 py-1 mb-1 text-sm card rounded">
              <p>{tag}</p>
            </div>

            <TextAnimation
              text={quote}
              variant={textAnimation}
              gradientText={false}
              tag="h1"
              className="text-4xl md:text-5xl leading-[1.15] font-semibold text-balance"
            />

            <div className="flex items-center gap-2 min-w-0">
              <span className="text-base font-medium truncate">{author}</span>
              <span className="text-accent shrink-0">•</span>
              <span className="text-base font-medium truncate">{role}</span>
            </div>
          </div>
        </div>

        <div ref={imageRef} className="p-px md:col-span-2 aspect-square md:aspect-auto md:h-full card rounded overflow-hidden relative">
          <motion.div style={{ scale: imageScale }} className="w-full h-full origin-center">
            <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} />
          </motion.div>

          {socialLinks && socialLinks.length > 0 && (
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-center gap-3 p-6 xl:p-7 2xl:p-8">
              {socialLinks.map((link, index) => (
                <SocialLinkButton key={index} {...link} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonialParallax;
