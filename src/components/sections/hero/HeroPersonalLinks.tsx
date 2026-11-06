import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import { useButtonClick } from "@/hooks/useButtonClick";
import type { LucideIcon } from "lucide-react";

type TitleSegment =
  | { type: "text"; content: string }
  | ({ type: "media" } & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never }));

type SocialLink = {
  icon: LucideIcon;
  label: string;
  href: string;
};

type LinkCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  button: { text: string; href: string };
};

type HeroPersonalLinksProps = {
  titleSegments: TitleSegment[];
  socialLinks?: SocialLink[];
  linkCards: LinkCard[];
};

const SocialLinkButton = ({ social }: { social: SocialLink }) => {
  const handleClick = useButtonClick(social.href);
  const Icon = social.icon;

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex items-center gap-2 px-3 py-1.5 rounded card text-sm hover:opacity-80 transition-opacity duration-300 cursor-pointer"
    >
      <Icon className="h-[1em] w-auto aspect-square" />
      <span>{social.label}</span>
    </button>
  );
};

const HeroPersonalLinks = ({
  titleSegments,
  socialLinks,
  linkCards,
}: HeroPersonalLinksProps) => {
  return (
    <section
      aria-label="Hero section"
      className="relative w-full min-h-svh flex items-center justify-center py-20"
    >
      <HeroBackgroundSlot />
      <div className="w-content-width mx-auto flex flex-col items-center">
        <div className="w-full md:w-55/100 flex flex-col items-center gap-8">
          <h1 className="text-5xl md:text-6xl font-semibold text-center leading-tight text-foreground">
            <span className="inline">
              {titleSegments.map((segment, index) =>
                segment.type === "text" ? (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.7, delay: 0.2 + index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    {segment.content}
                  </motion.span>
                ) : (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", rotate: Math.floor(index / 2) % 2 === 0 ? -6 : 6 }}
                    animate={{ opacity: 1, filter: "blur(0px)", rotate: Math.floor(index / 2) % 2 === 0 ? -3 : 3 }}
                    transition={{ duration: 0.7, delay: 0.2 + index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                    className="inline-block align-middle h-[1em] aspect-square rounded overflow-hidden mx-[0.25em] primary-button p-0.5"
                  >
                    <ImageOrVideo imageSrc={segment.imageSrc} videoSrc={segment.videoSrc} className="rounded-sm" />
                  </motion.span>
                )
              )}
            </span>
          </h1>

          {socialLinks && socialLinks.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.5 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <SocialLinkButton social={social} />
                </motion.div>
              ))}
            </div>
          )}

          <div className="w-full flex flex-col gap-3">
            {linkCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.8 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full card rounded p-2 xl:p-3 2xl:p-4 flex items-center gap-3"
              >
                <div className="relative h-10 w-10 secondary-button rounded flex items-center justify-center shrink-0">
                  <card.icon className="h-4 w-4 text-secondary-cta-text" strokeWidth={1.5} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground">{card.title}</h3>
                  <p className="text-sm truncate text-foreground/60">{card.description}</p>
                </div>

                <Button
                  text={card.button.text}
                  href={card.button.href}
                  variant="primary"
                  className="shrink-0"
                  animate={false}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPersonalLinks;
