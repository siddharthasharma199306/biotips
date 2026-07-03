const AboutBanner = () => {
  return (
    <section className="border-b border-red-200 bg-linear-to-br from-red-100 via-red-50 to-rose-100">
      <div className="mx-auto flex min-h-80 max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            About Biotips
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-tight text-base-content md:text-5xl lg:text-6xl">
            Precision in Medicine.
            <br />
            Trust in Every Dose.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-base-content/75 md:text-xl">
            25+ years of pharmaceutical excellence — trusted by 500+ doctors
            across India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
