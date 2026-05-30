import { Cpu, BrainCircuit, BarChart3, CheckCircle } from "lucide-react";
import { SERVICES } from "../data";

interface ServicesSectionProps {
  onContactClick: () => void;
}

export default function ServicesSection({ onContactClick }: ServicesSectionProps) {
  // Mapper for dynamic Lucide Icons based on dataset string keys
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="h-7 w-7 text-[#f15a24]" />;
      case "BrainCircuit":
        return <BrainCircuit className="h-7 w-7 text-[#f15a24]" />;
      case "BarChart3":
        return <BarChart3 className="h-7 w-7 text-[#f15a24]" />;
      default:
        return <Cpu className="h-7 w-7 text-[#f15a24]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#F4F4F4] scroll-mt-20 border-b border-slate-200/60 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="flex items-center justify-center space-x-3 text-orange-600 font-medium font-mono text-xs tracking-widest uppercase">
            <span>LAYANAN KAMI</span>
            <span className="w-10 h-[1.5px] bg-orange-500/80" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-slate-900 tracking-tight">
            Arsitektur Solusi Secara <span className="text-[#f15a24] italic">End-to-End</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Kami mengintegrasikan keahlian ilmiah komputer dengan pemecahan masalah praktis lapangan untuk mendorong pertumbuhan bisnis Anda secara eksponensial.
          </p>
        </div>

        {/* Services Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white border border-slate-200/70 rounded-3xl p-8 hover:shadow-xl hover:border-[#f15a24]/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-7 group-hover:scale-110 group-hover:bg-orange-50 group-hover:border-orange-200 transition-all">
                  {getIcon(srv.iconName)}
                </div>

                {/* Service Header */}
                <h3 className="text-xl md:text-2xl font-bold font-sans text-slate-900 mb-3 group-hover:text-[#f15a24] transition-colors">
                  {srv.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  {srv.description}
                </p>

                {/* Tech Highlights checklist */}
                <div className="space-y-3 pt-6 border-t border-slate-100">
                  <p className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase mb-1">Kemampuan Teknis:</p>
                  {srv.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5">
                      <CheckCircle className="h-4 w-4 text-[#f15a24] flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-slate-700 font-medium leading-normal font-light">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button at bottom */}
              <button
                onClick={onContactClick}
                className="w-full mt-10 bg-[#f15a24] hover:bg-[#ff6c37] text-white py-3 px-4 rounded-md font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md shadow-orange-600/10 text-center"
              >
                Konsultasikan Sekarang
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
