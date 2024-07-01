import axios from "axios";
import { cookies } from "next/headers";
import apiUrl from "./config/apiUrl";

/**
 * Create axios instance
 */
export default function createAxiosInstance() {
	const url = apiUrl();
	
	const token = cookies().get("token")?.value;
	
	let headers: any = {
		'Content-Type': 'application/json',
	};
	if(token) {
		// Add jwt token
        headers['Cookie'] = `token=${token}`;
	}
	
	const instance = axios.create({
		withCredentials: token ? true : false,
		baseURL: url,
		headers
	});
	
	return instance;
}
