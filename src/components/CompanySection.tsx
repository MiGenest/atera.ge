export default function CompanySection() {
    return (
      <section className="bg-gray-100 py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            ჩვენი კომპანია
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Atera.ge გთავაზობთ მაღალხარისხიან IT გადაწყვეტილებებს, რომელიც შექმნილია თქვენი ბიზნესის
            საჭიროებების გათვალისწინებით.
          </p>
  
          {/* Grid Layout */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ბლოკი 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600">გამოცდილება</h3>
              <p className="text-gray-600 mt-2">
                10+ წელი IT ინდუსტრიაში, წარმატებული პროექტებით.
              </p>
            </div>
  
            {/* ბლოკი 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600">სანდო პარტნიორები</h3>
              <p className="text-gray-600 mt-2">
                ვმუშაობთ მსხვილ კომპანიებთან და მცირე ბიზნესებთან ერთნაირად.
              </p>
            </div>
  
            {/* ბლოკი 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600">პროფესიონალთა გუნდი</h3>
              <p className="text-gray-600 mt-2">
                ჩვენი გუნდი შედგება გამოცდილი ინჟინრებისა და დეველოპერებისგან.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }