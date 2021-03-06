/** @format */

import { FC, useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ClientContext } from '../common/ClientContext';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
	const navigate = useNavigate();
	const client = useContext(ClientContext);
	const [saving, setSaving] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	function login(): void {
		if (email.length > 3 && password.length > 3) {
			client.login(email, password, saving);
		}
	}
	useEffect(() => {
		if (client.user) navigate('/todo', { replace: true });
	}, [client]);

	return (
		<div className='flex items-center justify-center px-2 py-10'>
			<form
				className=' card gap-5 px-2 py-4 items-center bg-base-300 w-full max-w-sm'
				onSubmit={(e) => e.preventDefault()}>
				<h1 className=' text-4xl font-bold uppercase'>Login</h1>
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

				<div className=' w-full max-w-xs  flex gap-4 text-lg items-center'>
					<input
						type='checkbox'
						className=' checkbox checkbox-primary border-2'
						checked={saving}
						onChange={(e) => setSaving(e.target.checked)}
					/>{' '}
					Remember me?
				</div>
				<button
					className='btn btn-primary text-2xl w-full max-w-xs uppercase'
					onClick={login}>
					Login
				</button>
				<div className='divider'>OR</div>
				<button className='btn text-2xl btn-circle'>
					<i className='fa-brands fa-google'></i>
				</button>
				<div className=' flex gap-2 items-baseline justify-center text-xl'>
					Need an account?
					<Link to='/signup' className='btn btn-sm text-xl uppercase'>
						Sign up
					</Link>
					<button className=''></button>
				</div>
			</form>
		</div>
	);
};

export default Login;
