const ServicesScroll = () => {
    const services = [
        { image: "/service-mechanic.png", title: "Car Mechanic" },
        { image: "/service-plumber.png", title: "Plumber Services" },
        { image: "/service-taxi.png", title: "Taxi Services" },
        { image: "/groceries-bg.png", title: "Fresh Groceries" },
    ];

    // Duplicate for desktop infinite scroll, original for mobile
    const duplicatedServices = [...services, ...services, ...services];

    return (
        <section className="py-16 bg-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=1920&q=30')] bg-cover bg-center" />
            </div>

            {/* Decorative Blurs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 mb-12 relative z-10">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="inline-block px-5 py-2 rounded-full bg-crimson-light text-primary font-semibold text-sm mb-5 tracking-wide shadow-sm">
                        Our Services
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 leading-tight">
                        All Your Needs,{" "}
                        <span className="text-gradient">One Platform</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        From car repairs to fresh groceries, we bring quality services to your doorstep
                    </p>
                </div>
            </div>

            {/* Infinite Scrolling Container - Desktop Only */}
            <div className="relative z-10 w-full overflow-hidden hidden md:block">
                <div className="flex animate-scroll-left hover:pause">
                    {duplicatedServices.map((service, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-64 h-48 md:w-72 md:h-60 mx-3 md:mx-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                        >
                            <div className="relative w-full h-full">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                    <h3 className="text-white text-lg md:text-xl font-bold drop-shadow-lg">{service.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gradient Overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
            </div>
        </section>
    );
};

export default ServicesScroll;
