"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Bell, Calendar, Users } from "lucide-react";
import clsx from "clsx";

const menus = [
  { name: "Home", href: "/", icon: Home },
  { name: "Pengumuman", href: "/pengumuman", icon: Bell },
  { name: "Jadwal MK", href: "/jadwal", icon: Calendar },
  { name: "Anggota", href: "/anggota", icon: Users },
];

const NavLink = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 active:scale-95"
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-1">
          {menus.map((menu) => {
            const active = pathname === menu.href;
            const Icon = menu.icon;

            return (
              <li key={menu.name}>
                <Link
                  href={menu.href}
                  className={clsx(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group",
                    active
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  )}
                >
                  <Icon 
                    size={18} 
                    className={clsx(
                      "transition-transform duration-200",
                      active ? "" : "group-hover:scale-110"
                    )}
                  />
                  <span>{menu.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden absolute top-16 left-0 w-full bg-white border-b shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-b-0"
        )}
      >
        <nav className="px-4 py-3 space-y-1">
          {menus.map((menu) => {
            const active = pathname === menu.href;
            const Icon = menu.icon;

            return (
              <Link
                key={menu.name}
                href={menu.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                  active
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 active:scale-95"
                )}
              >
                <Icon size={20} />
                <span>{menu.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default NavLink;