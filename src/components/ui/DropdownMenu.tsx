"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cls } from "@/lib/utils";

interface DropdownMenuProps {
  options: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const DropdownMenu = ({ options, value, onChange, placeholder = "Select...", className = "" }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={cls("relative", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between h-9 px-3 rounded secondary-button text-secondary-cta-text text-sm cursor-pointer"
      >
        <span className={selected ? "font-medium" : ""}>{selected?.label || placeholder}</span>
        <ChevronDown className={cls("h-(--text-sm) w-auto transition-transform duration-300 ease-in-out", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute z-50 mt-2 w-full rounded secondary-button overflow-hidden"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => { onChange?.(option.value); setIsOpen(false); }}
                className={cls(
                  "w-full px-3 py-2 text-left text-sm text-secondary-cta-text hover:bg-foreground/5 transition-colors duration-500 ease-in-out cursor-pointer",
                  option.value === value && "bg-foreground/10"
                )}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
