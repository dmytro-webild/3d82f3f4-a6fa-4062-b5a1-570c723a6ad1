import { useState } from "react";
import Button from "@/components/ui/Button";
import SelectorButton from "@/components/ui/SelectorButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import Transition from "@/components/ui/Transition";
import Accordion from "@/components/ui/Accordion";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  name: string;
  items: FaqItem[];
};

interface FaqTabbedAccordionProps {
  tag: string;
  title: string;
  description: string;
  categories: FaqCategory[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
  cta?: {
    name: string;
    role: string;
    buttonText: string;
    buttonHref: string;
  } & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });
}

const FaqTabbedAccordion = ({
  tag,
  title,
  description,
  categories,
  cta,
  textAnimation,
}: FaqTabbedAccordionProps) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.name || "");

  const currentItems = categories.find((c) => c.name === activeCategory)?.items || [];
  const accordionItems = currentItems.map((item) => ({ title: item.question, content: item.answer }));

  return (
    <section aria-label="FAQ section" className="py-20">
      <div className="w-content-width mx-auto">
        <div className="card rounded flex flex-col gap-6 md:gap-10 p-6 md:p-10">
          <div className="flex flex-col items-center gap-2">
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

            <SelectorButton
              options={categories.map((c) => ({ value: c.name, label: c.name }))}
              activeValue={activeCategory}
              onValueChange={setActiveCategory}
              className="mt-2 md:mt-3"
            />
          </div>

          <ScrollReveal variant="fade-blur">
            <Transition key={activeCategory} whileInView={false} className="">
              <Accordion items={accordionItems} />
            </Transition>
          </ScrollReveal>

          {cta && (
            <>
              <div className="w-full h-px bg-foreground/5" />
              <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
                <div className="flex items-center gap-3">
                  <ImageOrVideo
                    imageSrc={cta.imageSrc}
                    videoSrc={cta.videoSrc}
                    className="size-10 md:size-11 2xl:size-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-base text-foreground font-semibold leading-snug truncate">{cta.name}</span>
                    <span className="text-base text-foreground/75 leading-snug truncate">{cta.role}</span>
                  </div>
                </div>
                <Button text={cta.buttonText} href={cta.buttonHref} variant="primary" />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqTabbedAccordion;
