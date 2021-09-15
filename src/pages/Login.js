import React from 'react';

import '../styles/login.css';
import logoTrybe from '../assets/logo-trybe.png';

class Login extends React.Component {
  render() {
    return(
    <div id="page-login" >
      <form id="container-form" >
       <img id="logo-trybe"  src={logoTrybe} alt="Logo Trybe"  ></img>
        
            <input type="email" name="email" data-testid="email-input" ></input>
            <input type="password" name="password" data-testid="password-input" ></input>
            <button value="Entrar" id="btn-entrar" >Entrar</button>
        
        </form>
    </div>);
  }
}
export default Login;
