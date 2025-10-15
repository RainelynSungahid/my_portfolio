import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub, FaChevronDown } from 'react-icons/fa';
import { SiCplusplus, SiArduino, SiFirebase } from 'react-icons/si';
import Section from '../components/Section';
import '../styles/Hero.css';

const Hero = () => {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'Arduino', icon: <SiArduino /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'GitHub', icon: <FaGithub /> },
  ];

  return (
    <Section id="home" className="hero-section">
      <div className="hero-background" />
      
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello. I'm{' '}
            <span className="hero-title-gradient">Rainelyn Sungahid</span>
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Computer Engineering Student
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-button hero-button-filled"
            >
              Get a project?
            </motion.a>
            <motion.a
              href="#education"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-button hero-button-outlined"
            >
              My Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + idx * 0.1 }}
                className="hero-skill-tag"
              >
                <span className="hero-skill-icon">{skill.icon}</span>
                <span className="hero-skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-image-container"
        >
          <div className="hero-image-wrapper">
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(255, 107, 53, 0.3)',
                  '0 0 60px rgba(255, 107, 53, 0.6)',
                  '0 0 20px rgba(255, 107, 53, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hero-image"
            >
              <img
                src="/images/profile.png"
                alt="Rainelyn Sungahid"
                className="hero-image-img"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="hero-chevron"
      >
        <FaChevronDown className="hero-chevron-icon" />
      </motion.div>
    </Section>
  );
};

export default Hero;