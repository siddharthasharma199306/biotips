import Link from "next/link";

const BackToProducts = () => {
  return (
    <Link
      href="/products"
      className="mb-8 inline-flex items-center gap-2 text-sm text-base-content/70 transition-colors hover:text-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back to Products
    </Link>
  );
};

export default BackToProducts;
