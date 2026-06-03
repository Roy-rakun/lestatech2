import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "../data";

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const categories = ["Semua", "IoT & Solusi Digital", "Computer Vision & AI", "Analitik Data & ML", "Web & Mobile Dev"];

  const filteredProjects = activeFilter === "Semua"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-24 bg-[#F4F4F4] scroll-mt-20 border-b border-slate-200/60 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="flex items-center space-x-3 text-orange-600 font-medium font-mono text-xs tracking-widest uppercase">
              <span>PORTFOLIO PROYEK</span>
              <span className="w-10 h-[1.5px] bg-orange-500/80" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-slate-900 tracking-tight leading-none">
              Dampak Nyata dari Implementasi <span className="text-[#f15a24] italic">Teknologi</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
              Lihat bagaimana solusi teknologi dapat membantu meningkatkan efisiensi, akurasi dan kinerja operasional suatu bisnis.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-[10.5px] font-bold tracking-wider uppercase transition-all duration-350 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#f15a24] text-white border border-[#f15a24] shadow-[0_4px_12px_rgba(241,90,36,0.15)]"
                    : "border border-slate-200 text-slate-500 bg-white hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group bg-white border border-slate-200/70 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#f15a24]/20 transition-all duration-300 flex flex-col h-full cursor-default"
            >
              
              {/* Cover Image Block */}
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={proj.imageUrl}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-95"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Category Badge on Image */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-slate-900/90 backdrop-blur-md border border-slate-750 text-white font-mono text-[9px] font-semibold px-2.5 py-1 rounded-md tracking-wider uppercase select-none">
                    {proj.category}
                  </span>
                </div>

                {/* Key Metric overlay panel */}
                {proj.stats && (
                  <div className="absolute bottom-4 right-4 z-20 bg-[#f15a24] border border-orange-500 shadow-md text-white px-3 py-1.5 rounded-xl text-right">
                    <span className="block text-2xl font-black leading-none font-sans">
                      {proj.stats.value}
                    </span>
                    <span className="text-[8px] font-bold uppercase tracking-wider opacity-90 block mt-0.5">
                      {proj.stats.label}
                    </span>
                  </div>
                )}
              </div>

              {/* Descriptions & Tags */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-sans text-slate-900 leading-tight group-hover:text-[#f15a24] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light">
                    {proj.description}
                  </p>
                </div>

                {/* Tag Pill List and Arrow */}
                <div className="flex flex-wrap justify-between items-center gap-2 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-50 text-slate-800 font-semibold font-mono text-[10px] px-2.5 py-1 rounded border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="p-1.5 rounded-full bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-[#f15a24] border border-slate-200/50 group-hover:border-orange-200 transition-all">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
