export const metadata = {
  title: "Digital Wellness Categories - Explore Your Path | Loopstr",
  description:
    "Browse through curated categories focused on reducing digital clutter, reusing mindful habits, and recycling your energy for a more balanced and intentional lifestyle.",
  openGraph: {
    title: "Digital Wellness Categories - Explore Your Path | Loopstr",
    description:
      "Browse through curated categories focused on reducing digital clutter, reusing mindful habits, and recycling your energy for a more balanced and intentional lifestyle.",
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
    title: "Digital Wellness Categories - Explore Your Path | Loopstr",
    description:
      "Browse through curated categories focused on reducing digital clutter, reusing mindful habits, and recycling your energy for a more balanced and intentional lifestyle.",
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

import Categories from "@/components/Categories/Categories";

export default function Category() {
  return <Categories />;
}
