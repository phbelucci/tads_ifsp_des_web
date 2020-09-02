import React from 'react';

// import { Container } from './styles';

function CardPosto({eletroPostos}) {
  return (
    <div id="cardPostoContainer">
        <img src={`${eletroPostos.imagem}`}/>
        <h3>{eletroPostos.nome}</h3>
        <h5>{eletroPostos.endereco}</h5>
    </div>
    );
}

export default CardPosto;