/** @format */
// import  { supabase } from './supabase/supabaseClient'

import {Route, Routes} from 'react-router-dom'
import Aside from './components/Aside';
import Navbar from './components/Navbar';
import Todo from './pages/Todo';
import Weather from './pages/Weather';


function App() {


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
		</div>
	);
}

export default App;
