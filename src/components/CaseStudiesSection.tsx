import { useState } from "react";
import { CASE_STUDIES } from "../data";
import { ChevronRight, ArrowUpRight, Trophy, BookOpen, X, CheckSquare } from "lucide-react";

export default function CaseStudiesSection() {
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);

  const activeCase = CASE_STUDIES.find((c) => c.id === selectedCaseId);

  return (
    <section id="case-studies" className="py-24 bg-[#F4F4F4] text-slate-800 scroll-mt-20 overflow-hidden relative border-b border-slate-200/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <div className="flex items-center space-x-3 text-orange-600 font-medium font-mono text-xs tracking-widest uppercase">
            <span>STUDI KASUS NYATA</span>
            <span className="w-10 h-[1.5px] bg-orange-500/80" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-sans text-slate-900 tracking-tight">
            Bagaimana Kami Menulis Kisah <span className="text-[#f15a24] italic">Sukses Klien</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light font-normal">
            Menyelami metrik riil, kendala teknis awal, dan rumusan solusi teknologi yang memampukan pertumbuhan berkelanjutan bagi korporasi utama Indonesia.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_STUDIES.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCaseId(item.id)}
              className="bg-white border border-slate-200 hover:border-[#f15a24]/30 rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-xl group flex flex-col justify-between space-y-8"
            >
              <div className="space-y-6">
                {/* Image placeholder of the industry */}
                <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-65 group-hover:opacity-85"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950/80 to-transparent">
                    <span className="inline-block bg-orange-500 text-white font-mono text-[9px] font-bold px-2.5 py-0.5 rounded tracking-wider uppercase">
                      {item.client}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-[#f15a24] text-xs font-bold tracking-widest uppercase flex items-center space-x-1">
                      <Trophy className="h-3.5 w-3.5" />
                      <span>{item.impact}</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-sans text-slate-900 group-hover:text-[#f15a24] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed line-clamp-3 font-light">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center text-[10px] font-extrabold text-[#f15a24] uppercase tracking-[0.2em] group-hover:translate-x-1.5 transition-transform">
                <span>Baca Studi Kasus Lengkap</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal Block */}
      {selectedCaseId && activeCase && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
          <div
            className="bg-[#F4F4F4] border border-slate-200 text-slate-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            id="case-modal"
          >
            {/* Modal Closer */}
            <button
              onClick={() => setSelectedCaseId(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-all z-30"
              aria-label="Tutup"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-60 md:h-80 bg-slate-950">
              <img
                src={activeCase.imageUrl}
                alt={activeCase.title}
                className="w-full h-full object-cover opacity-65"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F4F4F4] via-[#F4F4F4]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 md:left-8 md:right-8 text-left">
                <span className="bg-orange-500 text-white font-mono text-xs font-black px-3 py-1 rounded-md tracking-wider uppercase mb-3 inline-block">
                  CLIENT: {activeCase.client}
                </span>
                <span className="block text-emerald-600 text-xs font-mono font-bold tracking-widest uppercase mb-1">{activeCase.impact}</span>
                <h3 className="text-xl md:text-3xl font-bold font-sans text-slate-900 leading-tight">
                  {activeCase.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 md:p-8 space-y-8">
              
              {/* Optional Background Card */}
              {activeCase.background && (
                <div className="space-y-3 bg-white border border-slate-200 rounded-2xl p-5 md:p-6 text-left">
                  <h4 className="text-xs font-bold font-mono text-[#f15a24] uppercase tracking-[0.1em] flex items-center space-x-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Latar Belakang (Background)</span>
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed font-light font-normal">
                    {activeCase.background}
                  </p>
                </div>
              )}

              {/* Highlight Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                
                {/* Challenge Card */}
                <div className="space-y-3 bg-white border border-slate-200 rounded-2xl p-5 md:p-6 text-left">
                  <h4 className="text-xs font-bold font-mono text-[#f15a24] uppercase tracking-[0.1em] flex items-center space-x-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Tantangan Bisnis (Challenge)</span>
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed font-light font-normal">
                    {activeCase.challenge}
                  </p>
                </div>

                {/* Solution Card */}
                <div className="space-y-3 bg-white border border-slate-200 rounded-2xl p-5 md:p-6 text-left">
                  <h4 className="text-xs font-bold font-mono text-emerald-600 uppercase tracking-[0.1em] flex items-center space-x-2">
                    <ArrowUpRight className="h-4 w-4" />
                    <span>Solusi Rekayasa / Pendekatan (Approach)</span>
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed font-light font-normal">
                    {activeCase.solution}
                  </p>
                </div>

              </div>

              {/* Concrete Results list */}
              <div className="space-y-4 pt-4 border-t border-slate-200 text-left">
                <h4 className="text-xs font-bold font-mono text-slate-900 uppercase tracking-wider">
                  Hasil Operasional & Dampak Nyata:
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {activeCase.results.map((res, i) => (
                    <div key={i} className="flex items-start space-x-3 bg-white p-3.5 rounded-2xl border border-slate-200">
                      <CheckSquare className="h-5 w-5 text-[#f15a24] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm leading-relaxed font-normal">{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Close Button at bottom */}
              <div className="flex justify-end pt-4 border-t border-slate-200">
                <button
                  onClick={() => setSelectedCaseId(null)}
                  className="border border-slate-300 text-slate-700 hover:text-slate-950 hover:bg-slate-100 py-3 px-6 rounded-md font-bold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer"
                >
                  Selesai Membaca
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
