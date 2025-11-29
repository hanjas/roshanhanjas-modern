import { useEffect, useRef } from 'react';
import './FloatingElements.css';

const FloatingElements = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const elements = document.querySelectorAll('.floating-element');
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      elements.forEach((element, index) => {
        const speed = (index + 1) * 0.02; // Different speeds for parallax
        const x = (clientX - centerX) * speed;
        const y = (clientY - centerY) * speed;

        element.style.transform = `
          translate(${x}px, ${y}px)
          rotateX(${y * 0.05}deg)
          rotateY(${x * 0.05}deg)
        `;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="floating-container">
      {/* Floating geometric shapes */}
      <div className="floating-element element-1">
        <div className="hologram-card"></div>
      </div>
      <div className="floating-element element-2">
        <div className="hologram-sphere"></div>
      </div>
      <div className="floating-element element-3">
        <div className="hologram-cube">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face left"></div>
          <div className="cube-face right"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>
      <div className="floating-element element-4">
        <div className="hologram-ring"></div>
      </div>
      <div className="floating-element element-5">
        <div className="hologram-triangle"></div>
      </div>
    </div>
  );
};

export default FloatingElements;
