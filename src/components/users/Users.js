//react imports
import {useEffect, useState} from "react";
//my imports
import {getUsers} from "../../services/users-api-service";
import User from "../user/User";
import UserDetails from "../user-details/UserDetails";
import {getAxiosUsers} from "../../services/user-axios-api-service";

export default function Users() {
	const [users, setUsers] = useState([]);
	const [chosenUser, setChosenUser] = useState(null);

	useEffect(() => {
		// getUsers().then(value => {
		// 	setUsers(value);
		// });
		getAxiosUsers().then(value => {
			setUsers(value.data);
		});
	}, []);

	const lift = (chose) => {
		setChosenUser(chose);
	};

	return (
		<div>
			{chosenUser && <UserDetails currentUser={chosenUser} key={chosenUser.id}/>}
			<div>{users.map((user) => <User person={user} lift={lift} key={user.id}/>)}</div>
		</div>
	);
}
