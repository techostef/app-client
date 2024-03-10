import './App.css';

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Clients from './pages/Clients';

export default function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/:lang' Component={Clients} />
				<Route path='/' element={<Clients />} />
			</Routes>
			<ToastContainer />
		</div>
	);
}
