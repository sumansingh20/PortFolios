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
  align = 'left',
}: SectionHeadingProps) {
  const alignClass =
    align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto';

  return (
    <motion.div
      className={`mb-16 flex flex-col gap-5 ${alignClass} ${align === 'center' ? 'max-w-3xl' : ''}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4">
        {index ? (
          <span className="section-number">{index}</span>
        ) : null}
        <span className="h-px w-14 bg-gradient-to-r from-cyber-cyan/70 to-transparent" />
      </div>
      <h2 className="heading-xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </motion.div>
  );
}
