"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface CounterProps {
  value: number;
  duration?: number;
}

function Counter({ value, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;
      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(counter);
      }, incrementTime);

      return () => clearInterval(counter);
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function AnimatedStats() {
  const stats = [
    { value: 500, label: "Prodotti", suffix: "+" },
    { value: 20, label: "Progetti", suffix: "+" },
    { value: 50, label: "Clienti Soddisfatti", suffix: "+" },
    { value: "40", label: "TAnni di esperienza", suffix: "+" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full max-w-7xl mx-auto mt-8 py-16 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-glimerBold mb-2">
              {typeof stat.value === "number" ? (
                <>
                  <Counter value={stat.value} />
                  {stat.suffix}
                </>
              ) : (
                <>
                  {stat.value}
                  {stat.suffix}
                </>
              )}
            </div>
            <div className="text-gray-500 text-sm md:text-base">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
