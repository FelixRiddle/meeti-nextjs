"use server";

import createAxiosInstance from "@/lib/createAxiosInstance";

/**
 * Seeing that behavior is many times similar, this is the generalization of sending a request.
 */
export default async function deleteRequest(endpoint: string) {
	try {
		const instance = createAxiosInstance();
		
		const response = await instance.delete(endpoint);
		
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
