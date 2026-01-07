import { Link } from "react-router-dom";
import { MapPin, Sparkles } from "lucide-react";
import heroBrussels from "../../assets/edited-image.jpg";

const Hero = () => {
  // Styled button to replace the previous Button component
  const HeroButton = ({ children, className, outline, ...props }) => (
    <button
      {...props}
      className={`flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold rounded-xl transition-transform ${
        outline
          ? "border-2 border-cream text-cream hover:bg-cream/10"
          : "bg-gradient-to-r from-gold to-yellow-400 text-foreground hover:scale-105"
      } ${className || ""}`}
    >
      {children}
    </button>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBrussels}
          alt="Grand Place of Brussels at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-gold opacity-60 animate-float" />
      <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-gold opacity-40 animate-float animation-delay-200" />
      <div className="absolute bottom-40 left-20 w-4 h-4 rounded-full bg-gold opacity-50 animate-float animation-delay-400" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-cream">
              Discover the capital of Europe
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 animate-fade-up animation-delay-100">
            Brussels
            <span className="block text-gradient-gold">awaits you</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 font-body leading-relaxed animate-fade-up animation-delay-200">
            Art Nouveau, artisanal chocolate, Trappist beer, and centuries of history. 
            Plan your perfect trip and experience something unique in the heart of Belgium.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
            <Link to="/map">
              <HeroButton className="mx-auto">
                <MapPin className="w-5 h-5 transition-transform group-hover:scale-110" />
                Explore the map
              </HeroButton>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto animate-fade-up animation-delay-400">
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-white">50+</div>
              <div className="text-sm text-white font-body">Points of Interest</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-white">1000</div>
              <div className="text-sm text-white font-body">Years of History</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-white">∞</div>
              <div className="text-sm text-white font-body">Unique Memories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
