import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

type BlogArticleProps = {
  category: string;
  title: string;
  excerpt?: string;
  content: string;
  imageSrc: string;
  authorName: string;
  authorImageSrc: string;
  date: string;
  readingTime?: string;
  backButton?: { text: string; href: string };
};

const BlogArticle = ({
  category,
  title,
  excerpt,
  content,
  imageSrc,
  authorName,
  authorImageSrc,
  date,
  readingTime,
  backButton = { text: "Back to Blog", href: "/blog" },
}: BlogArticleProps) => {
  return (
    <article aria-label="Blog article" className="py-20">
      <div className="flex flex-col gap-10">
        <ScrollReveal variant="fade">
          <div className="flex flex-col gap-3 w-content-width md:max-w-4xl mx-auto">
            <div className="flex items-center gap-2 px-3 py-1 mb-1 text-sm text-foreground/75 card rounded w-fit">
              <a
                href={backButton.href}
                className="hover:text-foreground transition-colors"
              >
                {backButton.text}
              </a>
              <span>/</span>
              <span className="text-foreground">{category}</span>
            </div>

            <h1 className="text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-balance">
              {title}
            </h1>

            {excerpt && (
              <p className="text-lg md:text-xl leading-snug text-balance">
                {excerpt}
              </p>
            )}

            <div className="flex items-center gap-3 mt-2 md:mt-3">
              <ImageOrVideo
                imageSrc={authorImageSrc}
                className="size-10 md:size-11 2xl:size-12 rounded-full object-cover"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-base text-foreground font-semibold leading-snug truncate">{authorName}</span>
                <span className="text-base text-foreground/75 leading-snug truncate">
                  {date}
                  {readingTime && ` · ${readingTime}`}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <div className="w-content-width md:max-w-4xl mx-auto aspect-video card rounded overflow-hidden p-2 xl:p-3 2xl:p-4">
            <ImageOrVideo
              imageSrc={imageSrc}
              className="size-full object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <div
            className="w-content-width md:max-w-4xl mx-auto flex flex-col gap-6 [&>h1]:text-4xl [&>h1]:font-semibold [&>h1]:mt-4 [&>h2]:text-3xl [&>h2]:font-semibold [&>h2]:mt-4 [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:mt-2 [&>h4]:text-xl [&>h4]:font-semibold [&>h4]:mt-2 [&>p]:text-base [&>p]:leading-relaxed [&>p]:text-foreground/85 [&_strong]:font-semibold [&_em]:italic [&_u]:underline [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-2 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:text-base [&>ul]:leading-relaxed [&>ul]:text-foreground/85 [&>ol]:flex [&>ol]:flex-col [&>ol]:gap-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:text-base [&>ol]:leading-relaxed [&>ol]:text-foreground/85"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </ScrollReveal>
      </div>
    </article>
  );
};

export default BlogArticle;
