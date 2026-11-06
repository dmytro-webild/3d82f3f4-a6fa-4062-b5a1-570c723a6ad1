import { useParams, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import BlogArticle from "@/components/sections/blog/BlogArticle";
import useBlogPost from "@/hooks/useBlogPost";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { post, isLoading } = useBlogPost(slug || "");

  if (isLoading) {
    return (
      <section className="w-content-width mx-auto py-20">
        <div className="flex justify-center">
          <Loader2 className="size-8 animate-spin text-foreground" strokeWidth={1.5} />
        </div>
      </section>
    );
  }

  if (!post || !post.content) {
    return (
      <section className="w-content-width mx-auto py-20 text-center">
        <p className="text-foreground mb-4">Post not found</p>
        <button onClick={() => navigate("/blog")} className="primary-button px-6 py-2 rounded-theme text-primary-cta-text">
          Back to Blog
        </button>
      </section>
    );
  }

  const wordCount = post.content.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length;
  const readingTime = `${Math.max(1, Math.round(wordCount / 200))} min read`;

  return (
    <BlogArticle
      category={post.category}
      title={post.title}
      excerpt={post.excerpt}
      content={post.content}
      imageSrc={post.imageSrc}
      authorName={post.authorName}
      authorImageSrc={post.authorAvatar}
      date={post.date}
      readingTime={readingTime}
    />
  );
};

export default BlogPostPage;
