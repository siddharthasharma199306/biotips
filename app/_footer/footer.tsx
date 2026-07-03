import FooterCopyrightSection from "./footer-copyright-section";
import FooterMain from "./footer-main";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        {/* Footer Main */}
        <FooterMain />

        {/* Copyright Section */}
        <FooterCopyrightSection />
      </div>
    </footer>
  );
};

export default Footer;
