import {useEffect, useState} from "react";

import {albumsService} from "../../services";
import {Album} from "../Album/Album";


export function Albums() {

	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		albumsService.get().then(({data}) => {
			setAlbums(data);
		});
	}, []);

	return (
		<div>
			<h2>Albums</h2>
			<div>{albums.map((album)=><Album album={album} key={album.id}/>)}</div>
		</div>
	);
}
