import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import '../styles/Card.css';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    className={`card ${className}`}
  >
    {children}
  </motion.div>
);

export default Card;