import { categories, products } from '@/lib/data';
import CategoryCard from '@/components/products/CategoryCard';

export default function Home() {
  const getProductCountForCategory = (categorySlug: string) => {
    return products.filter((p) => p.category === categorySlug).length;
  };

  return (
    <div className="space-y-12">
      <section className="text-center bg-card p-8 rounded-xl shadow-lg">
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary tracking-tighter">
          Welcome to ToyVerse!
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore a universe of fun and learning. We've curated the best toys to spark imagination and create endless smiles.
        </p>
      </section>

      <section>
        <h2 className="font-headline text-3xl font-bold mb-8 text-center">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              productCount={getProductCountForCategory(category.slug)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
