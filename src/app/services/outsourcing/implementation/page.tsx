import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Link from "next/link";

export default function ImplementationPage() {
  return (
    <main className="min-h-screen bg-[#0B1B2B] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-10">
          <p className="text-white/70 text-sm">სერვისები • დანერგვა</p>

          <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            დანერგვა სწორი არქიტექტურით და “ჩაბარებით”
          </h1>

          <p className="mt-4 text-white/80 max-w-3xl">
            პროექტის დაგეგმვა, ინსტალაცია, კონფიგურაცია, ტესტირება და დოკუმენტაცია —
            რომ სისტემა რეალურად იმუშაოს.
          </p>

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
          <Card title="დიზაინი & დაგეგმვა" text="მოთხოვნები, არქიტექტურა, ბიუჯეტი, დრო და რისკების მართვა." />
          <Card title="დანერგვა" text="ინსტალაცია, კონფიგურაცია, ინტეგრაციები და სტანდარტები." />
          <Card title="ჩაბარება" text="ტესტები, დოკუმენტაცია, ტრენინგი და მხარდაჭერის გადაცემა." />
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