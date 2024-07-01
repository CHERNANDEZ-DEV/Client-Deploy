import React from 'react';

const Table = ({ columnas, datos, handleEliminar, handleRoleChange }) => {
  return (
    <div className='w-full h-full mt-6 mr-6 ml-auto pl-5 pr-5'>
      <div className='m-6 flex justify-center'>
        <h1 className='font-bold text-2xl font-roboto_mono'>Tabla de Residentes</h1>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y border-separate border-spacing-0.5 border border-gray-500">
          <thead>
            <tr className='bg-[#F8BD0D] bg-opacity-70 font-semibold font-roboto_mono'>
              {columnas.map(columna => (
                <th key={columna.accessor} className="px-4 py-2 text-center border border-gray-500">{columna.Header}</th>
              ))}
              <th className="px-4 py-2 text-center border border-gray-500">Rol</th>
              <th className="px-4 py-2 text-center border border-gray-500">Acciones</th>
            </tr>
          </thead>
          <tbody className='text-center bg-gray-100 border-stone-500 font-roboto_mono'>
            {datos.map((dato, index) => (
              <tr key={index} className="hover:bg-gray-100 border-black">
                {columnas.map(columna => (
                  <td key={columna.accessor} className="border px-4 py-2 border-gray-500">{dato[columna.accessor]}</td>
                ))}
                <td className="border px-4 py-2 border-gray-500">
                  <button
                    onClick={() => handleRoleChange(dato.id)}
                    className={`py-1 px-3 rounded-md font-roboto_mono ${dato.rol === 'Encargado' ? 'bg-yellow-300' : 'bg-yellow-100'}`}
                  >
                    {dato.rol === 'Encargado' ? 'Encargado' : 'Asignar'}
                  </button>
                </td>
                <td className="border px-4 py-2 border-gray-500">
                  <button
                    onClick={() => handleEliminar(dato.id)}
                    className="bg-red-300 py-1 px-3 rounded-md font-roboto_mono"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
