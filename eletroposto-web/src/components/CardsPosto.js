import React, { useState } from 'react';
import { Card, Button, FormControl, Form } from 'react-bootstrap';
import star from '../assets/star.png'

function CardsPosto({eletroPostos, filesInLocalStorage, setEletroPostos}) {

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

    function handleSearch(e) {
        e.preventDefault()
        e.target.value.toLowerCase()

        const listaAtualizada = JSON.parse(filesInLocalStorage).filter((posto) => {
            return (
                posto.nome.toLowerCase().includes(e.target.value)
                || posto.endereco.toLowerCase().includes(e.target.value)
                || posto.cidade.toLowerCase().includes(e.target.value)
                || posto.bairro.toLowerCase().includes(e.target.value)
            )
        });

        if(listaAtualizada.length === 0) setEletroPostos([...JSON.parse(filesInLocalStorage)])
        else setEletroPostos([...listaAtualizada])
        
        console.log('eletropostos tela Cards',eletroPostos)
    }

    return (
        <div>
            <Form inline>
                <FormControl onChange={(e) => handleSearch(e)} type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            {eletroPostos.map(posto => (
                <>
                    <Card border="info" style={{ width: '18rem', height: '10rem' }}>
                        <Card.Header style={{ fontSize: '14px' }}>{posto.nome}</Card.Header>
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
                            <img src={star} alt='star' />Curtir
                    </Button>
                    </Card>
                    <br />
                </>
            ))}
        </div>
    )

}

export default CardsPosto;