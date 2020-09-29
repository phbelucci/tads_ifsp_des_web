import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function slidesCarousel({ postosDestaque }) {

    console.log('postosDestaque',postosDestaque)
    return (
        <Carousel className="w-50" >

            {postosDestaque.map(posto => (
                    <Carousel.Item id="itemCarousel">
                        <img
                            className="d-block w-100"
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