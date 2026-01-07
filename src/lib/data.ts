import { Category, Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Rocket, Blocks, Puzzle, Heart, Car, Bot } from 'lucide-react';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    return { id: 'not-found', url: 'https://placehold.co/600x400', hint: 'placeholder' };
  }
  return { id: image.id, url: image.imageUrl, hint: image.imageHint };
};

export const categories: Category[] = [
  { id: 'cat1', name: 'Action Figures', slug: 'action-figures', Icon: Rocket, image: findImage('category-action-figures') },
  { id: 'cat2', name: 'Building Blocks', slug: 'building-blocks', Icon: Blocks, image: findImage('category-building-blocks') },
  { id: 'cat3', name: 'Puzzles', slug: 'puzzles', Icon: Puzzle, image: findImage('category-puzzles') },
  { id: 'cat4', name: 'Plush Toys', slug: 'plush-toys', Icon: Heart, image: findImage('category-plush-toys') },
  { id: 'cat5', name: 'Vehicles', slug: 'vehicles', Icon: Car, image: findImage('category-vehicles') },
  { id: 'cat6', name: 'Educational', slug: 'educational', Icon: Bot, image: findImage('category-educational') },
];

export const products: Product[] = [
  { 
    id: 'prod1', 
    name: 'Space Ranger', 
    price: 29.99, 
    category: 'action-figures', 
    image: findImage('product-space-ranger'),
    description: "Buzz-inspired hero with lights and sounds. Ready for intergalactic adventure!"
  },
  { 
    id: 'prod2', 
    name: 'Jungle Explorer', 
    price: 24.99, 
    category: 'action-figures', 
    image: findImage('product-jungle-explorer'),
    description: "Brave adventurer with a map and compass. Discover hidden treasures."
  },
  { 
    id: 'prod3', 
    name: 'Ninja Warrior', 
    price: 22.99, 
    category: 'action-figures', 
    image: findImage('product-ninja-warrior'),
    description: "Stealthy ninja with katanas and throwing stars. Master of the shadows."
  },
  { 
    id: 'prod4', 
    name: 'Classic Castle Set', 
    price: 89.99, 
    category: 'building-blocks', 
    image: findImage('product-classic-castle-set'),
    description: "Build a magnificent medieval castle with over 1500 pieces."
  },
  { 
    id: 'prod5', 
    name: 'City Creator Box', 
    price: 49.99, 
    category: 'building-blocks', 
    image: findImage('product-city-creator-box'),
    description: "Endless possibilities with 1000 colorful blocks to build your own city."
  },
  { 
    id: 'prod6', 
    name: 'Animal Kingdom Puzzle', 
    price: 19.99, 
    category: 'puzzles', 
    image: findImage('product-animal-kingdom-puzzle'),
    description: "A beautiful 1000-piece puzzle featuring animals from around the globe."
  },
  { 
    id: 'prod7', 
    name: 'World Map Puzzle', 
    price: 15.99, 
    category: 'puzzles', 
    image: findImage('product-world-map-puzzle'),
    description: "Learn geography while having fun with this giant 300-piece floor puzzle."
  },
  { 
    id: 'prod8', 
    name: 'Cuddly Bear', 
    price: 39.99, 
    category: 'plush-toys', 
    image: findImage('product-cuddly-bear'),
    description: "The perfect huggable companion. Made with super-soft, eco-friendly materials."
  },
  { 
    id: 'prod9', 
    name: 'Fluffy Bunny', 
    price: 18.99, 
    category: 'plush-toys', 
    image: findImage('product-fluffy-bunny'),
    description: "A cute and fluffy bunny with long ears, ready for cuddles."
  },
  { 
    id: 'prod10', 
    name: 'Sleek Race Car', 
    price: 14.99, 
    category: 'vehicles', 
    image: findImage('product-race-car'),
    description: "A die-cast model of a super-fast sports car. Perfect for racing."
  },
  { 
    id: 'prod11', 
    name: 'Construction Truck', 
    price: 21.99, 
    category: 'vehicles', 
    image: findImage('product-construction-truck'),
    description: "A sturdy dump truck that can handle any job in the sandbox."
  },
  { 
    id: 'prod12', 
    name: 'Alphabet Blocks', 
    price: 25.99, 
    category: 'educational', 
    image: findImage('product-alphabet-blocks'),
    description: "Classic wooden blocks to help your little one learn letters and numbers."
  },
  { 
    id: 'prod13', 
    name: 'My First Science Kit', 
    price: 34.99, 
    category: 'educational', 
    image: findImage('product-science-kit'),
    description: "A safe and fun introduction to chemistry with 20 easy experiments."
  },
];
