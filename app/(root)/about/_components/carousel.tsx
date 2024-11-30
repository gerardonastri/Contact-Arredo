"use client";

import * as React from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import { cn } from "@/lib/utils";

const images = [
  "/images/team.jpeg",
  "/images/team.jpeg",
  "/images/team.jpeg",
  "/images/team.jpeg",
];

export default function Carousel() {
  const [loopImages, setLoopImages] = React.useState(images);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = React.useState(0);
  const [scrollX, setScrollX] = React.useState(0);

  React.useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth);
    }
    setLoopImages([...images, ...images]); // Duplicate images for seamless loop
  }, []);

  useAnimationFrame(() => {
    const wrappedScroll = wrap(0, -carouselWidth / 2, scrollX);
    setScrollX(wrappedScroll - 0.5); // Adjust speed here
  });

  return (
    <div className="relative max-w-[1700px] mx-auto px-6 overflow-hidden">
      <motion.div ref={carouselRef} className="flex" style={{ x: scrollX }}>
        {loopImages.map((src, index) => (
          <div
            key={index}
            className={cn("relative flex-[0_0_auto] min-w-0 pl-6", {
              "mr-4": index === loopImages.length - 1,
            })}
          >
            <div
              className={cn("relative", {
                "h-[400px]": index % 4 === 0 || index % 4 === 2,
                "h-[300px]": index % 4 === 1,
                "h-[350px]": index % 4 === 3,
              })}
            >
              <img
                src={src}
                alt={`Carousel image ${(index % 4) + 1}`}
                className="w-[300px] h-full object-cover rounded-3xl"
              />
              {/* {index < loopImages.length - 1 && (
                <svg
                  className="absolute top-1/2 -right-8 transform -translate-y-1/2 z-10"
                  width="64"
                  height="100"
                  viewBox="0 0 64 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 0 Q 32 50 5 100"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="text-gray-300"
                  />
                </svg>
              )} */}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
