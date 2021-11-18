import React from "react";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";

import Login from '../login/login';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login}/>       
        <Route path="*" component={() =>(<h1 style={{marginTop: 200}}> 404 <br/>Pagina no encontrada</h1>)}/>    
      </Switch>
    </Router>
  );
}

