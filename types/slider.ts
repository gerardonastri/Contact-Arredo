export interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface HeroSliderProps {
  slides: Slide[];
  autoPlayInterval?: number;
}
