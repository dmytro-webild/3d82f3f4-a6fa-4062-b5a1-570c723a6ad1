import type { ReactNode } from "react";
import { cls } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div className={cls("p-6 xl:p-7 2xl:p-8 card rounded", className)}>
    {children}
  </div>
);

export default Card;
