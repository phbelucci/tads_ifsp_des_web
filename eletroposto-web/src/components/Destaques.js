import React, { useState } from 'react';
import api from '../api';
import star from '../assets/star.png'
// import { Container } from './styles';

function Destaques() {
  const [postos, setPostos] = useState([
    {
      "id": 1,
      "CEP": "13041-009",
      "atendimento24": false,
      "bairro": "Jardim Leonor",
      "cidade": "Campinas - SP",
      "coordenadas": [
        -22.915777,
        -47.065287
      ],
      "endereco": "R. Fernão Pompeu de Camargo, 800",
      "header": "Eletroposto",
      "imagem": "https://geo1.ggpht.com/cbk?panoid=sTlGRpi63VKu-6vBR2fF4w&output=thumbnail&cb_client=search.gws-prod.gps&thumb=2&yaw=270.70032&pitch=0&thumbfov=100&w=262&h=104",
      "nome": "CPFL",
      "curtidas": 0
    },
    {
      "id": 2,
      "CEP": "13026-510",
      "atendimento24": true,
      "bairro": "Bosque",
      "cidade": "Campinas - SP",
      "coordenadas": [
        -22.902865,
        -47.055127
      ],
      "endereco": "Av. Aquidabã, 440",
      "header": "Eletroposto",
      "imagem": "https://lh5.googleusercontent.com/p/AF1QipNfn7aCiY_gnlO5FmMqr2Bo3WKFH-Sf2KoT4nyD=w408-h545-k-no",
      "nome": "CPFL",
      "curtidas": 0
    },
    {
      "id": 3,
      "CEP": "13025-066",
      "atendimento24": false,
      "bairro": "Conceicao",
      "cidade": "Campinas - SP",
      "coordenadas": [
        -22.88887,
        -47.052279
      ],
      "endereco": "R. General Osório",
      "header": "Eletroposto",
      "imagem": "https://geo0.ggpht.com/cbk?panoid=rJnGE1X-Tsm0ow0yq4WcNw&output=thumbnail&cb_client=search.gws-prod.gps&thumb=2&yaw=136.35768&pitch=0&thumbfov=100&w=262&h=104",
      "nome": "CPFL",
      "curtidas": 0
    },
    {
      "id": 4,
      "CEP": "13025-066",
      "atendimento24": false,
      "bairro": "Conceicao",
      "cidade": "Campinas - SP",
      "coordenadas": [
        -22.88887,
        -47.052279
      ],
      "endereco": "R. General Osório",
      "header": "Eletroposto",
      "imagem": "https://geo0.ggpht.com/cbk?panoid=rJnGE1X-Tsm0ow0yq4WcNw&output=thumbnail&cb_client=search.gws-prod.gps&thumb=2&yaw=136.35768&pitch=0&thumbfov=100&w=262&h=104",
      "nome": "CPFL",
      "curtidas": 0
    }])

  async function handleCurtidas(id) {

    const index = postos.map(posto => {
      if (posto.id === id) {
        posto.curtidas += 1;
      }
    });

    setPostos([...postos]);
    //TODO PUT FIREBASE
    // const postoCurtidasUpdate = await api.put('update', novoQtdCurtidas);
  }
  return (
    <div>
      {postos.map(posto => {

        return (

          <div id="conteudoCardDestaque">
            <div id="img">
              <img src={posto.imagem} style={{ width: "200px", height: "100px", borderRadius: "5px" }}></img>
            </div>
            <div id="conteudoDestaque">
              <span>{posto.nome}</span>
              <span>{posto.endereco}</span>
            </div>
            <div>
              <span>{posto.curtidas}</span>
              <button style={{ backgroundColor: "transparent", border: "0px" }} onClick={() => { handleCurtidas(posto.id) }}><img src={star} style={{ backgroundColor: "transparent", height: "20px", width: "20px" }}></img></button>
            </div>
          </div>

        )
      })}
    </div>
  );
};

export default Destaques;