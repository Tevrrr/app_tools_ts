/** @format */

import { FC } from 'react';
import { Link } from 'react-router-dom';
import ThemeMenu from './items/ThemeMenu';


interface NavbarProps { }

function RequireAuth(): string {
	if (!false) {
		return '/login'
	}
	return '/user';
}

const Navbar: FC<NavbarProps> = () => {
	return (
		<div className=' navbar fixed top-0 left-0 z-20 justify-between gap-2 bg-primary px-3 h-16'>
			<label
				htmlFor='my-drawer'
				className='btn  btn-circle drawer-button text-2xl'>
				<i className='fa-solid fa-bars'></i>
			</label>
			<div className=' flex gap-2'>
				<ThemeMenu />
				<Link to={RequireAuth()} className='btn btn-circle text-2xl'>
					{false ? (
						<i className='fa-solid fa-user'></i>
					) : (
						<i className='fa-solid fa-arrow-right-to-bracket'></i>
					)}
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
