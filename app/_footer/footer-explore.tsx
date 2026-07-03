import Link from "next/link";

const FooterExplore = () => {
  return (
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
          <Link href="/about" className="transition-colors hover:text-primary">
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
  );
};

export default FooterExplore;
