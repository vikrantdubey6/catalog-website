'use client';

import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trash2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import CheckoutForm from '@/components/checkout/CheckoutForm';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <ShoppingBag className="h-10 w-10 text-primary" />
        <h1 className="font-headline text-4xl font-bold">Your Shopping Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <Card className="text-center py-16">
          <CardContent>
            <p className="text-xl text-muted-foreground mb-4">Your cart is empty.</p>
            <Button asChild>
              <Link href="/">Start Shopping</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="flex items-center p-4 overflow-hidden">
                <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image.url}
                    alt={item.name}
                    fill
                    sizes="100px"
                    className="object-cover"
                    data-ai-hint={item.image.hint}
                  />
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2 mx-4">
                  <Input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                    className="w-16 h-10 text-center"
                    aria-label={`Quantity for ${item.name}`}
                  />
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name} from cart`}>
                  <Trash2 className="h-5 w-5 text-destructive" />
                </Button>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({cartCount} items)</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <Separator />
                <CheckoutForm />
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
