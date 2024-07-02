"use server";

import createAxiosInstance from "@/lib/createAxiosInstance";

/**
 * Send a get request with authentication if possible
 */
export default async function getRequest(endpoint: string) {
	try {
		const instance = createAxiosInstance();
		
		const response = await instance.get(endpoint);
		
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
