export const metadata = {
  title: "Contact Loopstr – Let’s Connect Mindfully",
  description:
    "Reach out to the Loopstr team with your questions, ideas, or feedback. We're here to support your digital wellness journey—one mindful step at a time.",
  openGraph: {
    title: "Contact Loopstr – Let’s Connect Mindfully",
    description:
      "Reach out to the Loopstr team with your questions, ideas, or feedback. We're here to support your digital wellness journey—one mindful step at a time.",
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
    title: "Contact Loopstr – Let’s Connect Mindfully",
    description:
      "Reach out to the Loopstr team with your questions, ideas, or feedback. We're here to support your digital wellness journey—one mindful step at a time.",
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

import ContactUs from "@/components/ContactUs/ContactUs";

export default function ContactPage() {
  return <ContactUs />;
}
