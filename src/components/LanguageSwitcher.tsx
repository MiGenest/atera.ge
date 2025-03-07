"use client";
import { useState } from "react";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("ge");

  return (
    <div className="flex justify-end items-center space-x-2 p-2 bg-gray-100 rounded-lg shadow-md w-fit mx-auto md:mx-0">
      <button
        onClick={() => setLanguage("ge")}
        className={`px-4 py-2 rounded ${
          language === "ge" ? "bg-gray-300 font-bold" : "bg-white"
        }`}
      >
        ქართული
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-4 py-2 rounded ${
          language === "en" ? "bg-gray-300 font-bold" : "bg-white"
        }`}
      >
        English
      </button>
    </div>
  );
}