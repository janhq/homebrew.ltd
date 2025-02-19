import React, { Fragment } from "react";
import JSONLD from "@/components/JSONLD";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import ThemeImage from "@/components/ThemeImage";

const defaultUrl = "https://menlo.ltd";
const defaultImage = "https://menlo.ltd/assets/images/general/og-image.png";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Menlo",
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
          href="https://twitter.com/homebrewltd"
          target="_blank"
          className="cursor-pointer"
        >
          <RiTwitterXFill className="text-base text-black/60 dark:text-white/60" />
        </a>
        <a
          href="https://www.linkedin.com/company/homebrewltd"
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
      titleTemplate: "%s – Menlo",
    };
  },
  head: function useHead() {
    const { title, frontMatter } = useConfig();
    const titleTemplate = (frontMatter?.title || title) + " - " + "Menlo";
    const { asPath } = useRouter();

    return (
      <Fragment>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <title>{titleTemplate}</title>
        <meta name="og:title" content={titleTemplate} />
        <meta
          name="description"
          content={
            frontMatter?.description ||
            `Building human-augmenting AIs that run on energy-efficient hardware.`
          }
        />
        <meta
          name="og:description"
          content={
            frontMatter?.description ||
            `Homebrew is an AI R&D studio that works in the area of Local AI, Small Language Models and Multi-modality. `
          }
        />
        <link
          rel="canonical"
          href={
            frontMatter?.ogImage ? "https://homebrew.ltd/" + asPath : defaultUrl
          }
        />
        <meta
          property="og:url"
          content={
            frontMatter?.ogImage ? "https://homebrew.ltd/" + asPath : defaultUrl
          }
        />
        <meta
          property="og:image"
          content={
            frontMatter?.ogImage
              ? "https://homebrew.ltd/" + frontMatter?.ogImage
              : "https://homebrew.ltd/assets/images/general/og-image.png"
          }
        />
        <meta property="og:image:alt" content="Jan-OGImage" />
        <JSONLD data={structuredData} />
      </Fragment>
    );
  },
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
