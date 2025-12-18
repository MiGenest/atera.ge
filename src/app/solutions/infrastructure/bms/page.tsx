 import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Link from "next/link";

export default function BmsPage() {
  return (
    <main className="min-h-screen bg-[#0B1B2B] text-white">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-10">
          <p className="text-white/70 text-sm">
            გადაწყვეტილებები • შენობის მართვის სისტემები (BMS)
          </p>

          <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            მართე შენობა ერთი სისტემიდან
          </h1>

          <p className="mt-4 text-white/80 max-w-3xl">
            BMS აერთიანებს განათებას, კლიმატს, ენერგიას, უსაფრთხოებას და სხვა სისტემებს —
            რომ შენობა მუშაობდეს უფრო ეკონომიურად, უსაფრთხოდ და კონტროლირებადად.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#F39C12] px-6 py-3 text-sm font-semibold text-[#0B1B2B] hover:opacity-90 transition"
            >
              დაგვიკავშირდით
            </Link>

            <Link
              href="/solutions/infrastructure"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
            >
              დაბრუნება ინფრასტრუქტურაზე
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid gap-4 md:grid-cols-3">
          <Card
            title="ინტეგრაცია"
            text="არსებული სისტემების გაერთიანება ერთ პანელში: HVAC, განათება, ელექტრო, უსაფრთხოება."
          />
          <Card
            title="ავტომატიზაცია"
            text="სცენარები და წესები: დრო/სენსორი/მდგომარეობა → ავტომატური მოქმედება."
          />
          <Card
            title="მონიტორინგი"
            text="მდგომარეობა რეალურ დროში, შეტყობინებები, ლოგები და პრობლემის სწრაფი აღმოჩენა."
          />
        </div>
      </section>

      {/* 8-second readable block */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h2 className="text-xl md:text-2xl font-semibold">
            მარტივად: რა გაძლევს BMS
          </h2>

          <div className="mt-4 rounded-2xl border border-white/10 bg-[#0B1B2B]/60 p-5">
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              BMS გეხმარება შეამცირო ხარჯი, გაზარდო კომფორტი და თავიდან აიცილო ავარია —
              რადგან შენობის ყველა კრიტიკული სისტემა ერთ ადგილას კონტროლდება.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <MiniCard
              title="ენერგოეფექტურობა"
              text="გონივრული მართვა და გრაფიკები → ნაკლები ხარჯი და უკეთესი კონტროლი."
            />
            <MiniCard
              title="უსაფრთხო ოპერაცია"
              text="შეტყობინებები, წვდომის უფლებები და ცვლილებების ისტორია (audit log)."
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-white/75 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function MiniCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="font-semibold">{title}</p>
      <p className="mt-2 text-white/75 text-sm leading-relaxed">{text}</p>
    </div>
  );
}