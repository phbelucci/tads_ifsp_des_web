import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function CardsProfile({profile_info}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={profile_info.avatar_url} style={{ borderRadius: '50%' }}/>
                <Card.Body>
                    <Card.Title>{profile_info.name || profile_info.login}</Card.Title>
                    <Card.Text>
                    {profile_info.bio}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}

export default CardsProfile;