// Type definitions for the food ordering app

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  cuisines: string[];
  deliveryTime: string;
  priceForTwo: number;
  distance: string;
  isVeg: boolean;
  offers?: string;
}

export interface FoodItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  isVeg: boolean;
  category: string;
  isBestseller?: boolean;
  customizations?: Customization[];
}

export interface Customization {
  id: string;
  name: string;
  options: CustomizationOption[];
  required: boolean;
  type: 'single' | 'multiple';
}

export interface CustomizationOption {
  id: string;
  name: string;
  price: number;
}

export interface CartItem {
  foodItem: FoodItem;
  quantity: number;
  selectedCustomizations: { [key: string]: string[] };
  restaurant: Restaurant;
}

export interface Address {
  id: string;
  type: 'Home' | 'Work' | 'Other';
  address: string;
  landmark?: string;
  city: string;
  pincode: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  items: CartItem[];
  restaurant: Restaurant;
  deliveryAddress: Address;
  subtotal: number;
  deliveryFee: number;
  taxes: number;
  discount: number;
  total: number;
  status: 'placed' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered';
  placedAt: Date;
  estimatedDelivery: Date;
}
