import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Link from "next/link";

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-[#0B1B2B] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-white/70 text-sm">ტექნიკა & მომსახურება</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight">
          გარანტია / RMA
        </h1>
        <p className="mt-4 max-w-3xl text-white/80 leading-relaxed">
          თუ ტექნიკას პრობლემა შეექმნა, ჩვენ ვმართავთ RMA პროცესს: დიაგნოსტიკა,
          დოკუმენტაცია, ვენდორთან კომუნიკაცია და ჩანაცვლება/შეკეთება.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">როგორ მუშაობს</h3>
            <ol className="mt-3 space-y-2 text-white/80 text-sm">
              <li>1) ინციდენტის აღწერა და სერიული ნომერი</li>
              <li>2) პირველადი დიაგნოსტიკა / ტესტი</li>
              <li>3) RMA ქეისის გახსნა და ტრეკინგი</li>
              <li>4) ჩანაცვლება / შეკეთება / დაბრუნება</li>
            </ol>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">რისთვისაა კარგი</h3>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li>• სწრაფი რეაგირება და ნაკლები downtime</li>
              <li>• ერთიანი პასუხისმგებელი მხარე</li>
              <li>• გამჭვირვალე სტატუსი და SLA</li>
              <li>• დოკუმენტირებული ისტორია</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#F39C12] px-6 py-3 text-sm font-semibold text-[#0B1B2B] hover:opacity-90 transition"
          >
            RMA მოთხოვნა
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}