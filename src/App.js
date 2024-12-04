import "./App.css";
import About from "./components/About/About";
import Contact from "./components/ContactSection/Contact";
import Footer from "./components/FooterSection/Footer";
import Header from "./components/HeaderSection/Header";
import Home from "./components/HomeSection/Home";
import Projects from "./components/ProjectsSection/Projects";
import Skills from "./components/SkillsSection/Skills";


function App() {
  return (
    <div>
      <div className="mb-5">
        <Header />
      </div>
      <div>
        <Home/>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
