import FooterMenu from "@/components/FooterMenu";
import Logo from "./public/logo-homebrew.svg";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";

export default {
  logo: (
    <>
      <Image
        width={40}
        height={40}
        style={{ marginRight: "10px" }}
        src={Logo}
        alt="Homebrew - Logo"
      />
      <span className="logo-mobile" style={{ fontWeight: "bold" }}>
        {" "}
        Homebrew{" "}
      </span>
    </>
  ),
  // project: {
  //   link: "https://github.com/janhq",
  // },
  // chat: {
  //   link: "https://discord.gg/VSbRN3vwCD",
  // },
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
          href="https://github.com/janhq/jan"
          target="_blank"
          className="cursor-pointer"
        >
          <AiOutlineGithub className="text-xl text-black/60 dark:text-white/60" />
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
  toc: {
    component: <></>,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Homebrew" />
      <meta property="og:description" content="Open Source, AI R&D Lab" />
      <link rel="icon" href="/logo-homebrew.svg" type="image/svg" />
    </>
  ),
  navigation: {
    prev: true,
    next: true,
  },
  footer: {
    // text: <FooterMenu />,
    text: (
      <span>
        ©{new Date().getFullYear()} <span>Homebrew Computer Company</span>.
      </span>
    ),
  },
};
