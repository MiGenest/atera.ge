"use client";

import React, { useEffect, useState } from "react";

// SVG ფაილის სრული URL
const partnerSrc = (name: string) => `https://assets.atera.ge/icons/${name}`;

// ყველა პარტნიორი (4-4 სლაიდში)
const partners: string[] = [
  "RITTAL.svg",
  "Vivotek.svg",
  "IBM.svg",
  "LG.svg",
  "Trellix.svg",
  "Bosch.svg",
  "Legrand.svg",
  "Schneider.svg",
  "Honeywell.svg",
  "Calix.svg",
  "Broadcom.svg",
  "ISS.svg",
  "Genetec.svg",
  "Dormakaba.svg",
  "Nokia.svg",
  "SuzoHapp.svg",
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesCount = Math.ceil(partners.length / 4);

  // ავტოსლაიდი
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slidesCount);
    }, 3000);

    return () => clearInterval(interval);
  }, [slidesCount]);

  return (
    <section id="partners" className="bg-[#F8F6EF] py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1D3557] text-left">
          პარტნიორები
        </h2>
        <p className="text-lg text-gray-700 mt-2 text-left">
          ათერა აქტიურად თანამშრომლობს მრავალ საერთაშორისო პარტნიორთან და მუდმივად
          ვითარდება, რათა უზრუნველყოს ინოვაციური და მაღალი ხარისხის ტექნოლოგიური
          მომსახურება. კომპანია განაგრძობს პარტნიორული ქსელის გაფართოებას და
          აძლიერებს ურთიერთობებს მსოფლიოს წამყვან ტექნოლოგიურ კომპანიებთან.
        </p>

        {/* სლაიდერი */}
        <div className="mt-8 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: slidesCount }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 min-w-full"
              >
                {partners
                  .slice(slideIndex * 4, slideIndex * 4 + 4)
                  .map((name) => (
                    <div
                      key={name}
                      className="flex items-center justify-center rounded-2xl border border-black/10 bg-white p-6"
                    >
                      <img
                        src={partnerSrc(name)}
                        alt={name.replace(".svg", "")}
                        className="h-10 w-auto opacity-80 hover:opacity-100 transition"
                        loading="lazy"
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* ნავიგაციის წერტილები */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: slidesCount }).map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-3 w-3 mx-1 rounded-full cursor-pointer transition-all ${
                i === currentIndex ? "bg-[#1D3557] w-6" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}