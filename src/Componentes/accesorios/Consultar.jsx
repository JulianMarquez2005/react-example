import React, { useEffect, useState } from 'react';
import '../../css/style.css'

function Read({ dataUpdated }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [dataUpdated]); // Agregar dataUpdated como dependencia

    
    const fetchData = () => {
        fetch('https://alejo1016.000webhostapp.com/api.php?apicall=RAccesorio')
            .then(response => response.json())
            .then(data => setData(data.contenido))
            .catch(error => console.log(error));
    };

    return (
        <div className="">
            <h2>Accesorios disponibles</h2>
            <table>
                {Array.isArray(data) ? (
                    data.map(item => (
                        <tr key={item.id}>
                            <td className='text'>ID: {item.Id_accesorio}</td>
                            <td className='text'>Nombre: {item.nombre}</td>
                            <td className='text'>Precio: {item.precio}</td>
                            <td className='text'>Tipo: {item.tipo_de_accesorio}</td>
                        </tr>
                    ))
                ) : (
                    <p>No hay datos disponibles</p>
                )}
            </table>
        </div>
    );
}

export default Read;