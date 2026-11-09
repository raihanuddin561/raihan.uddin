import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Philosophy from '@/components/Philosophy';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 light:bg-slate-50 light:text-slate-900 transition-colors duration-200">
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Philosophy />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
