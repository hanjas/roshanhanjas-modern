import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a <span className="highlight">Software Engineer</span> with over 7 years of experience,
              currently based in <span className="highlight">Dubai, UAE</span>, working at Emirates NBD.
            </p>

            <p className="about-paragraph">
              I specialize in building cutting-edge solutions using <span className="highlight">GenAI technologies</span>,
              including LangChain, RAG (Retrieval-Augmented Generation), and Vector Databases. My expertise lies in
              developing scalable, real-time <span className="highlight">payment systems</span> and
              <span className="highlight"> event-driven architectures</span>.
            </p>

            <p className="about-paragraph">
              Throughout my career, I've worked on complex projects involving microservices architecture,
              full-stack development, and IoT solutions. I'm passionate about leveraging emerging technologies
              like AI and machine learning to solve real-world problems and create innovative solutions.
            </p>

            <p className="about-paragraph">
              When I'm not coding, I'm exploring new technologies, contributing to the developer community,
              and staying updated with the latest trends in software engineering.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">🚀</div>
              <h3>Innovation Driven</h3>
              <p>Building AI-powered solutions with GenAI and LangChain</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">💼</div>
              <h3>Industry Expert</h3>
              <p>7+ years in fintech and payment systems</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🛠️</div>
              <h3>Full-Stack Developer</h3>
              <p>End-to-end development with modern tech stack</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">📊</div>
              <h3>Scalable Solutions</h3>
              <p>Microservices & event-driven architectures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
