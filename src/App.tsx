/** @format */
// import  { supabase } from './supabase/supabaseClient'

import {
	Route,
	Routes,
	Navigate,
	useLocation,
} from 'react-router-dom';
import Aside from './components/Aside';
import MessageBox from './components/MessageBox';
import Navbar from './components/Navbar';
import Todo from './pages/Todo';
import Weather from './pages/Weather';
import { IAlert, AlertType } from './common/Types';
import React,{ Component, FC, useState } from 'react';
import AlertsContextProvider from './common/AlertContext';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
	const [alerts, setAlerts] = useState<IAlert[]>([
		{ alertType: AlertType.error, value: 'Hi!', id: 1 },
	]);

	function removeAlert(id: number) {
		setAlerts(alerts.filter((item) => item.id !== id));
	}

    function addAlert(alertType: AlertType, text: string) {
		setAlerts([...alerts, { alertType, value: text, id: Date.now() }]);
    }
    
    let hasUserAccess = false;

	function RequireAuth({ children }: { children: JSX.Element }) {
        let location = useLocation();
        
		if (!hasUserAccess) {
            addAlert(AlertType.error, 'Available only for authorized users! ');
			return <Navigate to='/login' state={{ from: location }} replace />;
		}

		return children;
	}

	return (
		<div className='App relative flex flex-col items-center overflow-hidden min-h-screen pt-16'>
			<AlertsContextProvider value={{ alerts, removeAlert, addAlert }}>
				<Navbar />
				<Aside>
					<Routes>
						<Route path='/' element={<Weather />} />
						<Route path='login' element={<Login />} />
						<Route path='signup' element={<SignUp/>} />
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
			</AlertsContextProvider>
		</div>
	);
}

export default App;
