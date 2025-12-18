import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0B1B2B] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-3xl">
          <p className="text-white/70 text-sm">ბლოგი</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight">
            სიახლეები & რჩევები
          </h1>
          <p className="mt-4 text-white/80 leading-relaxed">
            მალე დავამატებთ სტატიებს IT ინფრასტრუქტურაზე, კიბერუსაფრთხოებაზე,
            ქლაუდზე და პრაქტიკულ ჩეკლისტებს ბიზნესებისთვის.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "კიბერუსაფრთხოება", desc: "მარტივი რჩევები და რეალური ქეისები." },
            { title: "ინფრასტრუქტურა", desc: "ქსელი, სერვერები, მონიტორინგი." },
            { title: "ქლაუდი", desc: "მიგრაცია, ბექაფი, ოპტიმიზაცია." },
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

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">გსურს პირველი სტატიის ნახვა?</h2>
          <p className="mt-2 text-white/80 text-sm leading-relaxed">
            მოგვწერე და დავიწყებთ ყველაზე მოთხოვნადი თემით.
          </p>
          <a
            href="/contact"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-white text-[#0B1B2B] px-5 py-3 text-sm font-semibold hover:opacity-90 transition"
          >
            დაგვიკავშირდით
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}