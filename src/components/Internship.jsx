export default function Internship() {
  return (
    <section id="internship" className="w-full bg-black pt-12 pb-16 px-4 relative overflow-hidden">
      
      {/* Subtle Background Glow - neutral only */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-10 relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-4 mb-4" style={{ animation: 'fadeInUp 0.8s ease-out both' }}>
          <h2 className="font-sans text-5xl md:text-7xl font-black tracking-tighter text-primary uppercase drop-shadow-lg">
            INTERNSHIP
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full"></div>
        </div>

        {/* Premium Internship Card */}
        <div
          className="group relative w-full rounded-[2.5rem] border border-white/10 bg-neutral-900/80 backdrop-blur-xl overflow-hidden hover:border-white/25 hover:shadow-[0_8px_40px_rgba(255,255,255,0.05)] transition-all duration-700 p-8 md:p-12 cursor-default"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
        >
          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent group-hover:animate-[shimmer_1.8s_infinite] pointer-events-none skew-x-12"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              
              {/* Left Side: Text Content */}
              <div className="flex flex-col gap-5 md:gap-8 w-full lg:w-2/3 order-2 lg:order-1">
                {/* Top: Internship Name & Badges */}
                <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
                  {/* Internship Name — hero element */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-neutral-200 tracking-tight leading-tight">
                    GenAI Powered Data Analytics
                  </h3>
  
                  {/* Badges Container */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mt-1 sm:mt-0">
                    {/* Role badge */}
                    <div className="inline-flex items-center justify-center gap-2 w-fit px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/10 bg-white/5 text-neutral-400 text-[10px] sm:text-sm font-semibold tracking-widest uppercase hover:text-white hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-default">
                      Data Analyst Intern (Virtual)
                    </div>
                    
                    {/* Company badge */}
                    <div className="inline-flex items-center justify-center gap-2 w-fit px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/10 bg-white/5 text-neutral-400 text-[10px] sm:text-sm font-semibold tracking-widest uppercase hover:text-white hover:bg-white/20 hover:border-fuchsia-400/30 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(217,70,239,0.25)] transition-all duration-300 cursor-default">
                      Tata Consultancy Services
                    </div>
                  </div>
                </div>
    
                {/* Divider */}
                <div className="w-full h-px bg-white/10"></div>
    
                {/* Bottom: Points */}
                <ul className="text-base md:text-lg text-neutral-400 leading-relaxed space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="text-fuchsia-400 mt-1 text-lg leading-none drop-shadow-[0_0_6px_rgba(217,70,239,0.6)]">✦</span>
                    <span className="group-hover:text-neutral-300 transition-colors duration-300">
                      Leveraged Generative AI architectures for complex data cleaning configurations and exploratory data analysis (EDA).
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-fuchsia-400 mt-1 text-lg leading-none drop-shadow-[0_0_6px_rgba(217,70,239,0.6)]">✦</span>
                    <span className="group-hover:text-neutral-300 transition-colors duration-300">
                      Synthesized business trend datasets to formulate strategic visual dashboards for corporate insight groups.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right Side: Certificate Image */}
              <div className="w-full lg:w-1/3 flex justify-center lg:justify-end order-1 lg:order-2">
                <a 
                  href="/Internship.png" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group/cert block rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-white/30 hover:scale-105 hover:shadow-[0_0_40px_rgba(217,70,239,0.3)] w-full max-w-md sm:max-w-sm lg:max-w-md"
                >
                  <img 
                    src="/Internship.png" 
                    alt="Internship Certificate" 
                    className="w-full h-auto object-cover opacity-90 group-hover/cert:opacity-100 transition-opacity duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                    <span className="text-white text-sm sm:text-base font-bold tracking-wider uppercase drop-shadow-md">
                      View Certificate
                    </span>
                  </div>
                </a>
              </div>
              
            </div>
          </div>

      </div>
    </section>
  );
}
