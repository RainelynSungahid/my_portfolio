import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Section from '../components/Section';
import Card from '../components/Card';
import '../styles/Projects.css';

const Projects = () => {
  const softwareProjects = [
    {
      title: 'Disease Surveillance Map (DISMAP)',
      date: 'Aug 2025 – Present',
      role: 'Full Stack Developer & Logo Designer',
      description: 'Partnered with team members to execute end-to-end development, contributing equally to both the front-end user interface and back-end logic and API design. Designed the official DisMap brand logo, contributing a key element to the project\'s visual identity and overall branding strategy.',
      tech: ['HTML', 'JavaScript', 'Tailwind CSS', 'Laravel', 'MariaDB', 'Vite.js', 'Flutter (Dart)'],
    },
    {
      title: 'FurWell',
      date: 'Feb 2025 – May 2025',
      role: 'Full Stack Developer & Logo Designer',
      description: 'Contributed to the development of both the front-end and back-end, specifically implementing responsive designs to guarantee seamless cross-platform functionality. Designed the brand logo, contributing to the branding strategy.',
      tech: ['React.js', 'Firebase', 'Node.js'],
      link: 'https://furwell.vercel.app',
    },
    {
      title: 'SwiftSail Ferries',
      date: 'Aug 2024 – Dec 2024',
      role: 'Full Stack Developer, Logo & UI/UX Designer',
      description: 'Worked with groupmates to develop the SwiftSail Ferries website, taking responsibility for assigned full-stack tasks across the application. Designed the software logo, which helped establish the brand identity.',
      tech: ['React.js', 'CSS', 'Firebase'],
      link: 'https://swiftsail-ferries.vercel.app',
    },
    {
      title: 'TeknoSpace',
      date: 'May 2024 – Jul 2024',
      role: 'Full Stack Developer (Frontend & UI/UX Focus)',
      description: 'Collaborating with the team on the ongoing development of the TeknoSpace platform, with a primary focus on frontend architecture, user interface design, and implementation. Collaborated on backend development using PHP, integrating with APIs and optimizing overall platform performance.',
      tech: ['HTML', 'JavaScript', 'CSS', 'PHP'],
      link: 'http://teknospace.onlinewebshop.net/',
    },
    {
      title: 'PrintHub',
      date: 'Feb 2024 – Apr 2024',
      role: 'Owner & Full Stack Developer',
      description: 'Led all aspects of development, including front-end and back-end architecture, API integration, and database design. Managed the overall project lifecycle from planning to deployment. Responsible for project deployment, maintenance, and feature updates.',
      tech: ['C#', '.NET', 'MS Access'],
    },
  ];

  const hardwareProjects = [
    {
      title: 'Touchless Water Tap',
      date: 'Feb 2025 – April 2025',
      description: 'Configured the circuit, ensuring proper wiring and component integration. Conducted thorough testing to identify and resolve hardware-software integration issues. Collaborated with team members to refine the design for improved water flow efficiency.',
    },
    {
      title: 'Arduino Garbage Separator (AGATOR)',
      date: 'Aug 2024 – Dec 2024',
      description: 'Assisted in designing the system, contributing to the initial concept and structural layout. Helped with circuit formation, soldering components and troubleshooting connectivity problems. Presented the project outcomes to stakeholders, highlighting the system\'s effectiveness in waste management.',
    },
  ];

  return (
    <Section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="soft-projects-title">
          Software <span className="projects-title-orange">Projects</span>
        </h2>

        <div className="projects-grid">
          {softwareProjects.map((project, idx) => (
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
              {project.tech && (
                <div className="project-tech">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>

        <h2 className="hard-projects-title mt-12">
          Hardware <span className="projects-title-orange">Projects</span>
        </h2>

        <div className="projects-grid">
          {hardwareProjects.map((project, idx) => (
            <Card key={idx}>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-date">{project.date}</p>
              <p className="project-description">{project.description}</p>
            </Card>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Projects;