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
export default function Navbar() {
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowResumeOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4">
      <nav className="w-full max-w-6xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-500 hover:bg-white/10 hover:border-fuchsia-500/20 hover:shadow-[0_10px_40px_rgba(217,70,239,0.15)] hover:-translate-y-1">
        <div className="flex items-center gap-2 flex-1">
          <a href="/" className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center font-sans font-bold text-sm text-white hover:scale-110 hover:rotate-12 hover:shadow-[0_0_20px_rgba(217,70,239,0.6)] transition-all duration-300">
            HP
          </a>
        </div>

        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm tracking-wider font-sans font-semibold text-subtext">
          {["ABOUT", "SKILLS", "PROJECTS", "CONTACT"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="inline-block hover:text-primary hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className="relative hidden sm:block" ref={dropdownRef}>
            <button 
              onClick={() => setShowResumeOptions(!showResumeOptions)}
              className="group relative flex items-center justify-center px-6 py-2 rounded-full bg-neutral-950 border border-neutral-900 hover:border-fuchsia-500/50 hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
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
            className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950 border border-neutral-900 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-1 hover:scale-110 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <GithubIcon className="w-4 h-4 text-primary group-hover:text-emerald-400 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300 relative z-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/harshal-pednekar-066554361"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950 border border-neutral-900 hover:border-[#0077b5]/50 hover:shadow-[0_0_20px_rgba(0,119,181,0.3)] hover:-translate-y-1 hover:scale-110 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <LinkedinIcon className="w-4 h-4 text-primary group-hover:text-[#0077b5] group-hover:-rotate-12 group-hover:scale-125 transition-all duration-300 relative z-10" />
          </a>
        </div>
      </nav>
    </div>
  );
}
