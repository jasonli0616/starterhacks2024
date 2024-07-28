"use client"

import "./map.css";
import {useEffect, useState} from "react";  
import {useAuth0} from "@auth0/auth0-react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {Icon} from "leaflet";
import 'leaflet/dist/leaflet.css';


function Map(){
  const position = [300, 200]; 
  return (
    <div className="map">
      <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            🐻🍻🎉
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;