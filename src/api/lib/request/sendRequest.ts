"use server";

import createAxiosInstance from "@/lib/createAxiosInstance";

/**
 * Seeing that behavior is many times similar, this is the generalization of sending a request.
 */
export default async function sendRequest(endpoint: string, formData: FormData) {
	try {
		const instance = createAxiosInstance();
		
		const response = await instance.post(endpoint, formData);
		
		return response.data;
	} catch(err: any) {
		if(err.response) {
			return err.response.data;
		}
		
		console.error(err);
		
		return undefined;
	}
}
