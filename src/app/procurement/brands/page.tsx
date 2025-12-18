import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-[#0B1B2B] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-3xl">
          <p className="text-white/70 text-sm">ტექნიკა & მომსახურება</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight">
            ბრენდები & პარტნიორები
          </h1>
          <p className="mt-4 text-white/80 leading-relaxed">
            ვმუშაობთ საერთაშორისო ვენდორებთან და დისტრიბუტორებთან, რათა თქვენს ბიზნესს
            მივაწოდოთ სანდო ტექნიკა, ლიცენზიები და ინფრასტრუქტურული გადაწყვეტილებები.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "სერტიფიცირებული ვენდორები",
              desc: "აღჭურვილობა და პროგრამული პროდუქტები ოფიციალური არხებით.",
            },
            {
              title: "შერჩევა თქვენი ამოცანით",
              desc: "ბიუჯეტისა და საჭიროებების მიხედვით საუკეთესო კონფიგურაცია.",
            },
            {
              title: "დოკუმენტაცია & მხარდაჭერა",
              desc: "გარანტიები, RMA და ტექნიკური კონსულტაცია ერთ სივრცეში.",
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
          <h2 className="text-xl font-semibold">რას ვფარავთ</h2>
          <ul className="mt-4 grid gap-2 md:grid-cols-2 text-white/80 text-sm">
            <li>• სერვერები, სთორიჯი, ქსელი (Switch/Firewall/Wi-Fi)</li>
            <li>• სამუშაო სადგურები და საოფისე ტექნიკა</li>
            <li>• ვიდეომონიტორინგი და ფიზიკური უსაფრთხოება</li>
            <li>• ლიცენზიები (OS, Office, Security, Backup და სხვ.)</li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}