import ContactBanner from "./contact-banner";
import ContactCards from "./contact-cards";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Biotips Pharmaceutical for enquiries about our medicines and pharmaceutical products, partnerships, and pharmaceutical marketing services.",
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Banner Section */}
      <ContactBanner />

      {/* Contact Cards */}
      <ContactCards />
    </main>
  );
}
