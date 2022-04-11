/** @format */
// import  { supabase } from './supabase/supabaseClient'

import {Route, Routes} from 'react-router-dom'
import Aside from './components/Aside';
import MessageBox from './components/MessageBox';
import Navbar from './components/Navbar';
import Todo from './pages/Todo';
import Weather from './pages/Weather';
import {IAlert} from './common/Types'
import { useState } from 'react';


function App() {
    const [alerts, setAlerts] = useState<IAlert[]>([]);

	return (
		<div className='App relative flex flex-col items-center overflow-hidden min-h-screen pt-16'>
			<Navbar />
			<Aside>
				<Routes>
					<Route path='/' element={<Weather />} />
					<Route path='weather' element={<Weather />} />
					<Route path='todo' element={<Todo />} />
				</Routes>
			</Aside>
			<div className=' absolute right-0 bottom-0 sm:w-96 w-full transition-all'>
				<MessageBox alerts={alerts} />
			</div>
		</div>
	);
}

export default App;
