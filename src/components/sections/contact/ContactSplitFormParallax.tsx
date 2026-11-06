import { useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { sendContactEmail } from "@/lib/api/email";
import { useButtonClick } from "@/hooks/useButtonClick";
import { resolveIcon } from "@/utils/resolve-icon";

type InputField = {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
};

type TextareaField = {
  name: string;
  placeholder: string;
  rows?: number;
  required?: boolean;
};

type CtaLink = {
  icon: string | LucideIcon;
  label: string;
  href?: string;
  onClick?: () => void;
};

type ContactSplitFormParallaxProps = {
  tag: string;
  title: string;
  description: string;
  inputs: InputField[];
  textarea?: TextareaField;
  buttonText: string;
  onSubmit?: (data: Record<string, string>) => void;
  ctaLinks?: CtaLink[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const CtaLinkButton = ({ icon, label, href, onClick }: CtaLink) => {
  const Icon = resolveIcon(icon);
  const handleClick = useButtonClick(href, onClick);

  return (
    <a
      href={href}
      onClick={handleClick}
      className="flex items-center justify-center gap-2 h-9 px-3 text-sm rounded-full cursor-pointer backdrop-blur-xl bg-primary-cta-text/15 border border-primary-cta-text/20 text-primary-cta-text font-semibold hover:bg-primary-cta-text/25 transition-all duration-300 ease-out"
    >
      <Icon className="size-4" strokeWidth={1.5} />
      <span>{label}</span>
    </a>
  );
};

const ContactSplitFormParallax = ({
  tag,
  title,
  description,
  inputs,
  textarea,
  buttonText,
  onSubmit,
  imageSrc,
  videoSrc,
  ctaLinks,
  textAnimation,
}: ContactSplitFormParallaxProps) => {
  const imageRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    inputs.forEach((input) => {
      initial[input.name] = "";
    });
    if (textarea) {
      initial[textarea.name] = "";
    }
    return initial;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await sendContactEmail({ formData });
      onSubmit?.(formData);
      const reset: Record<string, string> = {};
      inputs.forEach((input) => {
        reset[input.name] = "";
      });
      if (textarea) {
        reset[textarea.name] = "";
      }
      setFormData(reset);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.6], [1.3, 1]);

  return (
    <section aria-label="Contact section" className="py-20">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="slide-up" className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 md:p-10 card rounded">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                  <p>{tag}</p>
                </div>

                <TextAnimation
                  text={title}
                  variant={textAnimation}
                  gradientText={true}
                  tag="h2"
                  className="text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-balance"
                />

                <TextAnimation
                  text={description}
                  variant={textAnimation}
                  gradientText={false}
                  tag="p"
                  className="text-lg md:text-xl leading-snug text-balance"
                />
              </div>

              <div className="flex flex-col gap-3">
                {inputs.map((input) => (
                  <input
                    key={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={formData[input.name] || ""}
                    onChange={(e) => setFormData({ ...formData, [input.name]: e.target.value })}
                    required={input.required}
                    aria-label={input.placeholder}
                    className="w-full px-5 py-3 text-base bg-transparent placeholder:opacity-75 focus:outline-none card rounded"
                  />
                ))}

                {textarea && (
                  <textarea
                    placeholder={textarea.placeholder}
                    value={formData[textarea.name] || ""}
                    onChange={(e) => setFormData({ ...formData, [textarea.name]: e.target.value })}
                    required={textarea.required}
                    rows={textarea.rows || 5}
                    aria-label={textarea.placeholder}
                    className="w-full px-5 py-3 text-base bg-transparent placeholder:opacity-75 focus:outline-none resize-none card rounded"
                  />
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-center w-full h-10 px-6 text-sm rounded primary-button text-primary-cta-text cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : buttonText}
                </button>

                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}
              </div>
            </form>
          </div>

          <div ref={imageRef} className="relative h-100 md:h-auto card rounded overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full origin-center">
              <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="md:absolute md:inset-0 size-full object-cover" />
            </motion.div>

            {ctaLinks && ctaLinks.length > 0 && (
              <div className="absolute inset-0 flex flex-wrap items-end justify-center gap-3 p-6 xl:p-7 2xl:p-8">
                {ctaLinks.map((link, index) => (
                  <CtaLinkButton key={index} {...link} />
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSplitFormParallax;
