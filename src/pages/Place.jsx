import { useParams } from 'react-router-dom';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import places from '../data/places.json';
import 'leaflet/dist/leaflet.css';
import { useCart } from "../context/CartContext";
import L from 'leaflet';

// Fix Leaflet default icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

export default function Place() {

  const { slug } = useParams();

  // Find the place object
  const placeObj = places.find((item) => item.slug === slug);

  const { addToCart, isInCart, removeFromCart } = useCart();
  const inCart = isInCart(placeObj.slug);

  // Fallback if not found
  if (!placeObj) {
    return <h1 className="text-center mt-40 text-2xl font-bold">Place not found</h1>;
  }

  const { content } = placeObj;
  const { name: title, lat, lon, description, video, additional_info, gallery } = content;

  return (
    <article className="max-w-4xl mx-auto px-6 py-30 space-y-10">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      <div className="mt-6">
        {!inCart ? (
          <button
            onClick={() => addToCart(placeObj)}
            className="bg-gradient-gold text-navy font-semibold px-6 py-3 rounded-lg hover:bg-gold-dark transition"
          >
            Add to cart
          </button>
        ) : (
          <button
            onClick={() => removeFromCart(placeObj.slug)}
            className="border border-border px-6 py-3 rounded-lg hover:bg-muted transition"
          >
            Remove from cart
          </button>
        )}
      </div>


      {/* Small Leaflet Map */}
      <section className="mt-6 h-64 w-full rounded-lg overflow-hidden shadow-md">
        <MapContainer
          center={[parseFloat(lat), parseFloat(lon)]}
          zoom={16}
          scrollWheelZoom={false}
          style={{ width: '100%', height: '100%' }}
          className='z-0'
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[parseFloat(lat), parseFloat(lon)]}>
            <Popup>{title}</Popup>
          </Marker>
        </MapContainer>
      </section>

      {/* Description */}
      <section className="mt-6">
        <p className="text-lg leading-relaxed">{description}</p>
      </section>

      {/* Video */}
      {video && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Video</h2>
          <div className="aspect-video w-full">
            <iframe
              src={video}
              title={`${title} video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        </section>
      )}

      {/* Additional Info */}
      {additional_info && additional_info.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">Additional Info</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additional_info.map((info, index) => (
              <div
                key={index}
                className="p-6 border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg mb-2">{info.name}</h3>
                <p className="text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Gallery */}
      {gallery && gallery.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title} - image ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg shadow-sm"
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
