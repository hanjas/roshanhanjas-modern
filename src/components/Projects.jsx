import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Recon Analyzer',
      company: 'Emirates NBD',
      period: '2024 - Present',
      description: 'GenAI-powered diagnostic chatbot to troubleshoot payment event issues, leveraging LangChain, RAG architecture, and Vector Databases',
      technologies: ['LangChain', 'RAG', 'Vector DB', 'Node.js', 'TypeScript', 'Chroma'],
      highlights: [
        'Automated payment event diagnostics',
        'Designed Retrieval-Augmented Generation pipelines',
        'Integrated with internal systems for operational efficiency'
      ]
    },
    {
      title: 'Real Time Tracker & BOX Projects',
      company: 'Emirates NBD',
      period: '2024 - Present',
      description: 'Backend engineer building RESTful APIs and real-time payment event pipelines',
      technologies: ['Node.js', 'TypeScript', 'Kafka', 'MongoDB', 'PostgreSQL'],
      highlights: [
        'Integrated banking events: PaymentHub, Bawaba, Finacle, Firco',
        'Developed Four-Eye Principle library for maker-checker workflows',
        'Built real-time transaction tracking system'
      ]
    },
    {
      title: 'Luxuryescapes Payment Platform',
      company: 'Pstona Technologies',
      period: '2022 - 2023',
      description: 'Full-stack engineer on payment service team for Australian e-commerce platform',
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Microservices', 'Redis', 'Nginx'],
      highlights: [
        'Integrated Stripe, Razorpay, PayPal, Afterpay, Klarna payment gateways',
        'Implemented BNPL features: deposits, installments, "Buy now, pay later"',
        'Committed to high-quality, functional payment solutions'
      ]
    },
    {
      title: 'IoT Telematics API Platform',
      company: 'Intellicar Telematics',
      period: '2017 - 2021',
      description: 'Sophisticated telematics solution delivering API functions for vehicle management',
      technologies: ['Node.js', 'Java', 'Kafka', 'MQTT', 'MySQL', 'Cassandra'],
      highlights: [
        'Vehicle metadata and device configurations management',
        'Predictive analytics for clutch failure events',
        'Real-time data transfer with socket.io and MQTT integration'
      ]
    },
    {
      title: 'Injester Server',
      company: 'Personal Project',
      period: '2020 - 2021',
      description: 'Specialized TCP server for IoT device connections with efficient data handling',
      technologies: ['Java', 'Kafka', 'MQTT', 'MySQL'],
      highlights: [
        'Handled 50k+ concurrent device connections',
        'Implemented remote configuration for connected devices',
        'Leveraged Kafka queue for data processing'
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-underline"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="project-company">{project.company}</span>
                  <span className="project-period">{project.period}</span>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>

              <ul className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
