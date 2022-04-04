/** @format */

export interface IThemeSelectItem {
	theme: string;
	themeIcon: string;
}

export interface WeaterData {
	weather: VisualWeaterData;
	main: MainWeaterData;
	visibility: number;
	wind: WindWeaterData;
	name: string;
}

export interface VisualWeaterData {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface MainWeaterData {
	temp: number;
	feels_like: number;
	tempmin: number;
	tempmax: number;
	pressure: number;
	humidity: number;
}

export interface WindWeaterData {
	speed: number,
	deg: number,
	gust: number,
}
