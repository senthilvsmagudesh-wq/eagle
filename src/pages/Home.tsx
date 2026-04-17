import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, TrendingUp, ShoppingCart, ChevronRight, Star, Clock, Tag, Phone, Mail, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { restaurants } from "@/data/restaurants";
import { useCart } from "@/context/CartContext";

const popularSearches = [
  "Chicken Biryani",
  "Butter Chicken",
  "Tandoori Chicken",
  "Mutton Biryani",
  "Kebabs",
  "Fried Rice",
];

const cuisines = [
  { name: "Biryani", emoji: "🍚", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80", color: "from-orange-400 to-red-500" },
  { name: "North Indian", emoji: "🍛", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80", color: "from-yellow-400 to-orange-500" },
  { name: "Mughlai", emoji: "🥘", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80", color: "from-amber-400 to-yellow-500" },
  { name: "Chinese", emoji: "🍜", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80", color: "from-red-400 to-pink-500" },
  { name: "Kebabs", emoji: "🍢", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&q=80", color: "from-rose-400 to-red-500" },
  { name: "Street Food", emoji: "🌮", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80", color: "from-green-400 to-teal-500" },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const navigate = useNavigate();
  const { getItemCount } = useCart();
  const cartCount = getItemCount();

  const handleSearch = (query?: string) => {
    const searchTerm = query || searchQuery;
    if (searchTerm.trim()) {
      navigate(`/restaurants?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleCuisineClick = (cuisine: string) => {
    navigate(`/restaurants?cuisine=${encodeURIComponent(cuisine)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold text-xl">🦅</span>
              </div>
              <div>
                <h1 className="text-lg font-extrabold text-foreground leading-none">Shree Eagle</h1>
                <span className="text-xs text-primary font-semibold">Food Delivery</span>
              </div>
            </div>

            {/* Location */}
            <button
              onClick={() => {
                const newLocation = prompt("Enter your city:", location);
                if (newLocation?.trim()) setLocation(newLocation.trim());
              }}
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="max-w-[120px] truncate">{location}</span>
              <ChevronRight className="w-3 h-3 rotate-90 text-muted-foreground" />
            </button>

            {/* Cart */}
            <Button
              onClick={() => navigate("/cart")}
              variant="outline"
              className="relative flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/groceries-bg.png"
            alt="Shree Eagle Food Delivery"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-rose-600/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white leading-tight">
              Hungry? We've got <br />
              <span className="text-yellow-300">you covered!</span>
            </h2>
            <p className="text-lg text-white/90 mb-3">
              Order from the best restaurants in {location} — fast, fresh & delicious
            </p>
            <p className="text-sm text-white/80 mb-10">
              🏆 Serving 50+ locations across India • ⭐ 4.8 Rating • 📍 Based in Salem, Tamil Nadu
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-2xl p-2 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  const newLocation = prompt("Enter your city:", location);
                  if (newLocation?.trim()) setLocation(newLocation.trim());
                }}
                className="flex items-center gap-2 px-4 py-2 border-b sm:border-b-0 sm:border-r text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="truncate max-w-[100px]">{location}</span>
              </button>
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <Input
                  type="text"
                  placeholder="Search for dishes, restaurants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="border-0 focus-visible:ring-0 text-base p-0"
                />
              </div>
              <Button size="lg" onClick={() => handleSearch()} className="px-8 rounded-xl">
                Search
              </Button>
            </div>

            {/* Popular Searches */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <span className="text-sm text-white/70 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Trending:
              </span>
              {popularSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => handleSearch(search)}
                  className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-medium backdrop-blur-sm transition-all border border-white/30"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offers Banner */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {[
              { icon: "🎉", text: "50% off up to ₹100 on first order", color: "bg-orange-50 border-orange-200" },
              { icon: "🚀", text: "Free delivery on orders above ₹299", color: "bg-blue-50 border-blue-200" },
              { icon: "⚡", text: "Lightning fast delivery in 30 mins", color: "bg-yellow-50 border-yellow-200" },
              { icon: "🏆", text: "Top rated restaurants near you", color: "bg-green-50 border-green-200" },
            ].map((offer, i) => (
              <div key={i} className={`flex items-center gap-3 px-5 py-3 rounded-xl border ${offer.color} flex-shrink-0 cursor-pointer hover:shadow-sm transition-all`}>
                <span className="text-2xl">{offer.icon}</span>
                <span className="text-sm font-medium whitespace-nowrap">{offer.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisines Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold">What's on your mind?</h3>
              <p className="text-muted-foreground text-sm mt-1">Explore by cuisine type</p>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine.name}
                onClick={() => handleCuisineClick(cuisine.name)}
                className="group flex flex-col items-center gap-3"
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-all group-hover:-translate-y-1">
                  <img
                    src={cuisine.image}
                    alt={cuisine.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cuisine.color} opacity-40`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl drop-shadow-lg">{cuisine.emoji}</span>
                  </div>
                </div>
                <span className="text-sm font-semibold text-foreground">{cuisine.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold">Top Restaurants</h3>
              <p className="text-muted-foreground text-sm mt-1">Handpicked for you</p>
            </div>
            <Button variant="ghost" onClick={() => navigate("/restaurants")} className="text-primary font-semibold">
              See all <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurants.slice(0, 8).map((restaurant) => (
              <button
                key={restaurant.id}
                onClick={() => navigate(`/restaurant/${restaurant.id}`)}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 text-left"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80";
                    }}
                  />
                  {restaurant.offers && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
                      <div className="flex items-center gap-1 text-white text-xs font-bold">
                        <Tag className="w-3 h-3" />
                        {restaurant.offers}
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-base mb-1 truncate">{restaurant.name}</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1 bg-green-600 text-white px-1.5 py-0.5 rounded text-xs font-bold">
                      <Star className="w-2.5 h-2.5 fill-white" />
                      {restaurant.rating}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({restaurant.reviewCount.toLocaleString()})
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate mb-2">
                    {restaurant.cuisines.join(" • ")}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-2">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {restaurant.deliveryTime}
                    </div>
                    <span>₹{restaurant.priceForTwo} for two</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shree Eagle */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { value: "50+", label: "Locations Served", emoji: "📍" },
              { value: "4.8★", label: "Average Rating", emoji: "⭐" },
              { value: "10K+", label: "Happy Customers", emoji: "😊" },
              { value: "30 min", label: "Avg Delivery Time", emoji: "⚡" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                <div className="text-3xl mb-2">{stat.emoji}</div>
                <div className="text-2xl font-extrabold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-center mb-10">Why choose Shree Eagle?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { emoji: "⚡", title: "Lightning Fast", desc: "Average delivery in 30 minutes or less across 50+ locations in India" },
              { emoji: "🍽️", title: "Fresh & Hot", desc: "Food delivered fresh from the kitchen — quality guaranteed every order" },
              { emoji: "💰", title: "Fair Prices", desc: "Transparent pricing with no hidden charges. Best deals every day" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🦅</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Shree Eagle</h2>
                  <p className="text-gray-400 text-xs">Food Delivery</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                Your daily essentials at fair prices — Food, Groceries & Services
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold text-white">4.8</span>
                <span>• 10,000+ reviews</span>
              </div>
              <p className="text-xs text-gray-500">Serving 50+ locations across India</p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-base mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <a href="tel:+916381281124" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91 63812 81124</span>
                </a>
                <a href="mailto:contact@shreeeagle.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>contact@shreeeagle.com</span>
                </a>
                <a href="https://shreeeagle.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>shreeeagle.com</span>
                </a>
                <div className="flex items-start gap-2 pt-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Salem, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-base mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <button onClick={() => navigate("/")} className="block hover:text-white transition-colors">Home</button>
                <button onClick={() => navigate("/restaurants")} className="block hover:text-white transition-colors">Restaurants</button>
                <button onClick={() => navigate("/cart")} className="block hover:text-white transition-colors">Cart</button>
                <span className="block hover:text-white cursor-pointer transition-colors">About Us</span>
                <span className="block hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                <span className="block hover:text-white cursor-pointer transition-colors">Terms & Conditions</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Shree Eagle. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://twitter.com/ShreeEagle" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://facebook.com/ShreeEagle" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Facebook
              </a>
              <a href="https://instagram.com/ShreeEagle" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Cart Button (mobile) */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
          <Button
            onClick={() => navigate("/cart")}
            size="lg"
            className="shadow-2xl px-8 rounded-full flex items-center gap-3"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>{cartCount} item{cartCount > 1 ? "s" : ""} in cart</span>
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs font-bold">View</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;
