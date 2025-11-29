import { useEffect, useState } from 'react';
import ParticleNetwork from './ParticleNetwork';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Software Engineer';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-bg"></div>
        <div className="grid-lines"></div>
        <ParticleNetwork />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">Hi, I'm</div>
          <h1 className="hero-name">
            Roshin Hanjas
          </h1>
          <div className="hero-title">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-description">
            Specialized in GenAI, LangChain & Full-Stack Development
            <br />
            Building scalable solutions with Node.js, React, and Modern Technologies
          </p>

          <div className="hero-cta">
            <button
              className="cta-button primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button
              className="cta-button secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">7+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-indicator">
            <span>Scroll Down</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
