import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=60"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-12 scroll-reveal ${headerVisible ? 'visible' : ''}`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-crimson-light text-primary font-medium text-sm mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              We'd Love to{" "}
              <span className="text-gradient">Hear From You</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Have questions? Need help? We're here for you.
            </p>
          </div>

          {/* Contact Cards */}
          <div
            ref={cardsRef}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <a
              href="tel:+919597673401"
              className={`category-card flex flex-col items-center text-center group scroll-reveal-left ${cardsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=200&q=60"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-crimson-light group-hover:bg-primary transition-colors duration-300" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Phone className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
              <p className="text-primary font-medium">+91 95976 73401</p>
            </a>

            <a
              href="mailto:Shreeeagle21@gmail.com"
              className={`category-card flex flex-col items-center text-center group scroll-reveal ${cardsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '150ms' }}
            >
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=200&q=60"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-crimson-light group-hover:bg-primary transition-colors duration-300" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Mail className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
              <p className="text-primary font-medium">Shreeeagle21@gmail.com</p>
            </a>

            <div
              className={`category-card flex flex-col items-center text-center group scroll-reveal-right ${cardsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=200&q=60"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-crimson-light group-hover:bg-primary transition-colors duration-300" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
              <p className="text-muted-foreground text-sm">Ammaper, Salem, Tamil Nadu</p>
            </div>
          </div>

          {/* External Reference */}
          <div className={`text-center p-8 rounded-2xl relative overflow-hidden scroll-reveal-scale ${cardsVisible ? 'visible' : ''}`} style={{ transitionDelay: '450ms' }}>
            <div className="absolute inset-0 bg-muted/50 border border-border" />
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=30"
                alt=""
                className="w-full h-full object-cover opacity-5"
              />
            </div>
            <div className="relative z-10">
              <p className="text-muted-foreground mb-4">
                Inspired by platforms that put customers first
              </p>
              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline transition-all duration-300 hover:gap-3"
              >
                Learn from the best
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
