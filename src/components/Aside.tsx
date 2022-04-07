import { FC } from "react";

interface AsideProps {
    
}
 
const Aside: FC<AsideProps> = ({children}) => {
    return (
		<aside className='drawer h-auto grow'>
			<input id='my-drawer' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content'>{children}</div>
			<div className='drawer-side fixed h-full w-full'>
				<label htmlFor='my-drawer' className='drawer-overlay'></label>
				<ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content text-2xl font-bold'>
					<li>
						<a className=' active'>Weather</a>
					</li>
					<li>
						<a>ToDo</a>
					</li>
				</ul>
			</div>
		</aside>
	);
}
 
export default Aside;