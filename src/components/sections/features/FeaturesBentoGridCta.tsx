import ImageOrVideo from "@/components/ui/ImageOrVideo";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cls } from "@/lib/utils";

type FeatureItem = {
  title: string;
  description: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesBentoGridCtaProps {
  tag: string;
  title: string;
  description: string;
  features: [FeatureItem, FeatureItem, FeatureItem, FeatureItem];
  ctaButton?: {
    text: string;
    href: string;
    avatarSrc?: string;
    avatarLabel?: string;
  };
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesBentoGridCta = ({
  tag,
  title,
  description,
  features,
  ctaButton,
  textAnimation,
}: FeaturesBentoGridCtaProps) => {
  const colSpans = ["md:col-span-5", "md:col-span-7", "md:col-span-7", "md:col-span-5"];

  return (
    <section aria-label="Features section" className="py-20">
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-center gap-2 w-content-width mx-auto">
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

          {ctaButton && (
            <ScrollReveal variant="slide-up" delay={0.2}>
              <a
                href={ctaButton.href}
                className="group flex items-center gap-3 mt-2 text-primary-cta-text rounded-full pl-3 pr-6 py-3 w-fit primary-button transition-all duration-300"
              >
                {ctaButton.avatarSrc && (
                  <div className="flex items-center">
                    <div className="card p-px rounded-full transition-transform duration-500 ease-out group-hover:-rotate-6">
                      <img
                        src={ctaButton.avatarSrc}
                        className="w-9 h-9 rounded-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="grid grid-cols-[0fr] group-hover:grid-cols-[1fr] transition-all duration-500 ease-out">
                      <div className="overflow-hidden flex items-center">
                        <span className="text-primary-cta-text text-sm font-semibold mx-2 transition-transform duration-500 ease-out -translate-x-3 group-hover:translate-x-0">
                          +
                        </span>
                        <div className="card p-px rounded-full shrink-0 transition-transform duration-500 ease-out -translate-x-5 group-hover:translate-x-0 group-hover:rotate-6">
                          <span className="w-9 h-9 rounded-full flex items-center justify-center">
                            <span className="text-foreground text-xs font-bold">{ctaButton.avatarLabel || "You"}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <span className="text-base font-semibold whitespace-nowrap">{ctaButton.text}</span>
              </a>
            </ScrollReveal>
          )}
        </div>

        <ScrollReveal variant="slide-up" className="w-content-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {features.map((feature, index) => (
              <div key={feature.title} className={cls(colSpans[index], "flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 card rounded")}>
                <div className="h-60 xl:h-72 2xl:h-80 rounded overflow-hidden bg-foreground/5 shadow shadow-foreground/5">
                  <ImageOrVideo imageSrc={feature.imageSrc} videoSrc={feature.videoSrc} />
                </div>
                <div className="flex flex-col gap-1 p-3 xl:p-3.5 2xl:p-4">
                  <h3 className="text-2xl font-semibold leading-snug text-balance">{feature.title}</h3>
                  <p className="text-base leading-snug text-balance">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesBentoGridCta;
