import Link from "next/link";

const ContentSection = () => {
  return (
    <div className="max-w-2xl text-white">
      <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
        Dedicated to Safeguarding healthy lives
      </h1>

      <p className="mb-8 text-lg text-white/90 lg:text-xl">
        25+ years of pharmaceutical excellence — trusted by 500+ doctors across
        India.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link href="/products" className="btn btn-primary rounded-full px-8">
          Explore Products
        </Link>

        <Link
          href="/contact"
          className="btn btn-outline rounded-full border-white text-white hover:bg-white hover:text-black"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default ContentSection;
