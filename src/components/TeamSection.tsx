"use client";
import React, { useState, useEffect } from "react";

// Helper to build asset URLs
const partnerSrc = (name: string) => `https://assets.atera.ge/icons/${name}`;

// აქ ჩამოსწერე ყველა SVG ფაილის სახელი, რაც გაქვს assets.atera.ge/icons-ში
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

  // ავტომატურად გადაანაცვლებს სლაიდებს ყოველ 3 წამში
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Math.ceil(partners.length / 4) - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="partners" className="bg-[#F8F6EF] py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1D3557] text-left">პარტნიორები</h2>
        <p className="text-lg text-gray-700 mt-2 text-left">
          ათერა აქტიურად თანამშრომლობს მრავალ საერთაშორისო პარტნიორთან და მუდმივად ვითარდება,
          რათა უზრუნველყოს ინოვაციური და მაღალი ხარისხის ტექნოლოგიური მომსახურება. კომპანია განაგრძობს
          პარტნიორული ქსელის გაფართოებას და აძლიერებს ურთიერთობებს მსოფლიოს წამყვან ტექნოლოგიურ კომპანიებთან.
        </p>

        {/* პარტნიორების სლაიდერი */}
        <div className="mt-8 overflow-hidden relative">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(partners.length / 4) }, (_, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-4 min-w-full">
                {partners.slice(rowIndex * 4, rowIndex * 4 + 4).map((partner) => (
                  <div
                    key={partner}
                    className="border border-gray-300 flex justify-center items-center p-4 bg-white"
                  >
                    <img
                      src={partnerSrc(partner)}
                      alt={partner.replace(".svg", "")}
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
          {Array.from({ length: Math.ceil(partners.length / 4) }, (_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 mx-1 rounded-full cursor-pointer transition-all ${
                index === currentIndex ? "bg-[#1D3557] w-6" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}