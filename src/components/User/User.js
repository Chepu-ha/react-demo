import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

export function User({user}) {

	const dispatch = useDispatch();
	return (
		<div>
			<h2>{user.name}</h2>
			<button onClick={() => dispatch(userActions.setCurrentUser(user))}>Select user</button>
		</div>
	);
}