import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages & Frameworks',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'React.js', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'Python', level: 70 }
      ]
    },
    {
      category: 'AI & GenAI',
      skills: [
        { name: 'LangChain', level: 90 },
        { name: 'RAG', level: 85 },
        { name: 'Vector DB', level: 85 },
        { name: 'Chroma', level: 80 },
        { name: 'OpenAI API', level: 85 }
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Cassandra', level: 75 },
        { name: 'Redis', level: 80 }
      ]
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Kafka', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'Microservices', level: 90 },
        { name: 'REST APIs', level: 95 },
        { name: 'Git', level: 90 }
      ]
    }
  ];

  const competencies = [
    'Software Development',
    'Unit Testing',
    'Requirement Gathering',
    'Automation Testing',
    'Daily Status Report (DSR)',
    'Analysis',
    'Project Management',
    'GCP'
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-underline"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="competencies-section">
          <h3 className="competencies-title">Core Competencies</h3>
          <div className="competencies-tags">
            {competencies.map((comp, index) => (
              <span key={index} className="competency-tag">
                {comp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
