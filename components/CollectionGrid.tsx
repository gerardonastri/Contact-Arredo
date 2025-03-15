"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface CardProps {
  item: {
    img: string;
    title: string;
  };
}

const Card = ({ item }: CardProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="relative w-full mb-4 h-auto max-h-[550px] rounded-3xl overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      <Link href={`/products?q=${item.title}`}>
        <img
          src={item.img || "/placeholder.svg"}
          alt={item.title}
          className="object-cover w-full h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60" />
        <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
          <h2 className="text-2xl font-bold text-white">{item.title}</h2>
          <motion.div
            className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

const CollectionGrid = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  // Define items for each column explicitly
  const leftColumnItems = [
    {
      img: "/categories/pavimenti.webp",
      title: "Pavimenti e Rivestimenti",
    },
    {
      img: "/categories/sanitari.webp",
      title: "Sanitari",
    },
  ];

  const middleColumnItems = [
    {
      img: "/categories/Parquet.webp",
      title: "Parquet",
    },
    {
      img: "/categories/rubinetteria.webp",
      title: "Rubinetteria",
    },
  ];

  const rightColumnItems = [
    {
      img: "/categories/furniture.webp",
      title: "Finiture D'Arredo",
    },
    {
      img: "/categories/bagno.webp",
      title: "Arredo bagno",
    },
    {
      img: "/categories/doccia.webp",
      title: "Box doccia",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="mt-[50px] lg:mt-[80px] max-w-[1700px] px-4 md:px-[3rem] mx-auto"
    >
      {/* Custom grid layout for desktop */}
      <div className="hidden md:grid md:grid-cols-3 gap-4">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          {leftColumnItems.map((item, index) => (
            <Card item={item} key={`left-${index}`} />
          ))}
        </div>

        {/* Middle column */}
        <div className="flex flex-col gap-4">
          {middleColumnItems.map((item, index) => (
            <Card item={item} key={`middle-${index}`} />
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          {rightColumnItems.map((item, index) => (
            <Card item={item} key={`right-${index}`} />
          ))}
        </div>
      </div>

      {/* Mobile layout - single column */}
      <div className="md:hidden flex flex-col gap-4">
        {[...leftColumnItems, ...middleColumnItems, ...rightColumnItems].map(
          (item, index) => (
            <Card item={item} key={`mobile-${index}`} />
          )
        )}
      </div>
    </motion.div>
  );
};

export default CollectionGrid;
