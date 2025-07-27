"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Solución para el problema del ícono por defecto con Webpack/Vite
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const locations = [
  {
    position: [-33.4489, -70.6693], // Santiago, Chile
    name: "Chile",
    details: "Casa matriz y sucursales en Santiago, Concepción, Osorno, Viña del Mar."
  },
  {
    position: [4.7110, -74.0721], // Bogotá, Colombia
    name: "Colombia",
    details: "Servicios especializados."
  },
  {
    position: [-0.1807, -78.4678], // Quito, Ecuador
    name: "Ecuador",
    details: "Cobertura tecnológica."
  },
  {
    position: [-12.0464, -77.0428], // Lima, Peru
    name: "Perú",
    details: "Operaciones regionales."
  }
];

const InteractiveMap = () => {
  return (
    <MapContainer 
      center={[-15, -70]} // Centrado en Sudamérica
      zoom={3} 
      scrollWheelZoom={false} 
      style={{ height: '400px', width: '100%', borderRadius: '8px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map(location => (
        <Marker key={location.name} position={[location.position[0], location.position[1]]}>
          <Popup>
            <b>{location.name}</b><br />{location.details}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default InteractiveMap;