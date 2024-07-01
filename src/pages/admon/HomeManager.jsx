// src/pages/HomeManager.jsx
import React, { useState } from 'react';
import { usePopup } from "../../components/PopupContext";

const HomeManager = () => {
  const [houseNumber, setHouseNumber] = useState('');
  const [representative, setRepresentative] = useState('');
  const { showPopup } = usePopup();
  const [homes, setHomes] = useState([
    { houseNumber: '100', representative: 'Juan Francisco Flores' },
    { houseNumber: '200', representative: 'Melissa Estefania Zaragoza' }
  ]);

  const handleAddHome = () => {
    if (houseNumber && representative) {
      setHomes(prevHomes => [...prevHomes, { houseNumber, representative }]);
      setHouseNumber('');
      setRepresentative('');// Ocultar el popup después de 3 segundos
      showPopup("Hogar agregado exitosamente", true); // Mostrar popup de éxito
    } else {
      showPopup("Por favor, complete ambos campos.", false); // Mostrar popup de error
    }
  };

  return (
    <div>
      <div className='flex justify-center items-center h-screen flex-col w-full'>
        <h1 className="text-2xl font-bold text-center text-azul-principal m-2 font-roboto_mono">Agregar Hogar</h1>
        <div className='flex flex-col mt-2 w-[150px] sm:w-[332px]'>
          <label htmlFor="houseNumber" className='text-base m-2 font-roboto_mono'>Número de casa:</label>
          <input
            type="number"
            id="houseNumber"
            placeholder="Ingrese el número de casa"
            className='border border-gray-300 p-2 rounded-md'
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
          />
          <label htmlFor="residentName" className='text-base m-2 font-roboto_mono'>Residente encargado de hogar:</label>
          <input
            type="text"
            id="residentName"
            placeholder="Ingrese nombre del encargado"
            className="border border-gray-300 p-2 rounded-md"
            value={representative}
            onChange={(e) => setRepresentative(e.target.value)}
          />
          <button
            className='bg-amarillo-principal text-black m-2 w-20 py-2 rounded-md font-roboto_mono mt-7'
            onClick={handleAddHome}
          >
            Agregar
          </button>
        </div>
      </div>

    </div>
  );
}

export default HomeManager;
