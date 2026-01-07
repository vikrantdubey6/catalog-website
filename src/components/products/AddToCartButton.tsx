'use client';

import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/lib/types';
import { ShoppingCart } from 'lucide-react';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { addToCart } = useCart();

  return (
    <Button 
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
      onClick={() => addToCart(product)}
    >
      <ShoppingCart className="mr-2 h-4 w-4" />
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
