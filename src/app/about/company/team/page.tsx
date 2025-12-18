// src/app/about/team/page.tsx
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#0B1B2B] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-3xl">
          <p className="text-white/70 text-sm">ჩვენ</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight">
            გუნდი
          </h1>
          <p className="mt-4 text-white/80 leading-relaxed">
            ჩვენი გუნდი აერთიანებს ინფრასტრუქტურის, ქსელების, სერვერების, უსაფრთხოების
            და სერვისის მიმართულებებს. მთავარი ღირებულება: პასუხისმგებლობა და შედეგი.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "ინფრასტრუქტურა & ქსელები",
              desc: "კაბელირება, სვიჩები, Wi-Fi, firewall, VLAN, მონიტორინგი.",
            },
            {
              title: "სერვერები & ვირტუალიზაცია",
              desc: "VMware/Hyper-V, storage, backup, DR და ოპტიმიზაცია.",
            },
            {
              title: "კიბერუსაფრთხოება",
              desc: "წვდომები, hardening, დაცვა, პოლიტიკები და ინციდენტებზე რეაგირება.",
            },
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
          <h2 className="text-xl font-semibold">როგორ ვმუშაობთ</h2>
          <ul className="mt-4 grid gap-2 md:grid-cols-2 text-white/80 text-sm">
            <li>• დავალების მიღება → დიაგნოსტიკა → გადაწყვეტა → რეპორტი</li>
            <li>• პრიორიტეტები: კრიტიკული / მაღალი / საშუალო / დაბალი</li>
            <li>• უსაფრთხოების მინიმუმი ყველა პროექტში (Backups, Access, Logs)</li>
            <li>• მუდმივი გაუმჯობესება და პროცესების ავტომატიზაცია</li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}