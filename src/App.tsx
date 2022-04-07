/** @format */
// import  { supabase } from './supabase/supabaseClient'
import { useState } from 'react';

import Aside from './components/Aside';
import Navbar from './components/Navbar';
import Main from './pages/Main';

function App() {


	return (
		<div className='App relative flex flex-col items-center overflow-hidden min-h-screen pt-14'>
			
				<Navbar  />
				<Aside children={<Main />} />

		</div>
	);
}

export default App;
