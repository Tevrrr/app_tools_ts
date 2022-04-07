/** @format */

import { FC } from 'react';
import ThemeMenu from './items/ThemeMenu';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	return (
		<div className=' navbar fixed top-0 left-0 z-20 justify-between gap-2 bg-primary px-3'>
			<label
				htmlFor='my-drawer'
				className='btn  btn-circle drawer-button text-2xl'>
				<i className='fa-solid fa-bars'></i>
			</label>
			<div className=' flex gap-2'>
				<ThemeMenu />
				<button className='btn btn-circle text-2xl'>
					{false ? (
						<i className='fa-solid fa-user'></i>
					) : (
						<i className='fa-solid fa-arrow-right-to-bracket'></i>
					)}
				</button>
			</div>
		</div>
	);
};

export default Navbar;
