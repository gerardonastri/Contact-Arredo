"use client";

import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { ArrowUpRight } from "lucide-react";
import { type GalleryItem } from "@/types/gallery";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Design Italiano d'Eccellenza",
    description:
      "Soluzioni d'arredo su misura per ambienti eleganti e funzionali",
    tag: "Georgeus Interior",
    image: "/hero/img-2.webp",
  },
  {
    id: 2,
    title: "Estetica",
    description:
      "Trasformiamo ogni spazio in un'opera d'arte con mobili raffinati ed esclusivi",
    tag: "Aesthetic",
    image: "/hero/img-5.webp",
  },
  {
    id: 3,
    title: "Miglior Arredamento",
    description: "Arredi su misura che sposano il comfort con la bellezza.",
    tag: "Best Furniture",
    image: "/hero/img-6.webp",
  },
];

export default function FurnitureGallery() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full max-w-[1700px] lg:px-[3rem] mt-[100px] mx-auto p-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[85vh] md:h-[70vh]">
        {/* Main Feature */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 relative h-full"
        >
          <Card className="overflow-hidden rounded-3xl h-full">
            <div className="relative w-full h-full">
              <Image
                src={galleryItems[0].image}
                alt={galleryItems[0].title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60" />
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1 bg-white text-black text-sm font-medium rounded-full">
                  {galleryItems[0].tag}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-4xl font-glimerBold text-white mb-2">
                  {galleryItems[0].title}
                </h1>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Side Cards */}
        <div className="flex flex-col gap-4 h-full">
          {galleryItems.slice(1).map((item) => (
            <Card key={item.id} className="overflow-hidden rounded-3xl flex-1">
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white text-black text-xs font-medium rounded-full">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-xl font-glimerBold text-white mb-1">
                    {item.title}
                  </h2>
                  <p className="text-white/90 text-sm">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
