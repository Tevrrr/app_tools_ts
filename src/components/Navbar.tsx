/** @format */

import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ClientContext } from '../common/ClientContext';

import ThemeMenu from './items/ThemeMenu';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	const client = useContext(ClientContext);
	function RequireAuth(): string {
		if (client.user !== null) {
			return '/user';
		}
		return '/login';
	}
	return (
		<div className=' navbar fixed top-0 left-0 z-20 justify-between gap-2 bg-primary px-3 h-16'>
			<label
				htmlFor='my-drawer'
				className='btn  btn-circle drawer-button text-2xl'>
				<i className='fa-solid fa-bars'></i>
			</label>
			<div className=' flex gap-2'>
				<ThemeMenu />
				{client.user !== null ? (
					<button className='btn btn-circle btn-error text-2xl' onClick={()=>client.exitUser()}>
						<i className='fa-solid fa-arrow-right-from-bracket'></i>
					</button>
				) : (
					<Link to='/login' className='btn btn-circle text-2xl'>
						<i className='fa-solid fa-arrow-right-to-bracket'></i>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
