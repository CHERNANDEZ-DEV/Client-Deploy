import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Table from '../../components/Table';

const GestionHogar = () => {
  const { houseNumber } = useParams();
  const [residents, setResidents] = useState([
    { id: 1, nombre: 'Ilcia', apellido: 'Huezo', correo: 'holamundo@gmail.com', documento: '00295333-2', rol: 'Residente' },
    { id: 2, nombre: 'Ilcia', apellido: 'Huezo', correo: 'holamundo@gmail.com', documento: '--------', rol: 'Residente' },
    { id: 3, nombre: 'Ilcia', apellido: 'Huezo', correo: 'holamundo@gmail.com', documento: '00295333-2', rol: 'Residente' },
    { id: 4, nombre: 'Ilcia', apellido: 'Huezo', correo: 'holamundo@gmail.com', documento: '00295333-2', rol: 'Residente' },
  ]);
  const [searchEmail, setSearchEmail] = useState('');

  const handleSearch = () => {
    // Aquí se agregaría la lógica para buscar y añadir el residente
    alert(`Buscando residente con el correo: ${searchEmail}`);
    // Después de buscar y añadir, limpiar el campo de búsqueda
    setSearchEmail('');
  };

  const handleEliminar = (id) => {
    setResidents(residents.filter(resident => resident.id !== id));
  };

  const handleRoleChange = (id) => {
    setResidents(residents.map(resident => ({
      ...resident,
      rol: resident.id === id ? 'Encargado' : 'Residente'
    })));
  };

  const columnas = [
    { Header: 'Nombre', accessor: 'nombre' },
    { Header: 'Apellido', accessor: 'apellido' },
    { Header: 'Correo electrónico', accessor: 'correo' },
    { Header: 'Documento', accessor: 'documento' },
    { Header: 'Rol', accessor: 'rol' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center text-azul-claro mt-4 md:mt-8 font-roboto_mono">
        Gestión de residentes para la casa {houseNumber}
      </h1>

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center text-azul-principal m-2 font-roboto_mono">Añadir Residentes al hogar</h2>
        <div className="bg-white p-4 rounded-lg shadow-md w-full sm:w-96 mb-4">
          <label htmlFor="email" className="block text-gray-700 font-roboto_mono mb-2">Correo electrónico :</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa el correo electrónico"
            className="border border-gray-300 p-2 rounded-md w-full"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
          />
          <button
            className="bg-amarillo-principal text-black mt-4 py-2 px-4 rounded-md font-roboto_mono hover:bg-yellow-600 transition duration-300"
            onClick={handleSearch}
          >
            Agregar
          </button>
        </div>
      </div>

      <Table 
        columnas={columnas} 
        datos={residents} 
        handleEliminar={handleEliminar} 
        handleRoleChange={handleRoleChange} 
      />
    </div>
  );
};

export default GestionHogar;
