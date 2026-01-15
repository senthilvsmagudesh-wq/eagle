import { ShieldCheck, Award, Users, Clock } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "100% Verified",
    description: "Every partner undergoes strict verification",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&q=60",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "No compromise on product or service standards",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=200&q=60",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Supporting local businesses and families",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=60",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "24/7 support for all your needs",
    image: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=200&q=60",
  },
];

const TrustSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=60" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={ref}
          className={`flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16`}
        >
          {trustPoints.map((point, index) => (
            <div 
              key={point.title} 
              className={`flex items-center gap-4 group ${
                index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'
              } ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon with image background */}
              <div className="relative w-14 h-14 rounded-xl overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <img 
                  src={point.image} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 group-hover:bg-primary transition-colors duration-300" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <point.icon className="w-7 h-7 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
              
              <div className="transition-all duration-300 group-hover:translate-x-1">
                <h3 className="font-semibold text-background text-lg">{point.title}</h3>
                <p className="text-sm text-background/60 group-hover:text-background/80 transition-colors duration-300">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
          {[
            { value: "10K+", label: "Happy Customers" },
            { value: "500+", label: "Local Partners" },
            { value: "50+", label: "Cities" },
            { value: "4.8★", label: "Rating" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-background/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
