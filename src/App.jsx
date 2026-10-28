import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';

export default function App() {
  return (
    <div className="relative min-h-screen bg-night text-slate-300 font-sans antialiased overflow-x-hidden">
      <div className="glass-ambient" aria-hidden="true" />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
