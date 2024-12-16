"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import ReviewForm from "@/components/ReviewForm";

// Mock data for the single project
const project = {
  id: 1,
  title: "Modern Minimalist Villa",
  description:
    "This stunning contemporary villa showcases the perfect blend of minimalist design and luxurious living. Our team transformed a dated structure into a sleek, modern home that embraces clean lines, natural materials, and an open concept layout.",
  images: {
    before: "/images/grid/img-1.avif",
    during: "/images/grid/img-2.avif",
    after: "/images/grid/img-3.avif",
  },
  details: [
    "Complete structural renovation",
    "Custom-designed furniture and fixtures",
    "State-of-the-art home automation system",
    "Sustainable materials and energy-efficient solutions",
  ],
  reviews: [
    {
      id: 1,
      author: "Emma S.",
      rating: 5,
      text: "Absolutely blown away by the transformation! The attention to detail is impeccable.",
    },
    {
      id: 2,
      author: "Michael L.",
      rating: 5,
      text: "The team's vision and execution were flawless. Our dream home became a reality.",
    },
  ],
};

export default function SingleProjectPage() {
  return (
    <div className="min-h-screen text-black">
      <div className="max-w-[1700px] mx-auto px-4 lg:px-[3rem] pt-20">
        <Link
          href="/projects"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-light mb-8"
        >
          {project.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {Object.entries(project.images).map(([stage, src]) => (
            <div key={stage} className="relative aspect-[4/3]">
              <Image
                src={src}
                alt={`${stage} stage`}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-3 py-1 rounded">
                <span className="text-sm font-light capitalize text-white">
                  {stage}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light mb-4">Project Overview</h2>
          <p className="text-gray-400 mb-8">{project.description}</p>
          <h3 className="text-2xl font-light mb-4">Key Features</h3>
          <ul className="list-disc list-inside text-gray-400">
            {project.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light mb-8">Client Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.reviews.map((review) => (
              <div key={review.id} className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">&quot;{review.text}&quot;</p>
                <p className="text-gray-500">- {review.author}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ReviewForm />
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/projects">
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-black transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
        </motion.div> */}
      </div>
    </div>
  );
}
