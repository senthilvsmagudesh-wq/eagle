import { Shield, Heart, Sparkles, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Partners",
    description: "Every seller and service provider is thoroughly vetted for quality",
  },
  {
    icon: Heart,
    title: "Fair Pricing",
    description: "No hidden charges, no surge pricing — just honest, transparent rates",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "We never compromise on the quality of products or services",
  },
  {
    icon: TrendingUp,
    title: "Local Empowerment",
    description: "Supporting local businesses to grow and serve their communities",
  },
];

const AppOverviewSection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-light text-gold font-medium text-sm mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Built for{" "}
              <span className="text-gradient">Common People</span>,
              <br />
              Powered by Trust
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Started in September, Shree Eagle was born from a simple idea — "Normal Price for Normal People".
              We empower shop owners to set their own prices, ensuring common people get the best rates for their daily needs.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-crimson-light flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <feature.icon className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-medium">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
                  alt="Happy customer using Shree Eagle app"
                  className="w-full h-auto"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -top-6 -right-6 z-20 bg-card p-4 rounded-2xl shadow-medium animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                    <span className="text-success text-lg">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Order Delivered</p>
                    <p className="text-xs text-muted-foreground">Just now</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-card p-4 rounded-2xl shadow-medium animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🎉</div>
                  <div>
                    <p className="font-bold text-xl text-primary">₹50 Saved</p>
                    <p className="text-xs text-muted-foreground">On this order</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-crimson-light/50 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppOverviewSection;
