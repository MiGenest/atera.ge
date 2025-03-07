"use client";
import { useState } from "react";


export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("შეტყობინება წარმატებით გაიგზავნა!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("შეცდომა! სცადეთ თავიდან.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-600">დაგვიკავშირდით</h2>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label className="block text-gray-700">სახელი</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">შეტყობინება</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
        </div>
        <button type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
          გაგზავნა
        </button>
      </form>
      {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
    </div>
  );
}