import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const BlogBackButton = () => {
  return (
    <div className="mt-4">
      <Link href="/">
        <IoIosArrowRoundBack className="text-4xl text-black/70 dark:text-white/70" />
      </Link>
    </div>
  );
};

export default BlogBackButton;
