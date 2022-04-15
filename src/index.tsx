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
		<AlertsContextProvider>
			<ClientProvider>
				<App />
			</ClientProvider>
		</AlertsContextProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
