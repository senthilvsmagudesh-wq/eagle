import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Clock, Package, Bike, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type OrderStatus = "placed" | "confirmed" | "preparing" | "out-for-delivery" | "delivered";

const orderSteps = [
  { status: "placed", label: "Order Placed", icon: CheckCircle2, description: "Your order has been received" },
  { status: "confirmed", label: "Confirmed", icon: Clock, description: "Restaurant is preparing your food" },
  { status: "preparing", label: "Preparing", icon: Package, description: "Your food is being cooked" },
  { status: "out-for-delivery", label: "Out for Delivery", icon: Bike, description: "Delivery partner is on the way" },
  { status: "delivered", label: "Delivered", icon: HomeIcon, description: "Enjoy your meal!" },
];

const OrderTracking = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [currentStatus, setCurrentStatus] = useState<OrderStatus>("placed");
  const [progress, setProgress] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState(35);

  useEffect(() => {
    // Simulate order progression
    const statusProgression: OrderStatus[] = [
      "placed",
      "confirmed",
      "preparing",
      "out-for-delivery",
      "delivered",
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < statusProgression.length - 1) {
        currentIndex++;
        setCurrentStatus(statusProgression[currentIndex]);
        setProgress((currentIndex / (statusProgression.length - 1)) * 100);
        setEstimatedTime(Math.max(0, 35 - currentIndex * 8));
      } else {
        clearInterval(interval);
      }
    }, 8000); // Change status every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const currentStepIndex = orderSteps.findIndex((step) => step.status === currentStatus);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">🦅</span>
              </div>
              <div>
                <h1 className="font-bold text-base">Track Order</h1>
                <p className="text-xs text-muted-foreground">Order #{orderId}</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Status Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="text-center mb-8">
            {currentStatus === "delivered" ? (
              <>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-green-600 mb-2">Order Delivered!</h2>
                <p className="text-muted-foreground">
                  Hope you enjoyed your meal
                </p>
              </>
            ) : (
              <>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  {(() => {
                    const Icon = orderSteps[currentStepIndex].icon;
                    return <Icon className="w-12 h-12 text-primary" />;
                  })()}
                </div>
                <h2 className="text-3xl font-bold mb-2">
                  {orderSteps[currentStepIndex].label}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {orderSteps[currentStepIndex].description}
                </p>
                {estimatedTime > 0 && (
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                    <Clock className="w-4 h-4" />
                    Arriving in {estimatedTime} mins
                  </div>
                )}
              </>
            )}
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <Progress value={progress} className="h-2" />
          </div>

          {/* Order Steps */}
          <div className="space-y-6">
            {orderSteps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = index <= currentStepIndex;
              const isCurrent = index === currentStepIndex;

              return (
                <div key={step.status} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isCompleted
                          ? "bg-primary text-white"
                          : "bg-muted text-muted-foreground"
                      } ${isCurrent ? "ring-4 ring-primary/20 scale-110" : ""}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    {index < orderSteps.length - 1 && (
                      <div
                        className={`w-0.5 h-12 mt-2 transition-all ${
                          isCompleted ? "bg-primary" : "bg-muted"
                        }`}
                      />
                    )}
                  </div>

                  <div className="flex-1 pb-8">
                    <h3
                      className={`font-bold text-lg mb-1 ${
                        isCompleted ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step.label}
                    </h3>
                    <p
                      className={`text-sm ${
                        isCompleted ? "text-muted-foreground" : "text-muted-foreground/60"
                      }`}
                    >
                      {step.description}
                    </p>
                    {isCurrent && (
                      <div className="mt-2 text-sm text-primary font-semibold animate-pulse">
                        In Progress...
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Info */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <h3 className="font-bold text-lg mb-4">Delivery Information</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery Address</span>
              <span className="font-semibold text-right">123, MG Road, Bangalore</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Payment Method</span>
              <span className="font-semibold">Cash on Delivery</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Order Time</span>
              <span className="font-semibold">
                {new Date().toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          {currentStatus === "delivered" ? (
            <Button onClick={() => navigate("/")} size="lg" className="flex-1">
              Order Again
            </Button>
          ) : (
            <>
              <Button variant="outline" size="lg" className="flex-1">
                Contact Support
              </Button>
              <Button onClick={() => navigate("/")} size="lg" className="flex-1">
                Back to Home
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
