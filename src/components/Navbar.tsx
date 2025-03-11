"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Sling as Hamburger } from "hamburger-react"; 


export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "გადაწყვეტილებები", key: "solutions", links: [ { name: "სერვერები", href: "/solutions/server" }, { name: "ქლაუდი", href: "/solutions/cloud" } ] },
    { name: "პროდუქტები", key: "products", links: [ { name: "ლეპტოპები", href: "/products/laptops" }, { name: "მონიტორები", href: "/products/monitors" } ] },
    { name: "სერვისები", key: "services", links: [ { name: "ტექნიკური მხარდაჭერა", href: "/services/maintenance" }, { name: "კიბერუსაფრთხოება", href: "/services/security" } ] },
    { name: "ჩვენ", key: "about", links: [ { name: "კომპანია", href: "/about/company" }, { name: "გუნდი", href: "/about/team" } ] },
  ];

  return (
    <nav className="bg-[white] text-white shadow-md py-3 px-4 fixed top-0 left-0 w-full h-[50px] flex items-center z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-1">
          <Image
            src="/png2.png"
            alt="Atera Logo"
            width={120}
            height={50}
            className="h-[50px] w-auto"
          />
          <span className="text-2xl font-bold tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
            ATERA
          </span>
        </Link>

        <ul className="hidden md:flex space-x-5 text-auto">
          {menuItems.map(({ name, key, links }) => (
            <li
              key={key}
              className="relative"
              onMouseEnter={() => setDropdownOpen(key)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="flex items-center space-x-1 hover:text-gray-300 transition-all">
                <span>{name}</span>
                <FiChevronDown />
              </button>
              <div
                className={`absolute left-0 mt-2 min-w-[180px] bg-[#1D3557]/80 text-white shadow-md border border-[#1D3557]/50 backdrop-blur-lg transition-all duration-300 ease-in-out transform origin-top ${
                  dropdownOpen === key ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                }`}
              >
                {links.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-md font-medium hover:bg-[#1D3557]/60 transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </li>
          ))}
          <li>
            <Link href="/blog" className="hover:text-gray-300">ბლოგი</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 hover:text-[#F4A261] transition">
            <FaGlobe className="text-lg" />
            <span className="text-sm">Eng</span>
          </button>
            <Link href="/contact">
              <button className="flex items-center justify-center md:space-x-2 border border-[#F4A261] text-[#F4A261] px-4 py-2 rounded-md text-sm hover:bg-[#F4A261] hover:text-white transition">
                <FiMail className="text-xl" />
                <span className="hidden md:inline">დაგვიკავშირდით</span>
              </button>
            </Link>
          <div className="md:hidden">
            <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={24} direction="right" rounded color="#F4A261" />
          </div>
        </div>
      </div>

      <div
        className={`absolute left-0 top-[73px] w-full bg-[#1D3557]/70 bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out transform ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
        } flex flex-col items-center justify-center space-y-6 text-white text-lg z-40 py-5`}
      >
        {["მთავარი", "გადაწყვეტილებები", "პროდუქტები", "სერვისები", "ჩვენ", "კონტაქტი", "ბლოგი"].map((item, index) => (
          <Link
            key={index}
            href={`/${item === "მთავარი" ? "" : item}`}
            className="hover:text-[#F4A261] transition"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}
