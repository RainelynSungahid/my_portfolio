import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Section from '../components/Section';
import Card from '../components/Card';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'FurWell',
      date: 'Feb 2025 – May 2025',
      role: 'Full Stack Developer & Logo Designer',
      description: 'Responsible for both front-end and back-end development. Currently building new features and continuously improving the platform to meet user needs and expectations. Designed the brand logo, contributing to the branding strategy.',
      tech: ['React.js', 'Firebase', 'Node.js'],
      link: 'https://furwell.vercel.app',
    },
    {
      title: 'SwiftSail Ferries',
      date: 'Aug 2024 – Dec 2024',
      role: 'Full Stack Developer, Logo & UI/UX Designer',
      description: 'Developed the SwiftSail Ferries website as a full-stack developer, overseeing both front-end and back-end tasks. Designed the software logo, which helped establish the brand identity.',
      tech: ['React.js', 'CSS', 'Firebase'],
      link: 'https://swiftsail-ferries.vercel.app',
    },
    {
      title: 'TeknoSpace',
      date: 'May 2024 – Jul 2024',
      role: 'Full Stack Developer (Frontend & UI/UX Focus)',
      description: 'Developed and maintained the TeknoSpace platform, focusing primarily on the frontend and user interface design and implemented responsive designs to ensure cross-platform compatibility. Collaborated on backend development using PHP, integrating with APIs and optimizing overall platform performance.',
      tech: ['HTML', 'JavaScript', 'CSS', 'PHP'],
      link: 'http://teknospace.onlinewebshop.net/',
    },
    {
      title: 'PrintHub',
      date: 'Feb 2024 – Apr 2024',
      role: 'Owner & Full Stack Developer',
      description: 'Led the development of a desktop-based printing application, including front-end and back-end architecture, API integration, and database design. Managed the overall project lifecycle from planning to deployment. Responsible for project deployment, maintenance, and feature updates.',
      tech: ['C#', '.NET', 'MS Access'],
    },
  ];

  return (
    <Section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="projects-title">
          Software <span className="projects-title-orange">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <Card key={idx}>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="project-link-icon" />
                  </a>
                )}
              </div>
              <p className="project-date">{project.date}</p>
              <p className="project-role">{project.role}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIdx) => (
                  <span key={techIdx} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Projects;