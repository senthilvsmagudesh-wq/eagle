import { UtensilsCrossed, Cookie, Carrot, Apple, Wrench, Car } from "lucide-react";
import CategoryCard from "./CategoryCard";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const categories = [
  {
    icon: UtensilsCrossed,
    title: "Fresh Food",
    description: "Delicious meals from trusted local restaurants delivered hot",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
  },
  {
    icon: Cookie,
    title: "Snacks & Sweets",
    description: "Traditional Indian snacks and sweets at fair prices",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80",
  },
  {
    icon: Carrot,
    title: "Fresh Vegetables",
    description: "Farm-fresh vegetables delivered straight to your doorstep",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80",
  },
  {
    icon: Apple,
    title: "Fruits",
    description: "Handpicked seasonal fruits with guaranteed freshness",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&q=80",
  },
  {
    icon: Wrench,
    title: "Mechanic Services",
    description: "Trusted repair services for all your home appliances",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80",
  },
  {
    icon: Car,
    title: "Car Mechanic",
    description: "Professional auto care services at transparent pricing",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80",
  },
];

const CategoriesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=1920&q=30')] bg-cover bg-center opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 scroll-reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-crimson-light text-primary font-semibold text-sm mb-5 tracking-wide shadow-sm">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
            Everything You Need,{" "}
            <span className="text-gradient">One App</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-medium">
            From daily groceries to essential services, we've got you covered
            with fair and transparent pricing.
          </p>
        </div>

        {/* Categories Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 stagger-children ${gridVisible ? 'visible' : ''}`}
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              description={category.description}
              image={category.image}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-foreground text-background font-bold text-base transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-2xl shadow-lg">
            View All Services
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
