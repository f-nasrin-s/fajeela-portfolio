import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Certification from "./components/Certification/Certification";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certification />
      <Achievements />
      <Contact />
    </>
  );
}

export default App;