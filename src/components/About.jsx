import React from "react";

export default function About() {
  const skills = [
    {
      category: "CORE AI, ML & DATA SCIENCE",
      items: ["Generative AI", "Machine Learning", "AI Agents", "Data Science", "Data Analysis", "Natural Language Processing (NLP)", "Large Language Models (LLMs)", "Retrieval-Augmented Generation (RAG)", "Deep Learning", "Computer Vision", "Neural Networks"],
    },
    {
      category: "LANGUAGES",
      items: ["Python", "Java (OOP)", "Dart", "SQL", "HTML", "JavaScript"],
    },
    {
      category: "FRAMEWORKS & LIBRARIES",
      items: ["FastAPI", "Scikit-learn", "React.js", "Flutter", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Catboost"],
    },
    {
      category: "TOOLS & INFRASTRUCTURE",
      items: ["Git", "GitHub", "Streamlit", "Google Colab", "Figma", "Stitch", "Google AI Studio", "Canva"],
    },
    {
      category: "CS FUNDAMENTALS",
      items: ["Data Structures & Algorithms", "Database Management Systems", "Operating Systems", "Object-Oriented Programming"],
    },
  ];

  return (
    <section id="about" className="w-full bg-black pt-32 pb-16 px-4 border-t border-neutral-900 relative overflow-hidden">

      {/* Immersive Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-900/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-20 relative z-10">

        {/* Visual About Me Segment (Bento Grid) */}
        <div className="flex flex-col gap-12">

          {/* Header */}
          <div className="flex flex-col gap-4" style={{ animation: 'fadeInUp 0.8s ease-out both' }}>
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-px bg-gradient-accent"></div>
              <span className="text-transparent bg-clip-text bg-gradient-accent font-bold tracking-[0.2em] uppercase text-sm">
                Introduction
              </span>
            </div>
            <h2 className="font-sans text-5xl md:text-7xl font-black tracking-tighter text-primary uppercase leading-none drop-shadow-lg">
              ABOUT ME
            </h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Education Block (Spans 2 columns) */}
            <div className="md:col-span-2 group relative p-8 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md overflow-hidden hover:border-white/30 hover:-translate-y-2 transition-all duration-500 shadow-2xl cursor-default" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none skew-x-12"></div>

              <div className="relative z-10 flex flex-col justify-between h-full gap-6">
                <h3 className="text-xs font-bold tracking-widest text-fuchsia-400 uppercase">Education & Academics</h3>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">B.Tech in Artificial Intelligence & Data Science</h4>
                  <p className="text-lg text-neutral-400">Vivekanand Education Society's Institute of Technology (VESIT)</p>
                </div>
                <div className="inline-flex items-center gap-4 px-5 py-3 bg-black/50 border border-white/10 rounded-2xl w-fit">
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-accent">9.63/10</span>
                  <div className="w-px h-8 bg-white/10"></div>
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">CGPA<br />(Till Sem 4)</span>
                </div>
              </div>
            </div>

            {/* Mission Block */}
            <div className="md:col-span-1 group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900/40 to-neutral-900 backdrop-blur-md overflow-hidden hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-500 shadow-2xl cursor-default flex flex-col justify-start" style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-6">Core Philosophy</h3>
                  <h4 className="text-white font-bold text-base mb-2">Engineering Intelligence</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Transforming raw data into actionable insights and building scalable, user-centric applications. My focus lies at the intersection of applied machine learning, advanced LLM architectures, and robust full-stack development to solve real-world challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Expertise Blocks */}
            <div className="md:col-span-1 group relative p-8 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md overflow-hidden hover:border-white/30 hover:-translate-y-2 transition-all duration-500 shadow-2xl cursor-default" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xs font-bold tracking-widest text-fuchsia-400 uppercase mb-6">Technical Domains</h3>
                <div className="flex flex-col gap-4">
                  {["Artificial Intelligence", "Machine Learning", "Data Science", "Data Analysis", "Cyber Security"].map((domain, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-accent"></div>
                      <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">{domain}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Architectures Block */}
            <div className="md:col-span-2 group relative p-8 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md overflow-hidden hover:border-white/30 hover:-translate-y-2 transition-all duration-500 shadow-2xl cursor-default" style={{ animation: 'fadeInUp 0.8s ease-out 0.5s both' }}>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none skew-x-12"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <h3 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-6">Architectural Specializations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { title: "Predictive AI & ML", desc: "Building and optimizing machine learning pipelines, deep neural networks, and data models to drive data-informed decisions." },
                    { title: "Generative AI & LLMs", desc: "Architecting advanced RAG systems and autonomous AI agents using state-of-the-art NLP techniques." },
                    { title: "Full-Stack AI Integration", desc: "Creating seamless web and cross-platform mobile apps using React, Flutter, and FastAPI to deliver AI solutions." }
                  ].map((spec, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-neutral-800/50 border border-white/10 hover:border-white/20 transition-colors">
                      <h4 className="text-white font-bold text-base mb-2">{spec.title}</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">{spec.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements Blocks */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6" style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}>
              <div className="group relative p-6 md:p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-neutral-800 to-neutral-900 backdrop-blur-md overflow-hidden hover:border-fuchsia-500/50 hover:-translate-y-2 transition-all duration-500 shadow-2xl cursor-default">
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500">🏆</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">1x Datathon Winner</h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">Secured 3rd Position nationally against elite talent at the prestigious Zerve AI Datathon 2025, Techfest, IIT Bombay.</p>
                  </div>
                </div>
              </div>

              <div className="group relative p-6 md:p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-neutral-800 to-neutral-900 backdrop-blur-md overflow-hidden hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-500 shadow-2xl cursor-default">
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500">💻</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">2x Hackathon Finalist</h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">Recognized for rapid prototyping and innovative problem-solving, including a top finish at the PU Code Hackathon 3.0.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Technical Skills Segment */}
        <div id="skills" className="flex flex-col gap-10" style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}>

          <div className="flex flex-col gap-4 mb-4">
            <h2 className="font-sans text-5xl md:text-7xl font-black tracking-tighter text-primary uppercase">
              SKILLS
            </h2>
            <div className="w-24 h-1 bg-gradient-accent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className={`group relative p-8 rounded-3xl border border-white/10 bg-neutral-800/40 backdrop-blur-md overflow-hidden hover:bg-neutral-800/60 hover:border-white/30 hover:-translate-y-2 transition-all duration-500 shadow-2xl h-full flex flex-col justify-start ${idx === 0 ? 'lg:col-span-2' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
                <div className="w-full">
                  <h3 className="relative z-10 text-xs md:text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-accent uppercase mb-8 flex items-center gap-3">
                    <span className="w-8 h-px bg-fuchsia-500/50"></span>
                    {skillGroup.category}
                  </h3>
                  <div className="relative z-10 flex flex-wrap justify-center gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <div
                        key={i}
                        className="text-center flex items-center justify-center px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
