"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, Bell, Calendar, Users, Mail, MapPin, Phone, Github, Instagram, Linkedin } from "lucide-react";

const menus = [
  { name: "Home", href: "/", icon: Home },
  { name: "Pengumuman", href: "/pengumuman", icon: Bell },
  { name: "Jadwal MK", href: "/jadwal", icon: Calendar },
  { name: "Anggota", href: "/anggota", icon: Users },
];

const socialLinks = [
  { name: "Github", icon: Github, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-blue-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Branding & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden ring-2 ring-blue-100">
                <Image
                  src="/logo.png"
                  alt="Web Kelas Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Web Kelas
              </h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-md">
              Platform informasi terpadu untuk pengumuman, jadwal mata kuliah, dan data anggota kelas. Memudahkan komunikasi dan kolaborasi antar mahasiswa.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-white text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-110 shadow-sm"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
              Menu Cepat
            </h3>
            <ul className="space-y-3">
              {menus.map((menu) => {
                const Icon = menu.icon;
                return (
                  <li key={menu.name}>
                    <Link
                      href={menu.href}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
                    >
                      <Icon size={16} className="group-hover:scale-110 transition-transform duration-200" />
                      <span>{menu.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
              Kontak
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Mail size={16} className="mt-0.5 text-blue-600 flex-shrink-0" />
                <span>webkelas@example.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Phone size={16} className="mt-0.5 text-blue-600 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin size={16} className="mt-0.5 text-blue-600 flex-shrink-0" />
                <span>Universitas Indonesia<br />Depok, Jawa Barat</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} <span className="font-semibold text-gray-800">Web Kelas</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            Dibuat dengan <span className="text-red-500">❤</span> untuk kebutuhan pembelajaran
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;