import { Copyright, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

interface FooterProps {
  onNavClick: (section: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  // Google Drive Direct Image Link
  const logoUrl = "https://lh3.googleusercontent.com/d/1xmMifjVonJiVYyF9Xpt9asoJjPwRuxu8";

  return (
    <footer id="main-footer" className="bg-[#F4F4F4] text-slate-600 pt-16 pb-8 border-t border-slate-200 select-none font-sans">
      <div id="footer-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="space-y-4 text-left">
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => onNavClick("home")}
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 p-1 flex items-center justify-center transition-transform group-hover:scale-105 border border-slate-200">
                <img
                  src={logoUrl}
                  alt="PT Lestari Surya Technology"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col text-slate-900">
                <span className="text-base font-bold tracking-tight leading-none">
                  PT Lestari Surya Teknologi
                </span>
                <span className="text-[7.5px] font-bold text-[#f15a24] font-mono uppercase mt-1 tracking-wider">
                  DRIVEN BY INNOVATION, POWERED BY TECHNOLOGY
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-600 leading-relaxed pt-2 font-light">
              Membangun solusi teknologi yang membantu bisnis bertransformasi, beroperasi lebih cerdas, dan tumbuh secara berkelanjutan.
            </p>
          </div>

          {/* Quick Navigations */}
          <div className="space-y-4 text-left">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-slate-900 uppercase font-mono">
              Navigasi Halaman
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                { label: "Beranda", id: "home" },
                { label: "Tentang Kami", id: "about" },
                { label: "Layanan", id: "services" },
                { label: "Portfolio", id: "work" },
                { label: "Studi Kasus", id: "case-studies" },
                { label: "Hubungi Kami", id: "contact" }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavClick(link.id)}
                  className="text-left text-xs text-slate-600 hover:text-[#f15a24] transition-colors py-0.5 cursor-pointer font-light"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Core Capacities */}
          <div className="space-y-4 text-left">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-slate-900 uppercase font-mono">
              Solusi Unggulan
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-light list-none p-0 m-0">
              <li>Digital Transformation</li>
              <li>AI Automation</li>
              <li>Data & Business Intelligence</li>
              <li>IoT & Smart Systems</li>
              <li>Enterprise Software Development</li>
              <li>Cloud & Infrastructure Solutions</li>
            </ul>
          </div>

          {/* Security & Contacts info */}
          <div className="space-y-4 text-left">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-slate-900 uppercase font-mono">
              Kontak
            </h4>
            <div className="space-y-3.5 text-xs text-slate-600 font-light font-sans">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#f15a24] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#f15a24] flex-shrink-0" />
                <a href="mailto:info@lestatech.asia" className="hover:text-[#f15a24] transition-colors">info@lestatech.asia</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#f15a24] flex-shrink-0" />
                <a href="https://wa.me/6287882720643" target="_blank" rel="noopener noreferrer" className="hover:text-[#f15a24] transition-colors">+62 878-8272-0643 </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower copyright & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-light font-sans text-left">
            <Copyright className="h-4 w-4 flex-shrink-0" />
            <span>2026 PT Lestari Surya Teknologi. Seluruh hak cipta dilindungi undang-undang.</span>
          </div>

          {/* Socials Icons */}
          <div className="flex items-center space-x-4">
            {[
              { icon: <Linkedin className="h-4 w-4" />, url: "#" },
              { icon: <Twitter className="h-4 w-4" />, url: "#" },
              { icon: <Github className="h-4 w-4" />, url: "#" }
            ].map((soc, i) => (
              <a
                key={i}
                href={soc.url}
                className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:border-[#f15a24] hover:bg-[#f15a24] transition-all"
                aria-label="Social Link"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
