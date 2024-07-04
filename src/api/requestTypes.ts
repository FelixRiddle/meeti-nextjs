"use server";

import { cookies } from "next/headers";
import getRequest from "./lib/request/getRequest";
import sendRequest from "./lib/request/sendRequest";
import multipartRequest from "./lib/request/multipartRequest";

// Here I'll register specific endpoint functions

// Register user
export const registerUser = (data: FormData) => sendRequest('/rest/auth/register', data);
export const editGroup = (data: FormData, id: string) => sendRequest(`/rest/user/group/edit/${id}`, data);

// Get requests
export const getCategories = () => getRequest("/rest/group/categories");
export const logout = () => {
	// Clear cookie here
	cookies().delete("token");
	
	// Clear on the server
	return getRequest("/rest/user/auth/logout");
}
export const userOwnedGroups = () => getRequest("/rest/user/group/getAll");
// By id
export const getGroupAndCategories = (groupId: string) => getRequest(`/rest/user/group/edit/${groupId}`);

// Multipart
export const createGroup = (data: FormData) => multipartRequest("/rest/user/group/new", data);

