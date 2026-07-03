import Image from "next/image";

import ContentSection from "./content-section";
import CounterCard from "./counter-card";

const HomeBanner = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] w-screen items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/site/home-banner-background.png`}
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 lg:px-12">
        <ContentSection />
        <CounterCard />
      </div>
    </section>
  );
};

export default HomeBanner;
