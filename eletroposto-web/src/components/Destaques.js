import React  from 'react';

function Destaques({ postosDestaque }) {


  return (
    <div>
      {postosDestaque.map(posto => {
        return (

          <div key={posto.id} id="conteudoCardDestaque">
            <div id="img">
              <img src={posto.imagem} style={{ width: "200px", height: "100px", borderRadius: "5px" }}></img>
            </div>
            <div id="conteudoDestaque">
              <span>{posto.nome}</span>
              <span>{posto.endereco}</span>
            </div>
            <div>
              <span>Aberto 24hrs? {posto.atendimento24 && "Sim" || "Não"}</span>
            </div>
          </div>

        )
      })}
    </div>
  );
};

export default Destaques;