import { Link } from "react-router-dom";
import { MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
  ];

  const exploreLinks = [
    { label: "Interactive Map", to: "/map", isReactLink: true },
    { label: "Experiences", to: "#", isReactLink: false },
    { label: "Gastronomy", to: "#", isReactLink: false },
    { label: "Culture", to: "#", isReactLink: false },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4 text-gold" />,
      text: "Grand Place, 1000 Brussels",
    },
    { text: "info@visitbrussels.com", href: "#" },
    { text: "+32 2 513 89 40", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                <span className="font-display font-bold text-cream text-xl">B</span>
              </div>
              <span className="font-display text-xl font-bold">Visit Brussels</span>
            </Link>
            <p className="text-cream/70 font-body max-w-md leading-relaxed mb-6">
              Discover the capital of Europe with our interactive map. 
              Plan your perfect trip and enjoy unique experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-6">Explore</h4>
            <ul className="space-y-3 font-body">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  {link.isReactLink ? (
                    <Link
                      to={link.to}
                      className="text-cream/70 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.to}
                      className="text-cream/70 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 font-body">
              {contactInfo.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-2 ${
                    item.href ? "" : "text-cream/70"
                  }`}
                >
                  {item.icon && item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-cream/70 hover:text-gold transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-cream/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm font-body">
            © 2025 Visit Brussels. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-body">
            <a href="#" className="text-cream/50 hover:text-gold transition-colors">
              Privacy
            </a>
            <a href="#" className="text-cream/50 hover:text-gold transition-colors">
              Terms
            </a>
            <a href="#" className="text-cream/50 hover:text-gold transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
