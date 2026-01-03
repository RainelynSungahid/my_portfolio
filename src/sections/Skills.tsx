import { motion } from 'framer-motion';
import Section from '../components/Section';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'JavaScript', 'C#', 'PHP', 'Python', 'HTML', 'CSS', 'TypeScript'],
    },
    {
      title: 'Frameworks & Tools',
      skills: ['.NET', 'ReactJS', 'Firebase', 'Laravel', 'Node.js', 'Next.js', 'Tailwind CSS', 'MySQL', 'MariaDB', 'Arduino IDE', 'Git', 'GitHub', 'AutoCAD', 'Flutter', 'Figma'],
    },
    {
      title: 'Software Development',
      skills: ['Object-Oriented Programming (OOP)', 'Full Stack Development (Front-End & Back-End)', 'UI/UX Design Fundamentals'],
    },
    {
      title: 'Embedded Systems',
      skills: ['Basic Arduino & ESP32 Programming', 'Sensor Integration & Circuit Design', 'AWS IoT Core & MQTT'],
    },
    {
      title: 'Software Quality Testing',
      skills: ['Lighthouse (Performance Auditing)', 'Manual Testing (Usability)', 'Automated Testing with Python', 'DevOps Bug Documentation'],
    },
    {
      title: 'Soft Skills',
      skills: [
        'Problem-Solving & Critical Thinking',
        'Leadership & Team Collaboration',
      ],
    },
  ];

  return (
    <Section id="skills" className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="skills-title">
          Technical <span className="skills-title-orange">Skills</span>
        </h2>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="skills-category"
            >
              <h3 className="skills-category-title">{category.title}</h3>
              <div className="skills-tags">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    whileHover={{ scale: 1.05, backgroundColor: '#ff6b35', color: '#fff' }}
                    className="skills-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Skills;