import React from 'react';
import { Image, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import logo from '../assets/reciclar.svg'

function Navegacao() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                    <Image 
                        
                        width="50"
                        height="50"
                        src={logo} roundedCircle 
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <h3 style={{marginRight: '100px'}}>Rede de Abastacimentod de Carros Elétricos</h3>
                            <Nav.Link href="sobre">Sobre</Nav.Link>
                            <Nav.Link href="contato">Fale Conosco</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br/>
        </>
    )
};

export default Navegacao;