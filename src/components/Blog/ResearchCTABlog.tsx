import ThemeImage from "@/components/ThemeImage";
import NewsletterForm from "@/components/NewsletterForm";
import SocialShareButton from "@/components/SocialShareButton";

const ResearchCTABlog = () => {
  return (
    <div className="mt-20 text-center">
      <ThemeImage
        className="w-28 mx-auto h-auto"
        source={{
          light: "/assets/images/general/mac-system-black.svg",
          dark: "/assets/images/general/mac-system-white.svg",
        }}
        alt="App screenshots"
        width={800}
        height={800}
      />
      <h1 className="text-4xl !font-normal leading-tight lg:leading-tight font-serif mt-8">
        The Soul of a New Machine
      </h1>
      <p className="leading-relaxed text-black/60 dark:text-white/60">
        {`To stay updated on all of Homebrew's research, subscribe to The Soul of a New Machine`}
      </p>
      <div className="mt-4 w-full lg:w-1/2 mx-auto">
        <NewsletterForm id={21} />
        <SocialShareButton />
      </div>
    </div>
  );
};

export default ResearchCTABlog;
