import { cls } from "@/lib/utils";

interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  currency?: string;
  period?: string;
  className?: string;
}

const PriceDisplay = ({
  price,
  originalPrice,
  currency = "$",
  period,
  className,
}: PriceDisplayProps) => (
  <div className={cls("flex flex-col gap-1", className)}>
    <div className="flex items-baseline gap-2">
      <span className="text-5xl md:text-6xl font-semibold">
        {currency}
        {price}
      </span>
      {originalPrice && (
        <span className="text-xl text-foreground/50 line-through">
          {currency}
          {originalPrice}
        </span>
      )}
    </div>
    {period && <span className="text-base font-medium">{period}</span>}
  </div>
);

export default PriceDisplay;
