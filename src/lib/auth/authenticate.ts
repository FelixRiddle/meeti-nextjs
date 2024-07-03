import { User } from "@/types/User";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Authenticate
 * 
 * Try to get the user and if it can't then redirect
 */
export function authenticate(failureRedirect = true): User | undefined {
	// Get token
	const tokenCookie = cookies().get("token");
	if(!tokenCookie) {
		if(failureRedirect) {
			redirect("/auth/login");
		}
		
		return;
	}
	const jwtToken = tokenCookie.value;
	
	// Decode token
	const user = jwt.decode(jwtToken);
	if(!user) {
		if(failureRedirect) {
			redirect("/auth/login");
		}
	}
	
	return user;
}

/**
 * Redirect when the user is authenticated.
 */
export function notAuthenticated() {
	// Get token
	const tokenCookie = cookies().get("token");
	if(!tokenCookie) {
		return;
	}
	
	// Redirect
	redirect("/home");
}
