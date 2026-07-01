"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8">
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx({
                    "font-semibold text-primary": isActive(item.href),
                  })}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="px-0 hover:bg-transparent focus-visible:outline-none"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/site/header-logo.png`}
            alt="Biotips"
            width={180}
            height={50}
            sizes="180px"
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Desktop nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "relative rounded-full px-4 py-2 transition-colors duration-200",
                    {
                      "font-semibold text-primary": active,
                      "text-base-content hover:text-primary": !active,
                    },
                  )}
                >
                  {item.label}

                  {/* Active indicator */}
                  <span
                    className={clsx(
                      "absolute bottom-0 left-1/2 h-0.75 w-6 -translate-x-1/2 rounded-full bg-primary transition-all duration-300",
                      {
                        "opacity-100": active,
                        "opacity-0": !active,
                      },
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="navbar-end">
        <Link
          href="/contact"
          className="btn rounded-full bg-red-700 text-white hover:bg-red-800 border-none"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
