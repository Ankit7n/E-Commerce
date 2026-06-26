const AboutUs = () => {
  return (
    <main>
      {/* <!-- Hero Section --> */}
      <section className="relative hero-pattern pt-2xl pb-3xl px-margin-mobile md:px-0">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-xl items-center">
          <div className="space-y-lg animate-in slide-in-from-left duration-700">
            <span className="inline-block px-sm py-xs bg-secondary-container text-on-secondary-container text-label-sm font-label-sm rounded-lg">
              Est. 2024
            </span>
            <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg leading-tight text-primary">
              Pioneering the Future <br /> of Digital Trade.
            </h1>
            <p className="text-body-lg font-body-lg text-secondary max-w-lg">
              Modern Commerce is a high-performance ecosystem dedicated to
              bringing curated, high-quality products directly to your doorstep
              with efficiency and style.
            </p>
            <div className="flex gap-md">
              <button className="bg-primary-container text-on-primary px-xl py-md rounded-xl font-bold hover:opacity-90 active:scale-95 transition-all shadow-md">
                Explore Catalog
              </button>
              <button className="border border-outline text-primary px-xl py-md rounded-xl font-bold hover:bg-surface-container-low transition-all">
                Our Method
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 aspect-video md:aspect-square">
              <img
                className="w-full h-full object-cover"
                data-alt="A cinematic, high-contrast photograph of a sleek, modern corporate office interior with glass walls and minimalist furniture. The lighting is bright and clean, reflecting a professional light-mode aesthetic with deep navy and vibrant blue accents throughout the space. Successful professionals collaborate in the background of this high-tech environment."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQw2FnXPQJUswx23iVGbIvtTdt8oRnmF9izFI-qY0IFpO83In-lwjkFwSBNkZRjQE0r-Oai2ANG4Supt9Lrb9LRSy-5IMLIJq9vp5ALL1EdaS_lSAbdSP6lqQRYAEK2M4fSwdlOIWu7vclm4UY7vXbHXTQzUUxGHMucRBPckcV90R3EaVQziMMvIiP7PvZcxiQY6k_FMJ9EkLlFTMzuq7XTmKUmHYNtJzcF34ru_do4CP-og_RAEDz-NvlaaWiIBIoxAAjNG4uVPwu"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Story / Mission --> */}
      <section className="py-3xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile">
          <div className="grid md:grid-cols-12 gap-xl items-start">
            <div className="md:col-span-4 sticky top-24">
              <h2 className="text-headline-lg font-headline-lg text-on-background mb-md">
                Our Story
              </h2>
              <div className="h-1 w-16 bg-primary rounded-full"></div>
            </div>
            <div className="md:col-span-8 space-y-lg text-body-lg font-body-lg text-on-surface-variant">
              <p>
                Modern Commerce began with a simple observation: the digital
                marketplace was cluttered with quantity over quality. Our
                founders envisioned a platform where every single item served a
                purpose and met the highest standards of craftsmanship. We don't
                just sell products; we curate experiences that enhance your
                daily life.
              </p>
              <p>
                From our humble beginnings as a specialized tech boutique to the
                multi-vertical powerhouse we are today, our commitment to
                excellence has never wavered. We bridge the gap between global
                manufacturers and the modern consumer, ensuring that every
                transaction is seamless, secure, and satisfying.
              </p>
              {/* <!-- Categorized Mission --> */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-md pt-lg">
                <div className="p-lg bg-surface-container rounded-xl border border-outline-variant hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-primary mb-sm">
                    devices
                  </span>
                  <h3 className="text-label-md font-label-md text-on-background mb-xs">
                    Electronics
                  </h3>
                  <p className="text-body-sm font-body-sm">
                    Cutting-edge gadgets for a connected life.
                  </p>
                </div>
                <div className="p-lg bg-surface-container rounded-xl border border-outline-variant hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-primary mb-sm">
                    checkroom
                  </span>
                  <h3 className="text-label-md font-label-md text-on-background mb-xs">
                    Fashion
                  </h3>
                  <p className="text-body-sm font-body-sm">
                    Timeless styles for the modern wardrobe.
                  </p>
                </div>
                <div className="p-lg bg-surface-container rounded-xl border border-outline-variant hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-primary mb-sm">
                    face
                  </span>
                  <h3 className="text-label-md font-label-md text-on-background mb-xs">
                    Beauty
                  </h3>
                  <p className="text-body-sm font-body-sm">
                    Ethical and effective skincare solutions.
                  </p>
                </div>
                <div className="p-lg bg-surface-container rounded-xl border border-outline-variant hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-primary mb-sm">
                    home
                  </span>
                  <h3 className="text-label-md font-label-md text-on-background mb-xs">
                    Home
                  </h3>
                  <p className="text-body-sm font-body-sm">
                    Curated decor for elevated living spaces.
                  </p>
                </div>
                <div className="p-lg bg-surface-container rounded-xl border border-outline-variant hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-primary mb-sm">
                    fitness_center
                  </span>
                  <h3 className="text-label-md font-label-md text-on-background mb-xs">
                    Fitness
                  </h3>
                  <p className="text-body-sm font-body-sm">
                    Tools to empower your physical journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Core Values Bento Grid --> */}
      <section className="py-3xl bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile text-center mb-2xl">
          <h2 className="text-headline-lg font-headline-lg text-on-background mb-sm">
            Guided by Core Values
          </h2>
          <p className="text-body-md font-body-md text-secondary max-w-2xl mx-auto">
            Our identity is built on a foundation of three fundamental pillars
            that drive every decision we make as a company.
          </p>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile grid grid-cols-1 md:grid-cols-3 gap-lg">
          {/* <!-- Quality --> */}
          <div className="group relative overflow-hidden bg-white p-2xl rounded-3xl shadow-sm border border-outline-variant hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 p-lg opacity-10 group-hover:scale-125 transition-transform duration-500">
              <span className="material-symbols-outlined text-[120px] text-primary">
                verified
              </span>
            </div>
            <div className="relative z-10 space-y-md">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariantSettings: "'FILL : 1" }}
                >
                  verified
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-background">
                Quality
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                We partner with artisans and manufacturers who prioritize
                longevity and durability above all else. Every product undergoes
                rigorous internal review.
              </p>
            </div>
          </div>
          {/* <!-- Innovation --> */}
          <div className="group relative overflow-hidden bg-primary p-2xl rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 text-white">
            <div className="absolute top-0 right-0 p-lg opacity-20 group-hover:scale-125 transition-transform duration-500">
              <span className="material-symbols-outlined text-[120px] text-white">
                lightbulb
              </span>
            </div>
            <div className="relative z-10 space-y-md">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-white"
                  style={{ fontVariantSettings: "'FILL : 1" }}
                >
                  lightbulb
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md">Innovation</h3>
              <p className="text-on-primary-container opacity-90">
                Embracing the latest logistical technologies to ensure your
                experience is faster, smarter, and more environmentally
                conscious.
              </p>
            </div>
          </div>
          {/* <!-- Customer Focus --> */}
          <div className="group relative overflow-hidden bg-white p-2xl rounded-3xl shadow-sm border border-outline-variant hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 p-lg opacity-10 group-hover:scale-125 transition-transform duration-500">
              <span className="material-symbols-outlined text-[120px] text-primary">
                group
              </span>
            </div>
            <div className="relative z-10 space-y-md">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariantSettings: "'FILL : 1" }}
                >
                  group
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-background">
                Customer Focus
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Our community is the heartbeat of Modern Commerce. We listen,
                adapt, and evolve based on your feedback and needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Newsletter CTA --> */}
      <section className="max-w-container-max mx-auto px-margin-mobile my-3xl">
        <div className="relative rounded-3xl bg-inverse-surface p-2xl md:p-3xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              className="w-full h-full object-cover"
              data-alt="A sophisticated abstract background with flowing gradient lines in deep navy and electric blue. The style is minimalist and modern, creating a sense of high-tech connectivity and professional elegance suited for a premium ecommerce brand's call to action section."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWIsqhBmB37k7HuQjYbE-NBwoFwlsCaSwxblzOqwu_qRhgDAy25clcL1mk0fHcTAtGbxMWR91EwfzBBGZ7NvlNZAZu9XIdd2PoQJ-YH-SpNHBg4dpMBIolq-et1zuOChHyKH6eIU8b8JDgW9HsUvfLd_05JToe_O3U9o9GjNxIktfPNZJvLJmfY_73AQ7VZa6dx1LXGXyATSWW4kkifZNqDF9-zEist6I0ZmJrFACvytuzzcdWACt9e2r58vJ7MFDe3KkdrO01VR7a"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center text-center space-y-lg max-w-2xl mx-auto">
            <h2 className="text-headline-lg font-headline-lg text-white">
              Join the Community
            </h2>
            <p className="text-body-lg font-body-lg text-surface-variant">
              Get exclusive access to new launches, curated lists, and insider
              deals before anyone else.
            </p>
            <form className="flex flex-col md:flex-row w-full gap-md pt-md">
              <input
                className="flex-grow px-lg py-md rounded-xl bg-white border-0 focus:ring-2 focus:ring-primary text-on-background"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="bg-primary-container text-white px-xl py-md rounded-xl font-bold hover:opacity-90 transition-all"
                type="submit"
              >
                Subscribe
              </button>
            </form>
            <p className="text-label-sm font-label-sm text-outline">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default AboutUs;
