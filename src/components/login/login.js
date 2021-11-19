import React from 'react';
import axios from 'axios'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './login.css';
import { APIHOST as host} from '../../app.json'
import { isNull } from 'lodash';
import Cookies from 'universal-cookie';
import { ExpirationSesion } from '../helpers/helpers';
import Loading from '../loading/loading';

const cookies = new Cookies();


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            usuario: "",
            password:"",
            loading: false,
         }
    }

    IniciarSesion(){     
        this.setState({loading: true})
        
        axios.post(`${host}/usuarios/login`,{
            usuario: this.state.usuario,
            password: this.state.password
        }).then( response => {
            if(isNull(response.data.token)){
                alert ("Usuario o contraseña invalidos")
            }else{
                cookies.set('_s', response.data.token, { 
                    path: '/',
                    expires: ExpirationSesion()
                });

                this.props.history.push("/empleados")
            }

            this.setState({loading: false})
        }).catch(err => {
            console.error(err)
            this.setState({loading: false})
        })     
    }

    render() { 
        return (
            <Container id="login-container">

                <Loading show = {this.state.loading} />

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
 
