import axios from 'axios';

export const fetchTodos = () => async (dispatch) => {
	const res = await axios.get('/todos');
	dispatch({ type: 'FETCH_TODOS', payload: res.data });
};

export const addTodo = (todo) => async (dispatch) => {
	const res = await axios.post('/todos', todo);
	dispatch({ type: 'ADD_TODO', payload: res.data });
};

// Add more actions for update/delete
