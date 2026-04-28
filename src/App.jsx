import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        background: "#0A0A0F",
        color: "#E8E8F0",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}