"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown, FiMail } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import { Sling as Hamburger } from "hamburger-react";

type MenuLink = { name: string; href: string };
type MenuGroup = { name: string; key: string; links: MenuLink[] };

const ASSETS_BASE = "https://assets.atera.ge/icons";
const logoSrc = `${ASSETS_BASE}/png2.png`;

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems: MenuGroup[] = useMemo(
    () => [
      {
        name: "გადაწყვეტილებები",
        key: "solutions",
        links: [
          { name: "სერვერები", href: "/solutions/server" },
          { name: "ქლაუდი", href: "/solutions/cloud" },
        ],
      },
      {
        name: "პროდუქტები",
        key: "products",
        links: [
          { name: "ლეპტოპები", href: "/products/laptops" },
          { name: "მონიტორები", href: "/products/monitors" },
        ],
      },
      {
        name: "სერვისები",
        key: "services",
        links: [
          { name: "ტექნიკური მხარდაჭერა", href: "/services/maintenance" },
          { name: "კიბერუსაფრთხოება", href: "/services/security" },
        ],
      },
      {
        name: "ჩვენ",
        key: "about",
        links: [
          { name: "კომპანია", href: "/about/company" },
          { name: "გუნდი", href: "/about/team" },
        ],
      },
    ],
    []
  );

  const mobileLinks: MenuLink[] = useMemo(
    () => [
      { name: "მთავარი", href: "/" },
      { name: "გადაწყვეტილებები", href: "/solutions/server" },
      { name: "პროდუქტები", href: "/products/laptops" },
      { name: "სერვისები", href: "/services/maintenance" },
      { name: "ჩვენ", href: "/about/company" },
      { name: "კონტაქტი", href: "/contact" },
      { name: "ბლოგი", href: "/blog" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns when mobile menu opens
  useEffect(() => {
    if (menuOpen) setDropdownOpen(null);
  }, [menuOpen]);

  const navBase =
    "fixed top-0 left-0 w-full z-50 text-white transition-all duration-300";
  const navBg = isScrolled
    ? "bg-[#0F2544]/80 backdrop-blur-xl shadow-lg"
    : "bg-[#1D3557]/85 backdrop-blur-md";

  return (
    <nav className={`${navBase} ${navBg}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Go to home"
          >
            <Image
              src={logoSrc}
              alt="Atera Logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-xl bg-white/10 p-1"
              priority
            />
            <span
              className="text-xl font-semibold tracking-wide"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              ATERA
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-2">
            {menuItems.map(({ name, key, links }) => (
              <li
                key={key}
                className="relative"
                onMouseEnter={() => setDropdownOpen(key)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium text-white/95 hover:bg-white/10 hover:text-white transition"
                  aria-haspopup="menu"
                  aria-expanded={dropdownOpen === key}
                >
                  <span>{name}</span>
                  <FiChevronDown
                    className={`transition-transform duration-200 ${
                      dropdownOpen === key ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  className={`absolute left-0 mt-2 w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-[#0F2544]/90 shadow-2xl backdrop-blur-xl transition-all duration-200 origin-top ${
                    dropdownOpen === key
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  <div className="p-2">
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white transition"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ))}

            <li>
              <Link
                href="/blog"
                className="rounded-xl px-3 py-2 text-sm font-medium text-white/95 hover:bg-white/10 hover:text-white transition"
              >
                ბლოგი
              </Link>
            </li>
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden sm:flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-white/95 hover:bg-white/10 hover:text-white transition"
              aria-label="Switch language"
            >
              <FaGlobe className="text-base" />
              <span>Eng</span>
            </button>

            <Link href="/contact" className="hidden sm:block">
              <span className="inline-flex items-center gap-2 rounded-xl border border-[#F4A261]/70 bg-[#F4A261]/10 px-4 py-2 text-sm font-semibold text-[#F4A261] hover:bg-[#F4A261] hover:text-white transition">
                <FiMail className="text-lg" />
                დაგვიკავშირდით
              </span>
            </Link>

            {/* Mobile burger */}
            <div className="md:hidden">
              <Hamburger
                toggled={menuOpen}
                toggle={setMenuOpen}
                size={22}
                direction="right"
                rounded
                color="#F4A261"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-white/10 bg-[#0F2544]/90 backdrop-blur-xl transition-[max-height,opacity] duration-300 ${
          menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
          <div className="flex flex-col gap-1">
            {mobileLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white transition"
                onClick={() => setMenuOpen(false)}
              >
                {l.name}
              </Link>
            ))}

            <div className="mt-2 flex gap-2">
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white transition"
                aria-label="Switch language"
              >
                <FaGlobe />
                Eng
              </button>
              <Link href="/contact" className="flex-1" onClick={() => setMenuOpen(false)}>
                <span className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#F4A261]/70 bg-[#F4A261]/10 px-3 py-3 text-sm font-semibold text-[#F4A261] hover:bg-[#F4A261] hover:text-white transition">
                  <FiMail className="text-lg" />
                  კონტაქტი
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
