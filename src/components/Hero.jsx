export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 pt-24 pb-12 overflow-hidden z-0">
      
      {/* Avatar Background Image - Fully Eclipsing the Screen */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/avatar_wide.png" 
          alt="Harshal Pednekar Avatar" 
          className="w-full h-full object-cover object-top opacity-100 brightness-[1.60] contrast-[1.10] saturate-[1.15]"
        />
      </div>

      {/* Gradient Overlays for Text Readability */}
      {/* Left side gradient to ensure typography is readable over the centered avatar */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[85%] z-10 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none"></div>
      
      {/* Bottom gradient to blend smoothly into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 z-10 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start justify-center flex-1 relative z-20 pt-20">
        
        {/* Massive Name Typography */}
        <h1 className="font-sans text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tight text-white uppercase drop-shadow-2xl max-w-2xl cursor-default group">
          <span className="inline-block transition-all duration-700 hover:scale-110 hover:-translate-y-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-accent hover:drop-shadow-[0_0_30px_rgba(217,70,239,0.8)]">HARSHAL</span><br/>
          <span className="inline-block transition-all duration-700 hover:scale-110 hover:translate-x-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-accent hover:drop-shadow-[0_0_30px_rgba(217,70,239,0.8)]">PEDNEKAR</span>
        </h1>

        {/* Subtitle Tags - Enchanting Stacked Layout */}
        <div className="mt-8 flex flex-col items-start gap-3">
          {[
            "AI & DATA SCIENCE STUDENT",
            "MACHINE LEARNING DEVELOPER",
            "GENAI ARCHITECT",
            "DATA ANALYST"
          ].map((tag, index) => (
            <div 
              key={index}
              style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.15 + 0.3}s both` }}
            >
              <div 
                className="group relative flex items-center gap-4 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/15 hover:border-white/30 hover:scale-105 hover:translate-x-2 hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] transition-all duration-500 cursor-default"
              >
                {/* Glowing Indicator Dot */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-4 h-4 rounded-full bg-gradient-accent opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500 group-hover:animate-pulse"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-accent group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                
                <span className="text-xs md:text-sm font-sans font-bold tracking-[0.2em] text-neutral-300 uppercase group-hover:text-white transition-colors duration-300">
                  {tag}
                </span>

                {/* Shimmer sweep effect on hover */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none skew-x-12"></div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
