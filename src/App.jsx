import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowIntro(false), 2000);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'var(--bg-primary)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <motion.img 
              src="/images/logo.png" 
              alt="Logo" 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ height: '80px', width: 'auto' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="app-container">
      {/* Scroll-animated background shapes */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
        <motion.div style={{
          position: 'absolute', top: '-10%', left: '-10%', width: '50vw', height: '50vw',
          borderRadius: '50%', background: 'radial-gradient(circle, var(--ambient-glow1) 0%, transparent 70%)',
          y: y1, filter: 'blur(60px)', opacity: 0.9
        }} />
        <motion.div style={{
          position: 'absolute', bottom: '-10%', right: '-10%', width: '60vw', height: '60vw',
          borderRadius: '50%', background: 'radial-gradient(circle, var(--ambient-glow2) 0%, transparent 70%)',
          y: y2, filter: 'blur(80px)', opacity: 0.8
        }} />
      </div>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
        <p>&copy; 2026 Alfaizz. All Rights Reserved.</p>
      </footer>
    </div>
    </>
  );
}

export default App;
