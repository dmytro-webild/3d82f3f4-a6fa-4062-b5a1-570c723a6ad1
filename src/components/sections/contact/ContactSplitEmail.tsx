import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import { sendContactEmail } from "@/lib/api/email";

type ContactSplitEmailProps = {
  tag: string;
  title: string;
  description: string;
  inputPlaceholder: string;
  buttonText: string;
  onSubmit?: (email: string) => void;
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const ContactSplitEmail = ({
  tag,
  title,
  description,
  inputPlaceholder,
  buttonText,
  onSubmit,
  imageSrc,
  videoSrc,
  textAnimation,
}: ContactSplitEmailProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await sendContactEmail({ email });
      onSubmit?.(email);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section aria-label="Contact section" className="py-20">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="slide-up" className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex items-center justify-center py-15 md:py-20 card rounded">
            <div className="flex flex-col items-center w-full gap-2 px-5">
              <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                <p>{tag}</p>
              </div>

              <TextAnimation
                text={title}
                variant={textAnimation}
                gradientText={true}
                tag="h2"
                className="text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
              />

              <TextAnimation
                text={description}
                variant={textAnimation}
                gradientText={false}
                tag="p"
                className="md:max-w-8/10 text-lg md:text-xl leading-snug text-center text-balance"
              />

              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row w-full md:w-8/10 2xl:w-6/10 gap-3 md:gap-1 p-1 mt-2 md:mt-3 card rounded"
              >
                <input
                  type="email"
                  placeholder={inputPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-3 md:py-0 text-base text-center md:text-left bg-transparent placeholder:opacity-75 focus:outline-none truncate"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-center h-10 px-6 text-sm rounded primary-button text-primary-cta-text cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : buttonText}
                </button>
              </form>

              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}
            </div>
          </div>

          <div className="h-100 md:h-auto md:aspect-square card rounded overflow-hidden">
            <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSplitEmail;
