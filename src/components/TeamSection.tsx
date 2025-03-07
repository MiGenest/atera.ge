"use client";
import React, { useState, useEffect } from "react";

const partners = [
  ["HP_Enterprise.svg", "dell.svg", "Microsoft.svg", "Acer.svg"],
  ["HP.svg", "Cisco.svg", "CheckPoint.svg", "SAP.svg"],
  ["Oracle.svg", "Aruba.svg", "vmware.svg", "F5.svg"],
  ["Juniper.svg", "Intel.svg", "ABB.svg", "Eaton.svg"],
  ["RITTAL.svg", "Vivotek.svg", "IBM.svg", "LG.svg"],
  ["Trellix.svg", "Bosch.svg", "Legrand.svg", "Schneider.svg"],
  ["Honeywell.svg", "Calix.svg", "Broadcom.svg", "ISS.svg"],
  ["Genetec.svg", "Dormakaba.svg", "Nokia.svg", "SuzoHapp.svg"],
  ["Streamax.svg", "EAE.svg", "Ribbon.svg", "NEC.svg"],
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Math.ceil(partners.length / 3) - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 წამში ერთხელ გადართვა

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="partners" className="bg-[#F8F6EF] py-12">
      <div className="container mx-auto px-6">
        {/* ✅ სათაური */}
        <h2 className="text-3xl font-bold text-[#1D3557] text-left">პარტნიორები</h2>
        <p className="text-lg text-gray-700 mt-2 text-left">
          ათერა აქტიურად თანამშრომლობს მრავალ საერთაშორისო პარტნიორთან და მუდმივად ვითარდება,
          რათა უზრუნველყოს ინოვაციური და მაღალი ხარისხის ტექნოლოგიური მომსახურება. 
          კომპანია განაგრძობს პარტნიორული ქსელის გაფართოებას და
          აძლიერებს ურთიერთობებს მსოფლიოს წამყვან ტექნოლოგიურ კომპანიებთან.
        </p>

        {/* ✅ პარტნიორების კარუსელი */}
        <div className="mt-8 overflow-hidden relative">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(partners.length / 3) }, (_, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-4  min-w-full">
                {partners.slice(rowIndex * 3, rowIndex * 3 + 3).flat().map((partner, colIndex) => (
                  <div
                    key={colIndex}
                    className="border border-gray-300 flex justify-center items-center p-4 bg-white"
                  >
                    <img
                      src={`/${partner}`}
                      alt={partner}
                      className="h-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ✅ ნავიგაციის წერტილები */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: Math.ceil(partners.length / 3) }, (_, index) => (
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