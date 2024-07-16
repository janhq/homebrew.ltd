import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";

export default {
  logo: <span className="text-4xl">🤘</span>,
  navbar: {
    extraContent: (
      <div className="flex items-center space-x-2">
        <a
          href="https://discord.com/invite/FTk2MvZwJH"
          target="_blank"
          className="cursor-pointer"
        >
          <BiLogoDiscordAlt className="text-xl text-black/60 dark:text-white/60" />
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
      <link rel="icon" href="/logos/homebrew.svg" type="image/svg" />
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
