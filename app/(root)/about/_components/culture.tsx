"use client";

import { Coffee, Users2, HeartHandshake, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Consulenza",
    description:
      "Ascoltiamo le tue esigenze per creare soluzioni su misura, guidandoti in ogni fase del progetto",
    icon: Coffee,
    delay: 0.2,
  },
  {
    title: "Collaborazione",
    description:
      "Lavoriamo fianco a fianco con i nostri clienti e partner per trasformare idee in realtà.",
    icon: HeartHandshake,
    delay: 0.4,
  },
  {
    title: "Formazione",
    description:
      "Investiamo nel nostro team per garantire competenze sempre aggiornate e innovative.",
    icon: GraduationCap,
    delay: 0.6,
  },
  {
    title: "Supporto",
    description:
      "Offriamo assistenza continua, anche dopo la realizzazione, per garantirti un'esperienza senza pensieri.",
    icon: Users2,
    delay: 0.8,
  },
];

export default function Culture() {
  return (
    <div className="bg-[#213D75] lg:bg-transparent w-full mx-auto p-6 z-[2]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#E4EDFF] text-4xl md:text-5xl lg:text-6xl font-light tracking-tight"
              >
                La nostra cultura
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-200 md:text-2xl max-w-2xl"
              >
                Crediamo che il nostro lavoro non si limiti alla creazione di
                mobili e arredi, ma che sia un&apos;opportunità per costruire
                relazioni solide e durature con i nostri clienti e
                collaboratori.
              </motion.p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-8 sm:grid-cols-2 py-10">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: feature.delay }}
                  className="relative"
                >
                  <div className="absolute -left-2 -top-2 w-12 h-12 bg-[#4A69A6] rounded-2xl -z-10" />
                  <div className="relative space-y-3">
                    <div className="flex items-center space-x-3">
                      <feature.icon className="w-6 h-6 text-[#E4EDFF]" />
                      <h3 className="text-xl text-[#E4EDFF] font-medium">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-white/80 leading-relaxed py-2">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:order-last"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/team.jpeg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -right-4 -bottom-4 w-64 h-64 bg-[#E4EDFF] rounded-2xl -z-10" />
            <div className="absolute -left-4 -top-4 w-32 h-32 bg-[#E4EDFF] rounded-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
