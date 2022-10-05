import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {usersService} from "../../services";

export function Users() {

	let state = useSelector(state => state);
	let dispatch = useDispatch();

	useEffect(() => {
		usersService.get().then(({data}) => {
			dispatch({type: "GET-USERS", payload: data})
		});
	}, []);

	return (
		<div>
			{state.users.map(user=><h2 key={user.id}>User {user.id}: {user.name}</h2>)}
		</div>
	);
}