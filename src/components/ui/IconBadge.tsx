import type { LucideIcon } from "lucide-react";
import { resolveIcon } from "@/utils/resolve-icon";
import { cls } from "@/lib/utils";

interface IconBadgeProps {
  icon: string | LucideIcon;
  size?: "sm" | "base" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "size-10",
  base: "size-12",
  lg: "size-14",
};

const iconSizeStyles = {
  sm: "size-3.5",
  base: "size-4",
  lg: "size-5",
};

const IconBadge = ({ icon, size = "base", className }: IconBadgeProps) => {
  const IconComponent = resolveIcon(icon);

  return (
    <div
      className={cls(
        "flex items-center justify-center primary-button rounded shadow",
        sizeStyles[size],
        className
      )}
    >
      <IconComponent
        className={cls("text-primary-cta-text", iconSizeStyles[size])}
        strokeWidth={1.5}
      />
    </div>
  );
};

export default IconBadge;
