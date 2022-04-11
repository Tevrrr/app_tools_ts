import { FC, useState, useContext, useEffect } from 'react';
import {AlertsContext} from '../../common/AlertContext'
import { IAlert } from '../../common/Types';

interface AlertProps {
	alert: IAlert;
}
 
const Alert: FC<AlertProps> = ({ alert }) => {
	const alerts = useContext(AlertsContext);
	const [opacity, setOpacity] = useState(' ');
	function deleteAlert() {
		setOpacity(opacity + ' opacity-0');
		setTimeout(() => alerts.removeAlert(alert.id), 200);
    }
	return (
		<div
			className={
				`alert-animation alert alert-${alert.alertType} alert-sm transition-all duration-150 cursor-pointer text-lg font-semibold px-4 justify-end w-auto ` +
				opacity
			}
			onClick={deleteAlert}>
			{alert.value}
		</div>
	);
};
 
export default Alert;