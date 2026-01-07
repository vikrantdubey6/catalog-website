import type { LucideIcon } from 'lucide-react';

export interface ImageInfo {
  id: string;
  url: string;
  hint: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  Icon: LucideIcon;
  image: ImageInfo;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: ImageInfo;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}
