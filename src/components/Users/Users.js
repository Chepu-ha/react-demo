import {useEffect, useState} from "react";

import UserForm from "../UserForm/UserForm";
import {usersService} from "../../services";
import {User} from "../User/User";

export function Users() {

	const [users, setUsers] = useState([]);
	const [usersUpdate, setUsersUpdate] = useState(null);

	useEffect(() => {
		usersService.getAll().then(({data}) => setUsers(data));
	}, []);

	return (
		<div>
			<UserForm setUsers={setUsers} usersUpdate={usersUpdate} setUsersUpdate={setUsersUpdate}/>
			{users.map(user => <User key={user.id} user={user} setUsers={setUsers} setUsersUpdate={setUsersUpdate}/>)}
		</div>
	);
}