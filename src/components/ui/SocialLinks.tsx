import type { LucideIcon } from "lucide-react";
import { resolveIcon } from "@/utils/resolve-icon";
import { cls } from "@/lib/utils";

type SocialLink = {
  icon: string | LucideIcon;
  href: string;
};

interface SocialLinksProps {
  links: SocialLink[];
  size?: "sm" | "base" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "size-8",
  base: "size-9",
  lg: "size-10",
};

const SocialLinks = ({ links, size = "base", className }: SocialLinksProps) => (
  <div className={cls("flex gap-3", className)}>
    {links.map((link, index) => {
      const IconComponent = resolveIcon(link.icon);
      return (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls(
            "flex items-center justify-center primary-button rounded",
            sizeStyles[size]
          )}
        >
          <IconComponent
            className="h-2/5 w-2/5 text-primary-cta-text"
            strokeWidth={1.5}
          />
        </a>
      );
    })}
  </div>
);

export default SocialLinks;
