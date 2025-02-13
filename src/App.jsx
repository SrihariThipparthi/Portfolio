import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BackgroundEffects from './components/BackgroundEffects';

// Lazy load other components
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience'));
const Certificates = lazy(() => import('./pages/Certificates'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div className="relative bg-black">
      <div className="fixed inset-0 w-full h-full">
        <BackgroundEffects />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main className="relative">
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <Suspense fallback={<div className="min-h-screen" />}>
            <section id="about" className="min-h-screen">
              <About />
            </section>
            <section id="projects" className="min-h-screen">
              <Projects />
            </section>
            <section id="experience" className="min-h-screen">
              <Experience />
            </section>
            <section id="certificates" className="min-h-screen">
              <Certificates />
            </section>
            <section id="contact" className="min-h-screen">
              <Contact />
            </section>
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;