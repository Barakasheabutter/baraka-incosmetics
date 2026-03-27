export default function App() {
  const highlights = [
    "Unrefined Grade I certified shea butter from Ghana",
    "Full traceability from collection to final product",
    "Low moisture, low FFA, and zero pesticide residues",
    "Ethical sourcing through long-term women-led cooperative partnerships",
  ];

  const specs = [
    { label: "Grade", value: "Grade I Certified" },
    { label: "Origin", value: "Ghana" },
    { label: "Moisture", value: "0.06%" },
    { label: "FFA", value: "1.2%" },
    { label: "Compliance", value: "EU Cosmetic Regulation aligned" },
    { label: "Formats", value: "Bulk shea butter + traditional black soap" },
  ];

  const audiences = [
    "Cosmetic brands seeking premium shea butter supply",
    "Formulators looking for a reliable natural ingredient partner",
    "Distributors and private label buyers",
    "Procurement teams diversifying West African sourcing",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.16),transparent_30%),radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-200">
                In-Cosmetics Global 2026 • Paris • 14–16 April
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Meet Baraka Shea Butter at In-Cosmetics Global
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300 md:text-xl">
                Premium Ghanaian shea butter for brands, formulators, and buyers who care about
                quality, traceability, and meaningful supply chain impact.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.barakasheabutter.com"
                  className="rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-yellow-400/20 transition hover:scale-[1.02]"
                >
                  Visit Baraka
                </a>
                <a
                  href="mailto:info@barakasheabutter.com?subject=In-Cosmetics%20Meeting%20Request"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Book a Meeting
                </a>
                <a
                  href="https://wa.me/447922672875?text=Hi%20Baraka%2C%20Im%20interested%20in%20your%20shea%20butter%20supply.%20Are%20you%20available%20to%20connect%20at%20In-Cosmetics%20Global%202026"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp Baraka
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-neutral-200 shadow-sm shadow-black/20"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 shadow-2xl shadow-black/40">
                <div className="rounded-[1.5rem] border border-yellow-400/20 bg-neutral-950 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-yellow-300">Event Snapshot</p>
                  <h2 className="mt-3 text-2xl font-semibold">In-Cosmetics Global 2026</h2>
                  <div className="mt-6 space-y-4 text-sm text-neutral-300">
                    <div>
                      <p className="text-neutral-500">Dates</p>
                      <p className="mt-1 text-base text-white">14–16 April 2026</p>
                    </div>
                    <div>
                      <p className="text-neutral-500">Venue</p>
                      <p className="mt-1 text-base text-white">Paris Expo Porte de Versailles, Hall 7</p>
                    </div>
                    <div>
                      <p className="text-neutral-500">Who should meet us</p>
                      <p className="mt-1 text-base text-white">Buyers, formulators, private label brands, ingredient teams</p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-6 text-yellow-100">
                    Looking for a shea butter supply partner with strong origin story, technical quality, and commercial readiness? Let’s talk.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-yellow-300">Why Baraka</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">Built for serious buyers</h3>
            <p className="mt-4 text-base leading-7 text-neutral-300">
              Baraka works with women-led production in Ghana to deliver authentic, unrefined shea butter with a strong balance of product integrity, social impact, and B2B readiness.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {specs.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{item.label}</p>
                  <p className="mt-2 text-base font-medium text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-yellow-400/10 via-white/5 to-transparent p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-yellow-300">Who we want to meet</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">Connections worth making in Paris</h3>
            <div className="mt-8 grid gap-4">
              {audiences.map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-neutral-950">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-base leading-7 text-neutral-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-neutral-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-yellow-300">Supply story</p>
              <h4 className="mt-3 text-2xl font-semibold">Origin with substance</h4>
              <p className="mt-4 leading-7 text-neutral-300">
                Baraka’s shea butter is handcrafted in Ghana using traditional methods that preserve quality while supporting long-term livelihoods for women producers.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-neutral-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-yellow-300">Buyer focus</p>
              <h4 className="mt-3 text-2xl font-semibold">Commercially ready</h4>
              <p className="mt-4 leading-7 text-neutral-300">
                From boutique brands to larger procurement teams, Baraka is positioned for conversations around ingredient quality, traceability, and scalable supply relationships.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-neutral-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-yellow-300">Also available</p>
              <h4 className="mt-3 text-2xl font-semibold">Traditional Ghanaian black soap</h4>
              <p className="mt-4 leading-7 text-neutral-300">
                Alongside shea butter, Baraka can discuss authentic Ghanaian black soap for brands exploring natural cleansing and heritage-led ingredient stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center md:px-10">
        <p className="text-sm uppercase tracking-[0.26em] text-yellow-300">Let’s connect at the show</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          Want to meet Baraka at In-Cosmetics Global?
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          Whether you’re sourcing premium shea butter, exploring a new supply partner, or building out your natural ingredient pipeline, this is a good time to start the conversation.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:info@barakasheabutter.com?subject=Meeting%20at%20In-Cosmetics%20Global%202026"
            className="rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-yellow-400/20 transition hover:scale-[1.02]"
          >
            Request a Meeting
          </a>
          <a
            href="https://wa.me/447922672875?text=Hi%20Baraka%2C%20Im%20interested%20in%20your%20shea%20butter%20supply.%20Are%20you%20available%20to%20connect%20at%20In-Cosmetics%20Global%202026"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Chat on WhatsApp
          </a>
          <a
            href="https://calendly.com/your-link-here"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Schedule a Call
          </a>
          <a
            href="https://www.barakasheabutter.com"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Explore Baraka
          </a>
        </div>
      </section>
    </div>
  );
}