import { ArrowUpRight, Loader2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import { useButtonClick } from "@/hooks/useButtonClick";
import useBlogPosts from "@/hooks/useBlogPosts";

type BlogItem = {
  title: string;
  excerpt: string;
  authorName: string;
  authorImageSrc: string;
  date: string;
  tags: string[];
  imageSrc: string;
  href?: string;
  onClick?: () => void;
};

const BlogCardItem = ({ item }: { item: BlogItem }) => {
  const handleClick = useButtonClick(item.href, item.onClick);

  return (
    <article
      className="card group flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 rounded cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative aspect-4/3 rounded overflow-hidden">
        <ImageOrVideo
          imageSrc={item.imageSrc}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center group-hover:bg-background/20 group-hover:backdrop-blur-xs transition-all duration-300">
          <button
            className="primary-button flex items-center justify-center size-12 rounded-full opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 cursor-pointer"
            onClick={handleClick}
          >
            <ArrowUpRight className="size-5 text-primary-cta-text" strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-2 p-3 xl:p-3.5 2xl:p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 min-w-0 mb-1">
            <ImageOrVideo
              imageSrc={item.authorImageSrc}
              className="size-6 rounded-full object-cover shrink-0"
            />
            <span className="text-sm text-foreground/75 truncate">
              {item.authorName} • {item.date}
            </span>
          </div>

          <h3 className="text-2xl font-semibold leading-snug text-balance">{item.title}</h3>
          <p className="text-base leading-snug text-balance">{item.excerpt}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-2 md:mt-3">
          {item.tags.map((tag, index) => (
            <div key={index} className="px-3 py-1 text-sm primary-button text-primary-cta-text rounded">
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

type BlogTagCardsProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items?: BlogItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
};

const BlogTagCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items: itemsProp,
  textAnimation,
}: BlogTagCardsProps) => {
  const { posts, isLoading } = useBlogPosts();
  const isFromApi = posts.length > 0;
  const items = isFromApi
    ? posts.map((p) => ({
        title: p.title,
        excerpt: p.excerpt,
        authorName: p.authorName,
        authorImageSrc: p.authorAvatar,
        date: p.date,
        tags: [p.category],
        imageSrc: p.imageSrc,
        onClick: p.onBlogClick ?? (p.slug ? () => { window.location.href = `/blog/${p.slug}`; } : undefined),
      }))
    : itemsProp;

  if (isLoading && !itemsProp) {
    return (
      <section aria-label="Blog section" className="py-20">
        <div className="w-content-width mx-auto flex justify-center">
          <Loader2 className="size-8 animate-spin text-foreground" strokeWidth={1.5} />
        </div>
      </section>
    );
  }

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section aria-label="Blog section" className="py-20">
      <div className="w-content-width mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-center gap-2">
          <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
            <p>{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={true}
            tag="h2"
            className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
          />

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
              {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>}
              {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />}
            </div>
          )}
        </div>

        <ScrollReveal variant={textAnimation}>
          <GridOrCarousel>
            {items.map((item, index) => (
              <BlogCardItem key={index} item={item} />
            ))}
          </GridOrCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlogTagCards;
