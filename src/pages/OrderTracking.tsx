import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Bell, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderTracking = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold">🦅</span>
              </div>
              <div>
                <h1 className="font-bold text-sm leading-none">Order Tracking</h1>
                <p className="text-xs text-muted-foreground">Shree Eagle</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Coming Soon Content */}
      <div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[80vh]">
        <div className="max-w-md w-full text-center">
          {/* Animated Icon */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
              <Clock className="w-16 h-16 text-primary" />
            </div>
            <div className="absolute -top-1 -right-1 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-lg">🚀</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-foreground mb-3">
            Coming Soon!
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Order Tracking is on its way
          </p>
          <p className="text-sm text-muted-foreground mb-10 max-w-sm mx-auto">
            We're working hard to bring you real-time order tracking. 
            Stay tuned — it'll be live very soon! 🎉
          </p>

          {/* Features Preview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8 text-left">
            <p className="text-sm font-bold text-foreground mb-4 text-center">
              What's coming:
            </p>
            <div className="space-y-3">
              {[
                { emoji: "📍", text: "Live location tracking on map" },
                { emoji: "🔔", text: "Real-time push notifications" },
                { emoji: "⏱️", text: "Accurate delivery time estimates" },
                { emoji: "🛵", text: "Delivery partner details" },
                { emoji: "📞", text: "Direct call to delivery partner" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Order Placed Confirmation */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">✅</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-green-800 text-sm">Order Placed Successfully!</p>
                <p className="text-xs text-green-600">
                  Your order has been received. We'll notify you once tracking is live.
                </p>
              </div>
            </div>
          </div>

          {/* Notify Me */}
          <div className="flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-xl px-4 py-3 mb-8">
            <Bell className="w-4 h-4 text-primary flex-shrink-0" />
            <p className="text-xs text-muted-foreground">
              We'll notify you at <span className="font-semibold text-foreground">+91-95976-73401</span> when tracking goes live
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              onClick={() => navigate("/")}
              size="lg"
              className="flex-1 rounded-xl"
            >
              <HomeIcon className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <Button
              onClick={() => navigate("/restaurants")}
              variant="outline"
              size="lg"
              className="flex-1 rounded-xl"
            >
              Order Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
