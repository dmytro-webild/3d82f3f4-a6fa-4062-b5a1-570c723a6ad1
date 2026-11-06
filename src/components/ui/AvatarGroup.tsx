import { cls } from "@/lib/utils";

interface AvatarGroupProps {
  avatarsSrc: string[];
  max?: number;
  size?: "sm" | "md" | "lg";
  label?: string;
  labelClassName?: string;
  className?: string;
}

const SIZES = {
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-12 text-base",
};

const AvatarGroup = ({ avatarsSrc, max = 5, size = "md", label, labelClassName, className = "" }: AvatarGroupProps) => {
  const visible = avatarsSrc.slice(0, max);
  const remaining = avatarsSrc.length - visible.length;

  return (
    <div className={cls("flex items-center gap-3", className)}>
      <div className="flex items-center">
        {visible.map((src, index) => (
          <div
            key={index}
            className={cls(
              "relative shrink-0 overflow-hidden rounded-full border-2 border-background",
              SIZES[size],
              index > 0 && "-ml-3"
            )}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
        {remaining > 0 && (
          <div className={cls("flex items-center justify-center shrink-0 rounded-full border-2 border-background secondary-button font-medium text-secondary-cta-text -ml-3", SIZES[size])}>
            +{remaining}
          </div>
        )}
      </div>
      {label && <span className={cls("text-base font-medium text-foreground", labelClassName)}>{label}</span>}
    </div>
  );
};

export default AvatarGroup;
