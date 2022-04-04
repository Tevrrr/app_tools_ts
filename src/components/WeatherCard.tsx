/** @format */

import { FC, useState, useEffect, useContext } from 'react';
import Infopanel from './Infopanel';
import { LocationsContext } from '../common/LocationsContext';
import { WeaterData } from '../common/Types';
import axios from 'axios';

interface WeatherCardProps {
	location: string;
}

const WeatherCard: FC<WeatherCardProps> = ({ location }) => {
	const [weatherData, setWeaterData] = useState<WeaterData | undefined>();
	const Context = useContext(LocationsContext);
	useEffect(() => {
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?appid=8c93761f0cfd02f56a37c775dc01adf7&units=metric&q=${location}`
			)
			.then((e): any => {
				return e.data;
			})
			.then((e) => {
				let data: WeaterData = {
					weather: e.weather[0],
					main: e.main,
					wind: e.wind,
					name: e.name,
					visibility: e.visibility,
				};
				setWeaterData(data);
			})
			.catch(() => {
				Context.removeLocation(location);
			});
	}, [location]);

	return (
		<div className='relative'>
			<div
				className='tooltip tooltip-left absolute top-[-1rem] right-[-1rem] z-10'
				data-tip='Delete this card'>
				<button
					className=' btn btn-error btn-circle btn-sm text-lg'
					onClick={() => Context.removeLocation(location)}>
					<i className='fa-solid fa-x'></i>
				</button>
			</div>
			<div className=' card items-center gap-2 shadow-xl bg-base-200 w-80 border-2 border-primary '>
				{weatherData ? (
					<>
						<img
							className='h-64 py-4 object-cover'
							src={`./icons/${weatherData.weather.icon}.png`}
							alt='non'
						/>
						<Infopanel WeaterData={weatherData} />
					</>
				) : (
					<div className=' flex grow items-center  w-full'>
						<progress className='progress progress-primary w-full'></progress>
					</div>
				)}
			</div>
		</div>
	);
};

export default WeatherCard;
