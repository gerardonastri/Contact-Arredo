"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Layout,
  SquareIcon as Squares,
  Bath,
  Sofa,
  Droplets,
  ShowerHeadIcon as Shower,
  Palette,
  Grid,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/content/products";
// import { useSearchParams } from "next/navigation";

export const categories = [
  {
    id: "all",
    name: "All",
    icon: Layout,
  },
  {
    id: "pavimenti-e-rivestimenti",
    name: "Pavimenti e Rivestimenti",
    icon: Squares,
  },
  {
    id: "parquet",
    name: "Parquet",
    icon: Grid,
  },
  {
    id: "sanitari",
    name: "Sanitari",
    icon: Bath,
  },
  {
    id: "arredo-bagno",
    name: "Arredo bagno",
    icon: Sofa,
  },
  {
    id: "rubinetteria",
    name: "Rubinetteria",
    icon: Droplets,
  },
  {
    id: "box-doccia",
    name: "Box doccia",
    icon: Shower,
  },
  {
    id: "finiture-arredo",
    name: "Finiture D'Arredo",
    icon: Palette,
  },
];
export default function Page() {
  const [activeCategory, setActiveCategory] = useState("All");
  // const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q");
    // const query = searchParams.get("q");
    if (query && query?.length > 0) {
      setActiveCategory(query);
    }
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-[1700px] mx-auto px-4 lg:px-[3rem] py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl text-[#B8B4AC] md:text-7xl font-light mb-6">
            I Nostri Prodotti
          </h1>
          <p className="text-[#808285] max-w-2xl mx-auto">
            Scopri la nostra selezione di prodotti dei migliori marchi italiani
            e internazionali
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={
                    activeCategory === category.name ? "default" : "outline"
                  }
                  onClick={() => setActiveCategory(category.name)}
                  className="relative group px-4 py-2"
                >
                  <motion.div
                    initial={false}
                    animate={{
                      backgroundColor:
                        activeCategory === category.name
                          ? "#213D75"
                          : "transparent",
                    }}
                    className="absolute inset-0 rounded-md opacity-100"
                  />
                  <div className="relative z-10 flex items-center">
                    <Icon className="w-4 h-4 mr-2" />
                    <span>{category.name}</span>
                  </div>
                </Button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={`${product.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="relative overflow-hidden transition-all duration-500 hover:shadow-2xl border-0 bg-gradient-to-b from-white to-gray-50/50">
                <CardContent className="p-0">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {/* Updated Logo Section */}
                    <div className="relative p-4 sm:p-6 md:p-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Updated logo container with better mobile sizing */}
                      <motion.div
                        className="relative w-full h-[130px] sm:h-32 md:h-40"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={`${product.title} logo`}
                            fill
                            className="object-contain p-4 sm:p-6 md:p-8"
                            sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, 250px"
                            priority={index < 4}
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="relative px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                      <motion.div
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        className="text-center space-y-2 sm:space-y-3"
                      >
                        <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 group-hover:text-[#213D75] transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#808285] font-light">
                          {product.category}
                        </p>
                        <motion.div
                          className="flex justify-center items-center gap-2 text-xs sm:text-sm text-gray-600 group-hover:text-[#213D75] transition-colors"
                          whileHover={{ x: 5 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          }}
                        >
                          <span className="font-medium">Visita il sito</span>
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </a>
                </CardContent>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-50/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
