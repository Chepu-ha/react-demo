import {urls} from "../configs";
import {axiosService} from "./axios.service";

const postService = {
	getAll: () => axiosService.get(urls.posts)
};

export {postService};