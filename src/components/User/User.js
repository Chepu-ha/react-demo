import UserSytle from "./User.module.css";
import {usersService} from "../../services";

export function User({user, setUsers, setUsersUpdate}) {

	const {id, name, username} = user;

	const deleteUser = async (id) => {
		await usersService.delete(id);
		setUsers(users => {
			const index = users.findIndex(value => value.id === id);
			users.splice(index, 1);
			return [...users];
		});
	};

	return (
		<div className={UserSytle.User}>
			<div>
				<div>id -- {id}</div>
				<div>name -- {name}</div>
				<div>username -- {username}</div>
			</div>
			<div className={UserSytle.Buttons}>
				<button onClick={() => deleteUser()}>Delete</button>
				<button onClick={() => setUsersUpdate(user)}>Update</button>
			</div>
		</div>
	);
}