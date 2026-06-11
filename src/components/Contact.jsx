export default function Contact() {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer id="contact" className="w-full bg-black pt-32 pb-8 px-4 border-t border-neutral-900 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-fuchsia-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-24 relative z-10">
        
        {/* Massive CTA Section */}
        <div className="flex flex-col items-center gap-10 text-center w-full">
          <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-primary">
            READY TO BUILD SOMETHING <br />
            <span className="text-transparent bg-clip-text bg-gradient-accent">EXTRAORDINARY?</span>
          </h2>
          
          <div className="relative group mt-4">
            {/* Glowing gradient border effect */}
            <div className="absolute -inset-1 rounded-full bg-gradient-accent blur-md opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
            
            <a 
              href="mailto:harsh.pednekar@gmail.com" 
              className="relative flex items-center justify-center px-12 py-5 bg-neutral-950 rounded-full text-primary font-bold tracking-widest text-sm md:text-base uppercase transition-transform duration-300 group-hover:scale-[0.98]"
            >
              CONTACT ME
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-neutral-900">
          <p className="text-neutral-500 text-xs font-sans font-medium tracking-wider uppercase">
            © {currentYear} HARSHAL PEDNEKAR. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/harshalnnpednekar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/harshal-pednekar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-[#0077b5] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
