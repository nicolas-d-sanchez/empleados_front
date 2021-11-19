import React from 'react';
import { Spinner } from 'react-bootstrap';
import './loading.css';

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: false,
         }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.show !== this.state.show){
            this.setState({ show: nextProps.show });
        }
    }

    render() { 
        return ( 
            <>  
            {
                this.state.show ? 
                <div id="loading">
                    <Spinner animation="border" variant="primary" />
                </div> : null
            }
                
            </>
         );
    }
}
 
