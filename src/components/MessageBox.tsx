import { FC } from "react";
import Alert from "./items/Alert";
import {IAlert} from '../common/Types'
interface MessageBoxProps {
	alerts: IAlert[];
}


 
const MessageBox: FC<MessageBoxProps> = ({ alerts }) => {
	return (
		<div className='flex flex-col gap-2 w-full h-full p-2'>
			{alerts.map(item=>{ return <Alert />})}
			
		</div>
	);
};
 
export default MessageBox;