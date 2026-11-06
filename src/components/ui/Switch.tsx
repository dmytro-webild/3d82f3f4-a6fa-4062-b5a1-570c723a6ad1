"use client";

import { cls } from "@/lib/utils";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const Switch = ({ checked, onChange, disabled = false, className = "" }: SwitchProps) => (
  <div
    onClick={() => !disabled && onChange(!checked)}
    className={cls(
      "relative flex items-center h-5 aspect-2/1 secondary-button rounded-full cursor-pointer",
      disabled && "opacity-50 cursor-not-allowed",
      className
    )}
  >
    <div
      className={cls(
        "absolute left-0 top-1/2 -translate-y-1/2 h-full aspect-square rounded-full primary-button transition-all duration-300",
        checked ? "translate-x-5 opacity-100" : "opacity-50"
      )}
    />
  </div>
);

export default Switch;
