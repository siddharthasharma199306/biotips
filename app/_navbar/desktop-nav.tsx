"use client";

import clsx from "clsx";
import Link from "next/link";
import { isActivePath } from "./utils/is-active";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const DesktopNav = () => {
  const pathname = usePathname();
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal gap-2 px-1">
        {navItems.map((item) => {
          const active = isActivePath(pathname, item.href);

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
  );
};

export default DesktopNav;
