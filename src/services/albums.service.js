import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const albumsService = {
	get: () => axiosInstance.get(urls.albums)
};

export {albumsService};