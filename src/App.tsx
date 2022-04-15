/** @format */

import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Aside from './components/Aside';
import MessageBox from './components/MessageBox';
import Navbar from './components/Navbar';
import Todo from './pages/Todo';
import Weather from './pages/Weather';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { AlertType } from './common/Types';
import {AlertsContext} from './common/AlertContext'
import { ClientContext } from './common/ClientContext';
import { useContext } from 'react';

function App() {
        const alerts = useContext(AlertsContext);
        const client = useContext(ClientContext);

		function RequireAuth({ children }: { children: JSX.Element }) {
			let location = useLocation();

			if (client.user === null) {
				alerts.addAlert(
					AlertType.error,
					'Available only for authorized users! '
				);
				return (
					<Navigate to='/login' state={{ from: location }} replace />
				);
			}

			return children;
		}

	return (
        <div className='App relative flex flex-col items-center overflow-hidden min-h-screen pt-16'>
			
				<Navbar />
				<Aside>
					<Routes>
						<Route path='/' element={<Weather />} />
						<Route path='login' element={<Login />} />
						<Route path='signup' element={<SignUp />} />
						<Route path='weather' element={<Weather />} />
						<Route
							path='todo'
							element={
								<RequireAuth>
									<Todo />
								</RequireAuth>
							}
						/>
					</Routes>
				</Aside>

				<div className=' absolute right-0 bottom-0 sm:w-96 w-full transition-all'>
					<MessageBox />
				</div>
		</div>
	);
}

export default App;
