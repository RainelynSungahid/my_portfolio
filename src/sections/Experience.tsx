import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Section from '../components/Section';
import Card from '../components/Card';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Quality Tester',
      company: 'Arielus Software Inc.',
      type: 'On-the-Job Training (OJT)',
      duration: 'June 2025 - August 2025',
      responsibilities: [
        'Conducted comprehensive testing of software applications',
        'Identified and documented bugs and issues',
        'Collaborated with development team to ensure quality standards',
        'Performed regression testing and validation',
      ],
    },
  ];

  return (
    <Section id="experience" className="experience-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="experience-title">
          Work <span className="experience-title-orange">Experience</span>
        </h2>

        <div className="experience-container">
          {experiences.map((exp, idx) => (
            <Card key={idx}>
              <div className="experience-header">
                <div className='experience-title'>
                  <h3 className="experience-job-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-type">{exp.type}</p>
                </div>
                <p className="experience-duration">{exp.duration}</p>
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, respIdx) => (
                  <motion.li
                    key={respIdx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: respIdx * 0.1 }}
                    className="experience-responsibility-item"
                  >
                    <FaCheckCircle className="experience-check-icon" />
                    <span>{resp}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Experience;