"use client";

import { useState } from "react";
import { MessageCircle, Send, User, Clock, Sparkles } from "lucide-react";

type Comment = {
  name: string;
  message: string;
  time: string;
  avatar: string;
};

const ClassComments = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  // Generate random avatar color
  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-blue-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-emerald-500",
      "bg-orange-500",
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) return;

    setComments([
      {
        name,
        message,
        time: new Date().toLocaleString("id-ID", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        avatar: getAvatarColor(name),
      },
      ...comments,
    ]);

    setName("");
    setMessage("");
  };

  return (
    <section className="min-h-screen bg-white py-12 md:py-16"> 
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>Ruang Diskusi Kelas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Komentar Anggota Kelas
          </h2>
          <p className="text-gray-600 text-lg">
            Sampaikan pendapat, saran, atau informasi untuk kelas
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-10 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
              <MessageCircle className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Tulis Komentar Baru
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="text-gray-400" size={18} />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama Anda"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  required
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Komentar
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis komentar, saran, atau informasi untuk kelas..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
                required
              />
              <p className="text-xs text-gray-500 mt-2">
                Gunakan bahasa yang sopan dan santun
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl hover:shadow-blue-200 transition-all duration-200 hover:scale-105"
            >
              <span>Kirim Komentar</span>
              <Send size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </form>
        </div>

        {/* Comments Counter */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Semua Komentar ({comments.length})
          </h3>
          {comments.length > 0 && (
            <div className="text-sm text-gray-500">
              Terbaru di atas
            </div>
          )}
        </div>

        {/* Comment List */}
        <div className="space-y-4">
          {comments.length === 0 && (
            <div className="bg-white rounded-2xl p-12 text-center border-2 border-dashed border-gray-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <MessageCircle className="text-gray-400" size={32} />
              </div>
              <p className="text-gray-500 text-lg font-medium mb-2">
                Belum ada komentar
              </p>
              <p className="text-gray-400 text-sm">
                Jadilah yang pertama memberikan komentar untuk kelas ini
              </p>
            </div>
          )}

          {comments.map((comment, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 animate-fade-in"
            >
              <div className="flex gap-4">
                {/* Avatar */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full ${comment.avatar} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                  {comment.name.charAt(0).toUpperCase()}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Name & Time */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {comment.name}
                    </h4>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock size={14} />
                      <span>{comment.time}</span>
                    </div>
                  </div>

                  {/* Message */}
                  <p className="text-gray-700 leading-relaxed">
                    {comment.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        {comments.length > 3 && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Menampilkan {comments.length} komentar
            </p>
          </div>
        )}

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ClassComments;