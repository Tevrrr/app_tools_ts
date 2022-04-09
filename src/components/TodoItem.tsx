import { FC } from "react";
import { ITodo } from '../common/Types';
interface TodoItemProps {
	data: ITodo;
	delTodo: (id: number) => void;
	checkedTodo: (id: number) => void;
}
 
const TodoItem: FC<TodoItemProps> = ({ data, delTodo, checkedTodo }) => {
	return (
		<div className='w-full flex gap-2 items-center p-3 rounded-box bg-base-300 hover:bg-primary hover:text-pr hover:bg-opacity-50 transition-all text-xl font-semibold'>
			<input
				type='checkbox'
				checked={data.checked}
				onClick={() => checkedTodo(data.id)}
				className=' checkbox checkbox-lg checkbox-accent border-2'
			/>
			<p className='grow'>{data.text}</p>
			<div className='flex gap-2'>
				<button
					className='btn btn-sm btn-error text-xl btn-square'
					onClick={() => delTodo(data.id)}>
					<i className='fa-solid fa-x'></i>
				</button>
			</div>
		</div>
	);
};
 
export default TodoItem;