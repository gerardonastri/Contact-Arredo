"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Definizione dell'interfaccia per i progetti
interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
}

const ProjectsPage = (): JSX.Element => {
  // Array vuoto di progetti con tipo specificato
  const projects: Project[] = [];

  return (
    <div className="min-h-screen text-black">
      <div className="max-w-[1700px] mx-auto px-4 lg:px-[3rem] py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-light mb-8 text-[#B8B4AC]"
        >
          Progetti
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#808285] max-w-2xl mb-20"
        >
          Esplora la nostra collezione di progetti di interior design realizzati
          con cura. Ogni spazio racconta una storia unica, combinando design
          innovativo ed eleganza senza tempo per creare ambienti che ispirano e
          deliziano.
        </motion.p>

        {projects.length > 0 ? (
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
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <h2 className="text-2xl font-light mb-2">
                        {project.title}
                      </h2>
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
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <div className="max-w-2xl w-full p-10 border border-[#B8B4AC] rounded-lg text-center">
              <h2 className="text-4xl font-light mb-6 text-[#B8B4AC]">
                Work in Progress
              </h2>
              <p className="text-[#808285] mb-8">
                I nostri progetti sono in fase di sviluppo. Presto potrai
                esplorare la nostra collezione di lavori di interior design
                realizzati con cura e passione.
              </p>
              <Link
                href="/"
                className="inline-flex items-center text-[#B8B4AC] gap-2"
              >
                <span className="text-lg">Torna a trovarci presto</span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
