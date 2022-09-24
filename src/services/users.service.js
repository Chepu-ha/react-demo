import {axiosInstance} from "./axios.service";

import {urls} from "../configs";

const usersService = {
	getAll: () => axiosInstance.get(urls.users),
	create: (user) => axiosInstance.post(urls.users, user),
	update: (id, user) => axiosInstance.put(`${urls.users}/${id}`, user),
	delete: (id) => axiosInstance.delete(`${urls.users}/${id}`)
};

export {usersService};