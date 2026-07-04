import { useState, useRef, useEffect } from "react";

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MenuIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const NAV_LINKS = [
  { label: "ABOUT", id: "about" },
  { label: "SKILLS", id: "skills" },
  { label: "ACADEMICS", id: "education" },
  { label: "CERTIFICATIONS", id: "certifications" },
  { label: "PROJECTS", id: "projects" },
  { label: "CONTACT", id: "contact" }
];

export default function Navbar() {
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowResumeOptions(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className="absolute top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4">
      <nav className="w-full max-w-6xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-500 hover:bg-white/10 hover:border-fuchsia-500/20 hover:shadow-[0_10px_40px_rgba(217,70,239,0.15)] hover:-translate-y-1 relative" ref={mobileMenuRef}>
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/" className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center font-sans font-bold text-sm text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(217,70,239,0.6)] transition-all duration-300 pt-[2px]">
            HP
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 2xl:gap-8 text-xs xl:text-sm tracking-wider font-sans font-semibold text-subtext whitespace-nowrap">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="inline-block hover:text-white transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:rounded-full after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions & Mobile Toggle */}
        <div className="flex items-center gap-3 md:gap-4">
          
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setShowResumeOptions(!showResumeOptions)}
              className="group relative flex items-center justify-center px-4 md:px-6 py-2 rounded-full bg-neutral-950 border border-neutral-900 hover:border-fuchsia-500/50 hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="relative z-10 text-xs font-sans font-bold tracking-widest text-neutral-300 uppercase group-hover:text-white transition-colors duration-300">
                RESUME
              </span>
            </button>
            
            {/* Dropdown Options */}
            <div className={`absolute right-0 mt-3 w-32 rounded-xl bg-neutral-900 border border-neutral-800 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-top-right ${showResumeOptions ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <a href="/Resume%20HP.pdf" target="_blank" onClick={() => setShowResumeOptions(false)} className="px-4 py-3 text-xs font-bold tracking-widest text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors text-center border-b border-neutral-800/50">
                VIEW
              </a>
              <a href="/Resume%20HP.pdf" download="Resume HP.pdf" onClick={() => setShowResumeOptions(false)} className="px-4 py-3 text-xs font-bold tracking-widest text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors text-center">
                DOWNLOAD
              </a>
            </div>
          </div>

          <a
            href="https://github.com/harshalnnpednekar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex group relative items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-950 border border-neutral-900 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-1 hover:scale-110 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <GithubIcon className="w-4 h-4 text-primary group-hover:text-emerald-400 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300 relative z-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/harshal-pednekar-066554361"
            target="_blank"
            rel="noopener noreferrer"
            className="flex group relative items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-950 border border-neutral-900 hover:border-[#0077b5]/50 hover:shadow-[0_0_20px_rgba(0,119,181,0.3)] hover:-translate-y-1 hover:scale-110 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <LinkedinIcon className="w-4 h-4 text-primary group-hover:text-[#0077b5] group-hover:-rotate-12 group-hover:scale-125 transition-all duration-300 relative z-10" />
          </a>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950 border border-neutral-900 text-white hover:bg-neutral-900 transition-colors"
          >
            {isMobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`lg:hidden absolute top-[110%] left-0 right-0 z-50 rounded-2xl bg-neutral-900/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="flex flex-col p-4 gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-4 text-sm tracking-widest font-sans font-bold text-neutral-300 hover:bg-white/5 hover:text-white rounded-xl transition-colors border-b border-white/5 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
