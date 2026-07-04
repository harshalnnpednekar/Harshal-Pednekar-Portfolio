import { Brain, Bot, Network, BarChart, LineChart, MessageSquare, BookOpen, Search, Eye, Server, Cpu, Layers, Code, Shield, Lock, Terminal, ShieldAlert } from 'lucide-react';
import { FaPython, FaJava, FaReact, FaHtml5, FaGitAlt, FaGithub, FaFigma, FaDatabase, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiDart, SiFlutter, SiPandas, SiNumpy, SiFastapi, SiScikitlearn, SiStreamlit, SiGooglecolab } from 'react-icons/si';

export default function About() {
  const skills = [
    {
      category: "AI, ML & DATA SCIENCE",
      items: [
        { name: "Generative AI", icon: <Brain size={16} className="text-pink-400" /> },
        { name: "Machine Learning", icon: <Bot size={16} className="text-indigo-400" /> },
        { name: "AI Agents", icon: <Network size={16} className="text-purple-400" /> },
        { name: "Data Science", icon: <BarChart size={16} className="text-emerald-400" /> },
        { name: "Data Analytics", icon: <LineChart size={16} className="text-blue-400" /> },
        { name: "Natural Language Processing (NLP)", icon: <MessageSquare size={16} className="text-fuchsia-400" /> },
        { name: "Large Language Models (LLMs)", icon: <BookOpen size={16} className="text-orange-400" /> },
        { name: "Retrieval-Augmented Generation (RAG)", icon: <Search size={16} className="text-cyan-400" /> },
        { name: "Deep Learning", icon: <Network size={16} className="text-rose-400" /> },
        { name: "Computer Vision", icon: <Eye size={16} className="text-teal-400" /> }
      ],
    },
    {
      category: "LANGUAGES",
      items: [
        { name: "Python", icon: <FaPython size={16} className="text-blue-400" /> },
        { name: "Java (OOP)", icon: <FaJava size={16} className="text-orange-400" /> },
        { name: "Dart", icon: <SiDart size={16} className="text-cyan-400" /> },
        { name: "SQL", icon: <FaDatabase size={16} className="text-purple-400" /> },
        { name: "HTML", icon: <FaHtml5 size={16} className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt size={16} className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript size={16} className="text-yellow-400" /> }
      ],
    },
    {
      category: "FRAMEWORKS & LIBRARIES",
      items: [
        { name: "FastAPI", icon: <SiFastapi size={16} className="text-emerald-400" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn size={16} className="text-orange-400" /> },
        { name: "React.js", icon: <FaReact size={16} className="text-cyan-400" /> },
        { name: "Flutter", icon: <SiFlutter size={16} className="text-cyan-400" /> },
        { name: "Pandas", icon: <SiPandas size={16} className="text-indigo-400" /> },
        { name: "NumPy", icon: <SiNumpy size={16} className="text-blue-500" /> },
        { name: "Matplotlib", icon: <BarChart size={16} className="text-orange-300" /> },
        { name: "Seaborn", icon: <LineChart size={16} className="text-blue-300" /> },
        { name: "Catboost", icon: <Bot size={16} className="text-yellow-300" /> }
      ],
    },
    {
      category: "TOOLS & INFRASTRUCTURE",
      items: [
        { name: "Git", icon: <FaGitAlt size={16} className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub size={16} /> },
        { name: "Streamlit", icon: <SiStreamlit size={16} className="text-red-400" /> },
        { name: "Google Colab", icon: <SiGooglecolab size={16} className="text-orange-400" /> },
        { name: "Figma", icon: <FaFigma size={16} className="text-pink-400" /> },
        { name: "Stitch", icon: <Layers size={16} className="text-blue-400" /> },
        { name: "Google AI Studio", icon: <Brain size={16} className="text-indigo-400" /> },
        { name: "Canva", icon: <Layers size={16} className="text-cyan-400" /> }
      ],
    },
    {
      category: "CS FUNDAMENTALS",
      items: [
        { name: "Data Structures & Algorithms", icon: <Layers size={16} className="text-emerald-400" /> },
        { name: "Database Management Systems", icon: <Server size={16} className="text-blue-400" /> },
        { name: "Operating Systems", icon: <Cpu size={16} className="text-purple-400" /> },
        { name: "Object-Oriented Programming", icon: <Code size={16} className="text-orange-400" /> }
      ],
    },
    {
      category: "CYBER SECURITY",
      fullWidth: true,
      items: [
        { name: "Computer Networks", icon: <Network size={16} className="text-blue-400" /> },
        { name: "Cryptography", icon: <Lock size={16} className="text-emerald-400" /> },
        { name: "Ethical Hacking", icon: <Terminal size={16} className="text-green-500" /> },
        { name: "System Security", icon: <ShieldAlert size={16} className="text-red-400" /> },
        { name: "Digital Forensics", icon: <Search size={16} className="text-cyan-400" /> }
      ],
    },
  ];

  return (
    <section id="about" className="w-full bg-black pt-12 pb-16 px-4 relative overflow-hidden">

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

              <div className="relative z-10 flex flex-col justify-start h-full gap-6">
                <h3 className="text-xs font-bold tracking-widest text-fuchsia-400 uppercase">Education & Academics</h3>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">B.Tech in Artificial Intelligence & Data Science</h4>
                  <p className="text-lg text-neutral-400">Vivekanand Education Society's Institute of Technology (VESIT)</p>
                </div>
                <div className="flex flex-col gap-6 mt-2 w-full">
                  {/* Row 1: The Semesters */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                    {[
                      { sem: 'Sem 1', score: '9.91', delay: '0.3s' },
                      { sem: 'Sem 2', score: '9.50', delay: '0.4s' },
                      { sem: 'Sem 3', score: '9.65', delay: '0.5s' },
                      { sem: 'Sem 4', score: '9.50', delay: '0.6s' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="group/sem relative flex flex-col items-center justify-center py-4 bg-black/40 border border-white/5 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden shadow-inner"
                        style={{ animation: `fadeInUp 0.6s ease-out ${item.delay} both` }}
                      >
                        <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mb-1 group-hover/sem:text-white transition-colors">{item.sem}</div>
                        <div className="text-xl md:text-2xl font-black text-white">{item.score}</div>
                      </div>
                    ))}
                  </div>

                  {/* Row 2: The Overall CGPA */}
                  <div className="relative flex items-center justify-between p-5 md:p-6 bg-gradient-to-r from-fuchsia-900/20 to-indigo-900/20 border border-white/10 rounded-2xl hover:border-fuchsia-500/50 transition-all duration-500 overflow-hidden w-full group/cgpa" style={{ animation: `fadeInUp 0.6s ease-out 0.7s both` }}>
                    <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover/cgpa:opacity-10 transition-opacity duration-500"></div>
                    <div className="relative z-10 flex flex-col">
                      <span className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Cumulative Grade Point</span>
                      <span className="text-xs text-neutral-400 mt-1">Average Till Semester 4</span>
                    </div>
                    <div className="relative z-10 text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-accent tracking-tighter">
                      9.63
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Block */}
            <div className="md:col-span-1 group relative p-8 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md overflow-hidden hover:border-white/30 hover:-translate-y-2 transition-all duration-500 shadow-2xl cursor-default flex flex-col justify-start" style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-6">Core Philosophy</h3>
                  <h4 className="text-white font-bold text-base mb-3">Engineering Intelligence</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    Transforming raw data into actionable insights and building scalable, user-centric applications. My focus lies at the intersection of applied machine learning, advanced LLM architectures, and robust full-stack development to solve real-world challenges.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></div>
                      <span className="text-sm text-neutral-400"><span className="text-white font-semibold">Data-Driven:</span> Emphasizing mathematical rigor over pure intuition.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fuchsia-500 flex-shrink-0"></div>
                      <span className="text-sm text-neutral-400"><span className="text-white font-semibold">Scalable Architectures:</span> Designing systems built for long-term growth.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0"></div>
                      <span className="text-sm text-neutral-400"><span className="text-white font-semibold">User-Centric:</span> Ensuring deep tech serves human needs seamlessly.</span>
                    </li>
                  </ul>
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

            {/* Professional Experience Block */}
            <div className="md:col-span-3 group relative p-8 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md overflow-hidden hover:border-white/30 hover:-translate-y-2 transition-all duration-500 shadow-2xl cursor-default" style={{ animation: 'fadeInUp 0.8s ease-out 0.55s both' }}>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none skew-x-12"></div>

              <div className="relative z-10 flex flex-col justify-between h-full gap-6">
                <h3 className="text-xs font-bold tracking-widest text-fuchsia-400 uppercase">Professional Experience</h3>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2 flex items-center gap-3">
                    <span className="text-xl">🔬</span> Data Analytics Intern · Tata GenAI Powered Platform (Virtual)
                  </h4>
                  <ul className="text-sm md:text-base text-neutral-400 leading-relaxed list-disc list-outside ml-10 mt-4 space-y-2">
                    <li>Leveraged Generative AI architectures for complex data cleaning configurations and exploratory data analysis (EDA).</li>
                    <li>Synthesized business trend datasets to formulate strategic visual dashboards for corporate insight groups.</li>
                  </ul>
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
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">1x Hackathon Finalist</h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">Recognized for rapid prototyping and innovative problem-solving, securing a top finish at the national-level PU Code Hackathon 3.0.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Academic Journey Segment */}
        <div id="education" className="flex flex-col gap-10">
          
          {/* Header */}
          <div className="flex flex-col gap-4 mb-4" style={{ animation: 'fadeInUp 0.8s ease-out 1.0s both' }}>
            <h2 className="font-sans text-5xl md:text-7xl font-black tracking-tighter text-primary uppercase drop-shadow-lg">
              ACADEMIC JOURNEY
            </h2>
            <div className="w-24 h-1 bg-gradient-accent rounded-full"></div>
          </div>

          {/* Timeline List */}
          <div className="flex flex-col gap-6">
            {[
              {
                degree: "B.Tech in Artificial Intelligence & Data Science",
                institution: "VESIT, Mumbai",
                score: "9.63 / 10 CGPA\n(Upto Sem 4)",
                timeline: "Aug 2024 — Present"
              },
              {
                degree: "Higher Secondary Certificate (HSC)",
                institution: "B.N. Bandodkar College, Thane",
                score: "86.67%",
                timeline: "Jun 2022 — Apr 2024"
              },
              {
                degree: "Secondary School Certificate (SSC)",
                institution: "A.K. Joshi English High School, Thane",
                score: "94.00%",
                timeline: "Jun 2012 — Apr 2022"
              }
            ].map((edu, idx) => (
              <div 
                key={idx} 
                className="group relative p-6 md:p-8 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md overflow-hidden hover:border-white/30 hover:-translate-y-2 transition-all duration-500 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8"
                style={{ animation: `fadeInUp 0.8s ease-out ${1.1 + idx * 0.15}s both` }}
              >
                {/* Column 1: Degree & Institution */}
                <div className="flex flex-col gap-2 flex-1 min-w-[200px] md:max-w-[45%]">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-400">{edu.institution}</p>
                </div>
                
                {/* Mobile Wrapper (Disappears on Desktop via md:contents) */}
                <div className="flex items-center justify-between w-full mt-2 md:mt-0 md:contents">
                  
                  {/* Column 2: Score / Marks */}
                  <div className="flex-1 flex justify-start md:justify-center min-w-[120px]">
                    <span className="inline-flex items-center px-4 py-1.5 md:px-5 md:py-2 bg-white/5 border border-fuchsia-500/20 md:border-white/10 rounded-full text-xs md:text-sm font-medium text-neutral-300 whitespace-pre-line text-center leading-tight transition-all duration-300 hover:bg-fuchsia-500/20 hover:border-fuchsia-400/50 md:hover:border-fuchsia-400/50 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(217,70,239,0.5)] cursor-default">
                      {edu.score}
                    </span>
                  </div>
                  
                  {/* Column 3: Timeline */}
                  <div className="flex-1 flex justify-end min-w-[150px]">
                    <span className="inline-flex items-center px-4 py-1.5 md:px-5 md:py-2 bg-white/5 border border-fuchsia-500/20 md:border-white/10 rounded-full text-xs md:text-sm font-bold tracking-widest text-fuchsia-400 md:text-white uppercase whitespace-nowrap transition-all duration-300 hover:bg-fuchsia-500/20 hover:border-fuchsia-400/50 md:hover:border-fuchsia-400/50 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(217,70,239,0.5)] cursor-default">
                      {edu.timeline}
                    </span>
                  </div>
                  
                </div>
              </div>
            ))}
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
                className={`group relative p-8 rounded-3xl border border-white/10 bg-neutral-800/40 backdrop-blur-md overflow-hidden hover:bg-neutral-800/60 hover:border-white/30 hover:-translate-y-2 transition-all duration-500 shadow-2xl h-full flex flex-col justify-start ${skillGroup.fullWidth ? 'lg:col-span-2' : (idx === 0 ? 'lg:col-span-2' : '')}`}
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
                        className="text-center flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-default"
                      >
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements Segment */}
        <div id="certifications" className="flex flex-col gap-10">
          
          {/* Header */}
          <div className="flex flex-col gap-4 mb-4" style={{ animation: 'fadeInUp 0.8s ease-out 1.4s both' }}>
            <h2 className="font-sans text-5xl md:text-7xl font-black tracking-tighter text-primary uppercase drop-shadow-lg">
              CERTIFICATIONS
            </h2>
            <div className="w-24 h-1 bg-gradient-accent rounded-full"></div>
          </div>

          {/* Groups */}
          <div className="flex flex-col gap-6">
            {[
              {
                issuer: "HackerRank",
                color: "text-green-400",
                certs: [
                  { title: "4 Star Badge in Python", type: "Badge" }
                ]
              },
              {
                issuer: "IBM",
                color: "text-blue-400",
                certs: [
                  { title: "AI Literacy", type: "Certificate" },
                  { title: "AI Fundamentals: Foundations for Understanding AI", type: "Certificate" },
                  { title: "AI Fundamentals: Language and Vision in AI", type: "Certificate" },
                  { title: "Artificial Intelligence Fundamentals", type: "Certificate" }
                ]
              },
              {
                issuer: "Udemy",
                color: "text-purple-400",
                certs: [
                  { title: "Data Science, Machine Learning, DL and NLP Bootcamp", type: "Bootcamp" },
                  { title: "Ethical Hacking and Penetration Testing", type: "Certificate" }
                ]
              },
              {
                issuer: "Oracle",
                color: "text-red-400",
                certs: [
                  { title: "Artificial Intelligence and Machine Learning in Java", type: "Certificate" }
                ]
              }
            ].map((group, groupIdx) => (
              <div key={groupIdx} className="group relative p-6 md:p-8 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md overflow-hidden hover:border-white/30 hover:-translate-y-2 transition-all duration-500 shadow-2xl flex flex-col md:flex-row gap-4 md:gap-8 items-start w-full" style={{ animation: `fadeInUp 0.8s ease-out ${1.5 + groupIdx * 0.15}s both` }}>
                
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                {/* Group Header (Left Sidebar) */}
                <div className="md:w-40 lg:w-48 flex-shrink-0 pt-2 w-full relative z-10">
                  <h3 className={`text-sm md:text-base font-bold tracking-widest uppercase ${group.color} flex items-center gap-4`}>
                    {group.issuer}
                    <span className={`md:hidden flex-1 h-px bg-current opacity-30`}></span>
                  </h3>
                </div>
                
                {/* Group List (Right Content Grid) */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {group.certs.map((cert, idx) => (
                    <div 
                      key={idx} 
                      className={`group relative p-5 border border-white/10 rounded-2xl bg-neutral-900/40 backdrop-blur-md shadow-xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-center min-h-[90px] ${group.certs.length === 1 ? 'sm:col-span-2' : ''}`}
                    >
                      <h4 className="text-base font-medium text-neutral-300 group-hover:text-fuchsia-400 transition-colors leading-snug text-center">
                        {cert.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
