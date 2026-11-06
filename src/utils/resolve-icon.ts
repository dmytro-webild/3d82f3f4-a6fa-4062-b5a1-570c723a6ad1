import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type IconInput = string | LucideIcon;

// Social brand icons removed in lucide-react 1.x — map to neutral alternatives
const REMOVED_ICON_ALIASES: Record<string, LucideIcon> = {
  Linkedin: Icons.Globe,
  Twitter: Icons.Globe,
  Instagram: Icons.Globe,
  Facebook: Icons.Globe,
  Youtube: Icons.Globe,
  Github: Icons.Code,
  Snapchat: Icons.Globe,
  Pinterest: Icons.Globe,
  Tiktok: Icons.Globe,
  Discord: Icons.MessageCircle,
};

const isValidComponent = (value: unknown): boolean =>
  !!value && (typeof value === "function" || (typeof value === "object" && "$$typeof" in value));

export function resolveIcon(icon: IconInput): LucideIcon {
  if (typeof icon === "string") {
    const alias = REMOVED_ICON_ALIASES[icon];
    if (alias) return alias;
    const resolved = (Icons as Record<string, unknown>)[icon];
    if (isValidComponent(resolved)) return resolved as LucideIcon;
    return Icons.HelpCircle;
  }
  if (!isValidComponent(icon)) return Icons.HelpCircle;
  return icon;
}

export type { IconInput };
