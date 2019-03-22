import React, { Component } from 'react';
import varPrincipalData from './PrincipalData';
import MasUno from './MasUno';

class Principal extends Component{
  render(){
    return(
      <div>
        <h2>Salundando desde el Componente Principal</h2>
        <h2>{varPrincipalData.numero}</h2>
        <MasUno />
      </div>
    )
  }
}

export default Principal;
