"use server";

import { cookies } from "next/headers";
import getRequest from "./lib/request/getRequest";
import sendRequest from "./lib/request/sendRequest";
import multipartRequest from "./lib/request/multipartRequest";

// Here I'll register specific endpoint functions
export const registerUser = (data: FormData) => sendRequest('/rest/auth/register', data);
export const createGroup = (data: FormData) => multipartRequest("/rest/user/group/new", data);
export const getCategories = () => getRequest("/rest/group/categories");
export const logout = () => {
	// Clear cookie here
	cookies().delete("token");
	
	// Clear on the server
	return getRequest("/rest/user/auth/logout");
}
export const userOwnedGroups = () => getRequest("/rest/user/group/getAll");
