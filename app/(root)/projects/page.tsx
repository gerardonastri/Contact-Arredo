"use client"

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    image: "/images/grid/img-1.avif",
    description: "A stunning contemporary villa with clean lines and natural materials"
  },
  {
    id: 2,
    title: "Urban Loft Renovation",
    image: "/images/grid/img-2.avif",
    description: "Industrial meets comfort in this transformed urban space"
  },
  {
    id: 3,
    title: "Coastal Retreat",
    image: "/images/grid/img-3.avif",
    description: "Beachfront living with a sophisticated touch"
  },
  {
    id: 4,
    title: "Mountain Lodge",
    image: "/images/grid/img-4.avif",
    description: "Rustic elegance meets modern comfort"
  },
  {
    id: 5,
    title: "Penthouse Suite",
    image: "/images/grid/img-5.jpg",
    description: "Luxury living at its finest with panoramic city views"
  },
  {
    id: 6,
    title: "Garden Villa",
    image: "/images/grid/img-6.avif",
    description: "Where indoor and outdoor living blend seamlessly"
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-black">
      <div className="max-w-[1700px] mx-auto px-4 lg:px-[3rem] py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-light mb-8"
        >
          Projects
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mb-20"
        >
          Explore our collection of meticulously crafted interior design projects. 
          Each space tells a unique story, blending innovative design with timeless elegance 
          to create environments that inspire and delight.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="group relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h2 className="text-2xl font-light mb-2">{project.title}</h2>
                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.description}
                    </p>
                  </div>
                  <div className="absolute top-6 right-6">
                    <ArrowUpRight className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}