import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CursorEffect from './components/CursorEffect';
import { activeTheme, applyTheme } from './themes';
import './App.css';

function App() {
  useEffect(() => {
    // Apply theme on mount
    applyTheme(activeTheme);
  }, []);

  return (
    <div className="app">
      <CursorEffect />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
