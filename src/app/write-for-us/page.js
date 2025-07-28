export const metadata = {
  title: "Write for Us - Guest Post Guidelines | Loopstr.co",
  description:
    "Passionate about sustainability and circular living? Share your insights on Loopstr.co and contribute to a greener, more conscious future.",

  openGraph: {
    title: "Write for Us - Guest Post Guidelines | Loopstr.co",
    description:
      "Join the Loopstr community of eco-conscious writers. Submit your guest post on sustainability, reuse, recycling, and responsible consumption.",
    url: "https://loopstr.in/write-for-us",
    images: [
      {
        url: "https://loopstr.co/loopstr.png",
        width: 800,
        height: 600,
        alt: "Loopstr Logo",
      },
    ],
    siteName: "Loopstr",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Write for Us - Guest Post Guidelines | Loopstr.co",
    description:
      "Want to inspire change through your writing? Contribute to Loopstr.co by submitting articles on reuse, recycling, and sustainable living.",
    images: [
      {
        url: "https://loopstr.co/loopstr.png",
        width: 800,
        height: 600,
        alt: "Loopstr Logo",
      },
    ],
  },
};

import WriteForUs from "@/components/WriteForUs/WriteForUs";

export default function writeForUs() {
  return <WriteForUs />;
}
