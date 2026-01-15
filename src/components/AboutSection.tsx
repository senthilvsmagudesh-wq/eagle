import TeamCard from "./TeamCard";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const teamMembers = [
  {
    name: "Sabari Vasan",
    role: "Proprietor",
    image: "/founder.png",
    description: "Founder of Shree Eagle Info Services in Salem. Started in September to provide fair prices for everyone.",
  },
  {
    name: "Adv. William Prince",
    role: "Advocate, BABL",
    image: "/advocate.jpg",
    description: "Legal Advisor (30 Years Exp). Founding President, Tamil Nadu People's Rights Association.",
  },
  {
    name: "Senthil",
    role: "Auditor - CA (Inter)",
    image: "/auditor.jpg",
    description: "15 Years of Experience ensuring financial trust and accountability.",
  },
  {
    name: "Yathava Krishna Guptha.G",
    role: "DIT., B.Tech (IT)",
    image: "/yathava-krishna.jpg",
    description: "Driving technological innovation and digital excellence for the team.",
  },
];

const AboutSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full overflow-hidden opacity-10">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=60"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full overflow-hidden opacity-10">
          <img
            src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&q=60"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 scroll-reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-crimson-light text-primary font-medium text-sm mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet the People Behind{" "}
            <span className="text-gradient">Shree Eagle</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A team of passionate professionals dedicated to transforming how
            India shops and accesses essential services.
          </p>
        </div>

        {/* Team Grid */}
        <div
          ref={teamRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto stagger-children ${teamVisible ? 'visible' : ''}`}
        >
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <TeamCard
                name={member.name}
                role={member.role}
                image={member.image}
                description={member.description}
              />
            </div>
          ))}
        </div>

        {/* Story Section with Image */}
        <div
          ref={quoteRef}
          className={`mt-20 relative scroll-reveal ${quoteVisible ? 'visible' : ''}`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Side */}
              <div className={`relative scroll-reveal-left ${quoteVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
                    alt="Team working together"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-xl">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Cities Served</p>
                </div>
              </div>

              {/* Quote Side */}
              <div className={`scroll-reveal-right ${quoteVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
                <blockquote className="text-xl md:text-2xl text-foreground font-medium italic leading-relaxed mb-6">
                  "We believe in a world where quality isn't a luxury.
                  Where fair pricing is the norm, not the exception.
                  Where local businesses thrive alongside their communities."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary ring-offset-2">
                    <img
                      src="/founder.png"
                      alt="Sabari Vasan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">Sabari Vasan</p>
                    <p className="text-sm text-muted-foreground">Proprietor, Shree Eagle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
