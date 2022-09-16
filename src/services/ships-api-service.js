const _url = "https://api.spacexdata.com/v3/launches/";

export const getShips = () => {
	return fetch(_url)
	.then(value => value.json());
};