
'use client';

import Link from 'next/link';
import { ToyBrick, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import CartIcon from '@/components/cart/CartIcon';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const { openPhoneModal, hasPhoneNumber } = useCart();
  const { toast } = useToast();

  const handleUserIconClick = () => {
    if (hasPhoneNumber()) {
      toast({
        title: 'Phone Number Added',
        description: 'You have already provided your phone number.',
      });
    } else {
      openPhoneModal();
    }
  };

  return (
    <header className="bg-card shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <ToyBrick className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline tracking-tighter text-foreground">
                DM OVERSEAS
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center px-8 lg:px-16">
            <div className="relative w-full max-w-md">
              <Input
                type="search"
                placeholder="Search for amazing toys..."
                className="pl-10 h-10"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={handleUserIconClick}>
              <User className="h-6 w-6" />
              <span className="sr-only">User Profile</span>
            </Button>
            <CartIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
