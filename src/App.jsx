import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Lazy load other components
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div className="relative bg-black">
      <Navbar />
      <div className="h-screen overflow-y-auto overflow-x-hidden">
        <div className="relative">
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
            <section id="contact" className="min-h-screen">
              <Contact />
            </section>
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;