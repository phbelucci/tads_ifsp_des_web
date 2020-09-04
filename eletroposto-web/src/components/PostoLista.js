import React from 'react';

// import { Container } from './styles';

function PostoLista({ eletroPostos }) {

  console.log(eletroPostos);
  return (
    <div>
      {eletroPostos.map(posto => {
        return (
          <div id="containerCards">
            <div id="cardPostoContainer">
              <h3>{posto.nome}</h3>
              <h5>{posto.endereco}</h5>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default PostoLista;