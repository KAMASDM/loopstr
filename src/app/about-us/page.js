export const metadata = {
  title: "About Us - The Mission Behind Loopstr",
  description:
    "At Loopstr, we believe in reducing digital clutter, reusing mindful habits, and recycling focus. Learn how we're helping people thrive in a more balanced, connected world.",
  openGraph: {
    title: "About Us - The Mission Behind Loopstr",
    description:
      "At Loopstr, we believe in reducing digital clutter, reusing mindful habits, and recycling focus. Learn how we're helping people thrive in a more balanced, connected world.",
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
    title: "About Us - The Mission Behind Loopstr",
    description:
      "At Loopstr, we believe in reducing digital clutter, reusing mindful habits, and recycling focus. Learn how we're helping people thrive in a more balanced, connected world.",
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

import AboutUs from "@/components/AboutUs/AboutUs";

export default function AboutPage() {
  return <AboutUs />;
}
