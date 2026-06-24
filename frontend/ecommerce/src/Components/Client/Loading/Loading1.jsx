const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <h1 className="text-4xl font-black tracking-tight text-primary mb-8 text-center leading-none">
          MODERN
          <br />
          COMMERCE
        </h1>

        {/* Spinner */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
        </div>

        {/* Loading Text */}
        <p className="mt-8 text-on-surface-variant font-medium tracking-wide">
          Loading...
        </p>

        {/* Dots */}
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
