import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cls } from "@/lib/utils";

type KpiItem = {
  value: string;
  label: string;
};

type HeroSplitKpiProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  kpis: [KpiItem, KpiItem, KpiItem];
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const KPI_POSITIONS = ["top-[5%] left-0", "top-[40%] right-0", "bottom-[5%] left-[5%]"];

const HeroSplitKpi = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  videoSrc,
  kpis,
  textAnimation,
}: HeroSplitKpiProps) => {
  const kpiRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    let mouseX = 0;
    let mouseY = 0;
    const offsets = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
    const multipliers = [-0.25, -0.5, 0.25];
    let animationId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 100 - 50;
      mouseY = (e.clientY / window.innerHeight) * 100 - 50;
    };

    const animate = () => {
      offsets.forEach((offset, i) => {
        offset.x += ((mouseX * multipliers[i]) - offset.x) * 0.025;
        offset.y += ((mouseY * multipliers[i]) - offset.y) * 0.025;

        const el = kpiRefs.current[i];
        if (el) el.style.transform = `translate(${offset.x}px, ${offset.y}px)`;
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section aria-label="Hero section" className="relative flex items-center h-fit md:h-svh pt-25 pb-20 md:py-0">
      <HeroBackgroundSlot />
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 w-content-width mx-auto">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
              <p>{tag}</p>
            </div>

            <TextAnimation
              text={title}
              variant={textAnimation}
              gradientText={true}
              tag="h1"
              className="text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-center md:text-left text-balance"
            />

            <TextAnimation
              text={description}
              variant={textAnimation}
              gradientText={false}
              tag="p"
              className="md:max-w-8/10 text-lg md:text-xl leading-snug text-center md:text-left text-balance"
            />

            <div className="flex flex-wrap max-md:justify-center gap-3 mt-2 md:mt-3">
              <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
              <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-100 md:h-[65vh] md:max-h-[75svh]">
          <ScrollReveal variant="fade-blur" delay={0.2} className="w-full h-full p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden scale-85">
            <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} />
          </ScrollReveal>

          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              ref={(el) => { kpiRefs.current[index] = el; }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 + index * 0.1 }}
              className={cls(
                "absolute flex flex-col items-center p-3 xl:p-4 2xl:p-5 card backdrop-blur-sm rounded",
                KPI_POSITIONS[index]
              )}
            >
              <p className="text-2xl md:text-4xl text-foreground font-medium">{kpi.value}</p>
              <p className="text-sm md:text-base text-foreground/75">{kpi.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSplitKpi;
