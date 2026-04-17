import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Clock, IndianRupee, ShoppingCart, Plus, Minus, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { restaurants } from "@/data/restaurants";
import { foodItems } from "@/data/foodItems";
import { useCart } from "@/context/CartContext";
import { FoodItem } from "@/types";

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cart, getItemCount, getCartTotal } = useCart();

  const restaurant = restaurants.find((r) => r.id === id);
  const menu = foodItems.filter((item) => item.restaurantId === id);

  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [customizations, setCustomizations] = useState<{ [key: string]: string[] }>({});
  const [menuSearch, setMenuSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("");

  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold mb-4">Restaurant not found</h2>
          <Button onClick={() => navigate("/")}>Go to Home</Button>
        </div>
      </div>
    );
  }

  const categories = Array.from(new Set(menu.map((item) => item.category)));

  const filteredMenu = menuSearch
    ? menu.filter(
        (item) =>
          item.name.toLowerCase().includes(menuSearch.toLowerCase()) ||
          item.description.toLowerCase().includes(menuSearch.toLowerCase())
      )
    : menu;

  const cartCount = getItemCount();
  const cartTotal = getCartTotal();

  const getItemQuantityInCart = (itemId: string) => {
    const cartItem = cart.find((c) => c.foodItem.id === itemId);
    return cartItem?.quantity || 0;
  };

  const handleAddToCart = () => {
    if (selectedItem && restaurant) {
      addToCart(selectedItem, restaurant, customizations);
      setSelectedItem(null);
      setCustomizations({});
    }
  };

  const scrollToCategory = (category: string) => {
    setActiveCategory(category);
    categoryRefs.current[category]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="flex-shrink-0">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <button onClick={() => navigate("/")} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-base">🦅</span>
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-extrabold leading-none">Shree Eagle</div>
                  <div className="text-xs text-primary">Food Delivery</div>
                </div>
              </button>
            </div>

            <Button onClick={() => navigate("/cart")} className="relative flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-primary text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-primary">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Restaurant Banner */}
      <div className="relative h-56 md:h-72">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <div className="container mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1 text-xs text-white/60 mb-2">
              <button onClick={() => navigate("/")} className="hover:text-white">Home</button>
              <ChevronRight className="w-3 h-3" />
              <button onClick={() => navigate("/restaurants")} className="hover:text-white">Restaurants</button>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80">{restaurant.name}</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mb-1">{restaurant.name}</h1>
            <p className="text-sm text-white/80 mb-3">{restaurant.cuisines.join(" • ")}</p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <span className="font-bold">{restaurant.rating}</span>
                <span className="text-white/70">({restaurant.reviewCount.toLocaleString()})</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm">
                <Clock className="w-3.5 h-3.5" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm">
                <IndianRupee className="w-3.5 h-3.5" />
                <span>₹{restaurant.priceForTwo} for two</span>
              </div>
            </div>

            {restaurant.offers && (
              <div className="mt-3 inline-flex items-center gap-2 bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-semibold">
                🎉 {restaurant.offers}
              </div>
            )}

            {/* FSSAI License */}
            <div className="mt-3 flex items-center gap-2 text-white/70 text-xs">
              <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full font-medium tracking-wide">
                🛡️ FSSAI License No: {restaurant.fssaiLicense}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Search + Category Nav */}
      <div className="sticky top-[57px] z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          {/* Menu Search */}
          <div className="py-3 border-b">
            <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-2.5 max-w-md">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search in menu..."
                value={menuSearch}
                onChange={(e) => setMenuSearch(e.target.value)}
                className="border-0 bg-transparent focus-visible:ring-0 text-sm p-0 h-auto"
              />
            </div>
          </div>

          {/* Category Pills */}
          {!menuSearch && (
            <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => scrollToCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                    activeCategory === cat
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-foreground hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-6 pb-32">
        {menuSearch ? (
          // Search results
          <div>
            <p className="text-sm text-muted-foreground mb-4">
              {filteredMenu.length} result{filteredMenu.length !== 1 ? "s" : ""} for "{menuSearch}"
            </p>
            <div className="grid gap-4">
              {filteredMenu.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  quantityInCart={getItemQuantityInCart(item.id)}
                  onAdd={() => {
                    if (item.customizations?.length) {
                      setSelectedItem(item);
                      setCustomizations({});
                    } else {
                      addToCart(item, restaurant);
                    }
                  }}
                />
              ))}
              {filteredMenu.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-5xl mb-3">🔍</div>
                  <p className="text-muted-foreground">No items found for "{menuSearch}"</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Category sections
          categories.map((category) => {
            const categoryItems = menu.filter((item) => item.category === category);
            return (
              <div
                key={category}
                ref={(el) => { categoryRefs.current[category] = el; }}
                className="mb-10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg font-bold">{category}</h3>
                  <span className="text-xs text-muted-foreground bg-gray-100 px-2 py-0.5 rounded-full">
                    {categoryItems.length}
                  </span>
                </div>
                <div className="grid gap-4">
                  {categoryItems.map((item) => (
                    <MenuItemCard
                      key={item.id}
                      item={item}
                      quantityInCart={getItemQuantityInCart(item.id)}
                      onAdd={() => {
                        if (item.customizations?.length) {
                          setSelectedItem(item);
                          setCustomizations({});
                        } else {
                          addToCart(item, restaurant);
                        }
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* FSSAI Note */}
      <div className="container mx-auto px-4 pb-4">
        <p className="text-xs text-muted-foreground text-center">
          🛡️ FSSAI License No: {restaurant.fssaiLicense} &nbsp;|&nbsp; {restaurant.name} is licensed and compliant with food safety regulations
        </p>
      </div>

      {/* Sticky Cart Bar */}
      {cartCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-2xl p-4">
          <div className="container mx-auto max-w-3xl">
            <Button
              onClick={() => navigate("/cart")}
              size="lg"
              className="w-full flex items-center justify-between px-6 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <span className="bg-white/20 text-white text-xs font-bold w-6 h-6 rounded flex items-center justify-center">
                  {cartCount}
                </span>
                <span className="font-semibold">View Cart</span>
              </div>
              <span className="font-bold">₹{cartTotal.toFixed(0)}</span>
            </Button>
          </div>
        </div>
      )}

      {/* Customization Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-md max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Customise your order</DialogTitle>
          </DialogHeader>

          {selectedItem && (
            <div className="space-y-5">
              <div className="flex gap-4 p-3 bg-gray-50 rounded-xl">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&q=80";
                  }}
                />
                <div>
                  <h3 className="font-bold text-base">{selectedItem.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{selectedItem.description}</p>
                  <p className="text-primary font-bold mt-1">₹{selectedItem.price}</p>
                </div>
              </div>

              {selectedItem.customizations?.map((custom) => (
                <div key={custom.id} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-sm">{custom.name}</h4>
                    <Badge variant={custom.required ? "destructive" : "secondary"} className="text-xs">
                      {custom.required ? "Required" : "Optional"}
                    </Badge>
                  </div>

                  {custom.type === "single" ? (
                    <RadioGroup
                      onValueChange={(value) =>
                        setCustomizations({ ...customizations, [custom.id]: [value] })
                      }
                      className="space-y-2"
                    >
                      {custom.options.map((option) => (
                        <div key={option.id} className="flex items-center justify-between p-3 rounded-lg border hover:border-primary transition-colors">
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value={option.id} id={option.id} />
                            <Label htmlFor={option.id} className="cursor-pointer font-medium text-sm">
                              {option.name}
                            </Label>
                          </div>
                          {option.price > 0 && (
                            <span className="text-sm text-primary font-semibold">+₹{option.price}</span>
                          )}
                        </div>
                      ))}
                    </RadioGroup>
                  ) : (
                    <div className="space-y-2">
                      {custom.options.map((option) => (
                        <div key={option.id} className="flex items-center justify-between p-3 rounded-lg border hover:border-primary transition-colors">
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id={option.id}
                              onCheckedChange={(checked) => {
                                const current = customizations[custom.id] || [];
                                setCustomizations({
                                  ...customizations,
                                  [custom.id]: checked
                                    ? [...current, option.id]
                                    : current.filter((id) => id !== option.id),
                                });
                              }}
                            />
                            <Label htmlFor={option.id} className="cursor-pointer font-medium text-sm">
                              {option.name}
                            </Label>
                          </div>
                          {option.price > 0 && (
                            <span className="text-sm text-primary font-semibold">+₹{option.price}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Button onClick={handleAddToCart} className="w-full" size="lg">
                Add to Cart — ₹{selectedItem.price}
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Menu Item Card Component
const MenuItemCard = ({
  item,
  quantityInCart,
  onAdd,
}: {
  item: FoodItem;
  quantityInCart: number;
  onAdd: () => void;
}) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex gap-4 border border-gray-50">
      {/* Info */}
      <div className="flex-1 min-w-0">
        {/* Veg/Non-veg indicator */}
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 ${item.isVeg ? "border-green-600" : "border-red-600"}`}>
            <div className={`w-2 h-2 rounded-full ${item.isVeg ? "bg-green-600" : "bg-red-600"}`} />
          </div>
          {item.isBestseller && (
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
              ⭐ Bestseller
            </span>
          )}
        </div>

        <h4 className="font-bold text-base mb-1">{item.name}</h4>
        <p className="text-muted-foreground text-xs mb-3 line-clamp-2">{item.description}</p>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{item.rating}</span>
          </div>
          <span className="font-bold text-base">₹{item.price}</span>
        </div>
      </div>

      {/* Image + Add Button */}
      <div className="flex flex-col items-center gap-2 flex-shrink-0">
        <div className="w-28 h-28 md:w-32 md:h-32 relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&q=80";
            }}
          />
        </div>
        <Button
          onClick={onAdd}
          size="sm"
          variant={quantityInCart > 0 ? "default" : "outline"}
          className="w-full text-xs font-bold border-primary text-primary hover:bg-primary hover:text-white"
        >
          {quantityInCart > 0 ? (
            <span className="flex items-center gap-1">
              <Plus className="w-3 h-3" /> ADD ({quantityInCart})
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Plus className="w-3 h-3" /> ADD
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default RestaurantDetail;
