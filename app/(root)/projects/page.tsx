"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: 1,
    title: "Modern Living Room Makeover",
    description:
      "A complete transformation of a dated living room into a sleek, modern space. We used a minimalist approach with a neutral color palette, incorporating natural materials like wood and stone for warmth and texture.",
    before: "/images/hero.webp",
    during: "/images/news-hero.jpg",
    after: "/images/hero.webp",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    reviews: [
      {
        author: "John D.",
        rating: 5,
        text: "Absolutely stunning transformation! The team was professional and the result exceeded our expectations.",
      },
      {
        author: "Sarah M.",
        rating: 4,
        text: "Great work on our living room. The attention to detail was impressive.",
      },
    ],
  },
  // Add more projects here...
];

export default function ProjectsPage() {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const nextProject = () =>
    setCurrentProject((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  const nextImage = () =>
    setCurrentImage(
      (prev) => (prev + 1) % projects[currentProject].gallery.length
    );
  const prevImage = () =>
    setCurrentImage(
      (prev) =>
        (prev - 1 + projects[currentProject].gallery.length) %
        projects[currentProject].gallery.length
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>

      <div className="mb-16">
        <Tabs defaultValue="before" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="before">Before</TabsTrigger>
            <TabsTrigger value="during">During</TabsTrigger>
            <TabsTrigger value="after">After</TabsTrigger>
          </TabsList>
          <TabsContent value="before">
            <Image
              src={projects[currentProject].before}
              alt="Before renovation"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </TabsContent>
          <TabsContent value="during">
            <Image
              src={projects[currentProject].during}
              alt="During renovation"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </TabsContent>
          <TabsContent value="after">
            <Image
              src={projects[currentProject].after}
              alt="After renovation"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </TabsContent>
        </Tabs>
      </div>

      <motion.div
        key={currentProject}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-4">
          {projects[currentProject].title}
        </h2>
        <p className="text-gray-600 mb-4">
          {projects[currentProject].description}
        </p>
      </motion.div>

      <div className="mb-16">
        <h3 className="text-xl font-semibold mb-4">Gallery</h3>
        <div className="relative">
          <Image
            src={projects[currentProject].gallery[currentImage]}
            alt={`Gallery image ${currentImage + 1}`}
            width={400}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 -translate-y-1/2"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 -translate-y-1/2"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-xl font-semibold mb-4">Reviews</h3>
        <div className="space-y-4">
          {projects[currentProject].reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <p className="font-semibold mr-2">{review.author}</p>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <Button onClick={prevProject}>Previous Project</Button>
        <Button onClick={nextProject}>Next Project</Button>
      </div>
    </div>
  );
}
