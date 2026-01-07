import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-dark shadow-elegant py-3">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
              <span className="font-display font-bold text-cream text-xl">B</span>
            </div>
            <span className="font-display text-xl font-bold text-white hidden sm:block">
              Visit Brussels
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-white hover:text-gray font-body transition-colors"
            >
              Home
            </Link>
            <Link
              to="/map"
              className="text-white hover:text-gray font-body transition-colors"
            >
              Map
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Shopping Cart */}
            <Link
              to="/cart"
              className="relative text-white hover:text-gray transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {/* Badge (optional) */}
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-navy text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold text-black">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-white pt-6 animate-fade-up">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-white hover:text-gray font-body py-2">
                Home
              </Link>
              <Link to="/map" className="text-white hover:text-gray font-body py-2">
                Map
              </Link>
              <Link to="/cart" className="text-white hover:text-gray font-body py-2">
                Cart
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
