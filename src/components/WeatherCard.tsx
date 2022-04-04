/** @format */

import { FC, useState, useEffect } from 'react';
import Infopanel from './Infopanel';
import Navbar from './Navbar';
import { WeaterData } from '../common/Types';
import axios from 'axios';

interface WeatherCardProps {
	location: string;
}

const WeatherCard: FC<WeatherCardProps> = ({ location }) => {
	const [weatherData, setWeaterData] = useState<WeaterData | undefined>();


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
			});
	}, [location]);


	return (
		<div className=' card items-center gap-2 shadow-xl bg-base-200 w-80 border-2 border-primary'>

			{weatherData ? (
				<>
					<img
						className='w-80 py-4'
						src={`./icons/${weatherData.weather.icon}.png`}
						alt='non'
					/>
					<Infopanel WeaterData={weatherData} />
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default WeatherCard;
