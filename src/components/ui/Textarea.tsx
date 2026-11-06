import { cls } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = ({ className = "", ...props }: TextareaProps) => (
  <textarea
    className={cls(
      "w-full min-h-24 px-3 py-2 rounded secondary-button text-secondary-cta-text text-sm",
      "placeholder:text-secondary-cta-text/50 focus:outline-none resize-none",
      className
    )}
    {...props}
  />
);

export default Textarea;
