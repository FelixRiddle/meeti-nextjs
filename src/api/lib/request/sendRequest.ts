"use server";

import createAxiosInstance from "@/lib/createAxiosInstance";
import { cookies } from "next/headers";

/**
 * Seeing that behavior is many times similar, this is the generalization of sending a request.
 */
export default async function sendRequest(endpoint: string, formData: FormData) {
	try {
		const instance = createAxiosInstance();
		
		const response = await instance.post(endpoint, formData);
		
		const data = response.data;
		
		// Store cookie
		cookies().set("token", data.token);
		
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
