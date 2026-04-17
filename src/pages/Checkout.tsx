import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Plus, CreditCard, Wallet, Banknote, ChevronRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import { Address } from "@/types";
import { Separator } from "@/components/ui/separator";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "a1",
      type: "Home",
      address: "123, MG Road, Bangalore",
      landmark: "Near Metro Station",
      city: "Bangalore",
      pincode: "560001",
      isDefault: true,
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState<string>("a1");
  const [paymentMethod, setPaymentMethod] = useState<string>("cod");
  const [showAddressDialog, setShowAddressDialog] = useState(false);
  const [newAddress, setNewAddress] = useState({
    type: "Home" as "Home" | "Work" | "Other",
    address: "",
    landmark: "",
    city: "",
    pincode: "",
  });

  const subtotal = getCartTotal();
  const deliveryFee = subtotal >= 299 ? 0 : 40;
  const taxes = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + taxes;

  if (cart.length === 0) {
    navigate("/");
    return null;
  }

  const selectedAddr = addresses.find((a) => a.id === selectedAddress);

  const handleAddAddress = () => {
    if (!newAddress.address.trim() || !newAddress.city.trim() || !newAddress.pincode.trim()) {
      alert("Please fill all required fields");
      return;
    }
    const address: Address = {
      id: `a${Date.now()}`,
      ...newAddress,
      isDefault: addresses.length === 0,
    };
    setAddresses([...addresses, address]);
    setSelectedAddress(address.id);
    setShowAddressDialog(false);
    setNewAddress({ type: "Home", address: "", landmark: "", city: "", pincode: "" });
  };

  const handlePlaceOrder = () => {
    const orderId = `ORD${Date.now()}`;
    // Save order details for tracking page
    localStorage.setItem("lastOrderId", orderId);
    localStorage.setItem("lastOrderAddress", JSON.stringify(selectedAddr));
    localStorage.setItem("lastOrderPayment", paymentMethod);
    localStorage.setItem("lastOrderTotal", total.toFixed(0));
    localStorage.setItem("lastOrderItems", JSON.stringify(cart.map((c) => ({
      name: c.foodItem.name,
      qty: c.quantity,
      price: c.foodItem.price,
      restaurant: c.restaurant.name,
    }))));
    clearCart();
    navigate(`/order-tracking/${orderId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Navbar */}
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
              <div>
                <h1 className="font-bold text-sm leading-none">Checkout</h1>
                <p className="text-xs text-muted-foreground">Shree Eagle</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-xs">
            {["Cart", "Address", "Payment", "Confirm"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${i <= 2 ? "bg-primary text-white" : "bg-gray-200 text-gray-500"}`}>
                  {i + 1}
                </div>
                <span className={i <= 2 ? "text-foreground font-medium" : "text-muted-foreground"}>{step}</span>
                {i < 3 && <ChevronRight className="w-3 h-3 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-5">
            {/* Delivery Address */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-base flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Delivery Address
                </h2>
                <Button variant="ghost" size="sm" onClick={() => setShowAddressDialog(true)} className="text-primary text-xs">
                  <Plus className="w-3 h-3 mr-1" /> Add New
                </Button>
              </div>

              <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress}>
                <div className="space-y-3">
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      onClick={() => setSelectedAddress(address.id)}
                      className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                        selectedAddress === address.id
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <RadioGroupItem value={address.id} id={address.id} className="mt-0.5" />
                        <Label htmlFor={address.id} className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-sm">{address.type}</span>
                            {address.isDefault && (
                              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">
                                Default
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{address.address}</p>
                          {address.landmark && (
                            <p className="text-xs text-muted-foreground">📍 {address.landmark}</p>
                          )}
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {address.city} — {address.pincode}
                          </p>
                        </Label>
                      </div>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-base mb-5 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-primary" />
                Payment Method
              </h2>

              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="space-y-3">
                  {[
                    {
                      id: "cod",
                      icon: <Banknote className="w-5 h-5 text-green-600" />,
                      title: "Cash on Delivery",
                      subtitle: "Pay when your order arrives",
                      badge: "Most Popular",
                    },
                    {
                      id: "upi",
                      icon: <Wallet className="w-5 h-5 text-blue-600" />,
                      title: "UPI / Wallets",
                      subtitle: "PhonePe, Google Pay, Paytm",
                      badge: null,
                    },
                    {
                      id: "card",
                      icon: <CreditCard className="w-5 h-5 text-purple-600" />,
                      title: "Credit / Debit Card",
                      subtitle: "Visa, Mastercard, Rupay",
                      badge: null,
                    },
                  ].map((method) => (
                    <div
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                        paymentMethod === method.id
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value={method.id} id={method.id} />
                        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                          {method.icon}
                        </div>
                        <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm">{method.title}</span>
                            {method.badge && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                                {method.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">{method.subtitle}</p>
                        </Label>
                      </div>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Order Items Preview */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-base mb-4">Order Items ({cart.length})</h2>
              <div className="space-y-3">
                {cart.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img
                      src={item.foodItem.image}
                      alt={item.foodItem.name}
                      className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=100&q=80";
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">{item.foodItem.name}</p>
                      <p className="text-xs text-muted-foreground">{item.restaurant.name}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-bold">₹{item.foodItem.price * item.quantity}</p>
                      <p className="text-xs text-muted-foreground">x{item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-20">
              <h2 className="font-bold text-base mb-5">Order Summary</h2>

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
                <div className="flex justify-between text-muted-foreground">
                  <span>GST (5%)</span>
                  <span>₹{taxes}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between font-bold text-lg mb-2">
                <span>Total</span>
                <span>₹{total.toFixed(0)}</span>
              </div>

              {selectedAddr && (
                <div className="bg-gray-50 rounded-xl p-3 mb-4 text-xs text-muted-foreground">
                  <p className="font-semibold text-foreground mb-1">📍 Delivering to:</p>
                  <p>{selectedAddr.address}, {selectedAddr.city}</p>
                </div>
              )}

              <Button onClick={handlePlaceOrder} size="lg" className="w-full rounded-xl mb-3">
                Place Order — ₹{total.toFixed(0)}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                <span>100% secure & safe payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Address Dialog */}
      <Dialog open={showAddressDialog} onOpenChange={setShowAddressDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add Delivery Address</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label className="text-sm font-semibold">Address Type</Label>
              <RadioGroup
                value={newAddress.type}
                onValueChange={(value) => setNewAddress({ ...newAddress, type: value as any })}
                className="flex gap-4 mt-2"
              >
                {["Home", "Work", "Other"].map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <RadioGroupItem value={type} id={`type-${type}`} />
                    <Label htmlFor={`type-${type}`} className="cursor-pointer">{type}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="addr-address" className="text-sm font-semibold">Complete Address *</Label>
              <Input
                id="addr-address"
                value={newAddress.address}
                onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                placeholder="House no., Building, Street"
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="addr-landmark" className="text-sm font-semibold">Landmark</Label>
              <Input
                id="addr-landmark"
                value={newAddress.landmark}
                onChange={(e) => setNewAddress({ ...newAddress, landmark: e.target.value })}
                placeholder="Nearby landmark (optional)"
                className="mt-1.5"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="addr-city" className="text-sm font-semibold">City *</Label>
                <Input
                  id="addr-city"
                  value={newAddress.city}
                  onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                  placeholder="City"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="addr-pincode" className="text-sm font-semibold">Pincode *</Label>
                <Input
                  id="addr-pincode"
                  value={newAddress.pincode}
                  onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                  placeholder="6-digit pincode"
                  maxLength={6}
                  className="mt-1.5"
                />
              </div>
            </div>

            <Button onClick={handleAddAddress} className="w-full">
              Save Address
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Checkout;
