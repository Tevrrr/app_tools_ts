/** @format */

import { FC, useContext } from 'react';
import {ClientContext} from '../common/ClientContext'
import { useNavigate } from 'react-router-dom';
interface UserProps {}

const User: FC<UserProps> = () => {
    const client = useContext(ClientContext);
    const navigate = useNavigate()
    function exit() {
        client.exitUser();
        navigate('/login', { replace: true });
    }
	return (
		<div className=' card items-center p-5'>
			{' '}
			<button
				onClick={exit}
				className=' btn btn-error text-2xl font-bold'>
				{' '}
				Exit
            </button>
            {client.user?.user_metadata?.userName}
		</div>
	);
};

export default User;
