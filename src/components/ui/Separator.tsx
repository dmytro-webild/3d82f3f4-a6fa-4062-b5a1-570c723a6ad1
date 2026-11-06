import { cls } from "@/lib/utils";

interface SeparatorProps {
  className?: string;
}

const Separator = ({ className = "" }: SeparatorProps) => (
  <div className={cls("h-px w-full bg-foreground/10", className)} />
);

export default Separator;
