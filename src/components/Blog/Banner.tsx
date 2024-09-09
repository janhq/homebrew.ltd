import Link from "next/link";
import React from "react";
import { useData } from "nextra/data";

const BlogBanner = () => {
  const blogPosts = useData();

  const latestPost = blogPosts.sort(
    (
      a: { date: string | number | Date },
      b: { date: string | number | Date }
    ) => +new Date(b.date) - +new Date(a.date)
  )[0];

  return (
    <Link href={String(latestPost.url)} target="_blank" className="block">
      <div className="inline-flex my-2 py-2 pl-2 pr-4 rounded-lg mb-8 bg-indigo-500 text-white">
        <div className="flex items-center rounded bg-white px-2">
          <span className="font-bold text-sm uppercase text-blue-600">new</span>
        </div>
        &nbsp;✨&nbsp; {latestPost.title}
      </div>
    </Link>
  );
};

export default BlogBanner;
