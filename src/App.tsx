/** @format */
// import  { supabase } from './supabase/supabaseClient'
import { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './pages/Main';

function App() {
	const [locations, setLocations] = useState<string[]>([]);
	function addLocations(location: string): void {
		if (locations.indexOf(location) < 0)
			setLocations([...locations, location]);
		console.log(locations);
	}

	function removeLocation(location: string): void {
		if (locations.indexOf(location) > -1)
			setLocations(locations.filter((item) => item !== location));
	}
	return (
		<div className='App flex flex-col items-center'>
			<Navbar addLocations={addLocations} />
			<Main Locations={locations} />
		</div>
	);
}

export default App;
