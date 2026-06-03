import React, { useState } from "react";
import { Send, MapPin, Mail, Phone, Clock, CheckCircle2 } from "lucide-react";
import MuxBackgroundVideo from "./MuxBackgroundVideo";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceType: "Solusi Digital",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Build mailto link to open user's local email client
    const subject = encodeURIComponent(`Permintaan Konsultasi: ${formData.serviceType} - ${formData.company}`);
    const body = encodeURIComponent(
      `Nama Lengkap: ${formData.name}\n` +
      `Email Bisnis: ${formData.email}\n` +
      `Nama Perusahaan: ${formData.company}\n` +
      `Topik Layanan: ${formData.serviceType}\n\n` +
      `Detail Tantangan Bisnis:\n${formData.message}`
    );

    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      window.location.href = `mailto:info@lestatech.asia?subject=${subject}&body=${body}`;
    }, 1000);
  };

  const contactDetails = [
    {
      icon: <MapPin className="h-5 w-5 text-[#f15a24]" />,
      label: "Lokasi Kantor",
      value: "Jakarta, Indonesia",
      href: null
    },
    {
      icon: <Mail className="h-5 w-5 text-[#f15a24]" />,
      label: "Email Hubungan Korporat",
      value: "info@lestatech.asia",
      href: "mailto:info@lestatech.asia"
    },
    {
      icon: <Phone className="h-5 w-5 text-[#f15a24]" />,
      label: "WhatsApp / Telepon",
      value: "+62 811-3394-626",
      href: "https://wa.me/628113394626"
    },
    {
      icon: <Clock className="h-5 w-5 text-[#f15a24]" />,
      label: "Waktu Operasional",
      value: "Senin - Jumat | 09:00 - 17:00 WIB",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#F4F4F4] scroll-mt-20 border-b border-slate-200/60 relative font-sans overflow-hidden">
      {/* Background Mux Video and Overlay */}
      <MuxBackgroundVideo playbackId="Us015N3G2n1AaGLNrHoldQ7sosGrE700qdaRXQ01tYmT4E" />
      <div className="absolute inset-0 bg-[#F4F4F4]/70 backdrop-blur-[2px] z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact details & Corporate Information */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-orange-600 font-medium font-mono text-xs tracking-widest uppercase">
                <span>GET IN TOUCH</span>
                <span className="w-10 h-[1.5px] bg-orange-500/80" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Mari Diskusikan Tantangan  <span className="text-[#f15a24] italic">Bisnis Anda</span>
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                Tim kami siap membantu merancang solusi yang sesuai dengan kebutuhan organisasi Anda. Baik untuk digitalisasi proses, implementasi AI, maupun pengembangan sistem berskala enterprise.
              </p>
            </div>

            {/* List Contact info cards */}
            <div className="space-y-5">
              {contactDetails.map((detail, idx) => (
                <div key={idx} className="flex gap-4 p-4 border border-slate-200 bg-white/70 backdrop-blur-md rounded-2xl transition-all duration-300 hover:border-[#f15a24]/20 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm flex-shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono">{detail.label}</p>
                    <p className="text-slate-900 text-sm font-semibold mt-0.5 leading-snug font-light">
                      {detail.href ? (
                        <a 
                          href={detail.href} 
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="hover:text-[#f15a24] transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        detail.value
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder Graphic with corporate blue-orange accents */}
            <div className="p-4 border border-slate-200 rounded-3xl bg-white/70 backdrop-blur-md space-y-3 select-none shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">Jakarta HQ map coordinate</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-36 bg-slate-100 border border-slate-150 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                  alt="City Grid abstract"
                  className="w-full h-full object-cover opacity-15"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-200/10" />
                <div className="absolute text-center text-slate-800 px-2 space-y-1">
                  <p className="text-xs font-bold">Jakarta, Indonesia</p>
                  <p className="text-[10px] font-mono text-slate-500">Lat: -6.2088 &bull; Lng: 106.8456</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Interactive Form */}
          <div className="lg:col-span-7 bg-white/85 border border-slate-200 backdrop-blur-lg rounded-[32px] p-6 md:p-10 shadow-lg relative">
            
            {submitted ? (
              // Thank you Screen
              <div className="text-center py-16 space-y-6">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">Konsultasi Anda Terjadwal!</h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto font-light font-normal">
                    Terima kasih telah menghubungi <strong className="font-semibold text-slate-900">PT Lestari Surya Teknologi</strong>. Tim Client Relations Executive kami akan merespons dalam waktu kurang dari 24 jam kerja.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center px-6 py-3 rounded-md border border-slate-300 text-slate-700 hover:text-slate-950 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer bg-transparent"
                >
                  Kirim Pesan Baru
                </button>
              </div>
            ) : (
              // Form Screen
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="space-y-1.5 border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-bold text-slate-900">Jadwalkan Sesi Konsultasi Strategis</h3>
                  <p className="text-xs text-slate-500">Ceritakan kebutuhan Bisnis Anda dan tim kami akan menghubungi Anda untuk mendiskusikan pendekatan yang paling sesuai.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold text-slate-500 font-mono uppercase tracking-widest" htmlFor="input-name">Nama Lengkap</label>
                    <input
                      id="input-name"
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#f15a24] focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold text-slate-500 font-mono uppercase tracking-widest" htmlFor="input-email">Email Bisnis</label>
                    <input
                      id="input-email"
                      type="email"
                      required
                      placeholder="Contoh: budi@perusahaan.co.id"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#f15a24] focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company field */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold text-slate-500 font-mono uppercase tracking-widest" htmlFor="input-company">Nama Perusahaan</label>
                    <input
                      id="input-company"
                      type="text"
                      required
                      placeholder="Contoh: PT Swadaya Abadi"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#f15a24] focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Service preference selector */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold text-slate-500 font-mono uppercase tracking-widest" htmlFor="input-service">Area Kebutuhan</label>
                    <select
                      id="input-service"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#f15a24] focus:bg-white transition-all appearance-none cursor-pointer"
                    >
                      <option className="bg-white text-slate-900" value="Solusi Digital">Digital Transformation</option>
                      <option className="bg-white text-slate-900" value="Artificial Intelligence">AI Automation</option>
                      <option className="bg-white text-slate-900" value="Analitik Data">Data & Business Intelligence</option>
                      <option className="bg-white text-slate-900" value="Lainnya">Belum Yakin / Perlu Konsultasi</option>
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-slate-500 font-mono uppercase tracking-widest" htmlFor="input-message">Detail Tantangan Bisnis Anda</label>
                  <textarea
                    id="input-message"
                    required
                    rows={4}
                    placeholder="Jelaskan tantangan, tujuan, atau kebutuhan yang ingin Bisnis Anda capai"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#f15a24] focus:bg-white transition-all placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  id="btn-submit-contact"
                  className="w-full bg-[#f15a24] hover:bg-[#ff6c37] text-white py-4 px-6 rounded-md font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-orange-600/10 active:scale-[0.98] flex items-center justify-center space-x-2 cursor-pointer border-none"
                >
                  {isLoading ? (
                    <span className="inline-block border-2 border-slate-300 border-t-white h-5 w-5 rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Kirim Pengajuan Sekarang</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
