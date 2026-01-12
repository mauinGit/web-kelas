"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

const images = [
  {
    id: 1,
    src: "/foto1.jpeg",
    alt: "Web Kelas 1",
    color: "blue",
  },
  {
    id: 2,
    src: "/foto2.jpeg",
    alt: "Web Kelas 2",
    color: "purple",
  },
  {
    id: 3,
    src: "/foto2.jpg",
    alt: "Web Kelas 3",
    color: "emerald",
  },
];

const TextLeft3DScrollCarousel = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [active]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[active];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-12 md:py-20 lg:min-h-screen lg:flex lg:items-center">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE - STATIC TEXT CONTENT */}
          <div className="relative z-10">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
              Selamat Datang
            </div>

            {/* Subtitle */}
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">
              Platform Informasi 
            </p>

            {/* Title - STATIC */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              SIREG 4B
            </h1>

            {/* Description - STATIC */}
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-xl">
              Akses pengumuman, jadwal kuliah, dan informasi anggota kelas dalam satu platform yang mudah digunakan.
            </p>

            {/* Stats - STATIC */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-xs md:text-sm text-gray-600">Mahasiswa</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1">20+</div>
                <div className="text-xs md:text-sm text-gray-600">Mata Kuliah</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1">100+</div>
                <div className="text-xs md:text-sm text-gray-600">Pengumuman</div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm md:text-base font-medium shadow-lg hover:shadow-blue-200 transition-all duration-200 hover:scale-105 mb-8 md:mb-10"
            >
              <span>Jelajahi Sekarang</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

           
          </div>

          {/* RIGHT SIDE - 3D SCROLLABLE IMAGES ONLY */}
          <div className="relative lg:h-[550px] h-[400px]" style={{ perspective: "1500px" }}>
            <div className="relative w-full h-full max-w-lg mx-auto lg:max-w-none">
              {images.map((image, index) => {
                const offset = (index - active + images.length) % images.length;
                const isActive = offset === 0;
                const isNext = offset === 1;
                const isPrev = offset === images.length - 1;

                return (
                  <div
                    key={image.id}
                    className={clsx(
                      "absolute w-full h-full transition-all duration-700 ease-out cursor-pointer",
                      isActive && "z-30",
                      (isNext || isPrev) && "z-20",
                      !isActive && !isNext && !isPrev && "z-10 opacity-0"
                    )}
                    style={{
                      transform: isActive
                        ? "translateX(0) translateZ(0) rotateY(0deg) scale(1)"
                        : isNext
                        ? "translateX(30%) translateZ(-200px) rotateY(-25deg) scale(0.75)"
                        : isPrev
                        ? "translateX(-30%) translateZ(-200px) rotateY(25deg) scale(0.75)"
                        : "translateZ(-400px) scale(0.6)",
                      opacity: isActive ? 1 : isNext || isPrev ? 0.5 : 0,
                    }}
                    onClick={() => {
                      if (isNext) handleNext();
                      if (isPrev) handlePrev();
                    }}
                  >
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      
                      {/* Subtle Overlay */}
                      <div className={clsx(
                        "absolute inset-0 bg-gradient-to-br opacity-10",
                        image.color === "blue" && "from-blue-600 to-indigo-600",
                        image.color === "purple" && "from-purple-600 to-pink-600",
                        image.color === "emerald" && "from-emerald-600 to-teal-600"
                      )}></div>

                      {/* Active Border */}
                      {isActive && (
                        <div className="absolute inset-0 border-4 border-blue-500 rounded-3xl"></div>
                      )}

                      {/* Badge on Active Image */}
                      {isActive && (
                        <div className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg animate-fade-in">
                          <span className="text-sm font-semibold text-gray-900">
                            Foto {active + 1}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Instruction Hint */}
            <div className="hidden lg:block absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="text-sm text-gray-500">
                Klik foto samping untuk navigate →
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TextLeft3DScrollCarousel;