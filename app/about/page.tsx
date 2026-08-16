import AboutBanner from "./about-banner";
import AboutTrustedByDoctors from "./about-trusted-by-doctors";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Biotips Pharmaceutical, an India-based pharmaceutical marketing company offering medicines and pharmaceutical products across multiple therapeutic categories.",
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Banner Section */}
      <AboutBanner />

      {/* Trusted By Doctors Section */}
      <AboutTrustedByDoctors />
    </main>
  );
}
