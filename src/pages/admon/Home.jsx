// src/pages/Home.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HouseCard from '../../components/HouseCard';

const Home = () => {
  const navigate = useNavigate();
  const [houses, setHouses] = useState([
    { houseNumber: '100', representative: 'Juan Francisco Flores' },
    { houseNumber: '200', representative: 'Melissa Estefania Zaragoza' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHouses, setFilteredHouses] = useState(houses);

  const handleSearch = () => {
    const filtered = houses.filter(
      house =>
        house.houseNumber.includes(searchTerm) ||
        house.representative.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHouses(filtered);
  };

  const handleGestionClick = (houseNumber) => {
    navigate(`/gestionar/${houseNumber}`);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center w-full">
        <h2 className='text-3xl font-bold text-center text-azul-principal m-2 font-roboto_mono'>
          Búsqueda de Hogar
        </h2>
        <p className='text-center text-base mb-2 font-roboto_mono mt-5'>
          Ingrese número de casa o nombre de encargado para realizar su búsqueda
        </p>
        <div className='flex flex-col sm:flex-row justify-center items-center mt-2 w-full sm:w-auto'>
          <input
            type="text"
            placeholder="Número Hogar o Encargado"
            className='border border-gray-300 p-2 rounded-md w-full sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className='bg-amarillo-principal text-black m-2 py-2 px-4 rounded-md font-roboto_mono hover:bg-yellow-600 transition duration-300'
            onClick={handleSearch}
          >
            Buscar
          </button>
        </div>
        <h2 className='text-3xl font-bold text-center text-azul-principal m-2 font-roboto_mono mt-7 mb-7'>
          Listado de Hogares
        </h2>
        <div className="flex flex-col items-center w-full">
          {filteredHouses.length > 0 ? (
            filteredHouses.map((house, index) => (
              <HouseCard
                key={index}
                houseNumber={house.houseNumber}
                representative={house.representative}
                onGestionClick={handleGestionClick}
              />
            ))
          ) : (
            <p className="text-gray-700 font-roboto_mono mt-4">No se encontraron resultados.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
