"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const images = [
  "/slider/img-1.webp",
  "/slider/img-2.webp",
  "/slider/img-3.webp",
  "/slider/img-4.webp",
  "/slider/img-5.webp",
  "/slider/img-6.webp",
  "/slider/img-7.webp",
  "/slider/img-8.webp",
];

export default function InfiniteCarousel() {
  const baseVelocity = -0.7; // Reduced from -2 to -0.5 for slower movement
  const baseX = useMotionValue(0);
  const smoothVelocity = useSpring(baseVelocity, {
    damping: 50,
    stiffness: 400,
  });
  useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(
    baseX,
    (v) => `${wrap(-50, -50 + 100 / images.length, v)}%`
  );

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    const moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  function wrap(min: number, max: number, v: number) {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  }

  return (
    <div className="w-full overflow-hidden bg-transparent">
      <div className="relative py-8">
        <motion.div className="flex gap-4 w-max" style={{ x }}>
          {[...images, ...images].map((src, index) => (
            <motion.div
              key={index}
              className="relative w-[280px] sm:w-[320px] md:w-[350px] h-[350px] md:h-[400px] aspect-[4/3] rounded-3xl overflow-hidden flex-shrink-0"
              style={{
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src={src}
                alt={`Business scene ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
