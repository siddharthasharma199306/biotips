// ui/footer.tsx

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div>
            <h2 className="mb-5 text-2xl font-bold text-primary">
              Biotips Pharmaceutical
            </h2>

            <p className="max-w-sm leading-7 text-base-content/70">
              Dedicated to safeguarding healthy lives through consistent quality
              and scientifically backed formulations.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Explore</h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/products"
                  className="transition-colors hover:text-primary"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-primary"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Office */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Office</h3>

            <div className="space-y-2 text-base-content/70">
              <p>Saharanpur</p>
              <p>Uttar Pradesh, India</p>

              <a
                href="mailto:biotipspharma@gmail.com"
                className="inline-block pt-2 transition-colors hover:text-primary"
              >
                biotipspharma@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-base-300 pt-6 text-center text-sm text-base-content/50">
          <p>©2026 Biotips Pharmaceutical. All rights reserved.</p>
          <p className="mt-2">
            Designed and developed by{" "}
            <span className="font-medium text-base-content/70">
              Prapti and Siddhartha
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
