import FooterMenu from "@/components/FooterMenu";
import Logo from "./public/logo-homebrew.svg";
import Image from "next/image";

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
  project: {
    link: "https://github.com/janhq",
  },
  chat: {
    link: "https://discord.gg/VSbRN3vwCD",
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
        ©{new Date().getFullYear()}{" "}
        <a href="https://nextra.site" target="_blank">
          Homebrew Computer Company
        </a>
        .
      </span>
    ),
  },
};
