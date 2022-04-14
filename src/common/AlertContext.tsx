/** @format */

import { FC, createContext, useState } from 'react';
import { IAlertsContext, AlertType, IAlert } from './Types';

interface AlertsContextProviderProps {
}

export const AlertsContext = createContext<IAlertsContext>({
	alerts: [],
	removeAlert: (id: number) => {},
	addAlert: (type: AlertType, text: string) => {},
});

const AlertsContextProvider: FC<AlertsContextProviderProps> = ({
	children,
}) => {
    	const [alerts, setAlerts] = useState<IAlert[]>([]);

		function removeAlert(id: number) {
			setAlerts(alerts.filter((item) => item.id !== id));
		}

		function addAlert(alertType: AlertType, text: string) {
			setAlerts([...alerts, { alertType, value: text, id: Date.now() }]);
		}

	return (
		<AlertsContext.Provider value={{ alerts, removeAlert, addAlert }}>
			{children}
		</AlertsContext.Provider>
	);
};

export default AlertsContextProvider;
