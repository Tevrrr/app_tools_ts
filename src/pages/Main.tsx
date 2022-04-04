/** @format */

import { FC } from 'react';
import WeatherCard from '../components/WeatherCard';

interface MainProps {
	Locations: string[];
}

const Main: FC<MainProps> = ({ Locations }) => {
	return (
		<div className='p-3 inline-flex flex-wrap gap-10 '>
			{Locations.map((location) => {
				return <WeatherCard location={location} />;
			})}
			<div className='grow'></div>
		</div>
	);
};

export default Main;
