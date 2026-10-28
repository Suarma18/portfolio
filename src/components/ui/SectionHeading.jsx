import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';

export default function SectionHeading({ kicker, title, highlight, subtitle, align = 'center' }) {
  const isLeft = align === 'left';
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`mb-14 max-w-2xl ${isLeft ? 'text-left' : 'mx-auto text-center'}`}
    >
      {kicker && <span className="section-tag">{kicker}</span>}
      <h2 className="section-title">
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-xl text-sm text-slate-400 ${isLeft ? '' : 'mx-auto'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
