import { cls } from "@/lib/utils";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SIZES = {
  sm: "size-4 border-1",
  md: "size-6 border-2",
  lg: "size-8 border-2",
};

const Spinner = ({ size = "md", className = "" }: SpinnerProps) => (
  <div
    className={cls(
      "animate-spin rounded-full border-foreground/10 border-t-foreground",
      SIZES[size],
      className
    )}
  />
);

export default Spinner;
