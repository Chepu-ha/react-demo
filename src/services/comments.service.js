import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const commentsService = {
	get: () => axiosInstance.get(urls.comments)
};

export {commentsService};