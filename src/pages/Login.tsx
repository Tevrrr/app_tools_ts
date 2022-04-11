/** @format */

import { FC } from 'react';
import { Link } from 'react-router-dom';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
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
				/>
				<input
					className=' input w-full max-w-xs input-primary text-lg font-bold'
					type='text'
					placeholder='Password'
				/>

				<div className=' w-full max-w-xs  flex gap-4 text-lg items-center'>
					<input
						type='checkbox'
						className=' checkbox checkbox-primary border-2'
					/>{' '}
					Remember me?
				</div>
				<button className='btn btn-primary text-2xl w-full max-w-xs uppercase'>
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
