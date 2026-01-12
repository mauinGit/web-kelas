"use client";

import { Calendar, Clock, MapPin, User, BookOpen, Download, Filter } from "lucide-react";

export default function JadwalPage() {
  const jadwal = [
    {
      hari: "Selasa",
      mataKuliah: "Perancangan UX",
      waktu: "08.00 - 10.30",
      ruangan: "Ruang F.2.1",
      dosen: "Dwi Rosa Indah & Putri Eka Sevtiyuni",
      color: "purple",
      sks: 3,
    },
    {
      hari: "Selasa",
      mataKuliah: "Perancangan UX",
      waktu: "08.00 - 10.30",
      ruangan: "Ruang F.2.1",
      dosen: "Dwi Rosa Indah & Putri Eka Sevtiyuni",
      color: "purple",
      sks: 3,
    },
    {
      hari: "Selasa",
      mataKuliah: "Perancangan UX",
      waktu: "08.00 - 10.30",
      ruangan: "Ruang F.2.1",
      dosen: "Dwi Rosa Indah & Putri Eka Sevtiyuni",
      color: "purple",
      sks: 3,
    },
    {
      hari: "Rabu",
      mataKuliah: "Basis Data",
      waktu: "10.00 - 12.00",
      ruangan: "Ruang 203",
      dosen: "Budi Santoso, S.Kom, M.Sc",
      color: "emerald",
      sks: 3,
    },
    {
      hari: "Rabu",
      mataKuliah: "Basis Data",
      waktu: "10.00 - 12.00",
      ruangan: "Ruang 203",
      dosen: "Budi Santoso, S.Kom, M.Sc",
      color: "emerald",
      sks: 3,
    },
    {
      hari: "Kamis",
      mataKuliah: "Jaringan Komputer",
      waktu: "13.00 - 15.00",
      ruangan: "Lab Jaringan",
      dosen: "Ir. Rina Kusuma, M.T",
      color: "orange",
      sks: 2,
    },
    {
      hari: "Kamis",
      mataKuliah: "Jaringan Komputer",
      waktu: "13.00 - 15.00",
      ruangan: "Lab Jaringan",
      dosen: "Ir. Rina Kusuma, M.T",
      color: "orange",
      sks: 2,
    },
    {
      hari: "Kamis",
      mataKuliah: "Jaringan Komputer",
      waktu: "13.00 - 15.00",
      ruangan: "Lab Jaringan",
      dosen: "Ir. Rina Kusuma, M.T",
      color: "orange",
      sks: 2,
    },
    {
      hari: "Jumat",
      mataKuliah: "UI / UX Design",
      waktu: "13.00 - 15.00",
      ruangan: "Ruang Multimedia",
      dosen: "Dedi Prasetyo, S.Sn, M.Des",
      color: "pink",
      sks: 2,
    },
    {
      hari: "Jumat",
      mataKuliah: "UI / UX Design",
      waktu: "13.00 - 15.00",
      ruangan: "Ruang Multimedia",
      dosen: "Dedi Prasetyo, S.Sn, M.Des",
      color: "pink",
      sks: 2,
    },
  ];

  const totalSKS = jadwal.reduce((sum, item) => sum + item.sks, 0);

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-700",
        
      },
      emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        text: "text-emerald-700",
       
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-700",
        
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-700",
        
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="min-h-screen bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 md:mb-12 md:center">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Jadwal Mata Kuliah
              </h1>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-3">
                <Calendar size={16} />
                <span>Semester Genap 2026</span>
              </div>
            </div>

            
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-blue-600 mb-1">{jadwal.length}</div>
              <div className="text-sm text-gray-600">Mata Kuliah</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-purple-600 mb-1">{totalSKS}</div>
              <div className="text-sm text-gray-600">Total SKS</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-emerald-600 mb-1">5</div>
              <div className="text-sm text-gray-600">Hari Kuliah</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-orange-600 mb-1">5</div>
              <div className="text-sm text-gray-600">Dosen</div>
            </div>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-blue-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Hari</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Mata Kuliah</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Waktu</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Ruangan</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Dosen</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">SKS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {jadwal.map((item, index) => {
                  const colors = getColorClasses(item.color);
                  return (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          
                          <span className="font-semibold text-gray-900">{item.hari}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <BookOpen size={18} className="text-gray-400" />
                          <span className="font-medium text-gray-900">{item.mataKuliah}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-gray-400" />
                          <span className="text-gray-700">{item.waktu}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-gray-400" />
                          <span className="text-gray-700">{item.ruangan}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <User size={16} className="text-gray-400" />
                          <span className="text-gray-700">{item.dosen}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
                          {item.sks} SKS
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-4">
          {jadwal.map((item, index) => {
            const colors = getColorClasses(item.color);
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-5 shadow-md border-l-4 ${colors.border}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    
                    <span className="font-bold text-gray-900 text-lg">{item.hari}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
                    {item.sks} SKS
                  </span>
                </div>

                {/* Mata Kuliah */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.mataKuliah}
                </h3>

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock size={18} className="text-gray-400" />
                    <span>{item.waktu}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin size={18} className="text-gray-400" />
                    <span>{item.ruangan}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <User size={18} className="text-gray-400" />
                    <span>{item.dosen}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Jadwal dapat berubah sewaktu-waktu. Silakan cek secara berkala.
          </p>
        </div>

      </div>
    </section>
  );
}