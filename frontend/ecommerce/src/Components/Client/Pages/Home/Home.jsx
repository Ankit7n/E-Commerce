import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const store = useSelector((store) => store.product);
  const navigate = useNavigate();

  return (
    <main className="bg-background text-on-background font-body-md selection:bg-primary selection:text-white">
      {/* Hero Section  */}
      <section className="relative hero-gradient overflow-hidden py-3xl md:py-3xl">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="z-10 text-center lg:text-left">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md mb-md">
              NEW SEASON 2024
            </span>
            <h1 className="font-display-lg text-display-lg mb-md leading-tight">
              Define Your Style with Precision.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant    mb-xl ">
              Experience the pinnacle of high-performance commerce. Curated
              collections, lightning-fast delivery, and quality that speaks
              htmlFor itself.
            </p>
            <div
              onClick={() => navigate("/client/shop")}
              className="flex flex-col sm:flex-row gap-md justify-center lg:justify-start"
            >
              <button className="bg-cta-orange text-white px-xl py-md rounded-lg font-headline-md font-bold shadow-lg hover:scale-105 transition-transform active:scale-95 cursor-pointer">
                Shop Now
              </button>
              <button className="bg-surface border-2 border-outline-variant text-on-surface px-xl py-md rounded-lg font-headline-md font-bold hover:bg-surface-container-low transition-colors">
                View Lookbook
              </button>
            </div>
            <div className="mt-xl flex items-center justify-center lg:justify-start gap-lg text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  local_shipping
                </span>{" "}
                <span className="font-label-md">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  verified
                </span>{" "}
                <span className="font-label-md">2-Year Warranty</span>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-12 -right-12 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
            <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                alt="Featured Product"
                className="w-full h-[600px] object-cover"
                data-alt="A premium minimalist watch resting on a sleek white marble surface. The lighting is crisp and natural, emphasizing the metallic textures and high-end design. The background is a clean, modern studio setting with soft shadows, creating a sophisticated and professional atmosphere in line with a high-contrast corporate aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD65IGMG0NFAFgt686biavXFrq2tNKW882382_q2EFlLMswTYsxzKaQv0LgcRMHBLibsQYwUI7hE5A21RQhbG1L6RXrO7lo15F20kLhzQJaEhlufc3SaAZmOHkSy0xNavj4gGubAwMZd5JHEVGMN2kL4sWWbBHjG0liPvQEjFYCdX5OreaIHjL2Jd1fe11cituBe6sj7S5q3LjnyLq48tx61aTc2UJlEoWfj7z59aDr05AehSJBBtTDR-I6DPOemb_RZotI9kACerHK"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Featured Categories  */}
      <section className="py-3xl max-w-container-max mx-auto px-gutter">
        <div className="flex justify-between items-end mb-xl">
          <div>
            <h2 className="font-headline-lg text-headline-lg">
              Shop by Category
            </h2>
            <p className="text-on-surface-variant font-body-md">
              Discover our expertly curated selections.
            </p>
          </div>
          <NavLink
            to="/client/shop"
            className="text-primary font-bold flex items-center gap-2 hover:underline"
          >
            View All{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </NavLink>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg h-[600px]">
          <div className="group relative md:col-span-2 overflow-hidden rounded-xl bg-surface-container">
            <img
              alt="Electronics"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="A cinematic overhead shot of premium high-tech electronic gadgets including a laptop, smartphone, and wireless earbuds arranged neatly on a dark gray workspace. The scene is illuminated with cool blue accent lighting and sharp highlights, reflecting a professional and efficient technological environment."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhEUyJPfKUmBA4E4WlXujMg2YSEDsS1rB34DdDhhSz8owb2fIhUic9otleti0n8CNIvHmEKW_GpowKUUHKlM6NC37cB19yEDZbL1DKs1c4mFKnBImeZoHzP7Rl_mZh3fd4zp8ptKqFYbjT3_ljWIC3WJzqd0cBQ5bEL53sp8uNZuidIyOZbI_2vzbdTli5MW3WzbhvNj8xIHPunlkJIrAGRZgj9JOmumQlUP0DotM4s5u0O1YQBFQdU4hccR53HlvHfzmGdej0bZG9"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-xl">
              <h3 className="text-white font-headline-lg text-headline-lg mb-sm">
                Electronics
              </h3>
              <p className="text-white/80 mb-md ">
                Next-generation tech htmlFor the modern workspace.
              </p>
              <button className="bg-white text-on-background px-lg py-sm rounded-lg font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                Explore Now
              </button>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-lg">
            <div className="group relative overflow-hidden rounded-xl bg-surface-container">
              <img
                alt="Fashion"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="A close-up of high-end fashion apparel hanging on a minimalist clothing rack. The fabrics are high-quality linen and silk in neutral tones of beige and cream. The setting is a bright, upscale boutique with soft, diffused sunlight, emphasizing clean lines and a premium lifestyle aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOxA1b-dVibzoq1Jq0j-jCexTWaG7EFMOhyDxHYtJOpNrvdwPFyvVSZjEmIO1Ui5iNEEz9WQT_yfkO94HF6Olswl97G5__Aj4my0ibwKvG7l8VsTR8mCfSosJ8TB3GMPq9jeNeyGSZvfX3bOdJtiB_HTdh3zyVCDhRLKJRVPXqeXLYkleQDf51-EvjJEJgT6cGrMQUIBw-swAOFuVwxXCPzp7pXGo0UcJvaKzOAHc9U8d3POtcyIRwkt2mkHAoujuTktaUpJ-ozN6D"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-lg">
                <h3 className="text-white font-headline-md text-headline-md">
                  Fashion
                </h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl bg-surface-container">
              <img
                alt="Home"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="A beautifully designed modern living room featuring a minimalist sofa, a sleek coffee table, and artistic ceramic decor. The room is filled with soft natural light, highlighting a palette of warm grays and muted blues. The overall mood is peaceful, orderly, and contemporary."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASiFEaOJ1OQKXRguV8HRUUd43eH5I1B-H-pzY7gPnowkMbui6SJEDvqe81NGAul8x8cLCwKlYzCGZ9ZtLRCBGfkbtGIvPtiO6PB95BdxsDuXNViz9-CScVdicjvO2nxPQSHSvTdEQ4CEVlyYuN_wVh_D0_dchAcBBDBVBBms6ZNhOP-mVT5izlK_7g6A5-sOm85eG8D_YdtnHBJUwysyxjPhQPLs8fsQcy9q5GLphhC8WMI5X65z-mKLVQMw-jYSqOTXafHmsofCf-"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-lg">
                <h3 className="text-white font-headline-md text-headline-md">
                  Home
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Grid  */}
      <section className="py-3xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-2xl">
            <h2 className="font-headline-lg text-headline-lg mb-sm">
              Featured Products
            </h2>
            <p className="text-on-surface-variant font-body-md">
              Handpicked quality htmlFor our discerning customers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
            {/* Product Cards  */}
            <div className="group bg-surface rounded-xl p-4 shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-primary/20">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-md bg-surface-container cursor-pointer">
                <img
                  onClick={() => navigate("/client/shop")}
                  alt="Product"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-alt="A pair of high-fidelity wireless headphones in deep matte navy blue, positioned elegantly on a minimalist stand. The lighting is dramatic, with side-lighting that defines the contours and texture of the ear cups. The background is a clean, dark surface that emphasizes the professional and premium nature of the product."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvG92EuX7vclZpfgqucfHtpuiZh5CAw-4leNyz05S-xJ9OZIWSjI7oldmVlNhRbZ21LGLQOmPU2NsB4dJeqV8617p8kME1U2Xj2ZRD02qa_51tE41sp-eKF0e52HNxrhMTp9ueFexLkFlQEPJzSr4cHBbj6W89yjTWQtORjyqEq0toS2MmNy0Hc0ij14P1XyZeckBXwXrwElyu6HyDQGuJ1YXUVI3iAiyQ_kixyisS_YrPxSws7xnH7NNApAZKNlmRErGi83SweUBt"
                />
                <span className="absolute top-2 left-2 bg-primary text-on-primary text-xs font-bold px-2 py-1 rounded">
                  HOT
                </span>
                <button className="absolute top-2 right-2 p-2 bg-white/90 rounded-full text-on-surface hover:text-error transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    favorite
                  </span>
                </button>
              </div>
              <h4 className="font-headline-md text-[18px] mb-xs group-hover:text-primary transition-colors">
                Elite Audio Pro X1
              </h4>
              <div className="flex items-center gap-1 mb-sm">
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  star
                </span>
                <span className="text-body-sm text-on-surface-variant ml-1">
                  (128)
                </span>
              </div>
            </div>
            {/* Repeated 7 more times htmlFor 8 products total */}
            {/*  Product 2  */}
            <div className="group bg-surface rounded-xl p-4 shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-primary/20">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-md bg-surface-container">
                <img
                  onClick={() => navigate("/client/shop")}
                  alt="Product"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  data-alt="A pair of vibrant orange performance running shoes shown mid-air against a clean white background. The lighting is bright and high-key, highlighting the intricate mesh texture and aerodynamic silhouette of the footwear. The overall mood is energetic and focused on high performance and athletic excellence."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXz1m4M0VAiNjPw5GvZRMGkFUNILFaeTW2W5fZyL2x4b0qIV4bqsXu1lzz7sqTovDbeBc87S_zImD6ca1_lh-jLQr5bNSgeAYdLGARaS7tknQtTybYpp1peCVh8HamMr2ZzlcxdF57ehroyUWgVckglbXM21qItIYbOtN_if0vLS0v3UWhPBVDVLtlsM7qXpGU7gGFW0as6vAlJvIZ71orx79VpHWHAgGJqLZcDdhxyrYdRcfmjpzExBfdFhwsH0vR-7RqdQiqnpeJ"
                />
                <button className="absolute top-2 right-2 p-2 bg-white/90 rounded-full text-on-surface hover:text-error transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    favorite
                  </span>
                </button>
              </div>
              <h4 className="font-headline-md text-[18px] mb-xs group-hover:text-primary transition-colors">
                Velocity Run 3.0
              </h4>
              <div className="flex items-center gap-1 mb-sm">
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="text-body-sm text-on-surface-variant ml-1">
                  (254)
                </span>
              </div>
            </div>
            {/* <!-- Product 3 --> */}
            <div className="group bg-surface rounded-xl p-4 shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-primary/20">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-md bg-surface-container">
                <img
                  onClick={() => navigate("/client/shop")}
                  alt="Product"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  data-alt="A minimalist white ceramic table lamp with a soft glow, placed on a light oak nightstand next to a neatly stacked book. The background is a soft-focus bedroom wall in a warm off-white tone. The lighting is warm and cozy, creating a peaceful and serene evening atmosphere in a modern home."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3mKniNH8UQR--K1uWeAnAXb7PuY4ut2DBNZW5A1jift19pjFLEYtv1VC8lhDL4NMHNNDHPRz1QTWA1CGNw626KpC8tcnMj-liv8qAt-pakK3tAuv6HO3H9EfXOmlcQOKGPQEcNi_AjCs0KjRrGdhNmYHQjzy_KAuhxQAIhweJwDXXAG81LSFyt9gB1kV2yfVzjtLSysVSj8f0irhjBPzvwS3PzuC8kZeibV-3ZLxfiL-QS4wXq3xXxVfeikZNCNzXsVmFZKEh6toS"
                />
                <span className="absolute top-2 left-2 bg-cta-orange text-white text-xs font-bold px-2 py-1 rounded">
                  20% OFF
                </span>
                <button className="absolute top-2 right-2 p-2 bg-white/90 rounded-full text-on-surface hover:text-error transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    favorite
                  </span>
                </button>
              </div>
              <h4 className="font-headline-md text-[18px] mb-xs group-hover:text-primary transition-colors">
                Nordic Glow Lamp
              </h4>
              <div className="flex items-center gap-1 mb-sm">
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  star
                </span>
                <span className="text-body-sm text-on-surface-variant ml-1">
                  (89)
                </span>
              </div>
            </div>
            {/* <!-- Product 4 --> */}
            <div className="group bg-surface rounded-xl p-4 shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-primary/20">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-md bg-surface-container">
                <img
                  onClick={() => navigate("/client/shop")}
                  alt="Product"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  data-alt="A vintage-style instant camera in a soft pastel yellow color, sitting on a weathered wooden table outdoors. The morning sun casts long, gentle shadows and highlights the retro design elements. The atmosphere is nostalgic and artistic, emphasizing creative expression and a timeless aesthetic."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2MUenv7i5ZGTcw7-Cso86v0rp4rAEjTMnmtZCyuRKncl-t0JXaizMHTnCrjeXuuE7rwKipaae38zDddYoWOAKPopjb_DXvU9j8aSKiQmNBBuc5XbG2l3S5LyOxH-kWR3ZxQGy2fBLbfgU5borb383Zf56tqMOhZ7h8W5nyelS_nY-DPFpRLA30qG0JOID6SsxCWigTP_-3tr-iIvhOT-k15Q0rwLQWobSOd1QS6DrLj0-kdOGZSnShSl4zWMAXt_SLY0DyYsYrfdp"
                />
                <button className="absolute top-2 right-2 p-2 bg-white/90 rounded-full text-on-surface hover:text-error transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    favorite
                  </span>
                </button>
              </div>
              <h4 className="font-headline-md text-[18px] mb-xs group-hover:text-primary transition-colors">
                RetroSnap Instant
              </h4>
              <div className="flex items-center gap-1 mb-sm">
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 0.5" }}
                >
                  star
                </span>
                <span className="text-body-sm text-on-surface-variant ml-1">
                  (42)
                </span>
              </div>
            </div>
            {/* <!-- Row 2 --> */}
            <div className="group bg-surface rounded-xl p-4 shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-primary/20">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-md bg-surface-container">
                <img
                  onClick={() => navigate("/client/shop")}
                  alt="Product"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  data-alt="A designer leather backpack in rich cognac brown, hanging on a white wall hook in a minimalist hallway. The lighting is soft and even, highlighting the premium stitching and high-quality grain of the leather. The environment is clean and organized, conveying a sense of professional urban style."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChpZkrcFwYPRQ7okMVzo8zUCoIgR6xjgJ8xQVN2YcJ6-7DW4AjssVSa0JY_WlboMoEGogi_43vB-jydTuYZOWUsemApW-GT6s5SYideAj8cyrW4DsApWQatx8MQJsmtHmmZts1nwVBYA9KOYdOdopiSGNIEXzu1mL5b0c2anUqk7jCRsdaAdiBwcav0zCitWNVrz6djmZfWOdJVDTv473qBcYSXwqVnbPLYo9-LUmAZ4mN3dH8L-kQQ4M-Zu-UDrPNQdsKOIvAEbD4"
                />
                <button className="absolute top-2 right-2 p-2 bg-white/90 rounded-full text-on-surface hover:text-error transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    favorite
                  </span>
                </button>
              </div>
              <h4 className="font-headline-md text-[18px] mb-xs group-hover:text-primary transition-colors">
                Urban Commuter Bag
              </h4>
              <div className="flex items-center gap-1 mb-sm">
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="text-body-sm text-on-surface-variant ml-1">
                  (312)
                </span>
              </div>
            </div>
            <div className="group bg-surface rounded-xl p-4 shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-primary/20">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-md bg-surface-container">
                <img
                  onClick={() => navigate("/client/shop")}
                  alt="Product"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  data-alt="A pair of sleek aviator sunglasses with polarized dark lenses, resting on a polished chrome surface. The lighting creates sharp, clean reflections and highlights the metallic frame. The mood is sophisticated and modern, reflecting a high-end luxury lifestyle and precision engineering."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfvNXcaBCbwX3dzCLD5VxFzPu4M2d3jHZ3CJeZeFVZuuEWrnNMuJWwzPV3vidbYjonAYa5XPYmTtKIy49iSOPtUg-Tq6e5hTu7CIVnbcclzYkZwsDsA1hQVHu6H1QUBcv9nWb0GBRqokh0hgJpblFe8P07pEodUQ0G1Uw0XMTRtdKu0oJshOCDqX4q_AZxWgtfsxFO_ha62iN-veBdZPbePBFuGJ_1JJrk3MIBIcAjhSwLvPHapOoGDevgUOGyqiMlTz5NLs37M79B"
                />
                <button className="absolute top-2 right-2 p-2 bg-white/90 rounded-full text-on-surface hover:text-error transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    favorite
                  </span>
                </button>
              </div>
              <h4 className="font-headline-md text-[18px] mb-xs group-hover:text-primary transition-colors">
                Precision Aviators
              </h4>
              <div className="flex items-center gap-1 mb-sm">
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  star
                </span>
                <span className="text-body-sm text-on-surface-variant ml-1">
                  (67)
                </span>
              </div>
            </div>
            <div className="group bg-surface rounded-xl p-4 shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-primary/20">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-md bg-surface-container">
                <img
                  onClick={() => navigate("/client/shop")}
                  alt="Product"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  data-alt="A pair of high-performance wireless earbuds in a sleek white charging case, shown on a neutral textured background. The lighting is soft and professional, with gentle highlights on the smooth plastic surfaces. The overall aesthetic is clean, minimalist, and focused on modern technology and portability."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Zxd9KVh20rBIi7weUx-GYYIn6a_UZ8-wBFLfINMN9dQ5IUn9NMqjqEEEj5MLrMKDeAjD15KiF5XxgQSujQyYC8foGTKAP2qF5nXt9z6TCZ4dY-CZg_y4b086BGLNus0xo2oIlo_3pK91v8gTSLf2NuJ5whPpgk-ul9cN6wIjyRG5a-lHZSc6BNKazWcHILUi_fQzhvfFaOyVADJ0CFeoiZTHhpoUk4n_0HhakydS4Oa3Bot_62mMqjH0_5v4EwhvXZDFB4cDLsdj"
                />
                <button className="absolute top-2 right-2 p-2 bg-white/90 rounded-full text-on-surface hover:text-error transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    favorite
                  </span>
                </button>
              </div>
              <h4 className="font-headline-md text-[18px] mb-xs group-hover:text-primary transition-colors">
                PureAudio Buds
              </h4>
              <div className="flex items-center gap-1 mb-sm">
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="text-body-sm text-on-surface-variant ml-1">
                  (412)
                </span>
              </div>
            </div>
            <div className="group bg-surface rounded-xl p-4 shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-primary/20">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-md bg-surface-container">
                <img
                  onClick={() => navigate("/client/shop")}
                  alt="Product"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  data-alt="A modern smartwatch with a sleek black band and a high-resolution glowing digital display showing fitness metrics. The watch is placed on a dark, reflective granite surface under soft studio lighting. The scene represents a professional, health-conscious, and technology-driven lifestyle."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwvw_FgLQCl8cFjCOJr3WixlhemBpi4ZPn0o5AZdnhr15SdkbK55blldoq-BHHrSB8ei2CZ8ejsOh9I34oBHdm_TNxnGbzdtXWj2jHhYZZGIwgDaggm_DS_poSY9lnCebukdhV6wzZi1qBsisHo9YTApLl5imZudPyj78vTc41728yTFNCstot2cMMeWYKpWolmxXm0iPx3I1kAqcsYRV94J0utdpXqLZsZvVdUPVY6GOZs_SwFYBaog_mIejfSAtUJmLdvqrMce7J"
                />
                <button className="absolute top-2 right-2 p-2 bg-white/90 rounded-full text-on-surface hover:text-error transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    favorite
                  </span>
                </button>
              </div>
              <h4 className="font-headline-md text-[18px] mb-xs group-hover:text-primary transition-colors">
                CoreFit Watch 2
              </h4>
              <div className="flex items-center gap-1 mb-sm">
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary text-sm"
                  style={{ fontVariationSettings: "'FILL' 0.5" }}
                >
                  star
                </span>
                <span className="text-body-sm text-on-surface-variant ml-1">
                  (188)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Promotion Section --> */}
      <section className="py-2xl bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                height="40"
                id="grid"
                patternUnits="userSpaceOnUse"
                width="40"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                ></path>
              </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10 flex flex-col md:flex-row items-center justify-between gap-xl">
          <div className="text-center md:text-left">
            <h2 className="font-display-lg text-on-primary text-display-lg mb-sm">
              Seasonal Clearance Event
            </h2>
            <p className="text-on-primary-container font-body-lg mb-xl ">
              Take an extra 30% off all clearance items. Use code{" "}
              <span className="font-black bg-white/20 px-2 py-0.5 rounded">
                SEASON30
              </span>{" "}
              at checkout.
            </p>
            <div className="flex flex-wrap gap-md justify-center md:justify-start">
              <button className="bg-white text-primary px-xl py-md rounded-lg font-bold shadow-lg hover:bg-surface-container-low transition-colors">
                Shop the Sale
              </button>
              <button className="border-2 border-white text-white px-xl py-md rounded-lg font-bold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden lg:block w-1/3">
            <div className="relative">
              <div className="absolute -inset-4 bg-cta-orange rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="bg-white p-xl rounded-2xl shadow-2xl transform rotate-3">
                <div className="text-primary font-black text-6xl text-center">
                  30%
                </div>
                <div className="text-on-surface-variant font-bold text-xl text-center uppercase tracking-widest">
                  OFF SITEWIDE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Newsletter Section --> */}
      <section className="py-3xl bg-surface border-t border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="bg-surface-container-highest rounded-3xl p-xl md:p-3xl flex flex-col lg:flex-row items-center justify-between gap-xl">
            <div className="text-center lg:text-left ">
              <h2 className="font-headline-lg text-headline-lg mb-md">
                Stay Ahead of the Curve
              </h2>
              <p className="text-on-surface-variant font-body-md">
                Subscribe to get early access to new arrivals, exclusive
                promotions, and premium styling tips.
              </p>
            </div>
            <form className="w-full  flex flex-col sm:flex-row gap-md">
              <div className="grow">
                <input
                  className="w-full px-lg py-md rounded-lg border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 bg-surface"
                  placeholder="Enter your email address"
                  type="email"
                />
              </div>
              <button
                className="bg-primary text-on-primary px-xl py-md rounded-lg font-bold hover:bg-primary-container transition-colors shadow-md"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
