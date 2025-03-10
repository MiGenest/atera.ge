"use client";
import React, { useState } from "react";
import Image from "next/image";
// import document from "next/document"; // Removed as it's not needed

// ✅ Scroll ფუნქცია შესაბამის სექციაზე გადასასვლელად
const scrollToSection = (id: string, setActive: Function) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id); // Active state-ს განვაახლებთ
  }
};

// ✅ სერვისების სია
const services = [
  {
    title: "სისტემური ინტეგრაცია",
    subcategories: [
      { title: "IT ინფრასტრუქტურა და კიბერუსაფრთხოება", icon: "/icons/servers.svg" },
      { title: "ბიზნეს ანალიტიკა", icon: "/icons/computer.svg" },
      { title: "ელექტრონიკა და შენობის მართვის სისტემები", icon: "/icons/apartment.svg" },
      { title: "სამეთვალყურეო უსაფრთხოების სისტემები", icon: "/icons/cctv.svg" },
    ],
  },
  {
    title: "ტექნიკა და მოწყობილობები",
    subcategories: [
      { title: "კომპიუტერული და საოფისე ტექნიკა", icon: "/icons/equipment.svg" },
      { title: "სატელეკომუნიკაციო სისტემები", icon: "/icons/wireless.svg" },
      { title: "პროგრამული უზრუნველყოფის ლიცენზირება", icon: "/icons/license.svg" },
    ],
  },
  {
    title: "სერვისები",
    subcategories: [
      { title: "IT აუტსორსინგი", icon: "/icons/information-technology.svg" },
      { title: "საკომუნიკაციო მომსახურეობა", icon: "/icons/customer-service.svg" },
      { title: "ქლაუდ სერვისები", icon: "/icons/cloud-computing.svg" },
      { title: "სერვის ცენტრი", icon: "/icons/service-center.svg" },
    ],
  },
];

export default function ServiceSection() {
  const [activeSection, setActiveSection] = useState("services");

  return (
    <section className="container mx-auto px-6 py-12 grid grid-cols-4 gap-8">
      
      {/* ✅ Sidebar */}
      <aside className="col-span-1 bg-[#F8F6EF] p-6 rounded-lg shadow-md sticky top-20">
        <nav>
          <ul className="space-y-4 text-lg">
            {[
              { id: "services", label: "სერვისები" },
              { id: "about-us", label: "გაგვიცანი ATERA" },
              { id: "partners", label: "პარტნიორები" },
              { id: "clients", label: "კლიენტები" },
            ].map((item: { id: string; label: any; }) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id, setActiveSection)}
                className={`cursor-pointer pl-4 transition-all duration-200 ease-in-out ${
                  activeSection === item.id
                    ? "text-[#1D3557] font-semibold border-l-4 border-[#1D3557]"
                    : "text-gray-600 hover:text-[#1D3557] hover:border-l-4 hover:border-[#1D3557]/50"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* ✅ მთავარი კონტენტი */}
      <main className="col-span-3">
        <section id="services" className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-[#1D3557]">სერვისები</h2>
          <p className="text-lg text-gray-600 mt-2">
            ჩვენი გუნდი გთავაზობთ პროფესიონალურ IT მომსახურებას, რომელიც უზრუნველყოფს თქვენი ბიზნესის უწყვეტ მუშაობას.
          </p>
        </section>

        {/* ✅ სერვისების ბლოკები */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#F8F6EF] rounded-lg shadow-md text-center overflow-hidden">
              <div className="bg-[#1D3557] text-white w-full py-4 font-semibold text-lg">
                {service.title}
              </div>
              <div className="p-6">
                <ul className="mt-4 space-y-4">
                  {service.subcategories.map((sub, subIndex) => (
                    <li key={subIndex} className="flex flex-col items-center text-gray-600 text-sm">
                      <Image
                        src={sub.icon}
                        alt={sub.title}
                        width={32}
                        height={32}
                        className="mb-2"
                        unoptimized
                      />
                      {sub.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}