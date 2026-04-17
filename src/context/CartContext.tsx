import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartItem, FoodItem, Restaurant } from "@/types";
import { toast } from "sonner";

interface CartContextType {
  cart: CartItem[];
  addToCart: (foodItem: FoodItem, restaurant: Restaurant, customizations?: { [key: string]: string[] }) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (
    foodItem: FoodItem,
    restaurant: Restaurant,
    customizations: { [key: string]: string[] } = {}
  ) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item.foodItem.id === foodItem.id &&
          JSON.stringify(item.selectedCustomizations) === JSON.stringify(customizations)
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        toast.success("Item quantity updated!");
        return updatedCart;
      }

      toast.success("Item added to cart!");
      return [
        ...prevCart,
        {
          foodItem,
          quantity: 1,
          selectedCustomizations: customizations,
          restaurant,
        },
      ];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.foodItem.id !== itemId));
    toast.success("Item removed from cart");
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(itemId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.foodItem.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      let itemTotal = item.foodItem.price * item.quantity;
      
      // Add customization prices
      Object.values(item.selectedCustomizations).forEach((options) => {
        options.forEach((optionId) => {
          item.foodItem.customizations?.forEach((custom) => {
            const option = custom.options.find((o) => o.id === optionId);
            if (option) {
              itemTotal += option.price * item.quantity;
            }
          });
        });
      });

      return total + itemTotal;
    }, 0);
  };

  const getItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
