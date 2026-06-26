const ContactUs = () => {
  return (
    <main className="min-h-screen">
      {/* <!-- Hero Section --> */}
      <section className="relative bg-surface-container-low py-2xl">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm mb-md">
              GET IN TOUCH
            </span>
            <h1 className="font-display-lg text-display-lg mb-md leading-tight">
              We're here to help you scale your commerce.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Whether you have questions about our enterprise solutions or need
              technical support, our team is ready to connect.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Contact Content (Asymmetric Layout) --> */}
      <section className="max-w-container-max mx-auto px-lg py-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* <!-- Contact Form (Bento Grid Main Cell) --> */}
          <div className="lg:col-span-7 bg-white p-xl rounded-xl shadow-sm border border-outline-variant">
            <h2 className="font-headline-md text-headline-md mb-lg">
              Send us a Message
            </h2>
            <form action="#" className="space-y-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-xs">
                  <label
                    className="font-label-md text-label-md text-on-surface-variant"
                    for="name"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full h-12 px-md bg-surface-bright border border-outline-variant rounded-lg font-body-md form-input-focus transition-all"
                    id="name"
                    placeholder="Ram Charan"
                    type="text"
                  />
                </div>
                <div className="space-y-xs">
                  <label
                    className="font-label-md text-label-md text-on-surface-variant"
                    for="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full h-12 px-md bg-surface-bright border border-outline-variant rounded-lg font-body-md form-input-focus transition-all"
                    id="email"
                    placeholder="ram@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-xs">
                <label
                  className="font-label-md text-label-md text-on-surface-variant"
                  for="subject"
                >
                  Subject
                </label>
                <select
                  className="w-full h-12 px-md bg-surface-bright border border-outline-variant rounded-lg font-body-md form-input-focus transition-all"
                  id="subject"
                >
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing &amp; Subscriptions</option>
                  <option>Partnerships</option>
                </select>
              </div>
              <div className="space-y-xs">
                <label
                  className="font-label-md text-label-md text-on-surface-variant"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full p-md bg-surface-bright border border-outline-variant rounded-lg font-body-md form-input-focus transition-all resize-none"
                  id="message"
                  placeholder="How can we help you today?"
                  rows="6"
                ></textarea>
              </div>
              <button
                className="w-full md:w-auto px-xl h-14 bg-primary-container text-on-primary font-bold rounded-lg shadow-md hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-sm"
                type="submit"
              >
                Send Message
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
          {/* <!-- Side Information Column --> */}
          <div className="lg:col-span-5 space-y-lg">
            {/* <!-- Direct Contact Card --> */}
            <div className="bg-surface-container-high p-xl rounded-xl border border-outline-variant">
              <h3 className="font-headline-md text-headline-md mb-lg">
                Direct Contact
              </h3>
              <div className="space-y-lg">
                <div className="flex items-start gap-md">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant mb-xs">
                      Support Email
                    </p>
                    <a
                      className="font-body-md text-primary font-semibold hover:underline"
                      href="mailto:support@moderncommerce.com"
                    >
                      support@moderncommerce.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant mb-xs">
                      HQ Address
                    </p>
                    <p className="font-body-md text-on-surface">
                      101 Sector-7, Chandigarh
                      <br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant mb-xs">
                      Business Hours
                    </p>
                    <p className="font-body-md text-on-surface">
                      Mon — Fri: 9:00 AM - 6:00 PM PST
                      <br />
                      Sat — Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Visual Accent Card --> */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-sm group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-alt="A hyper-modern corporate office atrium in San Francisco with floor-to-ceiling windows showing a futuristic cityscape. The interior features clean lines, high-contrast white and deep blue materials, and minimalist architectural details. Soft morning light creates an energetic and professional atmosphere. The design is sleek, professional, and sophisticated."
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7fuonNVzC4U-TpsJmVkf_kwSlrb0nR3fewGryM6o_99JOCo8FM-TusqFVEzoiEbWQppzx8lHX4rwBikJ4cR_Re1maaJsZtuvBZY9Pv-G7DOH8Zm6u5eo_au2lmZArf6nIOn7ckihyVJBbSCETFog7z_Ke3KsBXEcOK8__a95znb0oEsGr_HmYqt5iPZ9BYQrvqtw_ici0Js3A7VfYfeA6Vm77obBlawRwhcb-aOF0A0nzQyXt3LeNfGSM5f7_0SofNnvRfO3TP5KL')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-md left-md text-white">
                <p className="font-headline-md text-headline-md leading-tight">
                  Visit our global
                  <br />
                  innovation hub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Map Section --> */}
      <section className="w-full h-[400px] grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          data-alt="A minimalist and high-contrast digital map rendering of San Francisco downtown area. The map uses a clean blue and light gray color palette, highlighting modern landmarks and corporate districts. The aesthetic is clean, technical, and professional, avoiding clutter while emphasizing the central location of the business headquarters."
          data-location="San Francisco"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc5PL5TwYVGD13FXVJxRK5mak6uMizZ6RxCQsOcErwuWKTndaG22b8Q_T5rGr7iT93QXBIwM3BQ7oSZpElpQNpTvOUnIMvxj4W4Idvr2v_ztfPNarnI436GRgETm2pGuIhFMcTKSFQtN2VjdRitpkCcDzEbHTpYy9oeOOYkMitaVawl5qsNk_g63QbjI6_RZ9ba4z0uKk_qEHT2JzL1IAOVO28azPAfEAxGMDVvm2OuTX_u36VHvX7lEMiMQwfYXb0hvG5-X9PRztu"
        />
      </section>
    </main>
  );
};
export default ContactUs;
