"use client";

import React from "react";
import Image from "next/image";

export default function ProductSection() {
  return (
    <section id="about-us" className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* ტექსტი */}
        <div className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <h2 className="text-2xl font-bold text-[#1D3557] py-2">გაიცანი ATERA</h2>
          <p className="text-lg text-gray-700 mt-4">
            ჩვენი კომპანია გთავაზობთ ინოვაციურ და მრავალმხრივ IT გადაწყვეტილებებს,
            რომლებიც მორგებულია სხვადასხვა ბიზნეს სექტორის საჭიროებებზე. ჩვენ ვაშენებთ
            სანდო და მაღალტექნოლოგიურ ინფრასტრუქტურას, რომელიც არა მხოლოდ IT
            მიმართულებას მოიცავს, არამედ მოიცავს შენობების მართვას, ციფრულ გადახდებს,
            ნაღდი ფულის დამუშავებას, ვიდეო მონიტორინგს, ფიზიკურ უსაფრთხოებას,
            ტელეკომუნიკაციას, მზის ენერგიის სისტემებსა და სხვა უახლეს ტექნოლოგიებს.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            ჩვენი გამოცდილება, სიღრმისეული ცოდნა და თითოეულ პროექტზე ინდივიდუალური
            მიდგომა გვაძლევს საშუალებას, დავნერგოთ თანამედროვე და ეფექტიანი სერვისები,
            რომლებიც თქვენს ბიზნესს მაქსიმალურ ოპტიმიზაციასა და დაცულობას უზრუნველყოფს.
            ჩვენი გუნდი ორიენტირებულია საიმედო პარტნიორობაზე, რომელიც ტექნოლოგიურ
            განვითარებასთან ერთად თქვენი წარმატების საფუძველი გახდება.
          </p>
        </div>

        {/* ფოტო (Cover Photo) */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[900px] h-[420px] sm:h-[480px] lg:h-[520px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://assets.atera.ge/icons/whyus.jpg"
              alt="gaicaniatera"
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}