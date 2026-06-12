export default function Contact() {
  const currentYear = new Date().getFullYear();



  return (
    <footer id="contact" className="w-full bg-black pt-16 pb-8 px-4 border-t border-neutral-900 relative overflow-hidden">
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
        <div className="w-full flex justify-center pt-8 border-t border-neutral-900">
          <p className="text-neutral-500 text-xs font-sans font-medium tracking-wider uppercase text-center">
            © {currentYear} HARSHAL PEDNEKAR. ALL RIGHTS RESERVED.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
