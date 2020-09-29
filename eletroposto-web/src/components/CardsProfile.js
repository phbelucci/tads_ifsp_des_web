import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function CardsProfile({profile_info}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={profile_info.img} />
                <Card.Body>
                    <Card.Title>{profile_info.nome}</Card.Title>
                    <Card.Text>
                    {profile_info.descricao}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}

export default CardsProfile;