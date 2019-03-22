import React, { Component } from 'react';
import varPrincipalData from './PrincipalData';

class MasUno extends Component{
  render(){
    return(
      <button onClick={function(){varPrincipalData.aumentarNumero}}>Aumentar</button>
    );
  }
}

export default MasUno;
