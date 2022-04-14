/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/output.css';
import AlertsContextProvider from './common/AlertContext';
import ClientProvider from './common/ClientContext';

ReactDOM.render(
	<BrowserRouter>
		<ClientProvider>
			<AlertsContextProvider>
				<App />
			</AlertsContextProvider>
		</ClientProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
