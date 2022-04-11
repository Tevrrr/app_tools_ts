import { FC } from "react";
import {  NavLink } from "react-router-dom";

interface AsideProps {
    
}
 
const Aside: FC<AsideProps> = ({children}) => {
    return (
		<aside className='drawer h-auto grow'>
			<input id='my-drawer' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content'>{children}</div>
			<div className='drawer-side'>
				<label
					htmlFor='my-drawer'
					className='drawer-overlay  fixed w-full h-screen'></label>
				<ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content text-2xl font-bold fixed h-screen'>
					<li>
						<NavLink to='/weather'>Weather</NavLink>
					</li>
					<li>
						<NavLink to='/todo'>ToDo</NavLink>
					</li>
				</ul>
            </div>
            
		</aside>
	);
}
 
export default Aside;