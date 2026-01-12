"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/navbar/navlink";
import clsx from "clsx";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Web Kelas Logo"
              width={40}
              height={40}
              priority
              className="object-cover"
            />
          </div>
          <span className="font-bold text-lg sm:text-xl bg-gradient-to-r  to-indigo-600 bg-clip-text ">
            SIREG 4B
          </span>
        </Link>

        {/* Menu */}
        <NavLink />
      </div>
    </header>
  );
};

export default Navbar;