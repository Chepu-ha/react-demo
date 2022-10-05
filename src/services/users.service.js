import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const usersService = {
	get: () => axiosInstance.get(urls.users)
};

export {usersService};