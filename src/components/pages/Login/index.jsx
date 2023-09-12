import React from 'react'
import imgLogo from '../../../assets/images/Login/Logo-Medicatel-Azul.svg';
import './style.css';
import Botones from '../../atoms/Botones';
import Inputs from '../../atoms/Inputs';
const Login = () => {
  return (
    <div className='login-dashboard'>
      <div className='contenedor-login'>
         <div className='contenedor-formulario'>
          
            <img className="img-logo" src={imgLogo} alt="" />
            
            <div className='contenedor-titulo'>
               <h1 className='titulo'>Bievenido a Ingenieria Digital</h1>
               <h3 className='subtitulo'>Ingresa tus datos para accder a tu cuenta.</h3>
            </div>

            <label className='titulo-input' >Correo electronico</label>
            <Inputs tipo='email' clase='input' texto='Correo'/>


            <label className='titulo-input'>Contraseña</label>
            <Inputs tipo='password' clase='input' texto='Contraseña'/>
          
            <br></br>
            <Botones clase='botones' texto='Ingresar'/>

         </div>
      </div>
    </div>
  );
};

export default Login;