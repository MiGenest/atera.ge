import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Link from "next/link";

export default function ServiceCenterPage() {
  return (
    <main className="min-h-screen bg-[#0B1B2B] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-10">
          <p className="text-white/70 text-sm">სერვისები • სერვის ცენტრი</p>

          <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            მოწყობილობების დიაგნოსტიკა და სერვისი
          </h1>

          <div className="mt-4 rounded-2xl border border-white/10 bg-[#0B1B2B]/60 p-5">
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              სწრაფი დიაგნოსტიკა, შეკეთება და პრევენცია — რომ მოწყობილობა სწრაფად დაბრუნდეს საქმეში.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#F39C12] px-6 py-3 text-sm font-semibold text-[#0B1B2B] hover:opacity-90 transition"
            >
              დაგვიკავშირდით
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
            >
              დაბრუნება სერვისებზე
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="დიაგნოსტიკა" text="პრობლემის აღმოჩენა სწრაფად და სწორი დასკვნა." />
          <Card title="შეკეთება" text="კომპონენტების შეცვლა/აღდგენა და ტესტირება." />
          <Card title="პრევენცია" text="პროფილაქტიკა, წმენდა, განახლებები და გამართულობის კონტროლი." />
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