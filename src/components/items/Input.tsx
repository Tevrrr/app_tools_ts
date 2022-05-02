/** @format */

import { FC, useState } from 'react';

interface InputProps {
	inputProps?: (location: string) => void;
	placeholder?: string;
}

const Input: FC<InputProps> = ({ inputProps, placeholder }) => {
	const [value, setValue] = useState('');

	function sendLocations(): void {
		if (value.length > 0 && inputProps) {
            inputProps(value);
            setValue('');
		}
	}

	return (
		<form
			className=' w-full flex input-group input-group-lg '
			onSubmit={(e) => e.preventDefault()}>
			<input
				type='text'
				className='grow input w-full input-bordered input-accent text-lg font-medium'
				placeholder={placeholder}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>

			<button
				className=' btn btn-accent font-black text-lg pl-4'
				onClick={() => sendLocations()}>
				<i className='fa-solid fa-plus'></i>
			</button>
		</form>
	);
};

export default Input;
