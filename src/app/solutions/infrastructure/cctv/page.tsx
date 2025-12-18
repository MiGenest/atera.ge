import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Link from "next/link";

export default function CctvPage() {
  return (
    <main className="min-h-screen bg-[#0B1B2B] text-white">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-10">
          <p className="text-white/70 text-sm">გადაწყვეტილებები • ვიდეომონიტორინგი (CCTV)</p>

          <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            ვიდეომონიტორინგი, რომელიც რეალურად მუშაობს
          </h1>

          <p className="mt-4 text-white/80 max-w-3xl">
            კამერები, ჩანაწერები და დისტანციური კონტროლი — სტაბილურად, უსაფრთხოდ და
            თქვენი სივრცის მოთხოვნებზე მორგებულად.
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
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
            >
              IT ინფრასტრუქტურა
            </Link>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid gap-4 md:grid-cols-3">
          <Card
            title="პროექტირება"
            text="ზონების სწორად დაფარვა, ხედვის კუთხეები, განათება, კაბელირება და ქსელის გათვლა."
          />
          <Card
            title="მონტაჟი & კონფიგურაცია"
            text="NVR/VMS, კამერების დამატება, მომხმარებლები/უფლებები, მობილური წვდომა."
          />
          <Card
            title="საიმედო ჩანაწერები"
            text="სწორი შენახვა (HDD/NAS), retention პოლიტიკა, ბექაფი და შეუფერხებელი მუშაობა."
          />
        </div>
      </section>

      {/* 8-second readable block */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h2 className="text-xl md:text-2xl font-semibold">რა უნდა იცოდე ყველაზე მთავრად</h2>

          <div className="mt-4 rounded-2xl border border-white/10 bg-[#0B1B2B]/60 p-5">
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              კარგი CCTV = სწორი კამერის არჩევა + სწორი ადგილები + სწორი შენახვა.
              თუ ერთ-ერთი სუსტია, “კამერა არის” მაგრამ საჭირო მომენტში არაფერს გიშველის.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <MiniCard
              title="კონტროლი მობილურიდან"
              text="დისტანციური ნახვა, live/recording, შეტყობინებები და წვდომის მართვა."
            />
            <MiniCard
              title="უსაფრთხო წვდომა"
              text="VPN/Zero-Trust მიდგომა, ძლიერი პაროლები, როლები და ლოგების კონტროლი."
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