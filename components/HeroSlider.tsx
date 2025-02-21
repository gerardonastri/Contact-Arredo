"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSliderProps {
  slides: { image: string; title: string }[];
  autoPlayInterval?: number;
}

const AnimatedHeroSlider = ({
  slides,
  autoPlayInterval = 8000,
}: HeroSliderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <HeroSlider slides={slides} autoPlayInterval={autoPlayInterval} />
    </motion.div>
  );
};

function HeroSlider({ slides, autoPlayInterval = 8000 }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval]);

  useEffect(() => {
    if (currentIndex === 0 && videoRef.current) {
      videoRef.current.play();
    }
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="max-w-[1700px] mx-auto h-[80vh] lg:px-[3rem] lg:rounded-[25px] relative">
      <div className="relative w-full overflow-hidden h-[80vh] lg:rounded-[25px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 100, damping: 20 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0"
          >
            {currentIndex === 0 ? (
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover lg:rounded-[25px]"
                src="/video.mp4"
                loop
                muted
                playsInline
              >
                <source src="/path-to-your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center lg:rounded-[25px]"
                style={{
                  backgroundImage: `url(${slides[currentIndex].image})`,
                }}
              />
            )}
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-glimerBold text-white mb-2 sm:mb-4"
                >
                  {slides[currentIndex].title}
                </motion.h1>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handlePrevious}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1 sm:p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 sm:p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>

        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimatedHeroSlider;
