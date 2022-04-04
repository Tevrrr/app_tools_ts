/** @format */

import { FC } from 'react';
import WeatherCard from '../components/WeatherCard';

interface MainProps {
	Locations: string[];
}

const Main: FC<MainProps> = ({ Locations }) => {
	return (
		<div className='px-3 py-5 inline-flex flex-wrap items-start justify-center gap-10 '>
			{Locations.map((location, i) => {
                return <WeatherCard location={location} key={i} />;
			})}
			
		</div>
	);
};

export default Main;
