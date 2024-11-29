"use client";
import React from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
// import { Masonry } from "react-plock";

const Card = ({ item }: { item: string }) => (
  <motion.div
    className="relative w-full mb-4 h-auto max-h-[550px] rounded-3xl overflow-hidden group cursor-pointer"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <img
      src={item}
      alt="grid col"
      //   fill
      className="object-cover w-full h-auto"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60" />
    <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
      <h2 className="text-2xl font-bold text-white">Mondrian</h2>
      <motion.div
        className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowUpRight className="w-5 h-5" />
      </motion.div>
    </div>
  </motion.div>
);

const CollectionGrid = () => {
  const items = [
    "/images/grid/img-1.avif",
    "/images/grid/img-2.avif",
    "/images/grid/img-3.avif",
    "/images/grid/img-4.avif",
    "/images/grid/img-5.jpg",
    "/images/grid/img-6.avif",
  ];
  const breakpointColumnsObj = {
    default: 3, // Numero di colonne di default
    1100: 3, // 3 colonne su schermi più piccoli
    900: 2, // 2 colonne su schermi medi
    600: 1, // 1 colonna su schermi piccoli
  };

  return (
    <div className="mt-[80px] max-w-[1700px] px-[1rem] mx-auto">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </Masonry>
    </div>
  );
};

export default CollectionGrid;
