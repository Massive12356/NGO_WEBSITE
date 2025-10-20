import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

interface AnimatedCountProps {
  value: string;
}

const AnimatedCount: React.FC<AnimatedCountProps> = ({ value }) => {
  const [count, setCount] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  React.useEffect(() => {
    if (isInView) {
      setCount(false); // Reset
      setTimeout(() => setCount(true), 100); // Start counting after reset
    }
  }, [isInView]);

  const numeric = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");

  return (
    <div ref={ref}>
      {count && <CountUp end={numeric} duration={2} suffix={suffix} />}
      {!count && 0}
    </div>
  );
};

export default AnimatedCount;
