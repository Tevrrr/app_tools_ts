/** @format */

import { FC, useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import LocationsContextProvider from '../common/LocationsContext';
import Input from '../components/items/Input';

interface WeatherProps {}

const Weather: FC<WeatherProps> = () => {
	const [locations, setLocations] = useState<string[]>([]);

	function addLocations(location: string): void {
		if (locations.indexOf(location) < 0)
			setLocations([...locations, location]);
	}

	function removeLocation(location: string): void {
		if (locations.indexOf(location) > -1)
			setLocations(locations.filter((item) => item !== location));
	}
	return (
		<div className='pt-10 flex flex-col items-center'>
			<LocationsContextProvider
				value={{
					locations,
					removeLocation,
				}}>
				<div className=' w-80'>
					<Input
						inputProps={addLocations}
						placeholder='Enter location...'
					/>
				</div>

				<div className='px-3 py-7 flex flex-wrap items-start justify-center gap-10 '>
					{locations.map((location, i) => {
						return <WeatherCard location={location} key={i} />;
					})}
				</div>
			</LocationsContextProvider>
		</div>
	);
};

export default Weather;
