import { Star } from "lucide-react";
import { cls } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  className?: string;
}

const RatingStars = ({ rating, className }: RatingStarsProps) => (
  <div className={cls("flex gap-1.5", className)}>
    {Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={cls(
          "size-5 text-accent",
          index < rating ? "fill-accent" : "fill-transparent"
        )}
        strokeWidth={1.5}
      />
    ))}
  </div>
);

export default RatingStars;
