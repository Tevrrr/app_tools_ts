/** @format */

import { FC, createContext } from 'react';
import { IAlertsContext, AlertType } from './Types';

interface AlertsContextProviderProps {
	value: IAlertsContext;
}

export const AlertsContext = createContext<IAlertsContext>({
	alerts: [],
	removeAlert: (id: number) => {},
	addAlert: (type: AlertType, text: string) => {},
});

const AlertsContextProvider: FC<AlertsContextProviderProps> = ({
	value,
	children,
}) => {
	return (
		<AlertsContext.Provider value={value}>
			{children}
		</AlertsContext.Provider>
	);
};

export default AlertsContextProvider;
