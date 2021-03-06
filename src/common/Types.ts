/** @format */
import { User } from '@supabase/supabase-js';

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
	speed: number;
	deg: number;
	gust: number;
}

export interface IAlertsContext {
	alerts: IAlert[];
	removeAlert: (id: number) => void;
	addAlert: (type: AlertType, text: string) => void;
}
export interface ITodo {
	id: number;
	text: string;
	checked: boolean;
}

export interface IAlert {
	alertType: AlertType;
	value: string;
	id: number;
}

export interface IUser {
	user: User | null;
	registerUser: (email: string, password: string) => void;
	login: (email: string, password: string, saving: boolean) => void;
	checkStorageUser: () => void;
	exitUser: () => void;
	addTodo: (todo: ITodo) => void;
	delTodo: (id: number) => void;
	checkedTodo: (id: number, checked: boolean) => void;
	getTodo: (setTodo: any) => void;
	addLocation: (location: string) => void;
	delLocation: (location: string) => void;
	getLocation: (setLocation: any) => void;
}

export enum AlertType {
	info = 'info',
	success = 'success',
	warning = 'warning',
	error = 'error',
}
