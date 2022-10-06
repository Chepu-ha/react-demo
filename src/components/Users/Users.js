import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {usersService} from "../../services";
import {User} from "../User/User";
import {GET_USERS} from "../../redux";

export function Users() {

	let state = useSelector(state => state.usersReducer);
	let dispatch = useDispatch();

	useEffect(() => {
		usersService.get().then(({data}) => {
			dispatch({type: GET_USERS, payload: data})
		});
	}, []);

	return (
		<div>
			{state.users.map(user=><User key={user.id} user={user} />)}
		</div>
	);
}