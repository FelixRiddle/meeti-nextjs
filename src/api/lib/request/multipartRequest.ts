"use server";

import apiUrl from "@/lib/config/apiUrl";
import axios from "axios";
import { cookies } from "next/headers";

/**
 * Seeing that behavior is many times similar, this is the generalization of sending a request.
 */
export default async function multipartRequest(endpoint: string, formData: FormData) {
	try {
		const url = apiUrl();
		
		const token = cookies().get("token")?.value;
		
		let headers: any = {
			'Content-Type': 'multipart/form-data',
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
		
		const response = await instance.post(endpoint, formData);
		
		const data = response.data;
		
		return data;
	} catch(err: any) {
		if(err.response) {
			const data = err.response.data;
			return data;
		}
		
		console.error(err);
		
		return undefined;
	}
}
