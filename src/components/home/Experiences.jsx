import { Link } from "react-router-dom";
import {
  MapPin,
  Info,
  PlusCircle,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Explore the map",
    description:
      "Navigate the interactive map of Brussels and view all available points of interest.",
    icon: MapPin,
  },
  {
    step: "02",
    title: "Discover the spots",
    description:
      "Click any point to see detailed information, photos, and useful data.",
    icon: Info,
  },
  {
    step: "03",
    title: "Learn about Belgium",
    description:
      "Discover the history behind each monument.",
    icon: PlusCircle,
  },
  {
    step: "04",
    title: "Design your trip!",
    description:
      "Select monuments and design your fabulous trip to belgium. Then, download your trip as PDF.",
    icon: ShoppingCart,
  }
];

const Experiences = () => {
  return (
    <section className="py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            How it works
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4">
            Create your trip
            <span className="text-gradient-gold"> step by step</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            No predefined routes. No rush.
            Choose only the points you really want to visit.
          </p>
        </div>

        {/* Stepper */}
        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-5 left-0 right-0 h-2 bg-gradient-gold" />

          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="relative">
                {/* Step number */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold text-foreground font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <Icon className="w-7 h-7 text-gold mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24">
          <Link to="/map">
            <button className="flex items-center gap-2 px-6 py-3 text-lg font-semibold bg-gold text-foreground rounded-xl hover:bg-yellow-500 transition-colors">
              Start now
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
