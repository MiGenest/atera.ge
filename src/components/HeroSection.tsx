"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Slide = {
  src: string;
  title: string;
  subtitle: string;
  description: string;
};

// NOTE:
// - ფოტოები R2-ზე გაქვს ატვირთული და სერვდება https://assets.atera.ge-დან.
// - შენს შემთხვევაში cover ფოტოები დევს `icons/` პრეფიქსში, ამიტომ URL უნდა იყოს:
//   https://assets.atera.ge/icons/pagephoto1.jpg (და ა.შ.)
// - R2 ობიექტების სახელები case-sensitive არის (LG.svg vs lg.svg), იგივეა jpg-ზეც.
const ASSETS_BASE = "https://assets.atera.ge/icons";

export default function HeroSection() {
  const slides: Slide[] = useMemo(
    () => [
      {
        src: `${ASSETS_BASE}/pagephoto1.jpg`,
        title: "ინოვაციური IT სერვისები",
        subtitle: "გადაწყვეტილებები თქვენი ბიზნესისთვის",
        description: "მოწინავე ტექნოლოგიები და უსაფრთხო IT ინფრასტრუქტურა.",
      },
      {
        src: `${ASSETS_BASE}/pagephoto2.jpg`,
        title: "ქლაუდ ტექნოლოგიები",
        subtitle: "გადაიტანეთ ბიზნესი ღრუბელში",
        description: "უსაფრთხო და მასშტაბირებადი IT გადაწყვეტილებები.",
      },
      {
        src: `${ASSETS_BASE}/pagephoto3.jpg`,
        title: "24/7 მხარდაჭერა",
        subtitle: "ჩვენი გუნდი თქვენს გვერდითაა",
        description: "ტექნიკური მხარდაჭერა და კონსულტაცია ნებისმიერ დროს.",
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== currentIndex}
        >
          {/* Background image */}
          <Image
            src={slide.src}
            alt={slide.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Text */}
          <div className="absolute inset-0 flex items-end md:items-center">
            <div className="w-full px-6 pb-16 md:pb-0 md:px-16 text-[#EDEDED] max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {slide.title}
              </h1>
              <div className="w-20 h-1 bg-[#F4A261] mt-3" />
              <h2 className="text-xl md:text-2xl mt-3">{slide.subtitle}</h2>
              <p className="text-base md:text-lg mt-2 text-white/90">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="წინა სლაიდი"
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-[#EDEDED] bg-black/25 hover:bg-black/40 rounded-full p-2 transition"
      >
        <FiChevronLeft size={40} />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="შემდეგი სლაიდი"
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-[#EDEDED] bg-black/25 hover:bg-black/40 rounded-full p-2 transition"
      >
        <FiChevronRight size={40} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`სლაიდი ${index + 1}`}
            className={`h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-8" : "bg-white/60 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}