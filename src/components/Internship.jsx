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

          <div className="relative z-10 flex flex-col gap-8">

            {/* Top: Internship Name (left) + TCS Logo (top-right) */}
            <div className="flex items-start justify-between gap-6">
              {/* Internship Name — hero element */}
              <div className="flex flex-col gap-3 pt-1">
                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
                  GenAI Powered Data Analytics
                </h3>

                {/* Role badge */}
                <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-neutral-400 text-sm font-semibold tracking-widest uppercase mt-1 hover:text-white hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-default">
                  Data Analyst Intern (Virtual)
                </div>
              </div>

              {/* Top-right: Company Name (purple) + TCS Logo inline */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="font-sans text-sm font-bold tracking-widest uppercase text-fuchsia-400 whitespace-nowrap pt-1">
                  Tata Consultancy Services
                </span>
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden flex-shrink-0">
                  <img src="/image.png" alt="TCS Logo" className="w-9 h-9 object-contain" />
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
        </div>

      </div>
    </section>
  );
}
