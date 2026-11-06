import { useRef, useEffect } from "react";
import { cls } from "@/lib/utils";

type Option = {
  value: string;
  label: string;
};

interface SelectorButtonProps {
  options: Option[];
  activeValue: string;
  onValueChange: (value: string) => void;
  className?: string;
}

const SelectorButton = ({ options, activeValue, onValueChange, className }: SelectorButtonProps) => {
  const hoverRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const hoverElement = hoverRef.current;

    if (!container || !hoverElement) return;

    const moveHoverBlock = (target: HTMLElement) => {
      if (!target) return;
      const targetRect = target.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      hoverElement.style.width = `${targetRect.width}px`;
      hoverElement.style.transform = `translateX(${targetRect.left - containerRect.left}px)`;
    };

    const updatePosition = () => {
      const activeButton = container.querySelector(`[data-value="${activeValue}"]`) as HTMLElement;
      if (activeButton) moveHoverBlock(activeButton);
    };

    updatePosition();

    const resizeObserver = new ResizeObserver(updatePosition);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeValue]);

  return (
    <div ref={containerRef} className={cls("relative inline-flex gap-1 p-1 card rounded-full", className)}>
      {options.map((option) => (
        <button
          key={option.value}
          data-value={option.value}
          onClick={() => onValueChange(option.value)}
          className={cls(
            "relative z-1 px-5 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors duration-300",
            activeValue === option.value ? "text-primary-cta-text" : "text-foreground hover:text-foreground/80"
          )}
        >
          {option.label}
        </button>
      ))}
      <div
        ref={hoverRef}
        className="absolute z-0 inset-y-1 left-0 rounded-full primary-button pointer-events-none transition-all duration-300 ease-out"
      />
    </div>
  );
};

export default SelectorButton;
