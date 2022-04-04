/** @format */

import { FC,  useState } from 'react';
import ThemeMenu from './items/ThemeMenu';

interface NavbarProps {
	addLocations?: (location:string) => void;
}



const Navbar: FC<NavbarProps> = ({ addLocations }) => {
	const [location, setLocation] = useState('Donetsk,UA');

	function sendLocations(): void {
        if (location.length > 2 && addLocations) {
			addLocations(location);
		}
	}

	return (
		<div className='navbar bg-primary'>
			<label className=' flex-1 input-group input-group-sm'>
				<input
					type='text'
					className=' input input-sm input-bordered input-accent font-medium'
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
				<button
					className=' btn btn-sm btn-accent'
					onClick={() => sendLocations()}>
					<i className='fa-solid fa-magnifying-glass'></i>
				</button>
			</label>
			<ThemeMenu />
		</div>
	);
};

export default Navbar;
