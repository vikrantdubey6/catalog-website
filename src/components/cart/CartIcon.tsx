'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

const CartIcon = () => {
  const { cartCount } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300); // Animation duration
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <Link href="/cart" passHref>
      <Button variant="ghost" size="icon" className="relative">
        <ShoppingCart className="h-6 w-6" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
            {cartCount}
          </span>
        )}
        <span
          className={cn(
            'absolute inset-0 rounded-full bg-primary/20 scale-100 opacity-0',
            isAnimating && 'animate-ping'
          )}
        ></span>
        <span className="sr-only">View shopping cart</span>
      </Button>
    </Link>
  );
};

export default CartIcon;
