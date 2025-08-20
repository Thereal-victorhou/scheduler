import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo } from './actions/todoActions';

function App() {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos.todos);

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	const handleAdd = () => {
		dispatch(addTodo({ text: 'New Todo' }));
	};

	return (
		<div>
			<h1>TODO List</h1>
			<button onClick={handleAdd}>Add Todo</button>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.text}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
