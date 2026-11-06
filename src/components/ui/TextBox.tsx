import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";

interface TextBoxProps {
  tag?: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  className?: string;
}

const TextBox = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  className,
}: TextBoxProps) => (
  <div className={`flex flex-col items-center gap-2 w-content-width mx-auto ${className || ""}`}>
    {tag && (
      <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
        <p>{tag}</p>
      </div>
    )}

    <TextAnimation
      text={title}
      variant="slide-up"
      gradientText={true}
      tag="h2"
      className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-balance text-center"
    />

    <TextAnimation
      text={description}
      variant="slide-up"
      gradientText={false}
      tag="p"
      className="md:max-w-7/10 text-lg md:text-xl leading-snug text-balance text-center"
    />

    {(primaryButton || secondaryButton) && (
      <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
        {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />}
        {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />}
      </div>
    )}
  </div>
);

export default TextBox;
