import { motion } from 'framer-motion';
import Section from '../components/Section';
import Card from '../components/Card';
import '../styles/Education.css';

const Education = () => {
  const education = [
    {
      degree: 'BS Computer Engineering',
      institution: 'Cebu Institute of Technology - University',
      duration: '2022 – Present',
      details: 'Expected 2026 • GPA: 4.67 (1st year to 3rd year 1st semester) • DOST Scholar, Cebu City Scholar, Ancop Scholar',
    },
    {
      degree: 'Science, Technology, Engineering and Mathematics',
      institution: 'University of Cebu - Main Campus',
      duration: '2020 – 2022',
      details: 'GPA: 98.299 • With Highest Honors, Academic Scholar',
    },
  ];

  const organizations = [
    'GDGOC CIT-U (2024–Present) - Member',
    'DOST SA CIT-U (2022–Present) - Creatives Committee Member',
    'Honor Society CIT-U (2024–Present) - Email Administrator - Committee on Rules and Regulations',
    'ICPEP.SE CIT-U Chapter (2024–Present) - Secretary - Committee on External Affairs',
  ];

  return (
    <Section id="education" className="education-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="education-title">
          My <span className="education-title-orange">Education</span>
        </h2>

        <div className="education-grid">
          {education.map((edu, idx) => (
            <Card key={idx}>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-duration">{edu.duration}</p>
              <p className="education-details">{edu.details}</p>
            </Card>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="education-organizations"
        >
          <h3 className="education-org-title">
            Organizations & <span className="education-title-orange">Involvement</span>
          </h3>
          <div className="education-org-grid">
            {organizations.map((org, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="education-org-card"
              >
                <p className="education-org-text">{org}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Education;