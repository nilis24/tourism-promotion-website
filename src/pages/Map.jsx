import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import places from "../data/places.json";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default Leaflet icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function Map() {
  const bounds = places.map((p) => [
    parseFloat(p.content.lat),
    parseFloat(p.content.lon),
  ]);

  return (
    <div className="relative w-full h-screen">
      {/* Leaflet Map */}
      <MapContainer
        bounds={bounds}
        className="w-full h-full z-0"
        scrollWheelZoom={true}
        zoomControl={false}
        center={[50.86407440104692, 4.377123748098515]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {places.map((place) => (
          <Marker
            key={place.slug}
            position={[
              parseFloat(place.content.lat),
              parseFloat(place.content.lon),
            ]}
          >
            <Popup closeButton={true}>
              <div className="text-center">
                <div className="font-bold mb-2">{place.content.name}</div>
                <Link
                  to={`/place/${place.slug}`}
                  className="inline-block bg-gold text-navy font-semibold px-3 py-1 rounded hover:bg-gold-dark transition-colors text-sm"
                >
                  View Details
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Header should have higher z-index */}
      <div className="absolute top-0 left-0 w-full z-50">
        {/* Header will be rendered here or via Layout */}
      </div>
    </div>
  );
}
