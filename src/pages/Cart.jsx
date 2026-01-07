import React from "react";
import { Link } from "react-router-dom";
import ItineraryPDF from "../components/ItineraryPDF";
import { MapPin, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";


export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const cartItems = cart;

  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      {/* Page title */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your Travel Cart
        </h1>
        <p className="text-muted-foreground text-lg">
          Places you’ve selected to visit in Brussels
        </p>
      </header>

      {/* Empty state */}
      {cartItems.length === 0 && (
        <div className="text-center py-20">
          <MapPin className="w-12 h-12 mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-2xl font-semibold mb-2">
            Your cart is empty
          </h2>
          <p className="text-muted-foreground mb-6">
            Start exploring Brussels and add places to your cart.
          </p>
          <Link
            to="/map"
            className="inline-block bg-gold text-navy font-semibold px-6 py-3 rounded-lg hover:bg-gold-dark transition"
          >
            Explore the Map
          </Link>
        </div>
      )}

      {/* Cart items */}
      {cartItems.length > 0 && (
        <div className="space-y-8">
          {cartItems.map((place) => (
            <div
              key={place.slug}
              className="flex flex-col md:flex-row gap-6 border border-border rounded-xl p-6 shadow-sm"
            >
              {/* Image */}
              {place.content.gallery?.[0] && (
                <img
                  src={place.content.gallery[0]}
                  alt={place.content.name}
                  className="w-full md:w-48 h-40 object-cover rounded-lg"
                />
              )}

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  {place.content.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {place.content.description}
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <Link
                    to={`/place/${place.slug}`}
                    className="text-gold font-medium hover:underline"
                  >
                    View details
                  </Link>

                    <button
                    onClick={() => removeFromCart(place.slug)}
                    className="flex items-center gap-2 text-red-500 hover:text-red-600"
                    >
                    <Trash2 className="w-4 h-4" />
                    Remove
                    </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cart summary */}
      {cartItems.length > 0 && (
        <aside className="mt-16 border-t border-border pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-semibold">
              Total places selected:
              <span className="text-gold ml-2">
                {cartItems.length}
              </span>
            </p>
            <p className="text-sm text-muted-foreground">
              You can export your itinerary later as a PDF
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              to="/map"
              className="px-6 py-3 rounded-lg border border-border hover:bg-muted transition"
            >
              Add more places
            </Link>

            <ItineraryPDF />
          </div>
        </aside>
      )}
    </main>
  );
}
