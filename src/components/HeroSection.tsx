"use client";
import React, { useState, useEffect, JSX } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    src: "/pagephoto1.jpg",
    title: "ინოვაციური IT სერვისები",
    subtitle: "გადაწყვეტილებები თქვენი ბიზნესისთვის",
    description: "მოწინავე ტექნოლოგიები და უსაფრთხო IT ინფრასტრუქტურა.",
  },
  {
    src: "/pagephoto2.jpg",
    title: "ქლაუდ ტექნოლოგიები",
    subtitle: "გადაიტანეთ ბიზნესი ღრუბელში",
    description: "უსაფრთხო და მასშტაბირებადი IT გადაწყვეტილებები.",
  },
  {
    src: "/pagephoto3.jpg",
    title: "24/7 მხარდაჭერა",
    subtitle: "ჩვენი გუნდი თქვენს გვერდითაა",
    description: "ტექნიკური მხარდაჭერა და კონსულტაცია ნებისმიერ დროს.",
  },
];

export default function HeroSection(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 წამში ერთხელ გადასვლა

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* სურათები */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={`Slide ${index + 1}`}
            fill
            className="w-full h-full object-cover"
          />

          {/* ტექსტი */}
          <div className="absolute bottom-80 left-16 text-[#EDEDED]">
            <h1 className="text-4xl font-bold">{slide.title}</h1>
            <div className="w-20 h-1 bg-[#F4A261] mt-2"></div>
            <h2 className="text-2xl">{slide.subtitle}</h2>
            <p className="text-lg">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* ისრები */}
      <button
        onClick={prevSlide}
        className="absolute bottom-4 left-10 flex text-[#EDEDED]">
        <FiChevronLeft size={40} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute bottom-right-10 flex text-[#EDEDED]"
      >
        <FiChevronRight size={40} />
      </button>

      {/* წერტილები */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 text-[#EDEDED]" >
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
              index === currentIndex ? "bg-white w-8" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}