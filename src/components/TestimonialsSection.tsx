"use client";
import React from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section id="clients" className="py-20 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* ✅ სათაური */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          მომხმარებელთა მიმოხილვები
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          რას ფიქრობენ ჩვენს შესახებ ჩვენი კლიენტები
        </p>

        {/* ✅ მიმოხილვების ბლოკი */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* ✅ მიმოხილვა 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <p className="text-gray-700 italic">
              &quot;Atera.ge-ს IT სერვისები გამორჩეულია. პროფესიონალიზმითა და მაღალი ხარისხით!&quot;
            </p>
            <div className="mt-4 flex items-center justify-center">
              <Image
                src="/guy1.png"
                alt="მომხმარებელი"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div className="ml-4 text-left">
                <h3 className="text-md font-semibold">ალექსანდრე ჯიბოშვილი</h3>
                <p className="text-gray-500 text-sm">ბიზნეს მენეჯერი</p>
              </div>
            </div>
          </div>

          {/* ✅ მიმოხილვა 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <p className="text-gray-700 italic">
              &quot;საუკეთესო გადაწყვეტილება ჩვენი კომპანიის IT ინფრასტრუქტურისთვის!&quot;
            </p>
            <div className="mt-4 flex items-center justify-center">
              <Image
                src="/lady.png"
                alt="მომხმარებელი"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div className="ml-4 text-left">
                <h3 className="text-md font-semibold">ლელა თოდუა</h3>
                <p className="text-gray-500 text-sm">IT ბიზნეს პარტნიორი</p>
              </div>
            </div>
          </div>

          {/* ✅ მიმოხილვა 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <p className="text-gray-700 italic">
              &quot;Atera.ge-ს გუნდთან მუშაობა ნამდვილი სიამოვნებაა. ყველაფერი დროულად და ეფექტურად გაკეთდა!&quot;
            </p>
            <div className="mt-4 flex items-center justify-center">
              <Image
                src="/guy2.png"
                alt="მომხმარებელი"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div className="ml-4 text-left">
                <h3 className="text-md font-semibold">ლაშა ტუხაშვილი</h3>
                <p className="text-gray-500 text-sm">CEO, Tech nova</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}