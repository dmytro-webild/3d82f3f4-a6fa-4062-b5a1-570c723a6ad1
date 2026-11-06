import type { LucideIcon } from "lucide-react";
import { cls } from "@/lib/utils";

interface TagProps {
  text: string;
  icon?: LucideIcon;
  className?: string;
}

const Tag = ({ text, icon: Icon, className = "" }: TagProps) => (
  <div className={cls("flex items-center gap-1 px-3 py-1 text-sm card rounded w-fit", className)}>
    {Icon && <Icon className="h-(--text-sm) w-auto" />}
    <p>{text}</p>
  </div>
);

export default Tag;
