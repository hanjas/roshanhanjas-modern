import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Emirates NBD',
      location: 'Dubai, UAE',
      period: 'Sep 2023 - Present',
      highlights: [
        'Built "Recon Analyzer" - a GenAI chatbot using LangChain, RAG, and Vector Databases to automate payment event diagnostics',
        'Working as backend engineer on Real Time Tracker (RTT) and BOX projects for real-time payment processing',
        'Handling banking event streams including PaymentHub, Bawaba, Finacle, and Firco events',
        'Designed Four-Eye Principle library in TypeScript for maker-checker workflows across ENBD',
        'Built RESTful APIs and event-driven pipelines using Node.js, TypeScript, Kafka, and PostgreSQL'
      ]
    },
    {
      title: 'Sr. Software Engineer',
      company: 'Pstona Technologies',
      location: 'Pune, India',
      period: 'Dec 2021 - Sep 2023',
      highlights: [
        'Key contributor to Luxuryescapes payment service team (Australian project)',
        'Integrated multiple payment gateways: Stripe, Razorpay, Klarna, and Laithub',
        'Conducted extensive testing and served as technical escalation point',
        'Created and shared Daily Status Reports (DSR) with project manager',
        'Ensured best practices for coding, architecture, and security'
      ]
    },
    {
      title: 'System Engineer',
      company: 'Intellicar Telematics',
      location: 'Bengaluru, India',
      period: 'Nov 2016 - Dec 2021',
      highlights: [
        'Developed high-performance applications using Node.js and Java',
        'Built IoT solutions including TCP server for device connections with Kafka integration',
        'Worked with Kafka, Cassandra, and Express for data pipelines',
        'Implemented remote configuration for connected devices',
        'Developed API Platform with predictive analytics capabilities'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="section-underline"></div>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <div className="timeline-company">{exp.company} | {exp.location}</div>
                  </div>
                  <div className="timeline-period">{exp.period}</div>
                </div>
                <ul className="timeline-highlights">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
