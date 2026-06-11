export default function Projects() {
  const projects = [
    {
      index: "01",
      category: "MACHINE LEARNING · NLP",
      title: "Email Spam Detection System",
      description: "Engineered a 97% accuracy binary classification model using TF-IDF vectorization and Logistic Regression, featuring a live real-time text prediction Streamlit interface.",
      link: "#", // placeholder for live project link
    },
    {
      index: "02",
      category: "FULL STACK WEB",
      title: "Prashikshan NEP Platform",
      description: "Developed a multi-role data management platform for tracking metrics, automated logbook monitoring, and compliance analytics using a streamlined React/Node stack.",
      link: "#", // placeholder for live project link
    }
  ];

  return (
    <section id="projects" className="w-full bg-black py-24 px-4 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative">
        <div className="flex flex-col gap-4">
          <h2 className="font-sans text-5xl md:text-7xl font-black tracking-tighter text-primary uppercase">
            SELECTED PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full"></div>
        </div>

        <div className="flex flex-col gap-12 lg:gap-32 pb-24">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`sticky flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 w-full p-6 lg:p-12 bg-zinc-950 border border-neutral-800 rounded-3xl shadow-2xl transition-all duration-500`}
              style={{ top: `calc(7rem + ${i * 2}rem)` }}
            >
              
              {/* Content Side */}
              <div className="flex flex-col justify-between lg:w-5/12 gap-8 z-10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold tracking-widest text-neutral-500">
                      {project.index} <span className="mx-2">/</span> {project.category}
                    </span>
                  </div>
                  <h3 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 font-sans text-base md:text-lg leading-relaxed mt-2">
                    {project.description}
                  </p>
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-flex w-fit items-center justify-center px-8 py-3 rounded-full border border-neutral-700 bg-transparent text-primary text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  LIVE PROJECT
                </a>
              </div>

              {/* Asset Frame Side */}
              <div className="lg:w-7/12 relative aspect-video bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex items-center justify-center group">
                {/* Placeholder content for interface mockup */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <span className="text-neutral-700 font-sans font-bold text-lg md:text-2xl tracking-widest text-center uppercase">
                    INTERFACE MOCKUP
                  </span>
                  <span className="text-xs text-neutral-500 font-medium font-sans">
                    {project.title} Asset
                  </span>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
