/** @format */

import { FC, useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import LocationsContextProvider from '../common/LocationsContext';
interface MainProps {}

const Main: FC<MainProps> = () => {
	const [location, setLocation] = useState('');
	const [locations, setLocations] = useState<string[]>([]);

	function addLocations(location: string): void {
		if (locations.indexOf(location) < 0)
			setLocations([...locations, location]);
	}

	function removeLocation(location: string): void {
		if (locations.indexOf(location) > -1)
			setLocations(locations.filter((item) => item !== location));
	}

	function sendLocations(): void {
		if (location.length > 2) {
			addLocations(location);
		}
	}

	return (
		<LocationsContextProvider
			value={{
				locations,
				removeLocation,
			}}>
			<div className='flex flex-col pt-10 overflow-x-hidden'>
				<label className=' w-full flex justify-center input-group input-group-lg '>
					<div
						className=' tooltip tooltip-top'
						data-tip='Enter the name of the location'>
						<input
							type='text'
							className=' input input-bordered !rounded-l-box !rounded-r-none input-accent text-lg font-medium'
							placeholder='Enter location...'
							value={location}
							onChange={(e) => setLocation(e.target.value)}
						/>
					</div>

					<div
						className=' tooltip tooltip-top'
						data-tip='Add weather card'>
						<button
							className=' btn btn-accent font-black text-lg pl-4 !rounded-r-box'
							onClick={() => sendLocations()}>
							<i className='fa-solid fa-plus'></i>
						</button>
					</div>
				</label>
				<div className='px-3 py-5 inline-flex flex-wrap items-start justify-center gap-10 '>
					{locations.map((location, i) => {
						return <WeatherCard location={location} key={i} />;
					})}
				</div>
			</div>
		</LocationsContextProvider>
	);
};

export default Main;
