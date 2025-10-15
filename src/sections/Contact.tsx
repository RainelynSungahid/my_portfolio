import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Section from '../components/Section';
import '../styles/Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'rainelynsungahid@gmail.com',
      link: 'mailto:rainelynsungahid@gmail.com',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+63 976 350 6685',
      link: 'tel:+639763506685',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Sitio Lourdes, Cogon Pardo, Cebu City, Philippines, 6000',
    },
  ];

  return (
    <Section id="contact" className="contact-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="contact-content"
      >
        <h2 className="contact-title">
          Get In <span className="contact-title-orange">Touch</span>
        </h2>

        <div className="contact-grid">
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`contact-card ${info.link ? '' : 'contact-card-no-link'}`}
            >
              <div className="contact-icon">{info.icon}</div>
              <h3 className="contact-label">{info.label}</h3>
              <p className="contact-value">{info.value}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Contact;