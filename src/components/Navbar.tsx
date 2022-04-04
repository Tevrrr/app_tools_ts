/** @format */

import { FC, useState } from 'react';
import ThemeMenu from './items/ThemeMenu';

interface NavbarProps {
	addLocations?: (location: string) => void;
}

const Navbar: FC<NavbarProps> = ({ addLocations }) => {
	const [location, setLocation] = useState('');

	function sendLocations(): void {
		if (location.length > 2 && addLocations) {
			addLocations(location);
		}
	}

	return (
		<div className='navbar bg-primary px-5'>
			<label className=' flex-1 input-group input-group-sm '>
				<div
					className=' tooltip tooltip-bottom '
					data-tip='Enter the name of the location'>
					<input
						type='text'
						className=' input input-sm input-bordered !rounded-l-box !rounded-r-none input-accent font-medium'
						placeholder='Enter location...'
						value={location}
						onChange={(e) => setLocation(e.target.value)}
					/>
				</div>

				<div
					className=' tooltip tooltip-right'
					data-tip='Add weather card'>
					<button
						className=' btn btn-sm btn-accent font-black text-lg pl-2 !rounded-r-box'
						onClick={() => sendLocations()}>
						<i className='fa-solid fa-plus'></i>
					</button>
				</div>
			</label>
			<ThemeMenu />
		</div>
	);
};

export default Navbar;
