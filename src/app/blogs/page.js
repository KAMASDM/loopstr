export const metadata = {
  title: "Loopstr Blog - Mindful Insights for a Balanced Digital Life",
  description:
    "Discover inspiring stories, expert advice, and practical tips on reducing digital overwhelm, reusing healthy habits, and recycling your focus—only on the Loopstr Blog.",
  openGraph: {
    title: "Loopstr Blog - Mindful Insights for a Balanced Digital Life",
    description:
      "Discover inspiring stories, expert advice, and practical tips on reducing digital overwhelm, reusing healthy habits, and recycling your focus—only on the Loopstr Blog.",
    images: [
      {
        url: "https://loopstr.co/loopstr.png",
        alt: "Loopstr",
        width: 800,
        height: 600,
      },
    ],
    siteName: "Loopstr",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loopstr Blog - Mindful Insights for a Balanced Digital Life",
    description:
      "Discover inspiring stories, expert advice, and practical tips on reducing digital overwhelm, reusing healthy habits, and recycling your focus—only on the Loopstr Blog.",
    images: [
      {
        url: "https://loopstr.co/loopstr.png",
        alt: "Loopstr",
        width: 800,
        height: 600,
      },
    ],
  },
};

import Blog from "@/components/Blogs/Blog";

export default function Blogs() {
  return <Blog />;
}
