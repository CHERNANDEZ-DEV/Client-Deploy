import React, { useState } from 'react';
import TableGuards from '../../components/TableGuards';

const Guards = () => {
  const [guards, setGuards] = useState([
    { id: 1, nombre: 'Ilcia', apellido: 'Huezo', correo: 'hola@gamil.com', documento: '00295333-2' },
    { id: 2, nombre: 'Ilcia', apellido: 'Huezo', correo: 'hola@gamil.com', documento: '00295333-2' },
  ]);
  const [email, setEmail] = useState('');

  const handleAddGuard = () => {
    if (email) {
      setGuards([...guards, { id: guards.length + 1, nombre: 'Nuevo', apellido: 'Vigilante', correo: email, documento: '--------' }]);
      setEmail('');
    } else {
      alert("Por favor, ingrese un correo electrónico.");
    }
  };

  const handleEliminar = (id) => {
    setGuards(guards.filter(guard => guard.id !== id));
  };

  const columnas = [
    { Header: 'Nombre', accessor: 'nombre' },
    { Header: 'Apellido', accessor: 'apellido' },
    { Header: 'Correo electrónico', accessor: 'correo' },
    { Header: 'Documento', accessor: 'documento' },
  ];

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h1 className="text-2xl font-bold text-center text-azul-principal m-3 font-roboto_mono">Agregar Vigilante</h1>
      <div className='flex flex-col mt-2 w-[150px] sm:w-[332px]'>
        <label htmlFor="email" className='text-base m-2 font-roboto_mono'>Correo electrónico:</label>
        <input
          type="text"
          id="email"
          placeholder="Ingrese el correo electrónico"
          className='border border-gray-300 p-2 rounded-md'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className='bg-amarillo-principal text-black m-2 w-20 py-2 rounded-md font-roboto_mono'
          onClick={handleAddGuard}
        >
          Agregar
        </button>
      </div>
      <h1 className="text-2xl font-bold text-center text-azul-principal m-3 font-roboto_mono mt-5 mb-1">Lista de vigilantes</h1>
      <TableGuards
        columnas={columnas}
        datos={guards}
        handleEliminar={handleEliminar}
      />
    </div>
  );
};

export default Guards;
