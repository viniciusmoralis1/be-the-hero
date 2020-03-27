import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
  return (
    <div className="incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolve-lo</p>

          <Link className="back-link" to="/profile"> 
            <FiArrowLeft size={16} color="#E02141"/>
              Voltar para home
          </Link>
        </section>
        <form>
          <input placeholder="Título do caso"/>
          <textarea placeholder="Descrição"/>
          <input placeholder="Valor em reais"/>

          <button className="button" type="submit"> Cadastrar </button>
        </form>
      </div>

    </div>
  )
}