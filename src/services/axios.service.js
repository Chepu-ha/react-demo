import axios from "axios";

import {baseURL} from "../configs";

const axiosInstance = axios.create({
	baseURL: baseURL
});

export {axiosInstance};