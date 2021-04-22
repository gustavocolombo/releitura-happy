import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import logoImg from '../images/logo.svg';
import '../styles/global.scss';
import '../styles/screens/landing.scss';



export default function Landing(){
  return(
    <div id="page-landing">
      <div className="content-wrapper">
        <main>
          <img src={ logoImg } alt="logo"/>

          <h1>Leve felicidade ao mundo</h1>
          <p>Visite crianças e mude o dia delas :)</p>
        </main>

        <div className="location">
          <strong>Quixadá</strong>
          <span>Ceará</span>
        </div>

        <Link to="/orphanage" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
        </Link>
      </div>
    </div>
  );
}