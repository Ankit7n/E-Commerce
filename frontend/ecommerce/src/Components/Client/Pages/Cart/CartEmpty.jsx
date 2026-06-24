import { useNavigate } from "react-router-dom";

const CartEmpty = () => {
  const navigate = useNavigate();
  return (
    <main className="grow flex items-center justify-center p-margin-mobile">
      <div className=" w-full text-center space-y-xl animate-fade-in">
        {/* <!-- Asymmetric/Modern Bento-like layout for empty state illustration --> */}
        <div className="relative mx-auto w-full max-w-100 aspect-square flex items-center justify-center">
          {/* <!-- Background decorative elements for depth --> */}
          <div className="absolute inset-0 bg-primary-container/5 rounded-full blur-3xl transform -scale-x-100 translate-y-8"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/20 rounded-xl blur-2xl rotate-12"></div>
          {/* <!-- Main Image Container with subtle Level 1 Shadow --> */}
          <div className="relative z-10 p-xl bg-surface-container-lowest  shadow-lg border border-outline-variant/30 overflow-hidden group">
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
              <img
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                data-alt="A clean, high-resolution product photography shot of an elegant, minimalist white designer shopping bag sitting on a polished reflective surface. The background is a crisp, bright light-mode white with soft blue ambient shadows. The composition is centered and modern, using the high-contrast corporate aesthetic of the brand Modern Commerce."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQp6AgNEATc_zyIbMX4u9prWUzHsIiLeTV6E8QGBcqxcn7I7Mb-x8fDIe41Q2sHY40Q_L6s2eatw-Zci1ZJlZazBF2WhRjYRCuWp45K8I8ORW-CZe83s4mR0KYqLZ370nThZQYrbg8B_D1gS1K0LJv37vRwd-E-wSts3EZc7k-faB1nIQ7TjUOwQZD9_-XkEOiRFo0bGFbEPY8mKojwb0v1W_kKlcHtLLVZbuVklRgHtlJ4rqSAvAUbtHmBk041IPOb1nxtvd0klzb"
              />
              {/* <!-- Overlay icon for context --> */}
              <div className="absolute -bottom-2 -right-2 bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-headline-md">
                  shopping_bag
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Typography Content --> */}
        <div className="space-y-md">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background tracking-tight">
            Your cart is empty
          </h1>
          <p className="font-body-lg text-body-lg text-secondary  mx-auto leading-relaxed">
            It looks like you haven't added anything to your cart yet. Explore
            our latest collections and find something you'll love.
          </p>
        </div>
        {/* <!-- CTA Actions --> */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-md">
          <button
            onClick={() => navigate("/client/shop")}
            className="w-full sm:w-auto px-2xl py-md bg-primary-container text-on-primary-container font-label-md text-label-md rounded-lg shadow-md hover:brightness-110 active:scale-95 transition-all duration-200 uppercase tracking-wider"
          >
            Start Shopping
          </button>
        </div>
        {/* <!-- Secondary Context: Quick Categories --> */}
        <div className="pt-2xl border-t border-outline-variant/50">
          <p className="font-label-sm text-label-sm text-outline uppercase tracking-widest mb-md">
            Popular Categories
          </p>
          <div className="flex flex-wrap justify-center gap-sm mb-10">
            <a
              className="px-md py-xs bg-surface-container-high rounded-full font-label-sm text-label-sm text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors"
              href="#"
            >
              Men's Apparel
            </a>
            <a
              className="px-md py-xs bg-surface-container-high rounded-full font-label-sm text-label-sm text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors"
              href="#"
            >
              Women's Collection
            </a>
            <a
              className="px-md py-xs bg-surface-container-high rounded-full font-label-sm text-label-sm text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors"
              href="#"
            >
              Accessories
            </a>
            <a
              className="px-md py-xs bg-surface-container-high rounded-full font-label-sm text-label-sm text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors"
              href="#"
            >
              Home &amp; Living
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
export default CartEmpty;
