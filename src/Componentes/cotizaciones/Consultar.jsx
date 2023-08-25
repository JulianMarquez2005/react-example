import React, { useEffect, useState } from 'react';
import '../../css/style.css'

function Consultar({ dataUpdated }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [dataUpdated]); // Agregar dataUpdated como dependencia

    
    const fetchData = () => {
        fetch('https://alejo1016.000webhostapp.com/api.php?apicall=RCotizacion')
            .then(response => response.json())
            .then(data => setData(data.contenido))
            .catch(error => console.log(error));
    };

    return (
        <div className="">
            <h2>Cotizaciones registradas</h2>
            <table>
                {Array.isArray(data) ? (
                    data.map(item => (
                        <tr key={item.id}>
                            <td className='text'>ID: {item.id}</td>
                            <td className='text'>Fecha de cotizacion: {item.fecha_cotizacion}</td>
                            <td className='text'>ID de usuario: {item.idusuario}</td>
                            <td className='text'>Estado: {item.estado}</td>
                        </tr>
                    ))
                ) : (
                    <p>No hay datos disponibles</p>
                )}
            </table>
        </div>
    );
}

export default Consultar;