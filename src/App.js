import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Open from './Componentes/open';
import Login from './Componentes/login';
import Welcome from './Componentes/welcome';
import Conected from './Componentes/accesorios/Conected';
import Agregar from './Componentes/accesorios/Agregar';
import Delete from './Componentes/accesorios/Delete';
//Rutas para cotizaciones
import READ from './Componentes/cotizaciones/READ';
import Insert from './Componentes/cotizaciones/Insert';
import Eliminar from './Componentes/cotizaciones/Eliminar';

function App() {
    return(
		<div>
			<BrowserRouter>
				<Routes>
				<Route path='/*' element={<Open />}/>
				<Route path='/form' element={<Login />}/>
				<Route path='/user' element={<Welcome />}/>
        		<Route path='/con' element={<Conected />}/>
				<Route path='/conI' element={<Agregar />}/>
				<Route path='/conE' element={<Delete />}/>

				<Route path='/ConC' element={<READ />}/>
				<Route path='/ConI' element={<Insert />}/>
				<Route path='/ConE' element={<Eliminar />}/>
				</Routes>
			</BrowserRouter>
		</div>
		
    );
}
export default App;
