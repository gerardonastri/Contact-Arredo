"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { id: "special-price", label: "Special Price" },
  { id: "new-product", label: "New Product" },
  { id: "best-sellers", label: "Best Sellers" },
] as const;

const products = [
  {
    id: 1,
    name: "Papillon Wally Light",
    price: 40.0,
    colors: 6,
    category: "Best Sale",
    image: "/images/product.webp",
  },
  {
    id: 2,
    name: "Pilke Pendant Lamp",
    price: 34.0,
    colors: 3,
    category: "Top Rated",
    image: "/images/product.webp",
  },
  {
    id: 3,
    name: "Low Oak Stool",
    price: 30.0,
    colors: 1,
    category: "Best Price",
    image: "/images/product.webp",
  },
  {
    id: 4,
    name: "Orient Pendant Lamp",
    price: 52.0,
    colors: 1,
    category: "Best Price",
    image: "/images/product.webp",
  },
  {
    id: 5,
    name: "Grey Sofa",
    price: 76.0,
    colors: 1,
    category: "Best Price",
    image: "/images/product.webp",
  },
  {
    id: 6,
    name: "Leather Chair",
    price: 42.0,
    colors: 1,
    category: "Best Price",
    image: "/images/product.webp",
  },
];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("best-sellers");

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Category Filters */}
      <div className="flex gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            size="lg"
            className={cn(
              "rounded-full",
              activeCategory === category.id &&
                "bg-black text-white hover:bg-black/90"
            )}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Product Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-[#F2F2F2] rounded-3xl p-6 cursor-pointer relative group"
          >
            <div className="absolute top-6 left-0 px-4 w-full z-10 flex items-center justify-between">
              <span className="text-sm bg-white px-3 py-1 rounded-full">
                {product.category}
              </span>
              <span className="text-sm text-[#353535]">
                {product.colors} {product.colors === 1 ? "Color" : "Colors"}
              </span>
            </div>

            <div className="relative aspect-square mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            </div>

            {/* <Button
              size="icon"
              variant="outline"
              className="absolute bottom-6 right-6 rounded-full "
            >
              <ShoppingBag className="h-6 w-6 text-xl" />
              <span className="sr-only">Add to cart</span>
            </Button> */}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
