export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12 relative overflow-hidden">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Typography Grid */}
        <div className="flex flex-col items-start gap-6">
          <div className="inline-block px-3 py-1 border border-neutral-800 rounded-full bg-neutral-900/50 backdrop-blur-sm">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-subtext uppercase">
              PORTFOLIO · 2026
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-primary">
            HARSHAL<br/>
            <span className="text-transparent bg-clip-text bg-gradient-accent">PEDNEKAR</span>
          </h1>

          <div className="w-full max-w-lg border-l-2 border-neutral-900 pl-4 py-1 mt-4">
            <p className="text-sm md:text-base font-sans font-medium tracking-wide text-subtext leading-relaxed">
              AI & DATA SCIENCE STUDENT <span className="text-zinc-700 mx-2">·</span> MACHINE LEARNING DEVELOPER <span className="text-zinc-700 mx-2">·</span> GENAI ARCHITECT <span className="text-zinc-700 mx-2">·</span> DATA ANALYST
            </p>
          </div>

          {/* Micro-Interaction: Scroll Indicator */}
          <div className="mt-12 flex items-center gap-4 group">
            <div className="relative w-[1px] h-16 bg-neutral-900 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-accent animate-[scrollDown_2s_ease-in-out_infinite]"></div>
            </div>
            <span className="text-[10px] font-bold tracking-widest text-neutral-600 uppercase group-hover:text-subtext transition-colors duration-300">
              Scroll
            </span>
          </div>
        </div>

        {/* Right Side: Visual Frame */}
        <div className="relative w-full aspect-square lg:aspect-[4/5] flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-neutral-900/20 border border-neutral-900 rounded-[2rem] transform rotate-3 scale-95 transition-transform duration-500 hover:rotate-0 hover:scale-100"></div>
          <div className="relative w-full h-full bg-black border border-zinc-800 rounded-[2rem] overflow-hidden flex items-center justify-center group shadow-2xl">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-accent rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            
            {/* Placeholder Image/Avatar container */}
            <div className="relative z-10 w-full h-full p-2">
              <div className="w-full h-full rounded-[1.5rem] bg-neutral-950 border border-neutral-900 flex items-center justify-center overflow-hidden">
                <span className="text-neutral-800 font-display font-bold text-xl tracking-widest text-center">
                  AVATAR RENDER<br />
                  <span className="text-xs font-sans font-medium tracking-normal mt-2 block">Upload custom asset here</span>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Global Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-fuchsia-900/10 blur-[120px]"></div>
      </div>
    </section>
  );
}
