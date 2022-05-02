/** @format */

import { FC, useState, useContext, useEffect } from 'react';
import WeatherCard from '../components/WeatherCard';
import Input from '../components/items/Input';
import { ClientContext } from '../common/ClientContext';

interface WeatherProps {}

const Weather: FC<WeatherProps> = () => {
	const [locations, setLocations] = useState<string[]>([]);
	const client = useContext(ClientContext);

	useEffect(() => {
		client.getLocation(setLocations);
	}, [client]);

	function addLocations(location: string): void {
		if (locations.indexOf(location) < 0) {
			setLocations([...locations, location]);
			client.addLocation(location);
		}
	}

	function removeLocation(location: string): void {
		if (locations.indexOf(location) > -1) {
			setLocations(locations.filter((item) => item !== location));
			client.delLocation(location);
		}
	}

	return (
		<div className='pt-10 flex flex-col items-center'>
			<div className=' w-80'>
				<Input
					inputProps={addLocations}
					placeholder='Enter location...'
				/>
			</div>

			<div className='px-3 py-7 flex flex-wrap items-start justify-center gap-10 '>
				{locations.map((location, i) => {
					return (
						<WeatherCard
							location={location}
							removeLocation={removeLocation}
							key={i}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Weather;
