import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { request } from '../helpers/helpers'
import './Empleados.css'

export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        request.get("/empleados").then( response => {
            console.log(response)
        }).catch(err =>{
            console.error(err)
        })
    }

    render() { 
        return ( 
            <Container id="empleados-buscar">
                <Row>
                    <h1>Buscar Empleados</h1>
                </Row>
            </Container>
         );
    }
}
 
