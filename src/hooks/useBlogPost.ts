import { useEffect, useState } from "react";
import { fetchBlogPost, type BlogPost } from "@/lib/api/blog";

const useBlogPost = (slugOrId: string) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadPost = async () => {
      try {
        const data = await fetchBlogPost(slugOrId);
        if (isMounted) {
          setPost(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error("Failed to fetch post"));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadPost();

    return () => {
      isMounted = false;
    };
  }, [slugOrId]);

  return { post, isLoading, error };
};

export default useBlogPost;
