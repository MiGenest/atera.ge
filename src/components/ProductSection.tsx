"use client";
import React from "react";
import Image from "next/image";

export default function ProductSection() {
  return (
    <section id="about-us" className="container mx-auto px-6 py-12">
      {/* ფოტო (Cover Photo) */}


      {/* ტექსტი */}
      <div className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <h2 className="text-2xl font-bold text-[#1D3557] py-2">გაიცანი ATERA</h2>
        <p className="text-lg text-gray-700 mt-4">
        ჩვენი კომპანია გთავაზობთ ინოვაციურ და მრავალმხრივ IT გადაწყვეტილებებს, რომლებიც მორგებულია სხვადასხვა ბიზნეს სექტორის საჭიროებებზე. 
        ჩვენ ვაშენებთ სანდო და მაღალტექნოლოგიურ ინფრასტრუქტურას, რომელიც არა მხოლოდ IT მიმართულებას მოიცავს, არამედ მოიცავს შენობების მართვას, ციფრულ გადახდებს,
        ნაღდი ფულის დამუშავებას, ვიდეო მონიტორინგს, ფიზიკურ უსაფრთხოებას, ტელეკომუნიკაციას, მზის ენერგიის სისტემებსა და სხვა უახლეს ტექნოლოგიებს
        </p>
        <p className="text-lg text-gray-700 mt-4 py-4">
        ჩვენი გამოცდილება, სიღრმისეული ცოდნა და თითოეულ პროექტზე ინდივიდუალური მიდგომა გვაძლევს საშუალებას, დავნერგოთ თანამედროვე და ეფექტიანი სერვისები, 
        რომლებიც თქვენს ბიზნესს მაქსიმალურ ოპტიმიზაციასა და დაცულობას უზრუნველყოფს. 
        ჩვენი გუნდი ორიენტირებულია საიმედო პარტნიორობაზე, რომელიც ტექნოლოგიურ განვითარებასთან ერთად თქვენი წარმატების საფუძველი გახდება.</p>
      </div>

      <div className="flex justify-center" >
        <div className="relative w-full max-w-10xl h-[450px]">
          <Image
            src="/whyus.jpg"
            alt="gaicaniatera"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}