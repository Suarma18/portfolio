import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';

export default function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
