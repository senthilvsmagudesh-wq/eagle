import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag, Tag, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { Separator } from "@/components/ui/separator";

const COUPONS: { [key: string]: number } = {
  EAGLE10: 10,
  FIRST50: 50,
  SAVE20: 20,
};

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);
  const [couponError, setCouponError] = useState("");

  const subtotal = getCartTotal();
  const deliveryFee = subtotal > 0 ? (subtotal >= 299 ? 0 : 40) : 0;
  const taxes = Math.round(subtotal * 0.05);
  const couponDiscount = appliedCoupon ? Math.min(appliedCoupon.discount, subtotal) : 0;
  const total = subtotal + deliveryFee + taxes - couponDiscount;

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (!code) return;
    if (COUPONS[code]) {
      setAppliedCoupon({ code, discount: COUPONS[code] });
      setCouponError("");
    } else {
      setCouponError("Invalid coupon code");
      setAppliedCoupon(null);
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setCouponError("");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-bold">🦅</span>
                </div>
                <h1 className="font-bold text-base">Cart</h1>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-sm mx-auto">
            <ShoppingBag className="w-20 h-20 mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added anything yet. Let's fix that!
            </p>
            <Button onClick={() => navigate("/")} size="lg" className="px-10">
              Browse Restaurants
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Group cart items by restaurant
  const restaurantGroups = cart.reduce((groups, item) => {
    const rId = item.restaurant.id;
    if (!groups[rId]) groups[rId] = { restaurant: item.restaurant, items: [] };
    groups[rId].items.push(item);
    return groups;
  }, {} as { [key: string]: { restaurant: typeof cart[0]["restaurant"]; items: typeof cart } });

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-bold">🦅</span>
                </div>
                <div>
                  <h1 className="font-bold text-sm leading-none">My Cart</h1>
                  <p className="text-xs text-muted-foreground">Shree Eagle</p>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={clearCart} className="text-red-500 hover:text-red-600 hover:bg-red-50 text-xs">
              Clear All
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {Object.values(restaurantGroups).map(({ restaurant, items }) => (
              <div key={restaurant.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                {/* Restaurant header */}
                <div
                  className="flex items-center gap-3 p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => navigate(`/restaurant/${restaurant.id}`)}
                >
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-10 h-10 rounded-lg object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=100&q=80";
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{restaurant.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {restaurant.rating} • {restaurant.deliveryTime}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>

                {/* Items */}
                <div className="divide-y">
                  {items.map((item, index) => {
                    const itemTotal = item.foodItem.price * item.quantity;
                    let customizationTotal = 0;
                    Object.values(item.selectedCustomizations).forEach((options) => {
                      options.forEach((optionId) => {
                        item.foodItem.customizations?.forEach((custom) => {
                          const option = custom.options.find((o) => o.id === optionId);
                          if (option) customizationTotal += option.price * item.quantity;
                        });
                      });
                    });
                    const totalPrice = itemTotal + customizationTotal;

                    return (
                      <div key={`${item.foodItem.id}-${index}`} className="p-4 flex gap-3">
                        <img
                          src={item.foodItem.image}
                          alt={item.foodItem.name}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=100&q=80";
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-1.5 min-w-0">
                              <div className={`w-3.5 h-3.5 border-2 flex items-center justify-center flex-shrink-0 ${item.foodItem.isVeg ? "border-green-600" : "border-red-600"}`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${item.foodItem.isVeg ? "bg-green-600" : "bg-red-600"}`} />
                              </div>
                              <h4 className="font-semibold text-sm truncate">{item.foodItem.name}</h4>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.foodItem.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Customizations */}
                          {Object.keys(item.selectedCustomizations).length > 0 && (
                            <div className="mt-1 text-xs text-muted-foreground">
                              {Object.entries(item.selectedCustomizations).map(([customId, optionIds]) => {
                                const custom = item.foodItem.customizations?.find((c) => c.id === customId);
                                if (!custom) return null;
                                return optionIds.map((optionId) => {
                                  const option = custom.options.find((o) => o.id === optionId);
                                  return option ? (
                                    <span key={optionId} className="block">• {option.name}{option.price > 0 ? ` (+₹${option.price})` : ""}</span>
                                  ) : null;
                                });
                              })}
                            </div>
                          )}

                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-0.5">
                              <button
                                onClick={() => updateQuantity(item.foodItem.id, item.quantity - 1)}
                                className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="font-bold text-sm w-5 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.foodItem.id, item.quantity + 1)}
                                className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <span className="font-bold text-sm">₹{totalPrice}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Coupon */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4 text-primary" />
                Apply Coupon
              </h3>
              {appliedCoupon ? (
                <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                  <div>
                    <span className="font-bold text-green-700 text-sm">{appliedCoupon.code}</span>
                    <p className="text-xs text-green-600">You save ₹{couponDiscount}!</p>
                  </div>
                  <button onClick={removeCoupon} className="text-xs text-red-500 font-semibold hover:underline">
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter coupon code (try EAGLE10)"
                    value={couponCode}
                    onChange={(e) => { setCouponCode(e.target.value.toUpperCase()); setCouponError(""); }}
                    className="text-sm"
                  />
                  <Button onClick={handleApplyCoupon} variant="outline" className="flex-shrink-0">
                    Apply
                  </Button>
                </div>
              )}
              {couponError && <p className="text-xs text-red-500 mt-2">{couponError}</p>}
              {!appliedCoupon && (
                <div className="flex gap-2 mt-3 flex-wrap">
                  {Object.keys(COUPONS).map((code) => (
                    <button
                      key={code}
                      onClick={() => { setCouponCode(code); setCouponError(""); }}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold hover:bg-primary/20 transition-colors"
                    >
                      {code}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bill Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-20">
              <h2 className="font-bold text-base mb-5">Bill Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Item Total</span>
                  <span>₹{subtotal.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery Fee</span>
                  {deliveryFee === 0 ? (
                    <span className="text-green-600 font-semibold">FREE</span>
                  ) : (
                    <span>₹{deliveryFee}</span>
                  )}
                </div>
                {deliveryFee > 0 && (
                  <p className="text-xs text-muted-foreground">Add ₹{299 - subtotal} more for free delivery</p>
                )}
                <div className="flex justify-between text-muted-foreground">
                  <span>GST & Charges (5%)</span>
                  <span>₹{taxes}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-green-600 font-semibold">
                    <span>Coupon ({appliedCoupon.code})</span>
                    <span>-₹{couponDiscount}</span>
                  </div>
                )}
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between font-bold text-base mb-5">
                <span>To Pay</span>
                <span>₹{total.toFixed(0)}</span>
              </div>

              {appliedCoupon && (
                <div className="bg-green-50 text-green-700 text-xs font-semibold text-center py-2 rounded-lg mb-4">
                  🎉 You're saving ₹{couponDiscount} on this order!
                </div>
              )}

              <Button onClick={() => navigate("/checkout")} size="lg" className="w-full rounded-xl">
                Proceed to Checkout
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-3">
                Estimated delivery: 30–45 mins
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
