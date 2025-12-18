import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Link from "next/link";

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#0B1B2B] text-white">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-10">
          <p className="text-white/70 text-sm">გადაწყვეტილებები • კიბერუსაფრთხოება</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            კიბერუსაფრთხოება ბიზნესისთვის
          </h1>
          <p className="mt-4 text-white/80 max-w-3xl">
            პრევენცია, მონიტორინგი და სწრაფი რეაგირება — რომ თქვენი მონაცემები,
            თანამშრომლები და სერვისები დაცული იყოს ყოველდღიურ რისკებზე.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#F39C12] px-6 py-3 text-sm font-semibold text-[#0B1B2B] hover:opacity-90 transition"
            >
              კონსულტაცია
            </Link>
            <Link
              href="/solutions/infrastructure"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
            >
              IT ინფრასტრუქტურა
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid gap-4 md:grid-cols-3">
          <Card
            title="რისკების შეფასება"
            text="აუდიტი, პოლიტიკები, მინიმალური პრივილეგიები და უსაფრთხოების საბაზისო სტანდარტები."
          />
          <Card
            title="დაცვა და კონტროლი"
            text="Endpoint/AV, firewall, MFA, email security და მოწყობილობების მართვა."
          />
          <Card
            title="მონიტორინგი & რეაგირება"
            text="ლოგები/ალერტები, ინციდენტზე სწრაფი რეაგირება და რეკომენდაციები."
          />
        </div>
      </section>

      {/* Simple “8-second” snippet (your request) */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h2 className="text-xl md:text-2xl font-semibold">მარტივი მაგალითი რეალური სამყაროდან</h2>

          <div className="mt-4 rounded-2xl border border-white/10 bg-[#0B1B2B]/60 p-5">
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              <span className="font-semibold">CVE-2024-29988</span> — Windows-ის ხარვეზი,
              რომელიც რეალურ შეტევებში გამოიყენებოდა. მიზანი იყო მომხმარებლის მოტყუება,
              რომ მავნე ფაილზე დაეკლიკებინა. გამოსავალი: დროული განახლებები და უსაფრთხოების კონტროლი.
            </p>
            <p className="mt-2 text-white/60 text-xs">
              * ეს ტექსტი არის მოკლე/ადამიანური ახსნა (არა ტექნიკური დეტალები).
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <MiniCard
              title="რას ვაკეთებთ ჩვენ"
              text="ვაყენებთ დაცვის ფენებს, ვამყარებთ წესებს და ვაკეთებთ მონიტორინგს, რომ მსგავსი რისკები მინიმუმამდე დავიყვანოთ."
            />
            <MiniCard
              title="რას მიიღებთ"
              text="ნაკლები ინციდენტი, უფრო დაცული მონაცემები და პროგნოზირებადი IT გარემო."
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