export default function About() {
  const achievements = [
    {
      title: "3RD POSITION",
      description: "Zerve AI Datathon 2025, Techfest, IIT Bombay.",
    },
    {
      title: "FINALIST",
      description: "PU Code Hackathon 3.0, Vadodara.",
    },
    {
      title: "LEADERSHIP & COMPETITIONS",
      description: "Selected Team Leader for the Invictus Hackathon; Active competitor in the Gemini 3 Hackathon and UIDAI Aadhar Hackathon.",
    },
  ];

  const skills = [
    {
      category: "CORE AI & MACHINE LEARNING",
      items: ["Generative AI", "AI Agents", "Large Language Models (LLMs)", "Retrieval-Augmented Generation (RAG)", "Neural Networks", "Deep Learning", "Computer Vision", "Natural Language Processing (NLP)", "Supervised Learning", "Text Classification"],
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
      items: ["Git", "GitHub", "Streamlit", "Google Colab", "Figma"],
    },
    {
      category: "CS FUNDAMENTALS",
      items: ["Data Structures & Algorithms", "Database Management Systems", "Operating Systems", "Object-Oriented Programming"],
    },
  ];

  return (
    <section id="about" className="w-full bg-black py-24 px-4 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* About Me Segment */}
        <div className="flex flex-col gap-8">
          <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter text-primary uppercase">
            ABOUT ME
          </h2>
          
          <div className="max-w-3xl">
            <p className="text-neutral-300 font-sans text-base md:text-lg leading-relaxed">
              I am a B. Tech student in Artificial Intelligence & Data Science at VIVEKANAND EDUCATION SOCIETY'S INSTITIUTE OF TECHNOLOGY (CGPA: 9.63/10 (UPTO SEM 4)) specializing in the development of end-to-end Machine Learning pipelines, Generative AI architectures, and autonomous AI Agents. My technical expertise encompasses Deep Learning, Neural Networks, Natural Language Processing (NLP), and Computer Vision. Proven in competitive environments, I am a 1x Datathon Winner (3rd Position at the Zerve AI Datathon 2025, Techfest, IIT Bombay) and a 1x National Hackathon Finalist (PU Code Hackathon 3.0), focused on translating complex datasets and Large Language Models (LLMs) into scalable, deployment-ready intelligent systems.
            </p>
          </div>

          {/* Recognitions & Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {achievements.map((item, index) => (
              <div 
                key={index} 
                className="p-6 border border-neutral-800 rounded-2xl bg-neutral-950/50 hover:bg-neutral-900/50 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-accent"></div>
                  <h3 className="text-xs font-bold tracking-widest text-primary uppercase">
                    [{item.title}]
                  </h3>
                </div>
                <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Segment */}
        <div className="flex flex-col gap-12">
          <div className="inline-flex items-center gap-4">
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight text-primary uppercase">
              TECHNICAL SKILLS
            </h2>
            <div className="h-px flex-1 bg-neutral-900 max-w-xs"></div>
          </div>

          <div className="flex flex-col gap-10">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12">
                <div className="lg:w-1/4 shrink-0">
                  <h3 className="text-xs font-bold tracking-widest text-neutral-500 uppercase mt-2">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3 lg:w-3/4">
                  {skillGroup.items.map((skill, i) => (
                    <div 
                      key={i}
                      className="px-4 py-2 bg-neutral-950 border border-neutral-800 rounded-full text-sm font-medium text-neutral-300 hover:text-white hover:border-neutral-600 hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      {skill}
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
