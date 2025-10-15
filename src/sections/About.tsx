import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer } from 'react-icons/fa';
import Section from '../components/Section';
import '../styles/About.css';

const About = () => {
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    {
      icon: <FaCode />,
      title: 'Software Development',
      description: 'Full-stack development with React, Node.js, and modern frameworks',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Hardware Integration',
      description: 'Embedded systems, Arduino projects, and sensor integration',
    },
    {
      icon: <FaServer />,
      title: 'System Design',
      description: 'Architecture design, circuit design, and deployment',
    },
  ];

  const stats = [
    { label: 'Completed Projects', value: '5+' },
    { label: 'Current GPA', value: '4.67' },
    { label: 'Organizations', value: '4' },
  ];

  return (
    <Section id="about" className="about-section">
      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="about-skills"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, x: 10 }}
              onClick={() => setActiveSkill(idx)}
              className={`about-skill-item ${activeSkill === idx ? 'about-skill-active' : ''}`}
            >
              <div className="about-skill-icon">{skill.icon}</div>
              <div className="about-skill-title">{skill.title}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <h2 className="about-title">
            About <span className="about-title-orange">Me</span>
          </h2>
          
          <p className="about-description">
            Passionate Computer Engineering student with developing experience in 
            full-stack development, UI/UX design, and project management. Skilled in 
            building and deploying software solutions, with a strong drive to apply and 
            grow technical skills in real-world settings.
          </p>

          <motion.div
            key={activeSkill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="about-skill-detail"
          >
            <h3 className="about-skill-detail-title">
              {skills[activeSkill].title}
            </h3>
            <p className="about-skill-detail-description">
              {skills[activeSkill].description}
            </p>
          </motion.div>

          <div className="about-stats">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="about-stat-card"
              >
                <div className="about-stat-value">{stat.value}</div>
                <div className="about-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;