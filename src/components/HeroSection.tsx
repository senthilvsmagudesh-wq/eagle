import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smart-phone-with-a-food-delivery-app-34567-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Enhanced Gradient Overlays */}
        {/* Clean Gradient Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          {/* Badge */}
          <div className="hidden md:inline-flex animate-fade-up items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white/95 text-sm font-semibold mb-10 shadow-lg hover:bg-white/15 transition-all duration-300">
            <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
            <span className="tracking-wide">Serving 50+ locations across India</span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Your Daily Essentials,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-rose-500 animate-gradient-x">
              Fair Prices
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium px-4">
            From fresh groceries to trusted local services — Shree Eagle connects you
            with everything you need, at prices that feel right.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
            <button className="btn-hero group flex items-center gap-3 text-lg font-bold px-8 py-5 animate-pulse-glow shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
              Explore Services
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-300" />
            </button>

            <button className="flex items-center gap-4 px-7 py-4 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </div>
              <span className="text-base">Watch Our Story</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-up-delay-3 mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-white/70 text-sm">
            <div className="flex flex-col items-center gap-1 min-w-[120px]">
              <span className="text-3xl md:text-4xl font-extrabold text-white bg-clip-text">10K+</span>
              <span className="text-white/80 font-medium tracking-wide">Happy Customers</span>
            </div>
            <div className="w-px h-12 bg-white/30 hidden sm:block" />
            <div className="flex flex-col items-center gap-1 min-w-[120px]">
              <span className="text-3xl md:text-4xl font-extrabold text-white">500+</span>
              <span className="text-white/80 font-medium tracking-wide">Local Partners</span>
            </div>
            <div className="w-px h-12 bg-white/30 hidden sm:block" />
            <div className="flex flex-col items-center gap-1 min-w-[120px]">
              <span className="text-3xl md:text-4xl font-extrabold text-white">4.8★</span>
              <span className="text-white/80 font-medium tracking-wide">User Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-7 h-11 rounded-full border-2 border-white/40 flex items-start justify-center p-2 backdrop-blur-sm bg-white/5">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
