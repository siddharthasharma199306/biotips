import Link from "next/link";

const SectionRedirectionLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="btn btn-primary rounded-full px-8">
      {children}
    </Link>
  );
};

export default SectionRedirectionLink;
