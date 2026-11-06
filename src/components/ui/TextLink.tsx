"use client";

import { useButtonClick } from "@/hooks/useButtonClick";
import { cls } from "@/lib/utils";

interface TextLinkProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const TextLink = ({ text, href = "#", onClick, className = "" }: TextLinkProps) => {
  const handleClick = useButtonClick(href, onClick);

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cls(
        "relative text-sm text-foreground cursor-pointer",
        "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current",
        "after:scale-x-0 after:origin-right after:transition-transform after:duration-300",
        "hover:after:scale-x-100 hover:after:origin-left",
        className
      )}
    >
      {text}
    </a>
  );
};

export default TextLink;
