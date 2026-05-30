import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, ChevronDown, Phone } from "lucide-react";
import Navbar from "./components/Navbar";
import MuxBackgroundVideo from "./components/MuxBackgroundVideo";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WorkSection from "./components/WorkSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  // Scroll Telemetry to update Navbar Active state automatically as user reads down
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset boundary indicator
      const sections = ["home", "about", "services", "work", "case-studies", "contact"];

      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="website-root" className="min-h-screen bg-[#050505] text-white overflow-x-hidden antialiased flex flex-col relative font-sans">
      
      {/* Sticky Responsive Header Menu */}
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />

      {/* Hero Section Container with Mux video background */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-start overflow-hidden px-4 sm:px-6 lg:px-8 pt-20"
      >
        {/* Background Stream Video layer */}
        <MuxBackgroundVideo playbackId="64L7etoCUY1UdyuzwsI9bFp42l5100VyDKbQMerJwsXM" />

        {/* Content Overlay Panel */}
        <div className="relative max-w-7xl mx-auto w-full z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
          
          {/* Main Title content */}
          <div className="lg:col-span-9 flex flex-col justify-center space-y-6 md:space-y-8 text-left">
            
            {/* Display Headings (Title matches user's request and screenshot exactly) */}
            <h1 className="text-4xl sm:text-5.5xl md:text-6xl lg:text-7.5xl font-bold font-sans text-white tracking-tight leading-tight">
              Engineering Growth <br />
              Through Intelligent <br />
              <span className="text-[#f15a24]">Technology</span>
            </h1>

            {/* Subtitles */}
            <div className="space-y-4 max-w-2xl">
              <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                Solusi digital, AI, dan analitik data untuk bisnis yang menuntut presisi dan hasil nyata.
              </p>
              
              {/* Secondary Subheading */}
              <p className="text-[#f15a24] font-medium italic text-sm sm:text-base md:text-lg font-sans">
                Driven by Innovation, Powered by Technology.
              </p>
            </div>

            {/* CTA Controls buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("work")}
                className="bg-[#f15a24] hover:bg-[#ff6c37] text-white py-3 px-8 rounded-md font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-orange-600/10 hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer"
              >
                EXPLORE OUR WORK
              </button>
              
              <button
                onClick={() => scrollToSection("contact")}
                className="border border-white hover:bg-white/10 text-white py-3 px-8 rounded-md font-bold text-xs uppercase tracking-wider transition-all duration-200 text-center cursor-pointer"
              >
                GET IN TOUCH
              </button>
            </div>

          </div>

          {/* Right space-holder to allow breathing room for visual backdrop */}
          <div className="hidden lg:col-span-3" />

        </div>

        {/* Dynamic scroll down cue anchor */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1 text-white/30 select-none animate-pulse">
          <span className="text-[9px] font-mono tracking-[0.25em] uppercase">Scroll Untuk Jelajah</span>
          <ChevronDown className="h-4 w-4" />
        </div>

      </section>

      {/* About Us section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection onContactClick={() => scrollToSection("contact")} />

      {/* Work grid portfolio showcase section */}
      <WorkSection />

      {/* Practical Case Studies interactive modal section */}
      <CaseStudiesSection />

      {/* Call to action contact inquiries segment */}
      <ContactSection />

      {/* Main Corporate dark footer */}
      <Footer onNavClick={scrollToSection} />

      {/* Persistent Floating WhatsApp Button */}
      <a
        href="https://wa.me/628113394626"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95 group"
        aria-label="Hubungi kami melalui WhatsApp"
        title="Hubungi WhatsApp Kami"
      >
        <Phone className="h-6 w-6 stroke-[2.25] fill-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] group-hover:ml-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap">
          WhatsApp
        </span>
      </a>

    </div>
  );
}
