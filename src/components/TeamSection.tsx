"use client";
import React, { useState, useEffect } from "react";

<<<<<<< HEAD
// Helper to build asset URLs
const partnerSrc = (name: string) => `https://assets.atera.ge/icons/${name}`;
=======
// ჰელპერ ფუნქცია ფაილის სახელიდან სრულ URL-ის შესაქმნელად
const partnerSrc = (name: string) =>
  `https://assets.atera.ge/icons/${name}`;

// partners მასივი: თითოეული ელემენტი არის ოთხიანი ლოგოების სია, რომელიც სლაიდში გამოჩნდება
const partners: string[][] = [
  ["RITTAL.svg", "Vivotek.svg", "IBM.svg", "LG.svg"],
  ["Trellix.svg", "Bosch.svg", "Legrand.svg", "Schneider.svg"],
  ["Honeywell.svg", "Calix.svg", "Broadcom.svg", "ISS.svg"],
  ["Genetec.svg", "Dormakaba.svg", "Nokia.svg", "SuzoHapp.svg"],
  // სურვილისამებრ დაამატეთ მეტი რიგი აქ
];

// კომპონენტში, სადაც ახლა Carousel/Grid-ს ქმნით:
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
  {partners[currentIndex].map((name) => (
    <div
      key={name}
      className="flex items-center justify-center rounded-2xl border border-black/10 bg-white p-5"
    >
      <img
        src={partnerSrc(name)}
        alt={name.replace('.svg', '')}
        className="h-10 w-auto opacity-80 hover:opacity-100 transition"
        loading="lazy"
      />
    </div>
  ))}
</div>

>>>>>>> 3b76f570cea9046b3a25022445316bf8788d651c

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
<<<<<<< HEAD
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
=======
>>>>>>> 3b76f570cea9046b3a25022445316bf8788d651c
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