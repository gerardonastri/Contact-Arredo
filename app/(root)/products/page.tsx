"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/constants/products";
// import { useSearchParams } from "next/navigation";

const categories = [
  "Pavimenti e Rivestimenti",
  "Parquet",
  "Sanitari",
  "Arredo bagno",
  "Rubinetteria",
  "Box doccia",
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
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-light mb-8"
        >
          I Nostri Prodotti
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4">
            <Button
              variant={activeCategory === "All" ? "default" : "outline"}
              onClick={() => setActiveCategory("All")}
              className="text-sm"
            >
              All
            </Button>
            {categories.map((category, index) => (
              <Button
                key={`${category}-${index}`}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={`${product.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors">
                <CardContent className="p-4">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="aspect-square relative mb-4">
                      <Image
                        src={product.img}
                        alt={`${product.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-center text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      {product.category}
                    </p>
                    <div className="flex justify-center">
                      <ExternalLink className="w-5 h-5 text-gray-500" />
                    </div>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
