import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const todosService = {
	get: () => axiosInstance.get(urls.todos)
};

export {todosService};