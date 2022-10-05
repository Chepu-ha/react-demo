import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const postsService = {
	get: () => axiosInstance.get(urls.posts)
};

export {postsService};