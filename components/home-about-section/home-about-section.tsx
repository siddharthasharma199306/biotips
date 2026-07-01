// components/AboutSection.tsx

import SectionRedirectionLink from "@/ui/section-redirection-link";
import SectionSplitLayout from "@/ui/section-split-layout";
import SectiontitleBadge from "@/ui/section-title-badge";

const AboutSection = () => {
  return (
    <SectionSplitLayout
      imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_URL}/site/about-section-side-image.png`}
      imageAlt="About Biotips"
    >
      <SectiontitleBadge title="About Biotips" />

      <h2 className="mb-6 text-3xl font-bold leading-tight lg:text-5xl">
        Over 25 Years of Trusted Pharmaceutical Excellence
      </h2>

      <p className="mb-4 text-lg leading-8 text-base-content/75">
        At Biotips, we are committed to delivering safe, effective, and
        high-quality pharmaceutical solutions trusted by doctors and healthcare
        professionals across India.
      </p>

      <p className="mb-8 text-lg leading-8 text-base-content/75">
        With a growing portfolio of products and decades of experience, we
        continue to innovate while maintaining the highest standards of quality
        and patient care.
      </p>

      <SectionRedirectionLink href="/about">Learn More</SectionRedirectionLink>
    </SectionSplitLayout>
  );
};

export default AboutSection;
