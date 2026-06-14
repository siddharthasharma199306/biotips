import ContentSection from "./content-section";
import CounterCard from "./counter-card";

const HomeBanner = () => {
  return (
    <section
      className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-cover bg-center w-screen"
      style={{
        backgroundImage: "url('/home-banner-background.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12 flex flex-col gap-24">
        <ContentSection />
        <CounterCard />
      </div>
    </section>
  );
};

export default HomeBanner;
