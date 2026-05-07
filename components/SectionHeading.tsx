'use client';

import { motion } from 'framer-motion';

type SectionHeadingProps = {
  index?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  index,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <motion.div
      className={`mb-14 flex flex-col gap-4 ${alignClass}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: true }}
    >
      {index ? <span className="section-kicker">{index}</span> : null}
      <h2 className="section-title text-4xl md:text-5xl lg:text-6xl">
        <span className="bg-gradient-cyber bg-clip-text text-transparent">{title}</span>
      </h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </motion.div>
  );
}