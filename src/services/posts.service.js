import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const postsService = {
	get: (id) => axiosInstance.get(`${urls.posts}/${id}`),
};

export {postsService};