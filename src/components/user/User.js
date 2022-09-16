export default function User({person, lift}) {
	return (
		<div>
			<h2>{person.id} - {person.name}</h2>
			<button onClick={() => {
				lift(person);
			}}
			>Details</button>
		</div>
	);
}