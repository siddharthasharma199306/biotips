import DesktopNav from "./desktop-nav";
import GetInTouchCTA from "./get-in-touch-cta";
import Logo from "./logo";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8">
      <div className="navbar-start">
        {/* Mobile menu */}
        <MobileNav />

        {/* Logo */}
        <Logo />
      </div>

      {/* Desktop nav */}
      <DesktopNav />

      {/* Get in touch CTA */}
      <GetInTouchCTA />
    </div>
  );
};

export default Navbar;
