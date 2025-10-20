import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return {
    ref,
    controls,
    variants: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      }
    }
  };
};

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  const { ref, controls, variants } = useScrollAnimation();

  const animationVariants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: { 
        ...variants.visible.transition, 
        delay 
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animationVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};