"use server";

import createAxiosInstance from "@/lib/createAxiosInstance";
import { cookies } from "next/headers";

/**
 * Seeing that behavior is many times similar, this is the generalization of sending a request.
 */
export default async function loginRequest(formData: FormData) {
	try {
		const instance = createAxiosInstance();
		
		const response = await instance.post("/rest/auth/login", formData);
		
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
