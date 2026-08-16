import AboutSection from "@/app/_home/home-about-section";
import HomeBanner from "./_home/home-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biotips Pharmaceutical",
  description:
    "Biotips Pharmaceutical is an India-based pharmaceutical marketing company offering medicines and pharmaceutical products across a range of therapeutic categories.",
  alternates: {
    canonical: "/",
  },
};
export default function Home() {
  return (
    <>
      <HomeBanner />
      <AboutSection />
    </>
  );
}
