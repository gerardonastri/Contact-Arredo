import HeroSlider from "@/components/HeroSlider";
import { type Slide } from "@/types/slider";
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
    <div>
      <HeroSlider slides={slides} />
    </div>
  );
};

export default page;
