import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux";
import {User} from "../User/User";

export function Users() {

	const dispatch = useDispatch();
	const {users} = useSelector(state => state.userReducer);

	useEffect(() => {
		dispatch(userActions.getAll());
		// userService.getAll().then(({data}) => dispatch(userActions.getAll(data)));
	}, []);

	return (
		<div>
			{users.map((user) => <User key={user.id} user={user}/>)}
		</div>
	);
}