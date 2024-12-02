"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "How to buy a house: steps to buying a house for the first time",
    description:
      "The steps to buying a house can seem complicated, especially for first-time homebuyers with no prior experience.",
    image: "/images/grid/img-1.avif",
    category: "Buy",
    date: "6 May 2020",
    slug: "#",
  },
  {
    title:
      "Never go out of style with these 5 bathroom design ideas where modern meets classic",
    description:
      "Bathrooms, once dominated by neutral hues and farmhouse designs, are now embracing modern traditional design",
    image: "/images/grid/img-2.avif",
    category: "Home Improvement",
    date: "1 May 2020",
    slug: "#",
  },
  {
    title: "7 affordable countries where americans can easily buy real estate",
    description:
      "Housing costs remain high and a politically fraught election is on the horizon, prompting many Americans to consider a move overseas.",
    image: "/images/grid/img-3.avif",
    category: "Buy",
    slug: "#",
  },
  {
    title:
      "Bulletproof Ohio Home Of Reclusive Millionaire Enters Contract After Multiple Offers",
    description:
      "An unusual, safety-centric residence in Ohio has rapidly found a buyer and is now in contract following multiple offers, The Post has learned",
    image: "/images/grid/img-4.avif",
    category: "Unique Homes",
    slug: "#",
  },
  {
    title: "7 affordable countries where americans can easily buy real estate",
    description:
      "Housing costs remain high and a politically fraught election is on the horizon, prompting many Americans to consider a move overseas.",
    image: "/images/grid/img-3.avif",
    category: "Buy",
    slug: "#",
  },
  {
    title:
      "Bulletproof Ohio Home Of Reclusive Millionaire Enters Contract After Multiple Offers",
    description:
      "An unusual, safety-centric residence in Ohio has rapidly found a buyer and is now in contract following multiple offers, The Post has learned",
    image: "/images/grid/img-4.avif",
    category: "Unique Homes",
    slug: "#",
  },
];

export default function NewsGrid() {
  return (
    <div className="max-w-[1700px] mx-auto px-[3rem] py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group"
          >
            <Link href={article.slug} className="space-y-4 block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm font-medium text-white bg-emerald-600 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold leading-tight text-gray-900 group-hover:text-gray-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {article.description}
                </p>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                {article.date && <span>{article.date}</span>}
                <span className="flex items-center gap-2 font-medium">
                  View Article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
