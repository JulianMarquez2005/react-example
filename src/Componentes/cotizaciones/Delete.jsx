import React, { useState } from 'react';
import '../../css/style.css'
function Insert({ onDataUpdate }) {
    const [Id_accesorio, setIdaccesorio] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const accesorio = {
            Id_accesorio,
        };

        fetch('http://localhost/APIkamjac/api.php?apicall=DAccesorio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(accesorio),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al crear el accesorio');
                } else {
                    setMessage('Accesorio creado correctamente');
                    setIdaccesorio('');
                    onDataUpdate(); // Llama a la función de actualización de datos en el componente padre
                }
            })
            .catch(error => {
                setMessage('Error en la solicitud');
                console.log(error);
            });
    };

    return (
        <div className="Insert-container">
            <h2>Eliminar cotización</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Id_accesorio">Id: </label>
                    <input className="input" type="number" id="Id_accesorio" value={Id_accesorio} onChange={e => setIdaccesorio(e.target.value)} required />
                </div>
                <button className='orange-btn' type="submit">Eliminar Accesorio</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Insert;