import { cls } from "@/lib/utils";

interface ActiveBadgeProps {
  text: string;
  className?: string;
}

const ActiveBadge = ({ text, className }: ActiveBadgeProps) => {
  return (
    <div
      className={cls(
        "card backdrop-blur flex items-center gap-2 px-3 py-1 rounded",
        className
      )}
    >
      <span className="size-2 rounded-full bg-accent animate-pulsate" />
      <p className="text-sm leading-snug font-medium text-foreground">{text}</p>
    </div>
  );
};

export default ActiveBadge;
