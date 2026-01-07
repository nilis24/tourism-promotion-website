import { Link } from "react-router-dom";
import { Landmark, UtensilsCrossed, Beer, Palette } from "lucide-react";

const highlights = [
  {
    icon: Landmark,
    title: "UNESCO Heritage",
    description:
      "The Grand Place, considered one of the most beautiful squares in the world, has been a UNESCO World Heritage site since 1998.",
    color: "text-gold",
  },
  {
    icon: UtensilsCrossed,
    title: "Gastronomy",
    description:
      "Crispy waffles, world-famous Belgian chocolate, and moules-frites that will amaze you.",
    color: "text-accent",
  },
  {
    icon: Beer,
    title: "Beer Culture",
    description:
      "Over 1,500 varieties of beer. Belgium's brewing tradition is also recognized as UNESCO heritage.",
    color: "text-gold-dark",
  },
  {
    icon: Palette,
    title: "Art Nouveau",
    description:
      "Brussels is the world capital of Art Nouveau with masterpieces by Victor Horta.",
    color: "text-burgundy",
  },
];

const Highlights = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Why Brussels?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            A city with a thousand
            <span className="text-gradient-gold"> magical corners</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Discover everything that makes Brussels a unique and unforgettable destination.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group p-8 rounded-2xl bg-card shadow-soft hover-lift cursor-pointer border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            to="/map"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group"
          >
            Discover all points of interest
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
