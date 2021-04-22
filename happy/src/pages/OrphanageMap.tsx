import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/global.scss';
import '../styles/screens/orphanage-map.scss';
import logoImg from '../images/logo.svg';

import 'leaflet/dist/leaflet.css';
import  { MapContainer, TileLayer } from 'react-leaflet';

export default function OrphanageMap(){
  return(
    <div className="page-map">
      <aside>
        <header>
          <img src={ logoImg } alt="logo"/>

          <h2> Escolha um orfanato no mapa </h2>
          <p> Visite crianças e mude o dia delas :) </p>
        </header>

        <div className="location">
          <strong> Quixadá </strong>
          <span> Ceará </span>
        </div>

        <Link to="/" className="back-home" >
          <FiPlus size={26} color="#FFF" />
        </Link>
      </aside>

      <MapContainer center={[-4.0705023,-38.4955035]} zoom={15} style={{ width: '100%' , height: '100%'}}>
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
      </MapContainer>
    </div>
  );
}