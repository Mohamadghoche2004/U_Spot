"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./navbar.css";
import { useTheme } from "next-themes";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Only render theme-dependent content after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Default logo for server-side rendering (or use a placeholder)
  const logoSrc = mounted && resolvedTheme === "dark"
    ? "/USpotlogolight.png"
    : "/USpotLogo.png";

  return (
    <nav className="bg-white ">
      <div className="mx-auto max-w-7xl   ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-200 focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/*
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          */}
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/*
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          */}
              <svg
                className="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image
                src={logoSrc}
                alt="U-Spot Logo"
                width={40}
                height={40}
                className="h-8 w-auto object-contain p-1"
                quality={100}
                priority
              />
            </div>
            <div className="flex ml-33 flex-1 items-center justify-center hidden sm:flex">
              <div className="navbar-notch"></div>
            </div>
            <div className="hidden  sm:block">
              <div className="flex mr-3 items-center gap-1 justify-end">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a
                  href="#"
                  className="rounded-md bg-gray-100 px-2 py-2 text-sm font-medium text-gray-900"
                  aria-current="page"
                >
                  Book a call
                </a>
                <button
                  type="button"
                  className="rounded-[30px] bg-black px-3 py-2 text-sm font-medium text-white hover:cursor-pointer"
                >
                  Let&apos;s connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`sm:hidden transition-all duration-600 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a
            href="#"
            className="block rounded-md bg-gray-100 px-3 py-2 text-base font-medium text-gray-900"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            Team
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            Projects
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}
