import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Facebook, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { logoBase64 } from "../../lib/logo";

const NAV_LINKS = [
  { id: "home", label: "হোম" },
  { id: "about", label: "আমাদের সম্পর্কে" },
  { id: "programs", label: "প্রোগ্রাম" },
  { id: "admissions", label: "ভর্তি" },
  { id: "faculty", label: "শিক্ষকমণ্ডলী" },
  { id: "gallery", label: "গ্যালারি" },
  { id: "contact", label: "যোগাযোগ" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.id);
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
            className="flex items-center gap-2 sm:gap-3 z-50 group"
          >
            <img src={logoBase64} alt="মিজান মডেল হাই স্কুল লোগো" className="h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain bg-white rounded-md p-0.5" />
            <div className="flex flex-col min-w-0">
              <span className={`font-serif font-bold text-base sm:text-lg lg:text-2xl leading-tight transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
                মিজান মডেল হাই স্কুল
              </span>
              <span className="text-[9px] sm:text-[10px] lg:text-xs font-bold text-accent tracking-[0.15em] uppercase mt-0.5 sm:mt-1">
                মিরপুর-১, ঢাকা
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-accent ${
                    isActive
                      ? "text-accent"
                      : isScrolled ? "text-foreground" : "text-white/90"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button
              className="rounded-full px-6 font-semibold shadow-sm hover:shadow-md transition-shadow"
              onClick={() => scrollTo("admissions")}
            >
              ভর্তির আবেদন
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 z-50 rounded-md transition-colors ${isScrolled || mobileMenuOpen ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-border shadow-xl lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col py-4 px-4 sm:px-6">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                    className={`block py-4 text-lg font-serif font-medium border-b border-border transition-colors ${
                      isActive ? "text-accent" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-6 pb-2">
                <Button
                  className="w-full rounded-full py-6 text-lg font-semibold"
                  onClick={() => {
                    scrollTo("admissions");
                  }}
                >
                  ভর্তির আবেদন
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-sidebar text-sidebar-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={logoBase64} alt="মিজান মডেল হাই স্কুল লোগো" className="h-12 w-12 object-contain bg-white rounded-md p-0.5" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight text-white">
                  মিজান মডেল হাই স্কুল
                </span>
                <span className="text-xs font-bold text-accent tracking-[0.15em] uppercase mt-1">
                  মিরপুর-১, ঢাকা
                </span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mt-2 pr-4">
              জ্ঞানই আলো। মিরপুর-১, ঢাকা-১২১৬ এ অবস্থিত মিজান মডেল হাই স্কুল গুণগত মানসম্পন্ন শিক্ষা প্রদানে প্রতিশ্রুতিবদ্ধ।
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors"><Youtube className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:pl-8">
            <h4 className="font-serif font-bold text-lg text-white">দ্রুত লিংক</h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.slice(1, 6).map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                    className="text-white/70 hover:text-accent text-sm flex items-center gap-2 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif font-bold text-lg text-white">যোগাযোগ</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 shrink-0 text-accent mt-0.5" />
                <span>১-এইচ, ১৩/৮, খুদারায়ট, শাহ আলী,<br />মিরপুর-১, ঢাকা-১২১৬</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <span>০১৬৮১৫৪৭৭৮০৫</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <span>০১৭৯০৩৬৩০৮২৭</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif font-bold text-lg text-white">ভর্তি</h4>
            <p className="text-sm text-white/70">
              ২০২৫ শিক্ষাবর্ষে ভর্তি চলছে। আজই আমাদের সাথে যোগাযোগ করুন এবং আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ নিশ্চিত করুন।
            </p>
            <div className="mt-2">
              <Button
                className="w-full sm:w-auto rounded-full font-semibold bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => scrollTo("admissions")}
              >
                ভর্তি হোন
              </Button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© ২০২৫ মিজান মডেল হাই স্কুল। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">প্রাইভেসি পলিসি</a>
            <a href="#" className="hover:text-white transition-colors">শর্তাবলী</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
