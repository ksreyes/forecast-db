import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapView.css";

export default function MapView() {
  return (
    <div className="map-container w-full">
      <MapContainer
        center={[9.0, 7.5]} // initial center (latitude, longitude)
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Base map (OpenStreetMap raster tiles) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />

        {/* Example raster overlay (like weather or custom raster tiles) */}
        <TileLayer
          url="https://tiles.openaq.org/{z}/{x}/{y}.png"
          opacity={0.6}
        />
      </MapContainer>
    </div>
  );
}