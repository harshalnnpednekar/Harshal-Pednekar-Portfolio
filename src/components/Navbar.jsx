import { Mail } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4">
      <nav className="w-full max-w-6xl backdrop-blur-md bg-black/40 border border-neutral-900 rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-300 hover:border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center font-display font-bold text-sm">
            HP
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm tracking-wider font-semibold text-subtext">
          {["ABOUT", "SERVICES", "PROJECTS", "CONTACT"].map((link) => (
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
