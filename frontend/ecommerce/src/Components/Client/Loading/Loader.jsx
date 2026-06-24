// import {
//   ShoppingCart,
//   Package,
//   Store,
//   BadgeDollarSign,
//   Truck,
//   CreditCard,
// } from "lucide-react";

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 z-[9999] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center">
//       {/* Background Glow */}
//       <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/20 blur-[150px] animate-pulse"></div>

//       <div className="relative flex flex-col items-center">
//         {/* Logo */}
//         <h1 className="text-5xl font-black text-white tracking-tight mb-12 text-center">
//           MODERN
//           <br />
//           <span className="text-primary">COMMERCE</span>
//         </h1>

//         {/* Loader */}
//         <div className="relative flex items-center justify-center">
//           {/* Outer Ring */}
//           <div className="absolute w-72 h-72 border border-primary/20 rounded-full animate-spin duration-[15s]"></div>

//           {/* Middle Ring */}
//           <div className="absolute w-56 h-56 border border-purple-400/30 rounded-full animate-spin duration-[10s] [animation-direction:reverse]"></div>

//           {/* Inner Ring */}
//           <div className="absolute w-40 h-40 border border-cyan-400/30 rounded-full animate-spin duration-[8s]"></div>

//           {/* Orbit 1 */}
//           <div className="absolute w-72 h-72 animate-spin duration-[10s]">
//             <Package className="absolute top-0 left-1/2 -translate-x-1/2 text-primary w-9 h-9" />
//           </div>

//           {/* Orbit 2 */}
//           <div className="absolute w-56 h-56 animate-spin duration-[7s] [animation-direction:reverse]">
//             <Truck className="absolute top-0 left-1/2 -translate-x-1/2 text-green-400 w-8 h-8" />
//           </div>

//           {/* Orbit 3 */}
//           <div className="absolute w-40 h-40 animate-spin duration-[5s]">
//             <CreditCard className="absolute top-0 left-1/2 -translate-x-1/2 text-cyan-400 w-7 h-7" />
//           </div>

//           {/* Left */}
//           <div className="absolute w-72 h-72 animate-spin duration-[12s]">
//             <Store className="absolute left-0 top-1/2 -translate-y-1/2 text-pink-400 w-8 h-8" />
//           </div>

//           {/* Right */}
//           <div className="absolute w-72 h-72 animate-spin duration-[12s]">
//             <BadgeDollarSign className="absolute right-0 top-1/2 -translate-y-1/2 text-yellow-400 w-8 h-8" />
//           </div>

//           {/* Center Circle */}
//           <div className="relative w-28 h-28 rounded-full bg-gradient-to-r from-primary via-purple-500 to-cyan-400 shadow-[0_0_80px_rgba(59,130,246,0.7)] flex items-center justify-center animate-pulse">
//             <ShoppingCart
//               className="text-white w-14 h-14 animate-bounce"
//               strokeWidth={2.5}
//             />
//           </div>
//         </div>

//         {/* Text */}
//         <div className="mt-20 flex flex-col items-center">
//           <h2 className="text-white text-2xl font-bold tracking-wide">
//             Loading Store
//           </h2>

//           <p className="text-gray-400 mt-2">
//             Preparing your shopping experience
//           </p>

//           {/* Animated dots */}
//           <div className="flex gap-3 mt-8">
//             <div className="w-3 h-3 rounded-full bg-primary animate-bounce"></div>

//             <div
//               className="w-3 h-3 rounded-full bg-purple-400 animate-bounce"
//               style={{ animationDelay: "0.2s" }}
//             ></div>

//             <div
//               className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce"
//               style={{ animationDelay: "0.4s" }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loader;
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
