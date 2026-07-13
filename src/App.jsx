import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.style.opacity = '';
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = Array.from(document.querySelectorAll('*')).filter(
      el => (el.getAttribute('style') || '').includes('fadeInUp') || el.style.animationName.includes('fadeInUp')
    );

    elements.forEach(el => {
      el.style.animationPlayState = 'paused';
      el.style.opacity = '0';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background min-h-screen text-primary selection:bg-fuchsia-900 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Internship />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
