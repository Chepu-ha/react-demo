export function UserItem(props) {

	let {item} = props;

	return (
		<div>
			<div>id - {item.id}</div>
			<div>name - {item.name}</div>
			<div>status - {item.status}</div>
			<div>species - {item.species}</div>
			<div>gender - {item.gender}</div>
			<img src={item.image} alt={item.name}/>
		</div>
	);
}