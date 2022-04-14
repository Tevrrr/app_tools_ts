/** @format */

import React, { FC, createContext, useState, useEffect } from 'react';
import { supabase } from '../supabase/supabaseClient';
import { IUser } from './Types';

interface ClientProviderProps {}

export const ClientContext = createContext<IUser>({
	loading: false,
	email: '',
});

const ClientProvider: FC<ClientProviderProps> = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState('');

	return (
		<ClientContext.Provider value={{ loading, email }}>
			{children}
		</ClientContext.Provider>
	);
};

export default ClientProvider;
