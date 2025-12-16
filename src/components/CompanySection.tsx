export default function CompanySection() {
  const items = [
    {
      title: "გამოცდილება",
      text: "10+ წელი IT ინდუსტრიაში, წარმატებული პროექტებით.",
    },
    {
      title: "სანდო პარტნიორები",
      text: "ვმუშაობთ მსხვილ კომპანიებთან და მცირე ბიზნესებთან ერთნაირად.",
    },
    {
      title: "პროფესიონალთა გუნდი",
      text: "ჩვენი გუნდი შედგება გამოცდილი ინჟინრებისა და დეველოპერებისგან.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">ჩვენი კომპანია</h2>

        <p className="text-lg text-gray-600 mt-4">
          Atera.ge გთავაზობთ მაღალხარისხიან IT გადაწყვეტილებებს, რომელიც შექმნილია თქვენი ბიზნესის
          საჭიროებების გათვალისწინებით.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-600">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}