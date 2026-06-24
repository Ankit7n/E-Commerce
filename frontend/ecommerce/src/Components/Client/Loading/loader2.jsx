import { ShoppingCart, Package, Store, BadgeDollarSign } from "lucide-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-9999 bg-background flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <h1 className="text-4xl font-black text-primary tracking-tight text-center mb-8">
          MODERN
          <br />
          COMMERCE
        </h1>

        {/* Animated Icons */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Center icon */}
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-xl">
            <ShoppingCart className="text-white w-10 h-10 animate-pulse" />
          </div>

          {/* Orbiting icons */}
          <div className="absolute inset-0 animate-spin  duration-6000  ">
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <Package className="text-primary w-8 h-8" />
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <Store className="text-primary w-8 h-8" />
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <BadgeDollarSign className="text-primary w-8 h-8" />
            </div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <ShoppingCart className="text-primary w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <p className="mt-10 text-lg font-semibold text-on-surface">
          Loading Products
        </p>

        {/* Animated dots */}
        <div className="flex gap-2 mt-4">
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce"></div>

          <div
            className="w-3 h-3 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></div>

          <div
            className="w-3 h-3 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
