import {useEffect, useState} from "react";

import {todosService} from "../../services";
import {Todo} from "../Todo/Todo";

export function Todos() {

	const [todos, setTodos] = useState([]);

	useEffect(() => {
		todosService.get().then(({data}) => setTodos(data));
	}, []);

	return (
		<div>
			<h2>Todos</h2>
			<div>{todos.map((todo) => <Todo todo={todo} key={todo.id}/>)}</div>
		</div>
	);
}
