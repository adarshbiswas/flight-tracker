import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import axios from "axios";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
// import { assets } from '../assets/assets';

const planeIcon = new L.Icon({
  iconUrl: "../assets/plane_icon.png", // Add your icon here
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const MainPage = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/flights");
        setFlights(response.data);
      } catch (error) {
        console.error("Error fetching flight data", error);
      }
    };

    fetchFlights();
    console.log(flights)
    // const interval = setInterval(fetchFlights, 30000); // Update every 30 seconds

    // return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div id="main-page">
      <MapContainer center={[20, 0]} zoom={2} style={{ height: "100vh" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {flights.map((flight) => (
          <Marker
            key={flight.flight_date}
            position={[flight?.live?.latitude, flight?.live?.longitude]} // Flight lat, long
            icon={planeIcon}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default MainPage;
