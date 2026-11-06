import { cls } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className = "", ...props }: InputProps) => (
  <input
    className={cls(
      "w-full h-9 px-3 rounded secondary-button text-secondary-cta-text text-sm",
      "placeholder:text-secondary-cta-text/50 focus:outline-none",
      className
    )}
    {...props}
  />
);

export default Input;
