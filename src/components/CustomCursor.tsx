import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hidden, setHidden] = useState(true);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (hidden) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-premium-neon rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-premium-gold/40 rounded-full pointer-events-none z-50 hidden md:block"
        style={{ x: useSpring(cursorX, { damping: 50, stiffness: 300 }), y: useSpring(cursorY, { damping: 50, stiffness: 300 }) }}
      />
    </>
  );
}