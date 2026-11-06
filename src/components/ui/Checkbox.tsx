"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { cls } from "@/lib/utils";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SIZES = {
  sm: { box: "size-4", icon: "size-2" },
  md: { box: "size-5", icon: "size-2.5" },
  lg: { box: "size-6", icon: "size-3" },
};

const Checkbox = ({ checked, onChange, label, size = "md", className = "" }: CheckboxProps) => (
  <label className={cls("flex items-center gap-2 cursor-pointer", className)}>
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cls(
        "flex items-center justify-center rounded border transition-colors duration-200 cursor-pointer",
        SIZES[size].box,
        checked ? "primary-button" : "secondary-button"
      )}
    >
      <motion.div
        initial={false}
        animate={{ opacity: checked ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <Check className={cls(SIZES[size].icon, "text-primary-cta-text")} />
      </motion.div>
    </button>
    {label && <span className="text-sm text-foreground">{label}</span>}
  </label>
);

export default Checkbox;
