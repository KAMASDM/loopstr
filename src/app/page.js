import Hero from "@/components/Hero/Hero";
import TrendingBlogs from "@/components/TrendingBlogs/TrendingBlogs";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Loopstr",
    url: "https://loopstr.co",
    logo: "https://loopstr.co/loopstr.png",
    sameAs: [
      "https://www.facebook.com/loopstr",
      "https://www.instagram.com/loopstr",
      "https://x.com/loopstr",
    ],
    description:
      "At Loopstr, we believe in reducing digital clutter, reusing mindful habits, and recycling focus. Learn how we're helping people thrive in a more balanced, connected world.",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <div className="blob-container">
        <Hero />
        <TrendingBlogs />
        <LatestBlogs />
        <NewsLetter />
      </div>
    </>
  );
}
