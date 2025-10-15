import React, { type ReactNode } from 'react';
import '../styles/Section.css';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => (
  <section id={id} className={`section ${className}`}>
    <div className="section-container">{children}</div>
  </section>
);

export default Section;