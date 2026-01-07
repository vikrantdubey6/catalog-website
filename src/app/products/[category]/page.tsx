import { notFound } from 'next/navigation';
import { categories, products } from '@/lib/data';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';
import RecommendedCategories from '@/components/products/RecommendedCategories';
import ProductCard from '@/components/products/ProductCard';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((c) => c.slug === params.category);
  
  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.category === category.slug);

  const getProductCountForCategory = (categorySlug: string) => {
    return products.filter((p) => p.category === categorySlug).length;
  };

  const otherCategories = categories.filter((c) => c.id !== category.id);

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
          <BreadcrumbItem>
            <BreadcrumbPage>{category.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="flex items-center gap-4">
        <category.Icon className="h-10 w-10 text-primary"/>
        <h1 className="font-headline text-4xl font-bold">{category.name}</h1>
      </div>


      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground">No toys found in this category yet. Check back soon!</p>
        </div>
      )}

      <RecommendedCategories categories={otherCategories} getProductCountForCategory={getProductCountForCategory} />
    </div>
  );
}
