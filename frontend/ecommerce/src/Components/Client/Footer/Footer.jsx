import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <main className="bg-background text-on-background font-body-md selection:bg-primary selection:text-white">
      {/* <!-- Footer --> */}
      <footer className="bg-inverse-surface dark:bg-surface-container-lowest text-inverse-on-surface dark:text-on-surface w-full py-2xl px-gutter mx-auto grid grid-cols-1 md:grid-cols-4 gap-lg">
        <div className="flex flex-col gap-md">
          <span className="text-headline-sm font-headline-sm font-bold text-inverse-on-surface dark:text-on-surface">
            MODERN COMMERCE
          </span>
          <p className="text-surface-variant font-body-sm ">
            Redefining the standard htmlFor modern e-commerce with premium
            products and a seamless shopping experience.
          </p>
          <div className="flex gap-md mt-sm">
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">chat</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-md uppercase tracking-widest text-sm opacity-60">
            Company
          </h4>
          <ul className="flex flex-col gap-sm">
            <li className="">
              <a
                className="text-surface-variant hover:text-on-primary-fixed-variant dark:hover:text-primary transition-colors font-body-sm"
                href="#"
              >
                About Us
              </a>
            </li>
            <li className="">
              <a
                className="text-surface-variant hover:text-on-primary-fixed-variant dark:hover:text-primary transition-colors font-body-sm"
                href="#"
              >
                Careers
              </a>
            </li>
            <li className="">
              <a
                className="text-surface-variant hover:text-on-primary-fixed-variant dark:hover:text-primary transition-colors font-body-sm"
                href="#"
              >
                Press Release
              </a>
            </li>
            <li className="">
              <a
                className="text-surface-variant hover:text-on-primary-fixed-variant dark:hover:text-primary transition-colors font-body-sm"
                href="#"
              >
                Store Locator
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-md uppercase tracking-widest text-sm opacity-60">
            Customer Service
          </h4>
          <ul className="flex flex-col gap-sm">
            <li className="">
              <a
                className="text-surface-variant hover:text-on-primary-fixed-variant dark:hover:text-primary transition-colors font-body-sm"
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li className="">
              <a
                className="text-surface-variant hover:text-on-primary-fixed-variant dark:hover:text-primary transition-colors font-body-sm"
                href="#"
              >
                Shipping Info
              </a>
            </li>
            <li className="">
              <a
                className="text-surface-variant hover:text-on-primary-fixed-variant dark:hover:text-primary transition-colors font-body-sm"
                href="#"
              >
                Returns &amp; Exchanges
              </a>
            </li>
            <li className="">
              <a
                className="text-surface-variant hover:text-on-primary-fixed-variant dark:hover:text-primary transition-colors font-body-sm"
                href="#"
              >
                Gift Cards
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-md uppercase tracking-widest text-sm opacity-60">
            Legal
          </h4>
          <ul className="flex flex-col gap-sm">
            <li className="">
              <a
                className="text-surface-variant hover:text-on-primary-fixed-variant dark:hover:text-primary transition-colors font-body-sm"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li className="">
              <a
                className="text-surface-variant hover:text-on-primary-fixed-variant dark:hover:text-primary transition-colors font-body-sm"
                href="#"
              >
                Terms of Service
              </a>
            </li>
            <li className="">
              <a
                className="text-surface-variant hover:text-on-primary-fixed-variant dark:hover:text-primary transition-colors font-body-sm"
                href="#"
              >
                Cookie Policy
              </a>
            </li>
            <li className="">
              <a
                className="text-surface-variant hover:text-on-primary-fixed-variant dark:hover:text-primary transition-colors font-body-sm"
                href="#"
              >
                Sitemap
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4 border-t border-white/10 pt-lg mt-lg flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="text-surface-variant font-body-sm">
            © 2024 Modern Commerce. All rights reserved.
          </p>
          <div className="flex items-center gap-xl opacity-60">
            <span className="material-symbols-outlined">payments</span>
            <span className="material-symbols-outlined">credit_card</span>
            <span className="material-symbols-outlined">
              account_balance_wallet
            </span>
          </div>
        </div>
      </footer>
      {/* <!-- BottomNavBar (Mobile Only) --> */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface dark:bg-inverse-surface shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] rounded-t-xl border-t border-outline-variant">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold"
              : "text-on-surface-variant font-medium hover:text-primary"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/"
          className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 active:scale-90 transition-transform duration-150"
        >
          <span className="material-symbols-outlined">home</span>
        </NavLink>
        <NavLink
          to="/client/shop"
          className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high active:scale-90 transition-transform duration-150"
        >
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className="text-label-sm font-label-sm">Shop</span>
        </NavLink>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high active:scale-90 transition-transform duration-150">
          <span className="material-symbols-outlined">local_offer</span>
          <span className="text-label-sm font-label-sm">Deals</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high active:scale-90 transition-transform duration-150">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="text-label-sm font-label-sm">Profile</span>
        </a>
      </nav>
    </main>
  );
};
export default Footer;
