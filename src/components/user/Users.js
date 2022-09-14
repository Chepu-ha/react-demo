import {useState} from "react";
import {UserItem} from "./UserItem";

export default function Users() {
	let [users, setUsers] = useState([]);

	fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6")
	.then(value => value.json())
	.then(value => {
		setUsers(value);
	});

	return (
		<div>
			{users.map((user, index) => <UserItem item={user} key={index}/>)}
		</div>
	);
}