import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-background min-h-screen text-primary selection:bg-fuchsia-900 selection:text-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
