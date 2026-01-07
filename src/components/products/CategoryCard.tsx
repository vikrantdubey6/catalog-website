import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Category } from '@/lib/types';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface CategoryCardProps {
  category: Omit<Category, 'Icon'>;
  productCount: number;
}

const CategoryCard = ({ category, productCount }: CategoryCardProps) => {
  return (
    <Link href={`/products/${category.slug}`} className="group block">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={category.image.url}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={category.image.hint}
          />
        </div>
        <CardHeader className="flex-grow">
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-headline text-2xl">
              {category.name}
            </span>
            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="secondary">{productCount} Products</Badge>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
