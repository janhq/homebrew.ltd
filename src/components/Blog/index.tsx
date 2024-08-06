import { useData } from "nextra/data";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";

import Link from "next/link";

const Blog = () => {
  const blogPost = useData();
  const searchParams = useSearchParams();
  const search = searchParams?.get("category");

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
                <div className="py-2 flex justify-between items-center gap-x-4">
                  <h6 className="text-base font-sans text-gray-600 dark:text-white w-2/6 sm:w-auto !font-normal">
                    {post.title}
                  </h6>
                  <div className="border-b w-full flex-1 dark:border-gray-600 border-[#F0F0F0]" />
                  <p className="text-sm font-medium text-black/30 dark:text-white/30">
                    {format(String(post.date), "MMM dd")}
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
