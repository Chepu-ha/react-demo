export default function UserDetails({currentUser}) {
	return (
		<div>
			<h2>Name -- {currentUser.name}</h2>
			<h3>Username -- {currentUser.username}</h3>
			<p>Email -- {currentUser.email}</p>
			<p>Phone -- {currentUser.phone}</p>
			<p>Website -- {currentUser.website}</p>
		</div>
	);
}