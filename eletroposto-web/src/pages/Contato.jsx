import React from 'react';
import {Navegacao} from '../components/index'
import { Form, Col, Button, Container } from 'react-bootstrap'

// import { Container } from './styles';

function Contato() {
  return (
    <>
      <Navegacao></Navegacao>
      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Contato;