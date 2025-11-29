import { Mail, Phone, MapPin, Linkedin, Github, PenTool } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={32} strokeWidth={2} />,
      label: 'Email',
      value: 'roshan.hanjas@gmail.com',
      link: 'mailto:roshan.hanjas@gmail.com'
    },
    {
      icon: <Phone size={32} strokeWidth={2} />,
      label: 'Phone',
      value: '+971 551192984',
      link: 'tel:+971551192984'
    },
    {
      icon: <MapPin size={32} strokeWidth={2} />,
      label: 'Location',
      value: 'Al Qusis, Dubai, UAE',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/roshan-hanjas/',
      icon: <Linkedin size={28} strokeWidth={2} />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/hanjas',
      icon: <Github size={28} strokeWidth={2} />
    },
    {
      name: 'Medium',
      url: 'https://hanjas.medium.com/',
      icon: <PenTool size={28} strokeWidth={2} />
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-underline"></div>
          <p className="contact-subtitle">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <div className="contact-label">{info.label}</div>
                  {info.link ? (
                    <a href={info.link} className="contact-value">
                      {info.value}
                    </a>
                  ) : (
                    <div className="contact-value">{info.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="social-links-section">
            <h3 className="social-title">Connect With Me</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="cta-section">
            <h3 className="cta-title">Ready to Start a Project?</h3>
            <p className="cta-text">
              Let's work together to create something amazing. Drop me a message and let's get started!
            </p>
            <a href="mailto:roshan.hanjas@gmail.com" className="cta-email-button">
              Send Me an Email
            </a>
          </div>
        </div>

        <footer className="footer">
          <p className="footer-text">
            © 2024 Roshin Hanjas. Built with React + Vite
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
