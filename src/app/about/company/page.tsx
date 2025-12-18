// src/app/about/company/page.tsx
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-[#0B1B2B] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-3xl">
          <p className="text-white/70 text-sm">ჩვენ</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight">
            კომპანია
          </h1>
          <p className="mt-4 text-white/80 leading-relaxed">
            ATERA ქმნის თანამედროვე IT ინფრასტრუქტურას და სერვისებს, რომლებიც ბიზნესს
            ამარტივებს მუშაობას, ზრდის უსაფრთხოებას და უზრუნველყოფს უწყვეტობას.
            ჩვენი მიდგომა არის პრაქტიკული: ვაწყობთ, ვნერგავთ, ვმართავთ და ვუჭერთ მხარს.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "მისია",
              desc: "ბიზნესს მივცეთ სტაბილური და უსაფრთხო ტექნოლოგიური საფუძველი.",
            },
            {
              title: "მიდგომა",
              desc: "დაგეგმვა → დანერგვა → მონიტორინგი → მხარდაჭერა (ერთ ციკლად).",
            },
            {
              title: "შედეგი",
              desc: "დროის, ხარჯის და რისკების შემცირება რეალური პროცესებით.",
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
          <h2 className="text-xl font-semibold">რისთვის გვირჩევენ</h2>
          <ul className="mt-4 grid gap-2 md:grid-cols-2 text-white/80 text-sm">
            <li>• სტანდარტებზე დაფუძნებული ინფრასტრუქტურა და დოკუმენტაცია</li>
            <li>• სწრაფი რეაგირება და SLA-ზე ორიენტირებული მხარდაჭერა</li>
            <li>• უსაფრთხოებაზე ფოკუსი (წვდომები, ბექაფი, მონიტორინგი)</li>
            <li>• პროექტების მართვა — დროში და ბიუჯეტში</li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}