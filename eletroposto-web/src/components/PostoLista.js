import React, { useEffect, useState } from 'react';
import star from '../assets/star.png'

// import { Container } from './styles';

function PostoLista({ eletroPostos, setEletroPostos}) {

  function handleCurtidas(id) {

    eletroPostos.map(posto => {
      if (posto.id === id) {
        posto.likes += 1;
      }
    });

    localStorage.setItem("eletroPostos", JSON.stringify(eletroPostos));

    const listaAtualizada = localStorage.getItem("eletroPostos");

    setEletroPostos([...JSON.parse(listaAtualizada)]);

    window.location.reload(); 
    
  }

  return (
    <div>
      {eletroPostos.map(posto => {
        return (
          <div key={posto.id} id="cardPostoContainer">
            <div>
            <h3>{posto.nome}</h3>
            <span>{posto.endereco}</span>
            <br/>
            <span>Aberto 24hrs? {posto.atendimento24 && "Sim" || "Não"}</span>
            </div>
            <div id="containerLikes">
              <h5>{posto.likes}</h5>
              <button onClick={() => { handleCurtidas(posto.id) }}><img src={star}></img></button>  
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default PostoLista;