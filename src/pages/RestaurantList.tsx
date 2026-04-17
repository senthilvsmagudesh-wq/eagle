import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Search, MapPin, SlidersHorizontal, Star, Clock, ChevronRight, ShoppingCart, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { restaurants } from "@/data/restaurants";
import { foodItems } from "@/data/foodItems";
import { useCart } from "@/context/CartContext";

const RestaurantList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { getItemCount } = useCart();
  const cartCount = getItemCount();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [sortBy, setSortBy] = useState<"relevance" | "rating" | "deliveryTime" | "price">("relevance");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    const search = searchParams.get("search")?.toLowerCase() || "";
    const cuisine = searchParams.get("cuisine")?.toLowerCase() || "";

    let filtered = [...restaurants];

    if (search) {
      const restaurantIdsWithDish = new Set<string>();
      foodItems.forEach((item) => {
        if (item.name.toLowerCase().includes(search) || item.category.toLowerCase().includes(search)) {
          restaurantIdsWithDish.add(item.restaurantId);
        }
      });

      filtered = filtered.filter(
        (r) =>
          r.name.toLowerCase().includes(search) ||
          r.cuisines.some((c) => c.toLowerCase().includes(search)) ||
          restaurantIdsWithDish.has(r.id)
      );
    }

    if (cuisine) {
      filtered = filtered.filter((r) =>
        r.cuisines.some((c) => c.toLowerCase().includes(cuisine))
      );
    }

    // Active filter
    if (activeFilter === "rating4+") {
      filtered = filtered.filter((r) => r.rating >= 4.4);
    } else if (activeFilter === "under30") {
      filtered = filtered.filter((r) => parseInt(r.deliveryTime) <= 30);
    } else if (activeFilter === "budget") {
      filtered = filtered.filter((r) => r.priceForTwo <= 350);
    }

    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "rating": return b.rating - a.rating;
        case "deliveryTime": return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
        case "price": return a.priceForTwo - b.priceForTwo;
        default: return 0;
      }
    });

    setFilteredRestaurants(filtered);
  }, [searchParams, sortBy, activeFilter]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSearchParams({ search: searchQuery });
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchParams({});
  };

  const searchTerm = searchParams.get("search") || "";
  const cuisineFilter = searchParams.get("cuisine") || "";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 flex-shrink-0">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">🦅</span>
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-sm font-extrabold leading-none">Shree Eagle</div>
                <div className="text-xs text-primary font-semibold">Food Delivery</div>
              </div>
            </button>

            <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-2.5">
              <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <Input
                type="text"
                placeholder="Search dishes, restaurants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="border-0 bg-transparent focus-visible:ring-0 text-sm p-0 h-auto"
              />
              {searchQuery && (
                <button onClick={clearSearch}>
                  <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>

            <Button onClick={() => navigate("/cart")} variant="outline" size="sm" className="relative flex-shrink-0">
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <button onClick={() => navigate("/")} className="hover:text-primary">Home</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">
              {searchTerm ? `"${searchTerm}"` : cuisineFilter ? cuisineFilter : "All Restaurants"}
            </span>
          </div>
          <h1 className="text-2xl font-bold">
            {searchTerm
              ? `Results for "${searchTerm}"`
              : cuisineFilter
              ? `${cuisineFilter} Restaurants`
              : "All Restaurants"}
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {/* Filters & Sort */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex items-center gap-1 text-sm text-muted-foreground flex-shrink-0">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter:</span>
          </div>

          {[
            { id: "rating4+", label: "⭐ Rating 4.4+" },
            { id: "under30", label: "⚡ Under 30 mins" },
            { id: "budget", label: "💰 Budget friendly" },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(activeFilter === filter.id ? null : filter.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all flex-shrink-0 ${
                activeFilter === filter.id
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-foreground border-gray-200 hover:border-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}

          <div className="w-px h-5 bg-gray-200 mx-1 flex-shrink-0" />

          <span className="text-xs text-muted-foreground flex-shrink-0">Sort:</span>
          {[
            { value: "relevance", label: "Relevance" },
            { value: "rating", label: "Rating" },
            { value: "deliveryTime", label: "Fastest" },
            { value: "price", label: "Price" },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setSortBy(option.value as any)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all flex-shrink-0 ${
                sortBy === option.value
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-foreground border-gray-200 hover:border-gray-400"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Restaurant Grid */}
        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredRestaurants.map((restaurant) => {
              const restaurantItems = foodItems.filter((item) => item.restaurantId === restaurant.id);
              const matchingItems = searchTerm
                ? restaurantItems.filter((item) =>
                    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.category.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                : [];

              return (
                <button
                  key={restaurant.id}
                  onClick={() => navigate(`/restaurant/${restaurant.id}`)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all text-left border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80";
                      }}
                    />
                    {restaurant.offers && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                        <span className="text-white text-xs font-bold">🏷️ {restaurant.offers}</span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${restaurant.isVeg ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                        {restaurant.isVeg ? "🟢 Veg" : "🔴 Non-Veg"}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-base leading-tight">{restaurant.name}</h3>
                      <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded text-xs font-bold flex-shrink-0">
                        <Star className="w-2.5 h-2.5 fill-white" />
                        {restaurant.rating}
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground mb-1">
                      {restaurant.reviewCount.toLocaleString()} reviews
                    </p>

                    <p className="text-xs text-muted-foreground mb-3 line-clamp-1">
                      {restaurant.cuisines.join(" • ")}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {restaurant.deliveryTime}
                      </div>
                      <span>₹{restaurant.priceForTwo} for two</span>
                    </div>

                    {/* Matching dishes */}
                    {matchingItems.length > 0 && (
                      <div className="mt-3 pt-3 border-t">
                        <p className="text-xs text-muted-foreground mb-2 font-medium">
                          Matching dishes:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {matchingItems.slice(0, 2).map((item) => (
                            <div key={item.id} className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2 py-1">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-6 h-6 rounded object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=100&q=80";
                                }}
                              />
                              <span className="text-xs font-medium">{item.name}</span>
                              <span className="text-xs text-primary font-bold">₹{item.price}</span>
                            </div>
                          ))}
                          {matchingItems.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{matchingItems.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-7xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold mb-3">No restaurants found</h3>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              We couldn't find any restaurants matching your search. Try something else!
            </p>
            <div className="flex gap-3 justify-center">
              <Button variant="outline" onClick={clearSearch}>Clear Search</Button>
              <Button onClick={() => navigate("/")}>Go to Home</Button>
            </div>
          </div>
        )}
      </div>

      {/* Floating Cart */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <Button
            onClick={() => navigate("/cart")}
            size="lg"
            className="shadow-2xl px-8 rounded-full flex items-center gap-3"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>{cartCount} item{cartCount > 1 ? "s" : ""} in cart</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
