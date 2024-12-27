"use client";
import React, { useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
// import { Masonry } from "react-plock";

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
          src={item.img}
          alt="grid col"
          //   fill
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
  const items = [
    {
      img: "/categories/cat-1.png",
      title: "Pavimenti e Rivestimenti",
    },
    {
      img: "/categories/cat-2.jpg",
      title: "Parquet",
    },
    {
      img: "/categories/cat-3.jpg",
      title: "Sanitari",
    },
    {
      img: "/categories/cat-5.jpg",
      title: "Rubinetteria",
    },
    {
      img: "/categories/cat-4.jpg",
      title: "Arredo bagno",
    },

    {
      img: "/categories/cat-6.jpg",
      title: "Box doccia",
    },
  ];
  const breakpointColumnsObj = {
    default: 3, // Numero di colonne di default
    1100: 3, // 3 colonne su schermi più piccoli
    900: 2, // 2 colonne su schermi medi
    600: 1, // 1 colonna su schermi piccoli
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="mt-[50px] lg:mt-[80px] max-w-[1700px] px-4 md:px-[3rem] mx-auto"
    >
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </Masonry>
    </motion.div>
  );
};

export default CollectionGrid;
