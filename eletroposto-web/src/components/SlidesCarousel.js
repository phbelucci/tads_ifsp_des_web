import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function slidesCarousel({ postosDestaque }) {

    return (
        <Carousel className="w-100" >
            {postosDestaque.map(posto => (
                    <Carousel.Item >
                        <img
                            width="100%"
                            height="250px"
                            src={posto.imagem}
                            alt={posto.nome}
                        />
                        <Carousel.Caption>
                            <h3>{posto.nome}</h3>
                            <p>{posto.endereco}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
            ))}

        </Carousel>
    )

}
export default slidesCarousel;