/** @format */

import { FC, useEffect, useState } from 'react';
import Themes from '../../common/Themes';
import { IThemeSelectItem } from '../../common/Types';

const ThemeMenu: FC = () => {
    const HTML = document.querySelector('html');
    
    const [currentTheme, setCurrentTheme] = useState('');
    
	function click(theme: string): () => void {
		return () => {
			setCurrentTheme(theme);
		};
	}
    
	useEffect(() => {
		if (!currentTheme) {
			let localData: string | null = localStorage.getItem('Theme');
			setCurrentTheme(localData ? localData : '');
		}
		if (HTML) {
			HTML.dataset.theme = currentTheme.toString();
			localStorage.setItem('Theme', currentTheme);
		}
	}, [currentTheme]);
	return (
		<div className=' dropdown dropdown-end'>
			<label tabIndex={0} className='btn btn-sm normal-case flex gap-1'>
				Themes <i className='fa-solid fa-angle-down'></i>
			</label>
			<div className=' dropdown-content menu bg-base-300 min-w-[6rem] p-2 p rounded-box overflow-x-hidden overflow-y-auto max-h-52 shadow-lg'>
				<ul>
					{Themes.map((item: IThemeSelectItem) => {
						return (
							<li>
								<button
									className={
										'btn btn-sm btn-ghost justify-start normal-case ' +
										(item.theme === currentTheme
											? 'active'
											: '')
									}
									onClick={click(item.theme)}>
									<div className='flex gap-1'>
										{item.theme}
										<p>{item.themeIcon}</p>
									</div>
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default ThemeMenu;
