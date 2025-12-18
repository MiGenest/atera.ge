"use client";
import React, { useState } from "react";

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

type NavItem = { id: string; label: string };

type SubCategory = {
  title: string;
  icon: string;
};

type ServiceGroup = {
  title: string;
  subcategories: SubCategory[];
};

const SERVICES: ServiceGroup[] = [
  {
    title: "სისტემური ინტეგრაცია",
    subcategories: [
      {
        title: "IT ინფრასტრუქტურა და კიბერუსაფრთხოება",
        icon: ICONS.infrastructure,
      },
      { title: "ბიზნეს ანალიტიკა", icon: ICONS.analytics },
      {
        title: "ელექტრონიკა და შენობის მართვის სისტემები",
        icon: ICONS.building,
      },
      {
        title: "სამეთვალყურეო უსაფრთხოების სისტემები",
        icon: ICONS.cctv,
      },
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
      { title: "IT აუთსორსინგი", icon: ICONS.outsourcing },
      { title: "საკომუნიკაციო მომსახურეობა", icon: ICONS.customerService },
      { title: "ქლაუდ სერვისები", icon: ICONS.cloud },
      { title: "სერვის ცენტრი", icon: ICONS.serviceCenter },
    ],
  },
];

const NAV: NavItem[] = [
  { id: "services", label: "სერვისები" },
  { id: "about-us", label: "გაგვიცანი ATERA" },
  { id: "partners", label: "პარტნიორები" },
  { id: "clients", label: "კლიენტები" },
];

export default function ServicesSection() {
  const [activeSection, setActiveSection] = useState<string>("services");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Sidebar */}
      <aside className="md:col-span-1 bg-[#F8F6EF] p-6 rounded-lg shadow-md mb-8 md:mb-0 md:sticky md:top-20">
        <nav>
          <ul className="space-y-4 text-lg">
            {NAV.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
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

      {/* Main content */}
      <main className="md:col-span-3">
        <section id="services" className="py-8 sm:py-12">
          <h2 className="text-3xl font-bold text-[#1D3557]">სერვისები</h2>
          <p className="text-lg text-gray-600 mt-2">
            ჩვენი გუნდი გთავაზობთ პროფესიონალურ IT მომსახურებას, რომელიც უზრუნველყოფს თქვენი ბიზნესის უწყვეტ მუშაობას.
          </p>
        </section>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 sm:mt-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-black/10 bg-white text-center overflow-hidden"
            >
              <div className="bg-[#1D3557] text-white w-full py-4 font-semibold text-lg tracking-wide">
                {service.title}
              </div>

              <div className="p-6">
                <ul className="mt-4 space-y-4">
                  {service.subcategories.map((sub) => (
                    <li
                      key={sub.title}
                      className="group flex flex-col items-center text-gray-600 text-sm"
                    >
                      <img
                        src={sub.icon}
                        alt={sub.title}
                        className="mb-2 h-8 w-8 opacity-80 group-hover:opacity-100 transition"
                        loading="lazy"
                      />
                      <span className="text-center leading-snug">{sub.title}</span>
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