// src/components/PerfilCard.jsx

import React, { useContext } from 'react';
import { UserContext } from '../utils/UserContext'; // Asegúrate de ajustar la ruta según tu estructura de archivos
import image from '../assets/userimage.png';

const PerfilCardComp = () => {
    const { user } = useContext(UserContext);

    // Para depuración, agrega un console.log para ver si user se está obteniendo
    console.log('User context:', user);
    
    if (!user) return <div>Loading...</div>;

    return (
        <div className='flex items-center justify-center h-screen'>
        <div className="flex flex-col items-center bg-gray-900 w-4/5 rounded-2xl font-roboto_mono text-white">
            <div className="mt-12 mb-4">
            <img src={image} alt="Avatar" className="w-40 h-40 rounded-full" />
            </div>
            <p className='text-center text-3xl mb-2'>{user.name}</p>
            <p className='text-center text-base sm:text-2xl mb-2'>{user.email}</p>
            <p className='text-center text-2xl mb-2'>{user.id}</p>
            <p className='text-center text-2xl mb-12'>{user.address}</p>
        </div>
        </div>
    );
}

export default PerfilCardComp;
