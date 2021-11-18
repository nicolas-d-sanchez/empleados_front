import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './login.css';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            usuario: "",
            password:""
         }
    }

    IniciarSesion(){
        // eslint-disable-next-line
        alert( "usuario: " + this.state.usuario +" "+ "password: " + this.state.password) 
    }

    render() { 
        return (
            <Container id="login-container">
                <Row>
                    <Col>
                        <Row>
                            <h2>Iniciar Sesión</h2>
                        </Row>
                        <Row>
                            <Col
                                sm="12"
                                xs="12"
                                md={{span:4, offset:4}}
                                lg={{span:4, offset:4}}
                                xl={{span:4, offset:4}}
                            >
                                <Form >
                                <Form.Group className="mb-3" >
                                    <Form.Label >Usuario</Form.Label>
                                    <Form.Control 
                                        onChange= { e => this.setState({ usuario: e.target.value })}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label >Contraseña</Form.Label>
                                    <Form.Control type="password" 
                                         onChange= { e => this.setState({ password: e.target.value })}
                                    />
                                </Form.Group>               
                                <Button variant="primary" 
                                    onClick={ ()=> this.IniciarSesion()}
                                >
                                    Iniciar Sesión
                                </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
