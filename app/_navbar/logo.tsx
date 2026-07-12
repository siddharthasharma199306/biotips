import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="px-0 hover:bg-transparent focus-visible:outline-none"
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_ASSET_URL}/site/header-logo.png`}
        alt="Biotips"
        width={180}
        height={50}
        sizes="180px"
        priority
        className="h-12 w-auto object-contain"
      />
    </Link>
  );
};

export default Logo;
