"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { FaHome } from "react-icons/fa";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "", // ✅ გვარი
    position: "", // ✅ პოზიცია
    phone: "", // ✅ საკონტაქტო ნომერი
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("მიმდინარეობს გაგზავნა...");

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData), // ✅ ყველა ველი გაიგზავნება
    });

    if (response.ok) {
      setStatus("შეტყობინება წარმატებით გაიგზავნა!");
      setFormData({ name: "", surname: "", position: "", phone: "", email: "", message: "" });
    } else {
      setStatus("შეცდომა! სცადეთ თავიდან.");
    }
  };

  return (
    <div className="relative">
      <Navbar />

      <div className="relative w-full min-h-screen flex">
        {/* მარცხენა ნაწილი: კონტაქტის ფორმა + ტექსტი */}
        <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center items-start p-10 shadow-md">
          <Link href="/" className="text-blue-600 hover:text-blue-800 text-3xl mb-4">
            <FaHome />
          </Link>

          <h2 className="text-3xl font-bold text-gray-800">დაგვიკავშირდით</h2>
          <p className="mt-2 text-gray-600 leading-relaxed text-lg">
            შეავსეთ ფორმა და მოგვწერეთ თქვენი საჭიროების შესახებ. ჩვენი წარმომადგენელი დაგიკავშირდებათ,
            მოგაწვდით დეტალურ ინფორმაციას და დაგეხმარებათ თქვენ მოთხოვნებზე მორგებული გადაწყვეტის,
            სერვისის ან პროდუქტის შერჩევაში.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* სახელი */}
              <div>
                <label className="block text-gray-700">სახელი</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
              </div>

              {/* გვარი */}
              <div>
                <label className="block text-gray-700">გვარი</label>
                <input type="text" name="surname" value={formData.surname} onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
              </div>
            </div>

            {/* პოზიცია */}
            <div className="mb-4 mt-4">
              <label className="block text-gray-700">თქვენი პოზიცია</label>
              <input type="text" name="position" value={formData.position} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
            </div>

            {/* საკონტაქტო ნომერი */}
            <div className="mb-4">
              <label className="block text-gray-700">საკონტაქტო ნომერი</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
            </div>

            {/* შეტყობინება */}
            <div className="mb-4">
              <label className="block text-gray-700">შეტყობინება</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
            </div>

            <button type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition flex items-center justify-center">
              ✉️ გაგზავნა
            </button>
          </form>
          {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
        </div>

        {/* მარჯვენა ნაწილი: Google Maps + სათაო ოფისი */}
        <div className="hidden md:flex w-1/2 flex-col relative">
          <div className="absolute inset-0 z-0">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=თბილისი+პეკინის+24`}
              allowFullScreen
            />
          </div>

          {/* სათაო ოფისი */}
          <div className="absolute bottom-10 left-10 bg-white p-6 shadow-lg rounded-lg max-w-sm z-10">
            <h2 className="text-2xl font-bold text-gray-800">📍 სათაო ოფისი</h2>
            <p className="text-lg text-gray-600 mt-2">თბილისი, პეკინის 24 0160</p>
            <p className="text-lg text-gray-600 mt-2">📞 +995 577 03 11 10</p>
            <p className="text-lg text-red-500 mt-2">📧 misha@atera.ge</p>
          </div>
        </div>
      </div>
    </div>
  );
}