import React from 'react';
import { Link , BrowserRouter } from 'react-router-dom';
import logo from '../../assets/png-clipart-batman-logo-batman-batgirl-joker-logo-batman-logo-heroes-comic-book-removebg-preview.png';
import './style.css';


function Header(){
  return(
    <header>
      <img id="logo" src={logo} alt="logo"/>
      <nav>
        <ul>
            <li>
              Home
            </li>
            <li>Contato</li>
            <li>Fotos</li>
            <li>Comentarios</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;