import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  delay?: number;
}

const CategoryCard = ({ icon: Icon, title, description, image, delay = 0 }: CategoryCardProps) => {
  return (
    <div 
      className="category-card group relative overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="relative w-16 h-16 mb-4 mx-auto">
          <div className="w-full h-full rounded-2xl bg-crimson-light flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-glow">
            <Icon className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-primary-foreground group-hover:scale-110" />
          </div>
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ boxShadow: '0 0 30px hsl(var(--primary) / 0.5)' }} />
        </div>

        {/* Text Content */}
        <h3 className="text-lg font-semibold text-foreground mb-2 text-center transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground text-center leading-relaxed">
          {description}
        </p>

        {/* Hover Arrow */}
        <div className="mt-4 flex justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="text-primary font-medium text-sm flex items-center gap-1">
            Explore
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>

      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" 
        style={{ 
          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.3), transparent, hsl(var(--primary) / 0.3))',
          padding: '2px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMaskComposite: 'xor'
        }} 
      />
    </div>
  );
};

export default CategoryCard;
