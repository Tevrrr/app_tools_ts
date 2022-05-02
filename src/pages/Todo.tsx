/** @format */

import { FC, useState, useContext, useEffect } from 'react';
import Input from '../components/items/Input';
import { ITodo } from '../common/Types';
import TodoItem from '../components/TodoItem';
import { ClientContext } from '../common/ClientContext';

interface TodoProps {}

const Todo: FC<TodoProps> = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);
	const client = useContext(ClientContext);

	useEffect(() => {
		client.getTodo(setTodos);
	}, [client]);

	function addTodo(text: string) {
		let todo = { id: Date.now(), text, checked: false };
		setTodos([...todos, todo]);
		client.addTodo(todo);
	}

	function delTodo(id: number) {
		setTodos(
			todos.filter((item) => {
				return item.id !== id;
			})
		);
		client.delTodo(id);
	}

	function checkedTodo(id: number) {
		setTodos(
			todos.map((item) => {
				if (item.id === id) {
					client.checkedTodo(id, !item.checked);
					return { ...item, checked: !item.checked };
				}
				return item;
			})
		);
	}

	return (
		<div className=' flex min-h-full min-w-[15rem] justify-center p-4'>
			<div className='card gap-4 w-[31rem] bg-base-200 p-3 '>
				<Input placeholder='Enter Todo..' inputProps={addTodo} />
				<div className='flex flex-col gap-2'>
					{todos.map((item) => {
						return (
							<TodoItem
								data={item}
								delTodo={delTodo}
								checkedTodo={checkedTodo}
								key={item.id}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Todo;
