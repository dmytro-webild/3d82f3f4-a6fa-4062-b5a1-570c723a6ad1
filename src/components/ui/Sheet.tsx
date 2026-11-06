"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { cls } from "@/lib/utils";

interface SheetProps {
  trigger: ReactNode;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

const Sheet = ({ trigger, title, description, children, className = "" }: SheetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">{trigger}</div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-background/30 backdrop-blur-[1px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className={cls("fixed z-50 inset-y-0 right-0 card p-3 xl:p-4 2xl:p-5", className)}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex items-center justify-between gap-3 xl:gap-4 2xl:gap-5 mb-3 xl:mb-4 2xl:mb-5">
                <div className="min-w-0">
                  <h2 className="text-lg font-medium text-foreground truncate">{title}</h2>
                  {description && <p className="text-sm text-foreground truncate">{description}</p>}
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="shrink-0 flex items-center justify-center size-9 rounded secondary-button text-secondary-cta-text cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </div>
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sheet;
