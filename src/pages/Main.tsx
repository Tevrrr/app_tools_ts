/** @format */

import { FC } from 'react';
import WeatherCard from '../components/WeatherCard';

interface MainProps {
	Locations: string[];
}

const Main: FC<MainProps> = ({ Locations }) => {
	return (
		<div className='px-3 py-4 inline-flex flex-wrap items-start gap-10 '>
			{Locations.map((location) => {
				return <WeatherCard location={location} />;
			})}
			<div className='grow'></div>
		</div>
	);
};

export default Main;
