'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function LearningAnimation({ children, index = 0, className }: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : Math.min(index, 5) * 0.1 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
