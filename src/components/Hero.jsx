import { useState, useEffect } from "react";

export default function Hero() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 pt-24 pb-12 overflow-hidden z-0">
      
      {/* Avatar Background Image - Fully Eclipsing the Screen */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/avatar_wide.png" 
          alt="Harshal Pednekar Avatar" 
          className="w-full h-full object-cover object-top opacity-100 brightness-[1.30] contrast-[1.10] saturate-[1.15]"
        />
      </div>

      {/* Gradient Overlays for Text Readability */}
      {/* Left side gradient to ensure typography is readable over the centered avatar */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[85%] z-10 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none"></div>
      
      {/* Bottom gradient to blend smoothly into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 z-10 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start justify-center flex-1 relative z-20 pt-20 pointer-events-none">
        
        {/* Top Identifier */}
        <div className="mb-4 flex items-center gap-4">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-neutral-400 uppercase">
            PORTFOLIO
          </span>
        </div>

        {/* Massive Name Typography - Adjusted font size to avoid overlapping face */}
        <h1 className="font-sans text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tight text-white uppercase drop-shadow-2xl max-w-2xl">
          HARSHAL<br/>
          PEDNEKAR
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
                className="group relative flex items-center gap-4 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-default"
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

        {/* Dynamic Reactive Scroll Indicator Line */}
        <div className="mt-16 flex items-end">
          <div className="flex flex-col items-start" style={{ animation: `fadeInUp 0.8s ease-out 1.2s both` }}>
            <div className="relative w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent overflow-hidden">
              <div 
                className={`absolute top-0 left-0 w-full h-1/3 bg-white shadow-[0_0_8px_#ffffff] transition-opacity duration-300 ${
                  isScrolling ? 'opacity-100 animate-[scrollDown_1s_linear_infinite]' : 'opacity-0'
                }`}
              ></div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
