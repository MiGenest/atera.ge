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
const ICONS = {
  // Solutions / System integration
  infrastructure: "https://assets.atera.ge/icons/servers.svg",
  analytics: "https://assets.atera.ge/icons/computer.svg",
  building: "https://assets.atera.ge/icons/apartment.svg",
  cctv: "https://assets.atera.ge/icons/cctv.svg",

  // Products / Devices
  equipment: "https://assets.atera.ge/icons/equipment.svg",
  wireless: "https://assets.atera.ge/icons/wireless.svg",
  license: "https://assets.atera.ge/icons/license.svg",

  // Services
  outsourcing: "https://assets.atera.ge/icons/information-technology.svg",
  customerService: "https://assets.atera.ge/icons/customer-service.svg",
  cloud: "https://assets.atera.ge/icons/cloud-computing.svg",
  serviceCenter: "https://assets.atera.ge/icons/service-center.svg",
} as const;


const services = [
  {
    title: "სისტემური ინტეგრაცია",
    subcategories: [
      { title: "IT ინფრასტრუქტურა და კიბერუსაფრთხოება", icon: ICONS.infrastructure },
      { title: "ბიზნეს ანალიტიკა", icon: ICONS.analytics },
      { title: "ელექტრონიკა და შენობის მართვის სისტემები", icon: ICONS.building },
      { title: "სამეთვალყურეო უსაფრთხოების სისტემები", icon: ICONS.cctv },
    ],
  },
  {
    title: "ტექნიკა და მოწყობილობები",
    subcategories: [
      { title: "კომპიუტერული და საოფისე ტექნიკა", icon: ICONS.equipment },
      { title: "სატელეკომუნიკაციო სისტემები", icon: ICONS.wireless },
      { title: "პროგრამული უზრუნველყოფის ლიცენზირება", icon: ICONS.license },
    ],
  },
  {
    title: "სერვისები",
    subcategories: [
      { title: "IT აუტსორსინგი", icon: ICONS.outsourcing },
      { title: "საკომუნიკაციო მომსახურეობა", icon: ICONS.customerService },
      { title: "ქლაუდ სერვისები", icon: ICONS.cloud },
      { title: "სერვის ცენტრი", icon: ICONS.serviceCenter },
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
            <div key={index} className="rounded-2xl border border-black/10 bg-white text-center overflow-hidden">
              <div className="bg-[#1D3557] text-white w-full py-4 font-semibold text-lg tracking-wide">

                {service.title}
              </div>
              <div className="p-6">
                <ul className="mt-4 space-y-4">
                  {service.subcategories.map((sub, subIndex) => (
                    <li key={subIndex} className="group flex flex-col items-center text-gray-600 text-sm">

                      <img
                        src={sub.icon}
                        alt={sub.title}
                        className="mb-2 h-8 w-8 opacity-80 group-hover:opacity-100 transition"
                        
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