const ContactBanner = () => {
  return (
    <section className="border-b border-red-200 bg-linear-to-r from-red-100 via-red-50 to-red-100">
      <div className="mx-auto flex min-h-80 max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Contact Us
          </p>

          <h1 className="mb-5 text-4xl font-bold text-base-content md:text-5xl">
            Let&apos;s Connect
          </h1>

          <p className="text-lg leading-relaxed text-base-content/75 md:text-xl">
            We&apos;re here to answer your questions and discuss how we can
            support your healthcare needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
