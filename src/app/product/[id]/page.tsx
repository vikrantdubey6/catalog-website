import { notFound } from 'next/navigation';
import { products, categories } from '@/lib/data';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import AddToCartButton from '@/components/products/AddToCartButton';
import RecommendedCategories from '@/components/products/RecommendedCategories';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const category = categories.find((c) => c.slug === product.category);

  const getProductCountForCategory = (categorySlug: string) => {
    return products.filter((p) => p.category === categorySlug).length;
  };

  const otherCategories = categories
    .filter((c) => c.slug !== product.category)
    .map(({ Icon, ...c }) => ({
        ...c,
        productCount: getProductCountForCategory(c.slug)
    }));

  return (
    <div className="space-y-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {category && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/products/${category.slug}`}>{category.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <Card className="overflow-hidden">
          <div className="relative aspect-square w-full">
            <Image
              src={product.image.url}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              data-ai-hint={product.image.hint}
            />
          </div>
        </Card>

        <div className="space-y-6">
          <h1 className="font-headline text-4xl font-bold">{product.name}</h1>
          <p className="text-xl text-muted-foreground">{product.description}</p>
          <p className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</p>
          
          <Card>
            <CardContent className="p-6">
              <AddToCartButton product={product} />
            </CardContent>
          </Card>
        </div>
      </div>

      <RecommendedCategories categories={otherCategories} />
    </div>
  );
}
