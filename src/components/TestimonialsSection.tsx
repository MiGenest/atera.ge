"use client";

import React from "react";
import Image from "next/image";

const testimonials = [
  {
    text:
      "ATERA-მ ჩვენთან ქსელი და უსაფრთხოება სრულად მოაწესრიგა სტაბილურობა საგრძნობლად გაიზარდა და რეაგირება ყოველთვის სწრაფია.",
    name: "ალექსანდრე ჯიბოშვილი",
    role: "ბიზნეს მენეჯერი",
    avatar: "https://assets.atera.ge/icons/guy1.png",
  },
  {
    text:
      "ქლაუდში მიგრაცია და სარეზერვო სისტემა იდეალურად დაიგეგმა. დღეს მშვიდად ვართ მონაცემები დაცულია და ყველაფერი მონიტორინგდება.",
    name: "ლელა თოდუა",
    role: "IT ბიზნეს პარტნიორი",
    avatar: "https://assets.atera.ge/icons/lady.png",
  },
  {
    text:
      "24/7 მხარდაჭერა რეალურად მუშაობს: ნებისმიერ საკითხზე სწრაფად გვიბრუნდებიან და გადაწყვეტილებებს კონკრეტულად, პრაქტიკულად გვთავაზობენ.",
    name: "ლაშა ტუხაშვილი",
    role: "CEO, Tech nova",
    avatar: "https://assets.atera.ge/icons/guy2.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="clients"
      className="py-20 px-4 md:px-10 lg:px-20 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            მომხმარებელთა მიმოხილვები
          </h2>
          <p className="text-base md:text-lg text-slate-600 mt-2">
            რას ამბობენ ATERA-ს შესახებ ჩვენი პარტნიორები
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col h-full">
                {/* Quote */}
                <div className="flex-1">
                  <div className="text-4xl leading-none text-slate-200">“</div>
                  <p className="mt-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
                    {t.text}
                  </p>
                </div>

                {/* Person */}
                <div className="mt-6 flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-slate-100 shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-slate-900 leading-tight">
                      {t.name}
                    </h3>
                    <p className="text-sm text-slate-500 leading-tight mt-1">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}