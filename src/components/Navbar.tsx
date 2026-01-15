import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <span className="text-primary-foreground font-bold text-2xl">🦅</span>
            </div>
            <span
              className={`text-xl font-extrabold transition-colors duration-300 tracking-tight ${isScrolled ? "text-foreground" : "text-white"
                }`}
            >
              Shree Eagle
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-semibold text-base transition-all duration-300 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${isScrolled ? "text-foreground" : "text-white/95 hover:text-white"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-7 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-base transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-lg hover:shadow-xl">
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-lg transition-all duration-300 ${isScrolled ? "text-foreground hover:bg-foreground/10" : "text-white hover:bg-white/10"
              }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background shadow-medium border-t border-border animate-fade-up">
            <div className="container mx-auto px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3.5 text-foreground font-semibold text-base hover:text-primary transition-colors border-b border-border/50 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full mt-6 px-7 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base shadow-lg">
                Download App
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
