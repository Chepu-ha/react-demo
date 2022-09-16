import axios from "axios";

let axiosInstance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
});

export const getAxiosUsers = () => {
	return axiosInstance.get("/users");
};