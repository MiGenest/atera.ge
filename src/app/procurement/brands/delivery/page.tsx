import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Link from "next/link";

export default function DeliveryPage() {
  return (
    <main className="min-h-screen bg-[#0B1B2B] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-white/70 text-sm">ტექნიკა & მომსახურება</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight">
          მიწოდება & ლოგისტიკა
        </h1>
        <p className="mt-4 max-w-3xl text-white/80 leading-relaxed">
          ტექნიკის შერჩევიდან — ადგილზე მიწოდებამდე და მონტაჟამდე. ვაკონტროლებთ
          ვადებს, კომპლექტაციას და რისკებს, რომ თქვენ არ დაკარგოთ დრო.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "დაგეგმვა", desc: "შერჩევა, შეთავაზებები, ვადები და ბიუჯეტი." },
            { title: "მიწოდება", desc: "უსაფრთხო ტრანსპორტირება და მიღება/ჩაბარება." },
            { title: "ინსტალაცია", desc: "რაკი, კაბელირება, კონფიგურაცია და ტესტირება." },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-white/75 text-sm leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#F39C12] px-6 py-3 text-sm font-semibold text-[#0B1B2B] hover:opacity-90 transition"
          >
            შემოგვიკვეთე მიწოდება
          </Link>
          <Link
            href="/procurement/brands"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
          >
            ბრენდები / პარტნიორები
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}