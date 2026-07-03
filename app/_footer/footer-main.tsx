import FooterCompanyInfo from "./footer-company-info";
import FooterExplore from "./footer-explore";
import FooterOffice from "./footer-office";

const FooterMain = () => {
  return (
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      {/* Company Info */}
      <FooterCompanyInfo />

      {/* Explore */}
      <FooterExplore />

      {/* Office */}
      <FooterOffice />
    </div>
  );
};

export default FooterMain;
