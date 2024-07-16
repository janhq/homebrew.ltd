import { useData } from "nextra/data";
import { format } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";

import Link from "next/link";

const Blog = () => {
  const blogPost = useData();
  const searchParams = useSearchParams();
  const search = searchParams?.get("category");
  const router = useRouter();

  return (
    <div className="py-14">
      <h2 className="nx-mt-2 nx-text-3xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">
        Blog
      </h2>
      <div className="w-full mx-auto">
        {blogPost
          .filter((post: BlogPostsThumbnail) => {
            if (search) {
              return post.categories?.includes(String(search));
            } else {
              return post;
            }
          })
          .map((post: BlogPostsThumbnail, i: number) => {
            return (
              <Link href={String(post.url)} key={i}>
                <div className="py-6">
                  <h6 className="text-lg line-clamp-1 font-medium font-sans text-black/80 dark:text-white/80">
                    {post.title}
                  </h6>
                  <p className="my-2 line-clamp-2 leading-relaxed text-sm">
                    {post.description}
                  </p>
                  <p className="font-medium text-sm">
                    {format(String(post.date), "MMMM do, yyyy")}
                  </p>
                  <p className="dark:text-blue-400 text-blue-600 line-clamp-2 font-medium mt-4 text-sm">
                    Read more...
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
