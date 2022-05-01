/** @format */

import { FC, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { validateEmail, validatePassword } from '../common/User';
import { AlertsContext } from '../common/AlertContext';
import { ClientContext } from '../common/ClientContext';
import { AlertType } from '../common/Types';

interface SignUpProps {}

const SignUp: FC<SignUpProps> = () => {
	const alerts = useContext(AlertsContext);
	const user = useContext(ClientContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');
	function submitForm(e: React.FormEvent) {
		e.preventDefault();
		if (password !== passwordRepeat) {
			alerts.addAlert(AlertType.error, 'Passwords do not match!');
		}
		if (!validatePassword(password)) {
			alerts.addAlert(
				AlertType.error,
				'The password is incorrect! Must contain at least one number, one upper and lower case letter, and at least 8 or more characters.'
			);
		}
		if (!validateEmail(email)) {
			alerts.addAlert(AlertType.error, 'Email was entered incorrectly!');
        } if (password === passwordRepeat && validatePassword(password) && validateEmail(email)) {
            user.registerUser(email, password);
        }
	}
	return (
		<div className='flex items-center justify-center px-2 py-10'>
			<form
				className=' card gap-5 px-2 py-4 items-center bg-base-300 w-full max-w-sm'
				onSubmit={submitForm}>
				<h1 className=' text-4xl font-bold uppercase'>Sign up</h1>
				<input
					className=' input w-full max-w-xs input-primary text-lg font-bold'
					type='text'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className=' input w-full max-w-xs input-primary text-lg font-bold'
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<input
					className=' input w-full max-w-xs input-primary text-lg font-bold'
					type='password'
					placeholder='Password repeat'
					value={passwordRepeat}
					onChange={(e) => setPasswordRepeat(e.target.value)}
				/>
				<button className='btn btn-primary text-2xl w-full max-w-xs uppercase'>
					Sign up
				</button>
				<div className='divider'>OR</div>
				<button className='btn text-2xl btn-circle'>
					<i className='fa-brands fa-google'></i>
				</button>
				<div className=' flex gap-2 items-baseline justify-center text-xl'>
					Already a user?
					<Link to='/login' className='btn btn-sm text-xl uppercase'>
						Login
					</Link>
					<button className=''></button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
