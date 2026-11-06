"use client";

import { motion } from "motion/react";
import { useButtonClick } from "@/hooks/useButtonClick";
import { cls } from "@/lib/utils";
import { useStyle } from "@/components/ui/useStyle";
import ButtonArrow from "@/components/ui/ButtonArrow";
import ButtonBounce from "@/components/ui/ButtonBounce";
import ButtonBubble from "@/components/ui/ButtonBubble";
import ButtonElastic from "@/components/ui/ButtonElastic";
import ButtonExpand from "@/components/ui/ButtonExpand";
import ButtonFlip from "@/components/ui/ButtonFlip";
import ButtonMagnetic from "@/components/ui/ButtonMagnetic";
import ButtonPill from "@/components/ui/ButtonPill";
import ButtonShift from "@/components/ui/ButtonShift";
import ButtonSlide from "@/components/ui/ButtonSlide";
import ButtonStagger from "@/components/ui/ButtonStagger";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  animate?: boolean;
  animationDelay?: number;
  className?: string;
}

const DefaultButton = ({ text, variant = "primary", href = "#", onClick, animate = true, animationDelay = 0, className = "" }: ButtonProps) => {
  const handleClick = useButtonClick(href, onClick);

  const button = (
    <a
      href={href}
      onClick={handleClick}
      className={cls("flex items-center justify-center h-10 px-6 text-sm rounded cursor-pointer", variant === "primary" ? "primary-button text-primary-cta-text" : "secondary-button text-secondary-cta-text", className)}
    >
      {text}
    </a>
  );

  if (!animate) return button;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: animationDelay, ease: "easeOut" }}
    >
      {button}
    </motion.div>
  );
};

const Button = (props: ButtonProps) => {
  const { buttonVariant } = useStyle();

  switch (buttonVariant) {
    case "arrow":
      return <ButtonArrow {...props} />;
    case "bounce":
      return <ButtonBounce {...props} />;
    case "bubble":
      return <ButtonBubble {...props} />;
    case "elastic":
      return <ButtonElastic {...props} />;
    case "expand":
      return <ButtonExpand {...props} />;
    case "flip":
      return <ButtonFlip {...props} />;
    case "magnetic":
      return <ButtonMagnetic {...props} />;
    case "pill":
      return <ButtonPill {...props} />;
    case "shift":
      return <ButtonShift {...props} />;
    case "slide":
      return <ButtonSlide {...props} />;
    case "stagger":
      return <ButtonStagger {...props} />;
    default:
      return <DefaultButton {...props} />;
  }
};

export default Button;
