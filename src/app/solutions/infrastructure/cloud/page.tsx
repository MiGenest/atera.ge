import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Link from "next/link";

export default function CloudPage() {
  return (
    <main className="min-h-screen bg-[#0B1B2B] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl">
            <p className="text-white/70 text-sm mb-3">გადაწყვეტილებები • ქლაუდი</p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              ქლაუდ გადაწყვეტილებები ბიზნესისთვის
            </h1>
            <p className="mt-5 text-white/80 text-base md:text-lg">
              გადავიტანოთ თქვენი ინფრასტრუქტურა ღრუბელში უსაფრთხოდ, ეტაპობრივად და ისე,
              რომ ბიზნესს მუშაობა არ შეუჩერდეს.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#F39C12] px-6 py-3 text-sm font-semibold text-[#0B1B2B] hover:opacity-90 transition"
              >
                კონსულტაცია
              </Link>
              <a
                href="#services"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
              >
                რას ვაკეთებთ
              </a>
            </div>
          </div>
        </div>

        {/* subtle gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Cloud Migration",
              desc: "სერვერების, ფაილების, აპლიკაციების და მონაცემების ეტაპობრივი გადატანა ღრუბელში.",
            },
            {
              title: "Backup & DR",
              desc: "სარეზერვო ასლები + Disaster Recovery გეგმა, რომ კრიტიკულ მომენტში არ გაჩერდეთ.",
            },
            {
              title: "Microsoft 365 / Google Workspace",
              desc: "ელფოსტა, OneDrive/Drive, თანამშრომლობა, უსაფრთხო წვდომები და პოლიტიკები.",
            },
            {
              title: "Hybrid Cloud",
              desc: "ადგილობრივი ინფრასტრუქტურა + Cloud ერთად, სწორი ქსელით და უსაფრთხო კავშირებით.",
            },
            {
              title: "Security & Access",
              desc: "MFA, Zero Trust მიდგომა, დაშვების მართვა, audit და მონიტორინგი.",
            },
            {
              title: "Cost Optimization",
              desc: "ხარჯების ანალიზი, რესურსების ოპტიმიზაცია და სწორი პაკეტების შერჩევა.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-white/75">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">გინდა გავიგოთ შენი საჭიროება და მოგცეთ გეგმა?</h3>
            <p className="mt-2 text-sm text-white/75">
              20-30 წუთიანი ქოლით დავაზუსტებთ ინფრასტრუქტურას და შემოგთავაზებთ ნაბიჯ-ნაბიჯ როუდმეპს.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex justify-center items-center rounded-full bg-[#F39C12] px-6 py-3 text-sm font-semibold text-[#0B1B2B] hover:opacity-90 transition"
          >
            დაგვიკავშირდით
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}