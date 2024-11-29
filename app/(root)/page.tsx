import AnimatedStats from "@/components/AnimatedStats";
import CollectionGrid from "@/components/CollectionGrid";
import FurnitureGallery from "@/components/Furniture";
import HeroSlider from "@/components/HeroSlider";
import { Button } from "@/components/ui/button";
import { type Slide } from "@/types/slider";
import { MoveRight } from "lucide-react";
import React from "react";

const slides: Slide[] = [
  {
    id: 1,
    title: "Sempre ON per te",
    description: "Design italiano di lusso per la tua casa",
    image: "/images/hero.webp",
  },
  {
    id: 2,
    title: "Eleganza Senza Tempo",
    description: "Arredi esclusivi per spazi straordinari",
    image: "/images/hero.webp",
  },
  {
    id: 3,
    title: "Qualità Artigianale",
    description: "Tradizione e innovazione si incontrano",
    image: "/images/hero.webp",
  },
];

const page = () => {
  return (
    <div className="pt-[100px]">
      <HeroSlider slides={slides} />
      <FurnitureGallery />
      <AnimatedStats />
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between w-full px-[3rem] lg:max-w-[1700px] mx-auto mt-[120px]">
        <h2 className="font-bold text-3xl md:text-5xl">
          Explore Our Proudly <br />
          Collection
        </h2>
        <div>
          <Button>
            View More <MoveRight className="text-white" />
          </Button>
        </div>
      </div>
      <CollectionGrid />
    </div>
  );
};

export default page;
