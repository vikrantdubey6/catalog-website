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
  // Action Figures
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
    id: 'prod104',
    name: 'Superhero Dynamo',
    price: 27.99,
    category: 'action-figures',
    image: findImage('product-superhero-dynamo'),
    description: 'A mighty hero with a flowing cape and super strength.'
  },
  {
    id: 'prod105',
    name: 'Galactic Guardian',
    price: 32.99,
    category: 'action-figures',
    image: findImage('product-galactic-guardian'),
    description: 'Protector of the cosmos with a laser shield and armor.'
  },
  {
    id: 'prod106',
    name: 'Pirate Captain',
    price: 26.99,
    category: 'action-figures',
    image: findImage('product-pirate-captain'),
    description: 'Sail the seven seas with this swashbuckling pirate figure.'
  },
  {
    id: 'prod107',
    name: 'Knight of Valor',
    price: 28.99,
    category: 'action-figures',
    image: findImage('product-knight-of-valor'),
    description: 'A noble knight in shining armor, ready to defend the kingdom.'
  },
  {
    id: 'prod108',
    name: 'Dinosaur Rex',
    price: 34.99,
    category: 'action-figures',
    image: findImage('product-dinosaur-rex'),
    description: 'A fearsome and realistic T-Rex figure with roaring sound.'
  },
  {
    id: 'prod109',
    name: 'Wizard of Light',
    price: 29.99,
    category: 'action-figures',
    image: findImage('product-wizard-of-light'),
    description: 'A wise wizard who wields a powerful magic staff.'
  },
  {
    id: 'prod110',
    name: 'Robot Commando',
    price: 31.99,
    category: 'action-figures',
    image: findImage('product-robot-commando'),
    description: 'A futuristic robot soldier with advanced weaponry.'
  },

  // Building Blocks
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
    id: 'prod203',
    name: 'Space Shuttle Expedition',
    price: 79.99,
    category: 'building-blocks',
    image: findImage('product-space-shuttle-expedition'),
    description: 'Build a detailed space shuttle and launchpad for cosmic missions.'
  },
  {
    id: 'prod204',
    name: 'Botanic Garden Kit',
    price: 69.99,
    category: 'building-blocks',
    image: findImage('product-botanic-garden-kit'),
    description: 'Create a beautiful collection of brick-built flowers and plants.'
  },
  {
    id: 'prod205',
    name: 'Vehicle Squad Pack',
    price: 59.99,
    category: 'building-blocks',
    image: findImage('product-vehicle-squad-pack'),
    description: 'Construct a fleet of vehicles including a car, truck, and airplane.'
  },
  {
    id: 'prod206',
    name: 'Robot Factory Set',
    price: 54.99,
    category: 'building-blocks',
    image: findImage('product-robot-factory-set'),
    description: 'Design and assemble your own team of futuristic robots.'
  },
  {
    id: 'prod207',
    name: 'Dinosaur Fossil Set',
    price: 44.99,
    category: 'building-blocks',
    image: findImage('product-dinosaur-fossil-set'),
    description: 'Unearth and assemble the skeletons of prehistoric giants.'
  },
  {
    id: 'prod208',
    name: 'Architecture Studio',
    price: 99.99,
    category: 'building-blocks',
    image: findImage('product-architecture-studio'),
    description: 'Recreate famous architectural marvels from around the world.'
  },
  {
    id: 'prod209',
    name: 'Train Station Set',
    price: 129.99,
    category: 'building-blocks',
    image: findImage('product-train-station-set'),
    description: 'Build a classic train station with tracks, a locomotive, and cars.'
  },
  {
    id: 'prod210',
    name: 'Treehouse Adventure',
    price: 74.99,
    category: 'building-blocks',
    image: findImage('product-treehouse-adventure'),
    description: 'A multi-level treehouse complete with minifigures and fun accessories.'
  },

  // Puzzles
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
    id: 'prod303',
    name: 'Starry Night Puzzle',
    price: 24.99,
    category: 'puzzles',
    image: findImage('product-starry-night-puzzle'),
    description: "Recreate Van Gogh's masterpiece with this 1500-piece puzzle."
  },
  {
    id: 'prod304',
    name: '3D Crystal Puzzle',
    price: 21.99,
    category: 'puzzles',
    image: findImage('product-3d-crystal-puzzle'),
    description: 'A challenging puzzle that assembles into a stunning 3D crystal figure.'
  },
  {
    id: 'prod305',
    name: 'Wooden Brain Teaser',
    price: 18.99,
    category: 'puzzles',
    image: findImage('product-wooden-brain-teaser'),
    description: 'A set of interlocking wooden puzzles to test your logic skills.'
  },
  {
    id: 'prod306',
    name: 'Mystery Box Puzzle',
    price: 29.99,
    category: 'puzzles',
    image: findImage('product-mystery-box-puzzle'),
    description: 'Solve a series of clues and puzzles to unlock the mystery box.'
  },
  {
    id: 'prod307',
    name: 'Underwater World Puzzle',
    price: 17.99,
    category: 'puzzles',
    image: findImage('product-underwater-world-puzzle'),
    description: 'A vibrant 500-piece puzzle showcasing colorful marine life.'
  },
  {
    id: 'prod308',
    name: 'Dinosaur Skeleton Puzzle',
    price: 23.99,
    category: 'puzzles',
    image: findImage('product-dinosaur-skeleton-puzzle'),
    description: 'A 3D wooden puzzle that constructs a detailed dinosaur skeleton.'
  },
  {
    id: 'prod309',
    name: 'Sudoku Cube Puzzle',
    price: 14.99,
    category: 'puzzles',
    image: findImage('product-sudoku-cube-puzzle'),
    description: 'A 3D twist on the classic Sudoku, a brain-bending cube challenge.'
  },
  {
    id: 'prod310',
    name: 'Custom Photo Puzzle',
    price: 39.99,
    category: 'puzzles',
    image: findImage('product-custom-photo-puzzle'),
    description: 'Turn a cherished memory into a fun, personalized 1000-piece puzzle.'
  },

  // Plush Toys
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
    id: 'prod403',
    name: 'Sleepy Sloth',
    price: 22.99,
    category: 'plush-toys',
    image: findImage('product-sleepy-sloth'),
    description: 'This adorable sloth loves to hang around and give slow, warm hugs.'
  },
  {
    id: 'prod404',
    name: 'Magical Unicorn',
    price: 27.99,
    category: 'plush-toys',
    image: findImage('product-magical-unicorn'),
    description: 'A mystical unicorn with a sparkly horn and rainbow-colored mane.'
  },
  {
    id: 'prod405',
    name: 'Friendly Dragon',
    price: 34.99,
    category: 'plush-toys',
    image: findImage('product-friendly-dragon'),
    description: 'A not-so-fierce dragon with soft wings and a charming smile.'
  },
  {
    id: 'prod406',
    name: 'Cheeky Monkey',
    price: 19.99,
    category: 'plush-toys',
    image: findImage('product-cheeky-monkey'),
    description: 'A playful monkey plush with a long, mischievous tail.'
  },
  {
    id: 'prod407',
    name: 'Penguin Pal',
    price: 21.99,
    category: 'plush-toys',
    image: findImage('product-penguin-pal'),
    description: 'A dapper penguin plush, always dressed to impress in its natural tuxedo.'
  },
  {
    id: 'prod408',
    name: 'Koala Cuddles',
    price: 24.99,
    category: 'plush-toys',
    image: findImage('product-koala-cuddles'),
    description: 'A super-soft koala that clings on for the best cuddles.'
  },
  {
    id: 'prod409',
    name: 'Lion King',
    price: 28.99,
    category: 'plush-toys',
    image: findImage('product-lion-king'),
    description: 'The majestic king of the savanna, with a fluffy, regal mane.'
  },
  {
    id: 'prod410',
    name: 'Octopus Hugs',
    price: 26.99,
    category: 'plush-toys',
    image: findImage('product-octopus-hugs'),
    description: 'A colorful octopus with eight long arms perfect for endless hugs.'
  },

  // Vehicles
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
    id: 'prod503',
    name: 'Monster Truck Madness',
    price: 25.99,
    category: 'vehicles',
    image: findImage('product-monster-truck-madness'),
    description: 'A massive monster truck with giant wheels for crushing obstacles.'
  },
  {
    id: 'prod504',
    name: 'Fire Engine Rescue',
    price: 29.99,
    category: 'vehicles',
    image: findImage('product-fire-engine-rescue'),
    description: 'A realistic fire engine with an extendable ladder and working siren.'
  },
  {
    id: 'prod505',
    name: 'Police Car Chase',
    price: 18.99,
    category: 'vehicles',
    image: findImage('product-police-car-chase'),
    description: 'A high-speed police car with flashing lights for exciting pursuits.'
  },
  {
    id: 'prod506',
    name: 'Airplane Jet',
    price: 22.99,
    category: 'vehicles',
    image: findImage('product-airplane-jet'),
    description: 'Soar through the skies with this sleek and modern passenger jet.'
  },
  {
    id: 'prod507',
    name: 'Farm Tractor',
    price: 19.99,
    category: 'vehicles',
    image: findImage('product-farm-tractor'),
    description: 'A durable green tractor ready for a hard day of work on the farm.'
  },
  {
    id: 'prod508',
    name: 'Motorcycle Stunt Bike',
    price: 16.99,
    category: 'vehicles',
    image: findImage('product-motorcycle-stunt-bike'),
    description: 'A lightweight and agile stunt bike for performing amazing tricks.'
  },
  {
    id: 'prod509',
    name: 'Boat Adventure',
    price: 17.99,
    category: 'vehicles',
    image: findImage('product-boat-adventure'),
    description: 'A speedboat that actually floats, perfect for bath time adventures.'
  },
  {
    id: 'prod510',
    name: 'Helicopter Sky Patrol',
    price: 24.99,
    category: 'vehicles',
    image: findImage('product-helicopter-sky-patrol'),
    description: 'A rescue helicopter with spinning propellers and a winch.'
  },

  // Educational
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
  {
    id: 'prod603',
    name: 'Coding Robot',
    price: 59.99,
    category: 'educational',
    image: findImage('product-coding-robot'),
    description: 'An interactive robot that teaches the fundamentals of coding and logic.'
  },
  {
    id: 'prod604',
    name: 'Math Abacus',
    price: 19.99,
    category: 'educational',
    image: findImage('product-math-abacus'),
    description: 'A colorful wooden abacus to make learning counting and math fun.'
  },
  {
    id: 'prod605',
    name: 'Kids Microscope',
    price: 45.99,
    category: 'educational',
    image: findImage('product-kids-microscope'),
    description: 'A beginner microscope to explore the hidden microscopic world around us.'
  },
  {
    id: 'prod606',
    name: 'Shape Sorter Toy',
    price: 15.99,
    category: 'educational',
    image: findImage('product-shape-sorter-toy'),
    description: 'A classic toy for toddlers to learn shapes, colors, and coordination.'
  },
  {
    id: 'prod607',
    name: 'Music Maker Set',
    price: 39.99,
    category: 'educational',
    image: findImage('product-music-maker-set'),
    description: 'A set of child-safe instruments to introduce your child to the world of music.'
  },
  {
    id: 'prod608',
    name: 'Doctor Play Kit',
    price: 29.99,
    category: 'educational',
    image: findImage('product-doctor-play-kit'),
    description: 'Encourage imaginative play and ease doctor-visit anxieties with this kit.'
  },
  {
    id: 'prod609',
    name: 'Gardening Set for Kids',
    price: 27.99,
    category: 'educational',
    image: findImage('product-gardening-set-for-kids'),
    description: 'A complete set of kid-safe tools for your little one to grow their own plants.'
  },
  {
    id: 'prod610',
    name: 'Magnetic Tiles Set',
    price: 49.99,
    category: 'educational',
    image: findImage('product-magnetic-tiles-set'),
    description: 'Colorful magnetic tiles for building 2D and 3D shapes, fostering creativity.'
  },
];
