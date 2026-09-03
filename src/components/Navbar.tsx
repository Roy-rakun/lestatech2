import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

export default function Navbar({ activeSection, onNavClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to add glassmorphism style when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", id: "home" },
    { label: "ABOUT US", id: "about" },
    { label: "SERVICES", id: "services" },
    { label: "WORK", id: "work" },
    { label: "CASE STUDIES", id: "case-studies" },
    { label: "CONTACT", id: "contact" }
  ];

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  // Google Drive Direct Image Link
  const logoUrl = "https://lh3.googleusercontent.com/d/1xmMifjVonJiVYyF9Xpt9asoJjPwRuxu8";

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-slate-100"
          : "bg-white py-4 border-b border-slate-100"
      }`}
    >
      <div id="nav-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="nav-wrapper" className="flex items-center justify-between h-16">

          {/* Logo Brand Section */}
          <div
            id="brand-logo"
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleItemClick("home")}
          >
            <div className="relative w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src={logoUrl}
                alt="PT Lestari Surya Technology"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if drive icon fails
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=100";
                }}
              />
            </div>

            <div className="flex flex-col select-none">
              <span className="text-base md:text-lg font-bold text-slate-900 tracking-tight leading-none font-sans">
                PT Lestari Surya Technology
              </span>
              <span className="text-[9px] md:text-[10px] font-medium text-orange-600 italic tracking-wider mt-1 opacity-90 font-sans">
                Driven by Innovation, Powered by Technology
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div id="desktop-links" className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`text-xs font-semibold tracking-wider transition-all duration-200 relative py-2 ${
                  activeSection === item.id
                    ? "text-orange-600 font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}

                {/* Active Indicator Underline */}
                {activeSection === item.id && (
                  <span
                    id={`active-indicator-${item.id}`}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full"
                  />
                )}
              </button>
            ))}

            {/* External Catalog Link */}
            <a
              href="https://catalog.lestatech.asia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold tracking-wider text-slate-600 hover:text-slate-900 transition-all duration-200 relative py-2"
            >
              CATALOG
            </a>
          </div>

          {/* Hamburger Menu Toggle Button (Mobile & Tablet) */}
          <div id="mobile-toggle-btn" className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-orange-600 focus:outline-none p-2 rounded-lg hover:bg-slate-50 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay and Links */}
      <div
        id="mobile-drawer"
        className={`lg:hidden fixed inset-x-0 top-[81px] bg-white border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out z-40 transform ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <div
          id="mobile-links-wrapper"
          className="px-5 py-6 space-y-4 bg-slate-50"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              onClick={() => handleItemClick(item.id)}
              className={`w-full text-left px-4 py-3 text-sm font-semibold tracking-wide rounded-lg transition-colors flex items-center justify-between ${
                activeSection === item.id
                  ? "bg-orange-50 text-orange-600"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span>{item.label}</span>

              {activeSection === item.id && (
                <span className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
              )}
            </button>
          ))}

          {/* Mobile Catalog Link */}
          <a
            href="https://catalog.lestatech.asia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-left px-4 py-3 text-sm font-semibold tracking-wide rounded-lg transition-colors flex items-center justify-between text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          >
            <span>CATALOG</span>
          </a>

          <div className="pt-4 border-t border-slate-200 flex justify-center text-[10px] text-slate-400 italic">
            PT Lestari Surya Technology &bull; 2026
          </div>
        </div>
      </div>
    </nav>
  );
}
