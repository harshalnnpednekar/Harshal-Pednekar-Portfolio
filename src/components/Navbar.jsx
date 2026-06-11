import { Mail } from "lucide-react";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4">
      <nav className="w-full max-w-6xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-500 hover:bg-white/10 hover:border-white/20">
        <div className="flex items-center gap-2">
          <a href="#" className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center font-sans font-bold text-sm text-white hover:scale-105 transition-transform duration-300">
            HP
          </a>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm tracking-wider font-semibold text-subtext">
          {["ABOUT", "SKILLS", "PROJECTS", "CONTACT"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-primary transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:harsh.pednekar@gmail.com"
          className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-950 border border-neutral-900 hover:border-zinc-700 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <span className="text-xs font-bold tracking-widest text-primary relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-accent transition-all duration-300">
            EMAIL ME
          </span>
          <Mail className="w-4 h-4 text-primary group-hover:text-[#d946ef] transition-colors duration-300 relative z-10" />
        </a>
      </nav>
    </div>
  );
}
