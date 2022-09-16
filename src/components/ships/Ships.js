import {useEffect, useState} from "react";

import {getShips} from "../../services/ships-api-service";
import Ship from "../Ship/Ship";

export default function Ships() {

	const [ships, setShips] = useState([]);

	useEffect(() => {
		getShips().then((value) => {
			setShips(value);
		});
	}, []);

	return (
		<div>
			{ships.filter(value => value.launch_year !== "2020").map((ship, index)=><Ship item={ship} key={index}/>)}
		</div>
	);
}
