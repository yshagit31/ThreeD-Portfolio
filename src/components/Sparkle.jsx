import { motion } from 'framer-motion';

const Sparkle = ({ left, delay, duration }) => {
  return (
    <motion.span
      style={{
        position: 'absolute',
        top: 0,
        left: `${left}%`,
        width: 8,
        height: 8,
        backgroundColor: 'white',
        clipPath:
          'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        pointerEvents: 'none',
        boxShadow: '0 0 6px 3px rgba(255, 255, 255, 0.7)', // soft glow
        opacity: 0.8,
      }}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: '100vh', opacity: [0.8, 0] }}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

export default Sparkle;
