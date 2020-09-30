import React, { useRef, useState } from 'react';
import { Navegacao } from '../components/index'
import { Form, Col, Button, Container, Alert } from 'react-bootstrap'
import api from '../api/api';

// import { Container } from './styles';

function Contato() {

  const email = useRef(null)
  const mensagem = useRef(null)
  const [mensagemSucesso, setMensagemSucesso] = useState(false)

  function handleAlert() {

    if (mensagemSucesso) {
      return (
        <Alert variant='success' style={{ width: '50%', marginTop: '50px' }}>
          A mensagem foi enviada com sucesso!
        </Alert>
      )
    } else {
      if (email.current !== '') {
       
        return (
          <Alert variant='danger' style={{ width: '50%', marginTop: '50px' }}>
            A mensagem não foi enviada!
          </Alert>
        )
        
      } else {
        return <div></div>
      }
    }
  }

  async function handleMensagens(e) {
    e.preventDefault()

    const mensagemBD = {
      email: email.current.value,
      mensagem: mensagem.current.value,
    }
    try {
      await api.post('/mensagens.json', mensagemBD);
      email.current.value = ''
      mensagem.current.value = ''
      setMensagemSucesso(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Navegacao></Navegacao>
      <Container>
        <Form onSubmit={(e) => handleMensagens(e)}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control ref={email} type="email" placeholder="Enter email" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control ref={mensagem} as="textarea" rows="3" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {
          handleAlert()
        }
      </Container>

    </>
  );
}

export default Contato;