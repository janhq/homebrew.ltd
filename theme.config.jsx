import JSONLD from "@/components/JSONLD";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import ThemeImage from "@/components/ThemeImage";

const defaultUrl = "https://homebrew.ltd";
const defaultImage = "https://homebrew.ltd/assets/images/general/og-image.png";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Homebrew",
  url: `${defaultUrl}`,
  logo: `${defaultImage}`,
};

export default {
  logo: (
    <ThemeImage
      source={{
        light: "/logos/homebrew.svg",
        dark: "/logos/homebrew.svg",
      }}
      alt="Logo Homebrew"
      width={32}
      height={32}
    />
  ),
  search: {
    placeholder: "Search...",
  },
  navbar: {
    extraContent: (
      <div className="flex items-center space-x-4">
        <a
          href="https://discord.com/invite/FTk2MvZwJH"
          target="_blank"
          className="cursor-pointer"
        >
          <BiLogoDiscordAlt className="text-xl text-black/60 dark:text-white/60 ml-4" />
        </a>
        <a
          href="https://twitter.com/janframework"
          target="_blank"
          className="cursor-pointer"
        >
          <RiTwitterXFill className="text-base text-black/60 dark:text-white/60" />
        </a>
        <a
          href="https://www.linkedin.com/company/janframework/"
          target="_blank"
          className="cursor-pointer"
        >
          <FaLinkedin className="text-lg text-black/60 dark:text-white/60" />
        </a>
        <a
          href="https://github.com/janhq/jan"
          target="_blank"
          className="cursor-pointer"
        >
          <AiOutlineGithub className="text-xl text-black/60 dark:text-white/60" />
        </a>
        <a
          href="https://huggingface.co/jan-hq"
          target="_blank"
          className="cursor-pointer "
        >
          <Image
            src="/logos/hf.svg"
            alt="Homebrew Logo"
            width={20}
            height={20}
            className="grayscale"
          />
        </a>
      </div>
    ),
  },
  docsRepositoryBase: "https://github.com/janhq/homebrew/tree/main",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Homebrew",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Homebrew" />
      <meta property="og:description" content="Open Source, AI R&D Lab" />
      <meta
        property="og:image"
        content="https://homebrew.ltd/assets/images/general/og-image.png"
      />
      <JSONLD data={structuredData} />
    </>
  ),
  navigation: {
    prev: true,
    next: true,
  },
  footer: {
    text: (
      <span>
        ©{new Date().getFullYear()} <span>Homebrew Computer Company</span>.
      </span>
    ),
  },
};
