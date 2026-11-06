import type { LucideIcon } from "lucide-react";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useButtonClick } from "@/hooks/useButtonClick";

type ContactOption = {
  icon: LucideIcon;
  label: string;
  href: string;
};

type ContactBarProps = {
  tag: string;
  title: string;
  options: ContactOption[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
};

const ContactOptionButton = ({ icon: Icon, label, href }: ContactOption) => {
  const handleClick = useButtonClick(href);

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center gap-3 group cursor-pointer"
    >
      <div className="size-22 md:size-16 lg:size-24 xl:size-28 2xl:size-30 rounded-full primary-button flex items-center justify-center">
        <Icon className="size-4/10 text-primary-cta-text" strokeWidth={1.5} />
      </div>
      <p className="text-sm md:text-base text-foreground/60 group-hover:text-foreground transition-colors">{label}</p>
    </button>
  );
};

const ContactBar = ({ tag, title, options, textAnimation }: ContactBarProps) => {
  return (
    <section aria-label="Contact section" className="py-20">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="slide-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 card rounded p-6 md:p-10">
            <div className="flex flex-col gap-2 md:max-w-1/2">
              <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                <p>{tag}</p>
              </div>
              <TextAnimation
                text={title}
                variant={textAnimation}
                gradientText={true}
                tag="h2"
                className="text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-balance"
              />
            </div>
            <div className="flex items-center gap-6 md:gap-10">
              {options.map((opt) => (
                <ContactOptionButton key={opt.label} {...opt} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactBar;
