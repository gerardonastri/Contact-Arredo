"use client";

// import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { ArrowUpRight } from "lucide-react";
import { type GalleryItem } from "@/types/gallery";
import Image from "next/image";

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Modern Minimalist",
    description: "Experience the perfect blend of comfort and style",
    tag: "Georgeus Interior",
    image: "/images/furniture.webp",
  },
  {
    id: 2,
    title: "Into a gallery of elegance",
    description: "Aesthetic furniture where every piece tells a story of style",
    tag: "Aesthetic",
    image: "/images/furniture.webp",
  },
  {
    id: 3,
    title: "Indulge in the artistry",
    description: "of everyday living",
    tag: "Best Furniture",
    image: "/images/furniture.webp",
  },
];

export default function FurnitureGallery() {
  return (
    <div className="w-full max-w-[1700px] lg:px-[3rem] mt-[100px] mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[70vh]">
        {/* Main Feature */}
        <div className="lg:col-span-2 relative h-full">
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
        </div>

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
    </div>
  );
}
