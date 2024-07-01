import React, { useContext } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { UserContext } from '../../utils/UserContext'; // Importa el contexto
import '@fortawesome/fontawesome-free/css/all.css';
import google from '../../assets/google.svg';
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Login = () => {
  
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Usa el contexto aquí

  // Función para guardar el token en localStorage
  const guardarTokenLocalStorage = (token) => {
    localStorage.setItem("access_token", token);
  };

  const nav = (role) => {
    switch (role) {
      case 1:
        return '/admon'
      case 2:
        return '/resident'
      case 3:
        return '/normal'
      case 4:
        return '/visits'
      case 5:
        return '/security'  
      default:
        return '/'
    }
  }

  const login = useGoogleLogin({

    onSuccess: async (codeResponse) => {

      guardarTokenLocalStorage(codeResponse.access_token); // Guardar el token en localStorage
      
      // Obtener el token de acceso y usarlo para obtener la información del usuario
      const userInfo = await getUserInfo(codeResponse.access_token);
      setUser(userInfo);

      const role = await getRole(userInfo);
      const path = nav(role);
      navigate(path);
    },
    onError: (error) => console.log('Fallo al iniciar sesion', error),
  });

  const getUserInfo = async (token) => {
    // Usa el token para obtener la información del usuario desde Google
    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return {
      name: data.name,
      email: data.email,
      id: data.sub,
      address: 'Casa N°12' // Este es un valor de ejemplo, ajusta según tus necesidades
    };
  }

  //Función que simula petición a la API y setea el valor del rol
  const getRole = async (user) => {
    // Mandar info del user y obtener rol
    const role = 3; // Simula obtener el rol
    localStorage.setItem("role", role);
    return role;
  }

  return (
    <div className='flex items-center justify-center h-screen flex-col lg:flex-row'>
        <div className='flex flex-col items-center justify-center w-1/2 mx-auto text-center'>
            <h1 className='font-bold text-5xl m-4'>Bienvenido</h1>
            <img src={Logo} className='w-auto h-auto' alt="Logo de la compañia"/>
            <h2 className='lg:text-2xl text-base m-4'>Acceso protegido: tu seguridad, nuestra prioridad</h2>
        </div>
        <div className='flex flex-col items-center justify-center w-1/2 lg:h-screen px-4 bg-blue-900 rounded-lg relative p-6'>
            <p className="text-white m-4 text-center">Ingresar al sistema</p>
            <button className="bg-white text-blue rounded-md py-2 px-4 flex items-center space-x-2" 
                    onClick={() => login()}>
                <img src={google} alt="Google icon" className="h-6 w-6"></img>
                <span>Sign in with Google</span>
            </button>
        </div>
    </div>
  )
}

export default Login;
