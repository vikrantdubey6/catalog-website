import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Product } from '@/lib/types';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col group">
      <div className="relative h-56 w-full">
        <Image
          src={product.image.url}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={product.image.hint}
        />
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
         <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
