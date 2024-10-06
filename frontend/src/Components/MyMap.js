import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import the marker images
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';

// Configure the default marker icon
const DefaultIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIconRetina,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;


const MyMap = () => {
  return (
    <MapContainer center={[9.435920312684168, 77.55464800456141]} zoom={18} style={{ height: "100%", width: "100%" ,borderRadius:"20px"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={[9.435920312684168, 77.55464800456141]}>
        <Popup>
          Hashan Medicare, Indian Trade Union Congress Nagar, Pudupalayam, Rajapalayam, Tamil Nadu, 626117, India.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
