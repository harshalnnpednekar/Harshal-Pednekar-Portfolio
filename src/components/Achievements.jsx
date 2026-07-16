import React from 'react';

export default function Achievements() {
  const achievements = [
    {
      title: "Junior Technical Officer",
      event: "ISTE VESIT",
      details: <>Selected as a Junior Technical Officer. Responsible for managing technical events, conducting workshops, and contributing to the technical development of the vibrant tech community at ISTE VESIT.</>,
      date: "Jul 2026",
      image: "/Logo.png"
    },
    {
      title: "1x Hackathon Finalist",
      event: "PU Code Hackathon 3.0, Vadodara",
      details: <>Recognized for rapid prototyping and innovative problem-solving, securing a top finish at the national-level PU Code Hackathon 3.0 alongside team <strong className="text-white font-bold">Bharat Bytes</strong>. Built a Telegram based Greivance chatbot for VMC within 36 hours.</>,
      date: "Jan 2026",
      image: "/Parul.jpeg"
    },
    {
      title: "1x Datathon Winner",
      event: "Zerve AI Datathon, Techfest 2025, IIT Bombay",
      details: <>Secured 3rd Position nationally against elite talent at the prestigious Zerve AI Datathon 2025 alongside team <strong className="text-white font-bold">Bharat Bytes</strong>. Showcased advanced data modeling and predictive analytics skills under high pressure.</>,
      date: "Dec 2025",
      image: "/Zerve.jpeg"
    }
  ];

  return (
    <div id="achievements" className="flex flex-col gap-10 z-10 relative w-full">

      {/* Header */}
      <div className="flex flex-col gap-4 mb-4" style={{ animation: 'fadeInUp 0.8s ease-out both' }}>
        <h2 className="font-sans text-5xl md:text-7xl font-black tracking-tighter text-primary uppercase drop-shadow-lg">
          ACHIEVEMENTS
        </h2>
        <div className="w-24 h-1 bg-gradient-accent rounded-full"></div>
      </div>

      {/* Timeline List */}
      <div className="flex flex-col gap-6 relative">
        {/* Vertical Line for Timeline (Desktop) */}
        <div className="hidden md:block absolute left-[23px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-teal-500/50 via-cyan-500/50 to-transparent z-0" style={{ animation: 'fadeInUp 1.2s ease-out 0.2s both' }}></div>

        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="group relative p-6 md:p-8 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md overflow-hidden hover:border-white/50 hover:-translate-y-2 transition-all duration-500 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 ml-0 md:ml-16"
            style={{ animation: `fadeInUp 0.8s ease-out ${0.2 + idx * 0.15}s both` }}
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>

            {/* Timeline dot (Desktop) */}
            <div className="hidden md:flex absolute -left-[48px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-background z-10 shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:scale-150 transition-transform duration-500"></div>

            {/* Column 1: Image Proof */}
            <div className="w-full md:w-1/4 max-w-[200px] flex-shrink-0 flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 group-hover:border-white/50 transition-colors">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-contain max-h-[150px] group-hover:scale-110 transition-transform duration-500 p-2"
              />
            </div>

            {/* Column 2: Details */}
            <div className="flex flex-col gap-3 flex-1 w-full text-left">
              <div className="flex flex-row flex-wrap items-start md:items-center justify-between gap-2 w-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-white transition-colors flex-1 min-w-[60%]">
                  {item.title}
                </h3>
                <span className="inline-flex items-center justify-center px-4 py-1.5 bg-white/5 border border-white/20 rounded-full text-xs md:text-sm font-bold tracking-widest text-white uppercase whitespace-nowrap flex-shrink-0 transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] cursor-default">
                  {item.date}
                </span>
              </div>

              <h4 className="text-base md:text-lg font-semibold text-cyan-300">
                {item.event}
              </h4>

              <p className="text-sm md:text-base text-neutral-400 leading-relaxed mt-2">
                {item.details}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
