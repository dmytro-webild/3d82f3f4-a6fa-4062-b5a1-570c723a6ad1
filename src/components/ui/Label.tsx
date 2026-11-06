import { cls } from "@/lib/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const Label = ({ className = "", ...props }: LabelProps) => (
  <label
    className={cls(
      "text-sm font-medium text-foreground",
      className
    )}
    {...props}
  />
);

export default Label;
