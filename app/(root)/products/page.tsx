"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";

const categories = [
  "Pavimenti e Rivestimenti",
  "Parquet",
  "Sanitari",
  "Arredo bagno",
  "Rubinetteria",
  "Box doccia",
];

const products = [
  {
    name: "Novabell",
    category: "Pavimenti e Rivestimenti",
    url: "https://www.novabell.it",
  },
  {
    name: "Dado",
    category: "Pavimenti e Rivestimenti",
    url: "https://www.dadoceramica.it",
  },
  {
    name: "Impronta",
    category: "Pavimenti e Rivestimenti",
    url: "https://www.impronta.it",
  },
  {
    name: "Antica Ceramica di Rubiera",
    category: "Pavimenti e Rivestimenti",
    url: "https://www.anticaceramicarubiera.it",
  },
  {
    name: "Prismacer",
    category: "Pavimenti e Rivestimenti",
    url: "https://www.prismacer.es",
  },
  {
    name: "Studio One",
    category: "Pavimenti e Rivestimenti",
    url: "https://www.studiooneceramiche.it",
  },
  {
    name: "Exagres",
    category: "Pavimenti e Rivestimenti",
    url: "https://www.exagres.es",
  },
  {
    name: "Flaviker",
    category: "Pavimenti e Rivestimenti",
    url: "https://www.flavikerpisa.it",
  },
  {
    name: "Tecnolam",
    category: "Pavimenti e Rivestimenti",
    url: "https://www.tecnolam.it",
  },
  {
    name: "Mac3",
    category: "Pavimenti e Rivestimenti",
    url: "https://www.mac3.it",
  },
  {
    name: "Keradom",
    category: "Pavimenti e Rivestimenti",
    url: "https://www.keradom.it",
  },
  {
    name: "Cerasarda",
    category: "Pavimenti e Rivestimenti",
    url: "https://www.cerasarda.it",
  },
  { name: "Tavar", category: "Parquet", url: "https://www.tavar.it" },
  {
    name: "Parquet Italia",
    category: "Parquet",
    url: "https://www.parquetitalia.it",
  },
  {
    name: "Azzurra",
    category: "Sanitari",
    url: "https://www.azzurraceramica.it",
  },
  { name: "Globo", category: "Sanitari", url: "https://www.ceramicaglobo.com" },
  { name: "Nic", category: "Sanitari", url: "https://www.nicdesign.it" },
  {
    name: "Disegno Ceramica",
    category: "Sanitari",
    url: "https://www.disegnoceramica.com",
  },
  {
    name: "Archeda",
    category: "Arredo bagno",
    url: "https://www.archedabagno.it",
  },
  { name: "Arcom", category: "Arredo bagno", url: "https://www.arcom.it" },
  {
    name: "Falegnameria Adriatica",
    category: "Arredo bagno",
    url: "https://www.falegnameriadriatica.it",
  },
  { name: "Nic", category: "Arredo bagno", url: "https://www.nicdesign.it" },
  { name: "Arblu'", category: "Arredo bagno", url: "https://www.arblu.it" },
  {
    name: "Treemme",
    category: "Rubinetteria",
    url: "https://www.treemmetap.it",
  },
  { name: "Vema", category: "Rubinetteria", url: "https://www.vemastore.com" },
  { name: "Demm", category: "Rubinetteria", url: "https://www.demm.it" },
  { name: "PDP", category: "Box doccia", url: "https://www.pdpboxdoccia.com" },
  { name: "Arblu'", category: "Box doccia", url: "https://www.arblu.it" },
  { name: "GME", category: "Box doccia", url: "https://www.gmeitaly.com" },
  {
    name: "Relax",
    category: "Box doccia",
    url: "https://www.relaxboxdoccia.it",
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const searchParams = useSearchParams();

  useEffect(() => {
   
    const query = searchParams.get("q");
    if (query && query?.length > 0) {
      setActiveCategory(query);
    }
  }, [searchParams]);

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
          Our Products
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
                        src={`/images/hero.webp`}
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
