"use client";

import { useState } from "react";
import { Users, MapPin, Heart, Hash, Search, Download, UserPlus } from "lucide-react";

export default function AnggotaPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const anggota = [
    {
      no: 1,
      nama: "Amirullah",
      nim: "090311824290",
      domisili: "Palembang",
      hobi: "Ngoding",
      
    },
    {
      no: 2,
      nama: "Maulana Adiatma",
      nim: "090311824290",
      domisili: "Indralaya",
      hobi: "Ngoding",
      
    },
    {
      no: 3,
      nama: "sjhcjhvgd",
      nim: "090311824290",
      domisili: "Indralaya",
      hobi: "Ngoding",
      
    },
    {
      no: 4,
      nama: "Maulana Adiatma",
      nim: "090311824290",
      domisili: "Indralaya",
      hobi: "Ngoding",
      
    },
    {
      no: 3,
      nama: "Siti Aisyah",
      nim: "22123457",
      domisili: "Prabumulih",
      hobi: "Membaca",
      
    },
    
  ];

  const filteredAnggota = anggota.filter(
    (member) =>
      member.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.nim.includes(searchQuery) ||
      member.domisili.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="text-center mb-6">
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Anggota Kelas
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-3">
              <Users size={16} />
              <span> SIREG 4B</span>
            </div>
            
          </div>

          {/* Stats & Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Stats */}
            <div className="flex gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl px-6 py-3 border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">{anggota.length}</div>
                <div className="text-sm text-gray-700 font-medium">Total Anggota</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl px-6 py-3 border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">{filteredAnggota.length}</div>
                <div className="text-sm text-gray-700 font-medium">Ditampilkan</div>
              </div>
            </div>

            {/* Search & Actions */}
            <div className="flex gap-3 w-full md:w-auto">
              {/* Search */}
              <div className="relative flex-1 md:w-80">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="text-gray-400" size={18} />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari nama, NIM, atau domisili..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider w-20">
                    No
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">
                    Nama Lengkap
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">
                    NIM
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">
                    Domisili
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">
                    Hobi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredAnggota.map((member, index) => (
                  <tr
                    key={member.no}
                    className="hover:bg-blue-50 transition-colors duration-150 group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center">
                        <div className="bg-gray-100 group-hover:bg-blue-100 text-gray-700 group-hover:text-blue-700 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-colors duration-150">
                          {member.no}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        
                        <div>
                          <div className="font-semibold text-gray-900 text-base">
                            {member.nama}
                          </div>
                          <div className="text-xs text-gray-500">
                            Mahasiswa
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Hash size={16} className="text-gray-400" />
                        <span className="text-gray-700 font-mono font-medium">
                          {member.nim}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-gray-400" />
                        <span className="text-gray-700">
                          {member.domisili}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Heart size={16} className="text-gray-400" />
                        <span className="text-gray-700">
                          {member.hobi}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {filteredAnggota.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center border-2 border-dashed border-gray-200 mt-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="text-gray-400" size={32} />
            </div>
            <p className="text-gray-500 text-lg font-medium mb-2">
              Tidak ada hasil ditemukan
            </p>
            <p className="text-gray-400 text-sm">
              Coba gunakan kata kunci pencarian yang berbeda
            </p>
          </div>
        )}

        {/* Footer Info */}
        {filteredAnggota.length > 0 && (
          <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
            <p>
              Menampilkan <span className="font-semibold text-gray-700">{filteredAnggota.length}</span> dari <span className="font-semibold text-gray-700">{anggota.length}</span> anggota
            </p>
            <p className="text-xs">
              Data diperbarui secara berkala
            </p>
          </div>
        )}

      </div>
    </section>
  );
}