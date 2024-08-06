import Link from "next/link";
import React from "react";
import { AuthorsWithTooltip } from "@/components/AuthorsWithTooltip";

type Props = {
  authors?: string[];
};

const authorList = [
  {
    name: "Daniel Onggunhao",
    url: "https://github.com/dan-jan",
    image_url: "https://avatars.githubusercontent.com/u/101145494?v=4",
    email: "daniel@jan.ai",
  },
  {
    name: "Nam Nguyen",
    url: "https://github.com/namchuai",
    image_url: "https://avatars.githubusercontent.com/u/10397206?v=4",
    email: "james@jan.ai",
  },
  {
    name: "Ashley Tran",
    url: "https://github.com/imtuyethan",
    image_url: "https://avatars.githubusercontent.com/u/89722390?v=4",
    email: "ashley@jan.ai",
  },
  {
    name: "Hien To",
    url: "https://github.com/hientominh",
    image_url: "https://avatars.githubusercontent.com/u/37921427?v=4",
    email: "hien@jan.ai",
  },
  {
    name: "Van Pham",
    url: "https://github.com/Van-QA",
    image_url: "https://avatars.githubusercontent.com/u/64197333?v=4",
    email: "van@jan.ai",
  },
  {
    name: "Louis Le",
    url: "https://github.com/louis-jan",
    image_url: "https://avatars.githubusercontent.com/u/133622055?v=4",
    email: "louis@jan.ai",
  },
  {
    name: "Rex Ha",
    url: "https://github.com/hahuyhoang411",
    image_url: "https://avatars.githubusercontent.com/u/64120343?v=4",
    email: "rex@jan.ai",
  },
  {
    name: "Alan Dao",
    url: "https://github.com/tikikun",
    image_url: "https://avatars.githubusercontent.com/u/22268502?v=4",
    email: "alan@jan.ai",
  },
  {
    name: "Emre",
    url: "https://github.com/eckartal",
    image_url: "https://avatars.githubusercontent.com/u/159995642?v=4",
    email: "",
  },
  {
    name: "Henry Ho",
    url: "https://github.com/hieu-jan",
    image_url: "https://avatars.githubusercontent.com/u/150573299?v=4",
    email: "hieu@jan.ai",
  },
  {
    name: "Nicole Zhu",
    url: "https://github.com/0xsage",
    image_url: "https://avatars.githubusercontent.com/u/69952136?v=4",
    email: "nicole@jan.ai",
  },
  {
    name: "Bach Vu",
    url: "https://github.com/bachvudinh",
    image_url: "https://avatars.githubusercontent.com/u/89349141?v=4",
    email: "",
  },
  {
    name: "Phong Tran",
    url: "https://github.com/hungphongtrn",
    image_url: "https://avatars.githubusercontent.com/u/76428643?v=4",
    email: "",
  },
];

const BlogAuthors = (props: Props) => {
  const { authors } = props;

  if (!authors) return null;

  const filteredAuthors = authorList.filter((author) =>
    authors.includes(author.name)
  );

  return (
    <div className="flex flex-row items-center mt-4 mb-8 w-full">
      <AuthorsWithTooltip items={filteredAuthors} />
    </div>
  );
};

export default BlogAuthors;
