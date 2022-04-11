import { FC, useContext } from "react";
import Alert from "./items/Alert";
import { AlertsContext} from '../common/AlertContext'
interface MessageBoxProps {
	
}


 
const MessageBox: FC<MessageBoxProps> = () => {
    const alerts = useContext(AlertsContext);
	return (
		<div className='flex flex-col items-end gap-2 w-full h-full p-2'>
			{alerts.alerts.map((item) => {
                return <Alert alert={item} key={item.id} />;
			})}

		</div>
	);
};
 
export default MessageBox;