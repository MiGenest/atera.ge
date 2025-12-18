"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MenuItem = { label: string; href: string };
type MenuGroup = { label: string; items?: MenuItem[]; href?: string };

const menu: MenuGroup[] = [
  {
    label: "გადაწყვეტილებები",
    items: [
      { label: "IT ინფრასტრუქტურა", href: "/solutions/infrastructure" },
      { label: "ვირტუალიზაცია", href: "/solutions/infrastructure/virtualization" },
      { label: "ქლაუდი", href: "/solutions/infrastructure/cloud" },
      { label: "კიბერუსაფრთხოება", href: "/solutions/infrastructure/security" },
      { label: "ვიდეომონიტორინგი (CCTV)", href: "/solutions/infrastructure/cctv" },
      { label: "შენობის მართვის სისტემები (BMS)", href: "/solutions/infrastructure/bms" },
    ],
  },
// {
//   label: "პროდუქტები",
//   items: [
//     { label: "სერვერები & Storage", href: "/products/servers-storage" },
//     { label: "ქსელური მოწყობილობები", href: "/products/network" },
//     { label: "კიბერუსაფრთხოების მოწყობილობები", href: "/products/security" },
//     { label: "ვიდეომონიტორინგი (CCTV)", href: "/products/cctv" },
//     { label: "ელექტრო & ენერგოსისტემები", href: "/products/power" },
//     { label: "პროგრამული უზრუნველყოფის ლიცენზიები", href: "/products/licenses" },
//   ],
// },
  {
    label: "სერვისები",
    items: [
      { label: "IT აუთსორსინგი", href: "/services/outsourcing" },
      { label: "ტექნიკური მხარდაჭერა (24/7)", href: "/services/outsourcing/maintenance" },
      { label: "დანერგვა / პროექტები", href: "/services/outsourcing/implementation" },
      { label: "სერვის ცენტრი / SLA", href: "/services/outsourcing/service-center" },
    ],
  },
  {
    label: "ჩვენ",
    items: [
      { label: "კომპანია", href: "/about/company" },
      { label: "გუნდი", href: "/about/company/team" },
    ],
  },
  {
    label: "ტექნიკა & მომსახურება",
    items: [
      { label: "ბრენდები / პარტნიორები", href: "/procurement/brands" },
      { label: "მიწოდება & ლოგისტიკა", href: "/procurement/brands/delivery" },
      { label: "გარანტია / RMA", href: "/procurement/brands/warranty" },
    ],
  },
];

function IconBurger({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function IconChevronRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Desktop dropdown (hover)
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const desktopTimer = useRef<number | null>(null);

  // Mobile full-screen overlay
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  // ✅ Always start closed on mount (prevents "open by default" on mobile resize/hydration edge cases)
  useEffect(() => {
    setMobileOpen(false);
    setMobileGroup(null);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Close mobile overlay when crossing the md breakpoint (prevents stuck open state on resize)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");

    const handle = () => {
      // Whenever breakpoint changes (either direction), force-close the mobile overlay
      setMobileOpen(false);
      setMobileGroup(null);
    };

    // Run once and subscribe
    handle();
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  // Scroll lock + prevent background interaction (overlay covers anyway)
  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  // ESC closes mobile
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const navBase =
    "fixed top-0 left-0 w-full z-[999] text-white transition-all duration-300";
  const navBg = isScrolled
    ? "bg-[#0F2544]/80 backdrop-blur-xl shadow-lg"
    : "bg-[#1D3557]/85 backdrop-blur-md";

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileGroup(null);
  };

  return (
    <>
      <header className={`${navBase} ${navBg}`} aria-label="Main Navigation">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => {
                closeMobile();
                setDesktopOpen(null);
              }}
              aria-label="Go to home"
            >
              <img
                src="https://assets.atera.ge/icons/png2.png"
                alt="Atera Logo"
                className="h-11 w-11 rounded-xl bg-white/10 p-1 object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <span
                className="text-xl font-semibold tracking-wide"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                ATERA
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:block" aria-label="Desktop">
              <ul className="flex items-center gap-2">
                {menu.map((group) => {
                  const open = desktopOpen === group.label;
                  const items = group.items ?? [];
                  return (
                    <li
                      key={group.label}
                      className="relative"
                      onMouseEnter={() => {
                        if (desktopTimer.current) window.clearTimeout(desktopTimer.current);
                        setDesktopOpen(group.label);
                      }}
                      onMouseLeave={() => {
                        if (desktopTimer.current) window.clearTimeout(desktopTimer.current);
                        desktopTimer.current = window.setTimeout(() => setDesktopOpen(null), 120);
                      }}
                    >
                      <button
                        type="button"
                        className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium text-white/95 hover:bg-white/10 hover:text-white transition"
                        aria-haspopup="menu"
                        aria-expanded={open}
                      >
                        <span>{group.label}</span>
                        <IconChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            open ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>

                      <div
                        className={`absolute left-0 mt-2 w-[260px] overflow-hidden rounded-2xl border border-white/10 bg-[#0F2544]/90 shadow-2xl backdrop-blur-xl transition-all duration-200 origin-top
                          ${open ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}
                        `}
                        role="menu"
                      >
                        <div className="p-2">
                          {items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white transition"
                              role="menuitem"
                              onClick={() => setDesktopOpen(null)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                })}

                <li>
                  <Link
                    href="/blog"
                    className="rounded-xl px-3 py-2 text-sm font-medium text-white/95 hover:bg-white/10 hover:text-white transition"
                  >
                    ბლოგი
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right actions + mobile burger */}
            <div className="flex items-center gap-3">
              <Link
                href="/en"
                className="hidden sm:flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-white/95 hover:bg-white/10 hover:text-white transition"
                aria-label="Switch language"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  🌐
                </span>
                <span>Eng</span>
              </Link>

              <Link href="/contact" className="hidden sm:block">
                <span className="inline-flex items-center gap-2 rounded-xl border border-[#F4A261]/70 bg-[#F4A261]/10 px-4 py-2 text-sm font-semibold text-[#F4A261] hover:bg-[#F4A261] hover:text-white transition">
                  ✉️
                  დაგვიკავშირდით
                </span>
              </Link>

              {/* Mobile burger */}
              <button
                type="button"
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[#F4A261]"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => {
                  setMobileOpen((v) => {
                    const next = !v;
                    if (!next) {
                      setMobileGroup(null);
                    } else {
                      setMobileGroup(null);
                    }
                    return next;
                  });
                }}
              >
                {mobileOpen ? <IconClose className="h-5 w-5" /> : <IconBurger className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* ✅ MOBILE: FULL-SCREEN OVERLAY (100% x 100%) */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[10000]" role="dialog" aria-modal="true">
          {/* Backdrop (optional close on click) */}
          <div
            className="absolute inset-0 bg-[#1D3557]"
            onClick={() => {
              // OPTIONAL: overlay-ზე დაჭერით დახურვა
              // თუ არ გინდა, უბრალოდ წაშალე ეს onClick
              closeMobile();
            }}
          />

          {/* Panel (full screen) */}
          <div
            className="absolute inset-0 bg-[#1D3557]"
            onClick={(e) => e.stopPropagation()} // content click არ დახუროს
          >
            {/* Top bar */}
            <div className="h-16 border-b border-white/10 bg-[#1D3557]">
              <div className="h-full px-4 flex items-center justify-between">
                <Link href="/" onClick={closeMobile} className="flex items-center gap-2">
                  <img
                    src="https://assets.atera.ge/icons/png2.png"
                    alt="Atera Logo"
                    className="h-11 w-11 rounded-xl bg-white/10 p-1 object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <span className="text-xl font-semibold tracking-wide">ATERA</span>
                </Link>

                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[#F4A261]"
                  aria-label="Close menu"
                  onClick={closeMobile}
                >
                  <IconClose className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain">
              <div className="px-4 py-4">
                <div className="border-t border-white/10">
                  {menu.map((group) => {
                    const expanded = mobileGroup === group.label;
                    const items = group.items ?? [];
                    return (
                      <div key={group.label} className="border-b border-white/10">
                        <button
                          type="button"
                          onClick={() => setMobileGroup(expanded ? null : group.label)}
                          className="w-full flex items-center justify-between py-4 text-left text-white"
                        >
                          <span className="text-[15px] font-semibold">{group.label}</span>
                          <IconChevronRight
                            className={`h-5 w-5 text-white/70 transition-transform ${
                              expanded ? "rotate-90" : ""
                            }`}
                          />
                        </button>

                        <div className={`${expanded ? "block" : "hidden"} pb-2`}>
                          {items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMobile}
                              className="block rounded-xl py-3 pl-3 pr-2 text-[14px] text-white/90 hover:bg-white/10 transition"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Extra links */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Link
                    href="/blog"
                    onClick={closeMobile}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-white/90 hover:bg-white/10 transition"
                  >
                    ბლოგი
                  </Link>
                  <Link
                    href="/contact"
                    onClick={closeMobile}
                    className="rounded-2xl border border-[#F4A261]/70 bg-[#F4A261]/10 px-4 py-3 text-center font-semibold text-[#F4A261] hover:bg-[#F4A261] hover:text-white transition"
                  >
                    კონტაქტი
                  </Link>
                </div>

                <div className="mt-3">
                  <Link
                    href="/en"
                    onClick={closeMobile}
                    className="block w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                  >
                    🌐 Eng
                  </Link>
                </div>

                <div className="h-10" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}