import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

export default function Profile(){
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>

        <Link className="button" to="/incidents/new"> Cadastrar novo caso </Link>
        <button type="button">
          <FiPower size={18} color="#E02041"/>
        </button>
      </header>

      <h1> Casos Cadastrados </h1>
      <ul>
        <li>
          <strong></strong>
          <p></p>

          <strong></strong>
          <p></p>

          <strong></strong>
          <p></p>

          <button type="button"> <FiTrash2 size={14}  color="#a8a8b3"/> </button>
        </li>
      </ul>
    </div>
  )
}