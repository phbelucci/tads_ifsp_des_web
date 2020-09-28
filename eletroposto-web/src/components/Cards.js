import React from 'react';
import { Card, Button } from 'react-bootstrap';
import star from '../assets/star.png'

function CardsPosto({ eletroPostos, setEletroPostos }) {

    function handleCurtidas(id) {

        eletroPostos.map((posto) => {
            if (posto.id === id) {
                posto.likes += 1;
            }
            return posto.likes
        });

        localStorage.setItem("eletroPostos", JSON.stringify(eletroPostos));

        const listaAtualizada = localStorage.getItem("eletroPostos");

        setEletroPostos([...JSON.parse(listaAtualizada)]);

        window.location.reload();
    }

    return (
        <div>
            {eletroPostos.map(posto => (
                <>
                <Card border="info" style={{ width: '18rem' , height: '10rem'}}>
                    <Card.Header style={{ fontSize: '14px'}}>{posto.nome}</Card.Header>
                    <Card.Body>
                        <Card.Title>Aberto 24? {posto.atendimento24 ? 'Sim' : 'Não'}</Card.Title>
                        <Card.Text>
                        {posto.endereco}
                    </Card.Text>
                    </Card.Body>
                    <Button 
                        id="containerLikes"
                        variant="outline-success"
                        onClick={() => { handleCurtidas(posto.id) }}
                    >
                        <h5>{posto.likes}</h5>
                        <img src={star} alt='star'/>Curtir
                    </Button>
                </Card>
                <br/>
                </>
            ))}
        </div>
    )

}

export default CardsPosto;