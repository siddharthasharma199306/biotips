import Link from "next/link";

const GetInTouchCTA = () => {
  return (
    <div className="navbar-end">
      <Link
        href="/contact"
        className="btn rounded-full bg-red-700 text-white hover:bg-red-800 border-none"
      >
        Get in touch
      </Link>
    </div>
  );
};

export default GetInTouchCTA;
