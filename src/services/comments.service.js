import {axiosInstance} from "./axios.service";

import {urls} from "../configs";

const commentsService = {
	get: () => axiosInstance(urls.comments)
};

export {commentsService};