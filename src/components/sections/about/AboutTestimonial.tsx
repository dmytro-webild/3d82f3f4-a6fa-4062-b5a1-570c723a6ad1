import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

type AboutTestimonialProps = {
  tag: string;
  quote: string;
  author: string;
  role: string;
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const AboutTestimonial = ({
  tag,
  quote,
  author,
  role,
  imageSrc,
  videoSrc,
  textAnimation,
}: AboutTestimonialProps) => {
  return (
    <section aria-label="Testimonial section" className="py-20">
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

        <ScrollReveal variant="fade" className="p-px md:col-span-2 aspect-square md:aspect-auto md:h-full card rounded overflow-hidden">
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutTestimonial;
