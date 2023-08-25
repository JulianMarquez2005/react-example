import React, { useState } from 'react';
import '../css/style.css'
import Logo_dasaga_white from '../img/Logo_dasaga_white.png';
import { Link } from "react-router-dom";

 
const Login = () => {
  const [email, setEmail] = useState(''); 

  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos del formulario al servidor
    console.log('Email:', email);
    console.log('Password:', password);
    // También puedes restablecer los valores de los campos después de enviar el formulario
    setEmail('');
    setPassword('');
  };

  return (
    <div>
        <nav className='primary-header'>
  <div className='navbar container'>
  <img src={Logo_dasaga_white} alt={"Logo_dasaga_white"} width={80}/>
<ul className="menu" >
  <Link to={'/*'}><a className="button" id='inicio'>Volver</a></Link>
</ul>
</div>
</nav>
<div className='login-form'>
      <form onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <div>
          <label htmlFor="email">Correo Electrónico: <br/></label>
          <input
          className='input'
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña: <br/></label>
          <input
          className='input'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <Link to={'/user'}><button className='orange-btn' type="submit">Iniciar sesión</button></Link>
      </form>
    </div>
    </div>
    
  );
};

export default Login;
