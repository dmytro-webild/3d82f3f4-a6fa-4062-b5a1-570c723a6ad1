import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import AutoFillText from "@/components/ui/AutoFillText";
import ScrollReveal from "@/components/ui/ScrollReveal";

type HeroBillboardBrandProps = {
  brand: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const HeroBillboardBrand = ({
  brand,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  videoSrc,
  textAnimation,
}: HeroBillboardBrandProps) => {
  return (
    <section aria-label="Hero section" className="relative pt-25 pb-20 md:pt-30">
      <HeroBackgroundSlot />
      <div className="flex flex-col gap-10 md:gap-12 w-content-width mx-auto">
        <div className="flex flex-col items-end gap-5">
          <AutoFillText className="w-full font-semibold" paddingY="">{brand}</AutoFillText>

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="w-full md:w-1/2 text-lg md:text-2xl leading-snug text-balance text-right"
          />

          <div className="flex flex-wrap justify-end gap-3 mt-1 md:mt-2">
            <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />
          </div>
        </div>

        <ScrollReveal variant="fade" delay={0.2} className="w-full p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden">
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="aspect-4/5 md:aspect-video" />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroBillboardBrand;
