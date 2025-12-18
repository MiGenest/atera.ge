import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Link from "next/link";

export default function VirtualizationPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EA]">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="rounded-3xl bg-[#0B1B2B] text-white p-8 md:p-12 shadow-lg">
          <p className="text-white/70 text-sm">გადაწყვეტილებები</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            ვირტუალიზაცია
          </h1>
          <p className="mt-4 max-w-2xl text-white/80 leading-relaxed">
            ვეხმარებით კომპანიებს სერვერების კონსოლიდაციაში, რესურსების ეფექტურ
            გამოყენებაში და უწყვეტობაში — VM-ების სწორი არქიტექტურით, უსაფრთხოებით და
            სარეზერვო სტრატეგიით.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#F39C12] px-5 py-2 text-sm font-semibold text-[#0B1B2B] hover:opacity-90 transition"
            >
              კონსულტაცია
            </Link>
            <Link
              href="/solutions/infrastructure"
              className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
            >
              IT ინფრასტრუქტურა
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1B2B]">
          რას გაძლევს ვირტუალიზაცია
        </h2>
        <p className="mt-3 text-[#0B1B2B]/70 max-w-3xl">
          სწორად დაგეგმილი ვირტუალიზაცია ამცირებს ხარჯებს, ზრდის მოქნილობას და
          ამარტივებს ადმინისტრირებას — განსაკუთრებით მაშინ, როცა გაქვს რამდენიმე სერვისი და გინდა სტაბილურობა.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "კონსოლიდაცია",
              text: "რამდენიმე ფიზიკური სერვერის გაერთიანება ერთ გარემოში, რესურსების ოპტიმიზაციით.",
            },
            {
              title: "მაღალი ხელმისაწვდომობა",
              text: "Failover/HA მიდგომები, მინიმალური downtime და სწორი არქიტექტურა კრიტიკული სერვისებისთვის.",
            },
            {
              title: "Backup & Disaster Recovery",
              text: "VM-ების სარეზერვო პოლიტიკა, რესტორის ტესტი და სწრაფი აღდგენის სცენარები.",
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

      {/* Services list */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl bg-white border border-black/10 p-6 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1B2B]">
            რა შევდივართ პროექტში
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                t: "VM გარემოს დიზაინი",
                d: "რესურსების დაგეგმვა (CPU/RAM/Storage), ქსელი, სეგმენტაცია, უსაფრთხოება.",
              },
              {
                t: "მიგრაცია",
                d: "ფიზიკურიდან VM-ზე გადატანა (P2V) ან არსებულ გარემოში სწორი გადალაგება.",
              },
              {
                t: "შენახვა & Performance",
                d: "დისკების სტრატეგია, RAID, NAS/SAN მიდგომები, bottleneck ანალიზი.",
              },
              {
                t: "მონიტორინგი & ოპერირება",
                d: "ლოგირება/ალერტინგი, capacity planning და რეგულარული ჯანმრთელობის შემოწმება.",
              },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-black/10 p-5">
                <div className="font-semibold text-[#0B1B2B]">{x.t}</div>
                <div className="mt-2 text-sm text-[#0B1B2B]/70">{x.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[#0B1B2B]/70">
              გინდა გავიგოთ, რა რესურსი გჭირდება რეალურად? მოგვწერე — გავაკეთებთ მოკლე შეფასებას.
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