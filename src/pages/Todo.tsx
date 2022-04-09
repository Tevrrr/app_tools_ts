/** @format */

import { FC, useState } from 'react';
import Input from '../components/items/Input';
import {ITodo} from '../common/Types'
import TodoItem from '../components/TodoItem';

interface TodoProps {}

const Todo: FC<TodoProps> = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    function addTodo(text: string) {
        let todo = { id: Date.now(), text, checked: false };
        setTodos([...todos, todo]);
    }

    function delTodo(id: number) {
        setTodos(todos.filter(item => {
            return item.id !== id;
        }));
    }
    
    function checkedTodo(id: number) {
		setTodos(
			todos.map((item) => {
                if (item.id === id) return { ...item, checked: !item.checked }
                return item
			})
		);
	}

	return (
		<div className=' flex min-h-full justify-center p-7'>
			<div className='card gap-4 w-[31rem] bg-base-200 p-3 '>
				<Input placeholder='Enter Todo..' inputProps={addTodo} />
                <div className='flex flex-col gap-2'>
                    {todos.map(item => {
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
