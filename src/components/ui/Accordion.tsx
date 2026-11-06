"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { cls } from "@/lib/utils";

interface AccordionProps {
  items: { title: string; content: string }[];
  className?: string;
}

const Accordion = ({ items, className = "" }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={cls("flex flex-col gap-3 xl:gap-3.5 2xl:gap-4", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          className="p-3 xl:p-3.5 2xl:p-4 rounded card cursor-pointer select-none"
        >
          <div className="flex items-center justify-between gap-3 xl:gap-3.5 2xl:gap-4">
            <h3 className="text-lg md:text-xl font-medium leading-snug">{item.title}</h3>
            <div className="flex shrink-0 items-center justify-center size-8 md:size-9 rounded primary-button">
              <Plus
                className={cls(
                  "size-3.5 md:size-4 text-primary-cta-text transition-transform duration-300",
                  activeIndex === index && "rotate-45"
                )}
                strokeWidth={2}
              />
            </div>
          </div>
          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="pt-1 text-base leading-snug">{item.content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
