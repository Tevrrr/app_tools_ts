/** @format */

import React, { FC, createContext, useState, useContext } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../supabase/supabaseClient';
import { IUser, AlertType, ITodo } from './Types';
import { AlertsContext } from '../common/AlertContext';

interface ClientProviderProps {}

export const ClientContext = createContext<IUser>({
	user: null,
	registerUser: (email: string, password: String) => {},
	login: (email: string, password: string, saving: boolean) => {},
	checkStorageUser: () => {},
	exitUser: () => {},
	addTodo: (todo: ITodo) => {},
	delTodo: (id: number) => {},
	checkedTodo: (id: number, checked: boolean) => {},
	getTodo: (setTodo: (value: ITodo[]) => {}) => {},
	addLocation: (location: string) => {},
	delLocation: (location: string) => {},
	getLocation: (setLocation: any) => {},
});

const ClientProvider: FC<ClientProviderProps> = ({ children }) => {
	const alerts = useContext(AlertsContext);
	const [user, setUser] = useState<null | User>(null);

	const registerUser = async (email: string, password: string) => {
		try {
			const { user, error } = await supabase.auth.signUp({
				email,
				password,
			});
			if (error) throw error;
			if (!(user?.identities?.length !== 0))
				alerts.addAlert(
					AlertType.error,
					'The user with this email is already registered!'
				);
			else
				alerts.addAlert(
					AlertType.success,
					'Account created successfully! An email has been sent to you to confirm it.'
				);
		} catch (e) {
			console.log(e);
		}
	};

	const login = async (email: string, password: string, saving: boolean) => {
		try {
			const { user, error } = await supabase.auth.signIn({
				email,
				password,
			});
			if (error) throw error;
			setUser(user);
			if (saving) {
				localStorage.setItem('user', JSON.stringify(user));
				console.log('Local');
			} else {
				sessionStorage.setItem('user', JSON.stringify(user));

				console.log('Session');
			}
		} catch (e: any) {
			console.log(e);
			if ((e.message = 'Invalid login credentials'))
				alerts.addAlert(AlertType.error, 'Wrong login or password!');
		}
	};
	const checkStorageUser = () => {
		let user;
		user = localStorage.getItem('user');
		if (!user) user = sessionStorage.getItem('user');
		if (user) user = JSON.parse(user);
		updateUser(user?.email);
	};

	const exitUser = async () => {
		setUser(null);
		localStorage.removeItem('user');
		sessionStorage.removeItem('user');
		await supabase.auth.signOut();
	};

	async function updateUser(email: string) {
		try {
			const { user, error } = await supabase.auth.update({
				email,
			});
			if (error) throw error;
			setUser(user);
		} catch (e) {
			throw e;
		}
	}

	const addTodo = async (todo: ITodo) => {
		try {
			const { data, error } = await supabase.from('todo').insert([
				{
					uid: user?.id,
					...todo,
				},
			]);
			if (error) throw error;
		} catch (error) {
			console.log(error);
		}
	};
	const delTodo = async (id: number) => {
		try {
			const { data, error } = await supabase
				.from('todo')
				.delete()
				.match({ id, uid: user?.id });
			if (error) throw error;
		} catch (error) {
			console.log(error);
		}
	};
	const checkedTodo = async (id: number, checked: boolean) => {
		try {
			const { data, error } = await supabase
				.from('todo')
				.update({ checked })
				.match({ id, uid: user?.id });
			if (error) throw error;
		} catch (error) {
			console.log(error);
		}
	};
	const getTodo = async (setTodo: (value: ITodo[]) => {}) => {
		try {
			const { data, error } = await supabase
				.from('todo')
				.select('*')
				.match({ uid: user?.id });
			if (error) throw error;
			supabase
				.from('todo')
				.on('*', async (payload) => {
					try {
						const { data, error } = await supabase
							.from('todo')
							.select('*')
							.match({ uid: user?.id });
						if (error) throw error;
						setTodo(data);
					} catch (error) {
						console.log(error);
					}
				})
				.subscribe();
			setTodo(data);
		} catch (error) {
			console.log(error);
		}
	};

	const addLocation = async (location: string) => {
		try {
			const { data, error } = await supabase.from('weather').insert([
				{
					uid: user?.id,
					location,
				},
			]);
			if (error) throw error;
		} catch (error) {
			console.log(error);
		}
	};
	const delLocation = async (location: string) => {try {
		const { data, error } = await supabase
			.from('weather')
			.delete()
			.match({ location, uid: user?.id });
		if (error) throw error;
	} catch (error) {
		console.log(error);
        }
    };
    
	const getLocation = async (setLocation: (value: string[]) => {}) => {
		try {
			const { data, error } = await supabase
				.from('weather')
				.select('*')
				.match({ uid: user?.id });
			if (error) throw error;
			supabase
				.from('weather')
				.on('*', async (payload) => {
					try {
						const { data, error } = await supabase
							.from('weather')
							.select('*')
							.match({ uid: user?.id });
						if (error) throw error;
						setLocation(data.map((item: any) => item.location));
						console.log(data);
					} catch (error) {
						console.log(error);
					}
				})
                .subscribe();
			console.log(data);
			setLocation(data.map((item: any) => item.location));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ClientContext.Provider
			value={{
				user,
				registerUser,
				login,
				checkStorageUser,
				exitUser,
				addTodo,
				delTodo,
				checkedTodo,
				getTodo,
				addLocation,
				delLocation,
				getLocation,
			}}>
			{children}
		</ClientContext.Provider>
	);
};

export default ClientProvider;
