"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Tag } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { NewsMetadata } from "@/lib/news";
import { projects } from "@/content/projects";
import { products } from "@/content/products";
import { formatDate } from "@/lib/utils";
import { getNews } from "@/lib/action";

// Mock data for demonstration
// const mockResults = {
//   news: [
//     {
//       id: 1,
//       title: "The Future of Sustainable Design",
//       date: "2024-03-15",
//       image: "/images/furniture.webp",
//     },
//     {
//       id: 2,
//       title: "Innovative Materials in Modern Architecture",
//       date: "2024-03-10",
//       image: "/images/grid/img-1.avif",
//     },
//     {
//       id: 3,
//       title: "Emerging Trends in Interior Design",
//       date: "2024-03-05",
//       image: "/images/grid/img-2.avif",
//     },
//   ],
//   projects: [
//     {
//       id: 1,
//       title: "Eco-Friendly Urban Loft",
//       location: "Milan, Italy",
//       image: "/images/grid/img-3.avif",
//     },
//     {
//       id: 2,
//       title: "Minimalist Coastal Retreat",
//       location: "Amalfi Coast, Italy",
//       image: "/images/furniture.webp",
//     },
//     {
//       id: 3,
//       title: "Rustic Mountain Chalet",
//       location: "Alps, Switzerland",
//       image: "/images/grid/img-4.avif",
//     },
//   ],
//   products: [
//     {
//       id: 1,
//       title: "Ergonomic Lounge Chair",
//       price: "€1,299",
//       image: "/images/furniture.webp",
//     },
//     {
//       id: 2,
//       title: "Modular Shelving System",
//       price: "€899",
//       image: "/images/grid/img-5.jpg",
//     },
//     {
//       id: 3,
//       title: "Smart Home Lighting Kit",
//       price: "€249",
//       image: "/images/grid/img-6.avif",
//     },
//   ],
// };

type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
};

type Product = {
  title: string;
  category: string;
  url: string;
  image: string;
};

type SearchResults = {
  news: NewsMetadata[];
  projects: Project[];
  products: Product[];
};

export default function SearchResults() {
  const [activeTab, setActiveTab] = useState("all");

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");

  //results
  const [results, setResults] = useState<SearchResults | null>(null);
  useEffect(() => {
    if (searchQuery) {
      const getResults = async () => {
        const news = await getNews(searchQuery);
        const projectsRes = projects.filter((project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const productsRes = products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults({ news, projects: projectsRes, products: productsRes });
      };
      getResults();
    }
  }, [activeTab]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Search Results for &quot;{searchQuery}&quot;
      </h1>

      {results && (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(results).flatMap(([category, items]) =>
                items.map((item, index) => (
                  <ResultCard
                    key={`${category}-${index}`}
                    item={item}
                    category={category}
                    index={index}
                  />
                ))
              )}
            </div>
          </TabsContent>
          {Object.entries(results).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, index) => (
                  <ResultCard
                    key={index}
                    item={item}
                    category={category}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}

      {/* <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination> */}
    </div>
  );
}

function ResultCard({
  item,
  category,
  index,
}: {
  item: NewsMetadata | Project | Product;
  category: string;
  index: number;
}) {
  const MotionCard = motion(Card);

  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="overflow-hidden group cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={item.image || ""}
          alt={item.title || ""}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
          <ArrowRight className="text-white h-10 w-10" />
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
          {item.title}
        </h3>
        <div className="flex items-center text-gray-600 mb-2">
          {category === "news" && (
            <>
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">
                {(item as NewsMetadata).publishedAt &&
                  formatDate((item as NewsMetadata).publishedAt ?? "")}
              </span>
            </>
          )}
          {category === "projects" && (
            <>
              <MapPin className="h-4 w-4 mr-2" />
              {/* <span className="text-sm">{(item as Project).location}</span> */}
            </>
          )}
          {category === "products" && (
            <>
              <Tag className="h-4 w-4 mr-2" />
              <span className="text-sm font-bold">
                {/* {(item as Product).price} */}
              </span>
            </>
          )}
        </div>
      </CardContent>
      <CardFooter className="px-6 py-4 bg-gray-50">
        <Link
          href={
            category === "products"
              ? (item as Product).url
              : category === "news"
              ? `/${category}/${(item as NewsMetadata).slug}`
              : `/${category}/${(item as Project).id}`
          }
          className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
        >
          View {category.slice(0, -1)} details
        </Link>
      </CardFooter>
    </MotionCard>
  );
}
