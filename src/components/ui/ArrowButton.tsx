import { ArrowUpRight } from "lucide-react";
import { cls } from "@/lib/utils";
import { useButtonClick } from "@/hooks/useButtonClick";

interface ArrowButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
}

const ArrowButton = ({ href = "#", onClick, className }: ArrowButtonProps) => {
  const handleClick = useButtonClick(href, onClick);

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cls(
        "group/arrow flex items-center justify-center shrink-0 size-9 primary-button rounded-full cursor-pointer transition-transform duration-300 hover:scale-110",
        className
      )}
    >
      <ArrowUpRight
        className="size-4 text-primary-cta-text transition-transform duration-300 group-hover/arrow:rotate-45"
        strokeWidth={2}
      />
    </a>
  );
};

export default ArrowButton;
