export default function Ship({item}) {
	return (
		<div>
			<h2>Mission name -- {item.mission_name}</h2>
			<p>Launch year -- {item.launch_year}</p>
			<img src={item.links.mission_patch_small} alt={item.mission_name}/>
		</div>
	);
}