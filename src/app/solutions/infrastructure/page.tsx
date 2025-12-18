import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen bg-[#F7F3EA]">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="rounded-3xl bg-[#0B1B2B] text-white p-8 md:p-12 shadow-lg">
          <p className="text-white/70 text-sm">გადაწყვეტილებები</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            IT ინფრასტრუქტურა
          </h1>
          <p className="mt-4 max-w-2xl text-white/80 leading-relaxed">
            ვაშენებთ სტაბილურ და უსაფრთხო IT გარემოს: ქსელები, სერვერები, Wi-Fi,
            მონიტორინგი, რეზერვები და სტანდარტები — ისე, რომ ბიზნესს არ შეუწყდეს მუშაობა.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#F39C12] px-5 py-2 text-sm font-semibold text-[#0B1B2B] hover:opacity-90 transition"
            >
              კონსულტაცია
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
            >
              ყველა გადაწყვეტილება
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1B2B]">
          რას ვაკეთებთ
        </h2>
        <p className="mt-3 text-[#0B1B2B]/70 max-w-3xl">
          ინფრასტრუქტურა არ არის “უბრალოდ კაბელები და როუტერი”. ეს არის არქიტექტურა,
          რომელიც განსაზღვრავს სტაბილურობას, უსაფრთხოებას და მასშტაბირებას.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "ქსელი & Wi-Fi",
              text: "VLAN-ები, სეგმენტაცია, Guest Wi-Fi, დაფარვის დაგეგმვა, switch-ების/PoE-ს სწორი არქიტექტურა.",
            },
            {
              title: "სერვერები & საცავი",
              text: "AD/DNS/DHCP, ფაილ სერვერები, ვირტუალიზაცია, NAS/SAN, რეზერვები და მონიტორინგი.",
            },
            {
              title: "უსაფრთხოება",
              text: "Firewall, MFA, Endpoint დაცვის პოლიტიკები, ლოგირება, წვდომების კონტროლი, მინიმალური პრივილეგიები.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl bg-white border border-black/10 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#0B1B2B]">{c.title}</h3>
              <p className="mt-2 text-[#0B1B2B]/70 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl bg-white border border-black/10 p-6 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1B2B]">
            როგორ ვმუშაობთ
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { n: "01", t: "აუდიტი", d: "არსებული ინფრასტრუქტურის შეფასება და პრობლემების იდენტიფიკაცია." },
              { n: "02", t: "დიზაინი", d: "ქსელის/სერვერების არქიტექტურა, უსაფრთხოების მოდელი, BOM." },
              { n: "03", t: "დანერგვა", d: "მონტაჟი, კონფიგურაცია, ტესტირება — მინიმალური downtime-ით." },
              { n: "04", t: "მხარდაჭერა", d: "მონიტორინგი, SLA, ცვლილებების მართვა, მუდმივი გაუმჯობესება." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-black/10 p-5">
                <div className="text-sm font-semibold text-[#F39C12]">{s.n}</div>
                <div className="mt-1 font-semibold text-[#0B1B2B]">{s.t}</div>
                <div className="mt-2 text-sm text-[#0B1B2B]/70">{s.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[#0B1B2B]/70">
              გინდა სწრაფი შეფასება? მოგვწერე და 24 საათში მოგცემთ პირველ რეკომენდაციას.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#0B1B2B] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              დაგვიკავშირდით
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}