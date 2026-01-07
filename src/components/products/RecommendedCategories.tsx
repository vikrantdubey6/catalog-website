'use client';

import { Category } from '@/lib/types';
import CategoryCard from './CategoryCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';

interface RecommendedCategoriesProps {
  categories: Category[];
  getProductCountForCategory: (slug: string) => number;
}

export default function RecommendedCategories({ categories, getProductCountForCategory }: RecommendedCategoriesProps) {
  return (
    <section className="py-12 border-t mt-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-headline text-2xl font-bold">
          More catalogues
        </h2>
        <Link href="/" className="text-sm font-medium text-primary hover:underline">
          View all catalogues
        </Link>
      </div>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {categories.map((category) => (
            <CarouselItem key={category.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className="p-1 h-full">
                <CategoryCard category={category} productCount={getProductCountForCategory(category.slug)} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </section>
  );
}
