import { useState } from "react";
import { ArrowRight } from "lucide-react";
import MuxBackgroundVideo from "./MuxBackgroundVideo";

export default function AboutSection() {
  const clients = [
    { 
      line1: "PT Global",
      line2: "Optima Abadi",
      logoUrl: "https://lh3.googleusercontent.com/d/1rIXFS2KNRNUFaXv0iQFDMojRPLqJrowN"
    },
    { 
      line1: "CV Taufik",
      line2: "Jaya Abadi",
      logoUrl: "https://lh3.googleusercontent.com/d/1cTvab-NZVSmncJmAl2pxAY2a54890VLu"
    },
    { 
      line1: "Pastelly",
      line2: "Outfit",
      logoUrl: "https://lh3.googleusercontent.com/d/1_b-LkGov7H5m-PI4e_Ij_7Ve4UGba35u"
    },
    { 
      line1: "UD",
      line2: "Artomoro",
      logoUrl: "https://lh3.googleusercontent.com/d/1IRaMqH0AgtNO2ndaXAhv3LozfqmKKoCb"
    },
    { 
      line1: "DPW Partai",
      line2: "Kebangkitan Bangsa",
      logoUrl: "https://lh3.googleusercontent.com/d/1xhvKi-yFZGTr6Aw6kQvDM0RoCH4634Bw"
    },
    { 
      line1: "PHRI",
      line2: "Palembang",
      logoUrl: "https://lh3.googleusercontent.com/d/1-DHZKIXwqnqQj96whk313M3QFMTbdybO"
    },
    { 
      line1: "Seguguk",
      line2: "Ogan Ilir",
      logoUrl: "https://lh3.googleusercontent.com/d/1GL3PfT8S1Gblu_YSSeq6DcuEZsZuZLBu"
    },
    { 
      line1: "Bogor",
      line2: "Tour Guide",
      logoUrl: "https://lh3.googleusercontent.com/d/1Qf3LCL3OE063vL6XWOzBGYICTkp77vCt"
    }
  ];

  // Function to scroll smoothly to sections
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="about-group" className="bg-[#F4F4F4] text-slate-800 antialiased select-none">
      
      {/* ABOUT US MAIN CONTENT BLOCK */}
      <section id="about" className="py-20 md:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Wording and details */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Thin Line Tagline */}
              <div className="flex items-center space-x-3 text-orange-600 font-medium font-mono text-xs tracking-widest">
                <span>ABOUT US</span>
                <span className="w-10 h-[1.5px] bg-orange-500/80" />
              </div>

              {/* Slate Title Header matches the visual screenshot perfectly */}
              <h2 className="text-3xl md:text-4.5xl lg:text-5xl font-bold font-sans text-slate-900 tracking-tight leading-tight">
                A Strategic Technology Partner, <br />
                Built on Experience
              </h2>

              {/* Exact paragraph matches the screenshot text */}
              <div className="space-y-5 text-slate-600 text-sm md:text-base leading-relaxed font-normal">
                <p>
                  Berangkat dari pengalaman strategis tahun 2017, PT Lestari Surya Teknologi adlaah perusahaan teknologi informasi yang hadir untuk membangun sistem digital, pengaplikasian Ai dan analitik data.
                </p>
                <p>
                  Secara legal berdiri pada Januari 2025, kami merancang pendekatan yang lebih presisi, terukur dan berdampak nyata.
                </p>
              </div>

            </div>

            {/* Right Column: Modern Minimal Architecture Curved interior image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-[4/3] bg-slate-100 border border-slate-200 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
                  alt="Minimal Curved White Architecture Space with Skylight"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SELECTED EXPERIENCE SECT */}
      <section id="selected-experience" className="pb-16 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Central Subtitle Header with line */}
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] md:text-xs font-bold text-slate-400 font-sans tracking-[0.2em] uppercase">
              SELECTED EXPERIENCE
            </span>
            <div className="w-10 h-0.5 bg-orange-600 mx-auto" />
          </div>

          {/* Swiss-style Minimal Grid layout with outline cells */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-slate-200 rounded-lg overflow-hidden shadow-sm">
            {clients.map((item, idx) => (
              <div 
                key={idx}
                className="border-r border-b border-slate-200 p-6 sm:p-8 flex flex-col items-center justify-center text-center bg-[#F4F4F4] hover:bg-slate-200/30 transition-all duration-200 min-h-[145px] sm:min-h-[160px] group"
              >
                {/* Outlined Icon block */}
                <div className="mb-4 transform group-hover:scale-105 transition-transform max-h-12 flex items-center justify-center">
                  <img 
                    src={item.logoUrl} 
                    alt={`${item.line1} ${item.line2}`}
                    className="h-10 w-auto max-w-[120px] object-contain drop-shadow-sm filter brightness-95 group-hover:brightness-100 transition-all"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Typography name centered nicely on multiple lines */}
                <span className="text-slate-900 font-bold text-xs sm:text-sm tracking-tight leading-tight block">
                  {item.line1} <br /> {item.line2}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RICH DEEP BLUE BLACK CTA BAND - WITH DARK MUX VIDEO BACKGROUND AND WHITE TEXT */}
      <section id="system-cta" className="relative bg-slate-950 text-white py-24 px-4 md:px-8 text-center scroll-mt-20 overflow-hidden border-t border-slate-900">
        <MuxBackgroundVideo playbackId="BuGGTsiXq1T00WUb8qfURrHkTCbhrkfFLSv4uAOZzdhw" />
        {/* Extra darkness overlay for ultimate legibility with absolute text contrast safety */}
        <div className="absolute inset-0 bg-slate-950/70 z-10" />
        
        <div className="relative z-20 max-w-5xl mx-auto space-y-6">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white font-sans">
            We don't just build systems. <br />
            <span className="text-slate-200 font-light text-xl sm:text-2xl md:text-3xl block mt-3 max-w-3xl mx-auto leading-relaxed">
              We design clarity, structure, and growth.
            </span>
          </h3>
          <div className="pt-6">
            <button 
              onClick={() => handleScrollTo("contact")}
              className="bg-[#f15a24] hover:bg-[#ff6c37] text-white py-4 px-10 rounded-md font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xl shadow-orange-600/20 hover:scale-105 active:scale-98 border-none"
            >
              LET'S WORK TOGETHER
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
