"use server";

import { cookies } from "next/headers";
import getRequest from "./lib/request/getRequest";
import postRequest from "./lib/request/postRequest";
import multipartRequest from "./lib/request/multipartRequest";
import deleteRequest from "./lib/request/deleteRequest";

// Here I'll register specific endpoint functions

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
export const singleUserOwnedGroup = (groupId: string) => getRequest(`/rest/user/group/get/${groupId}`);
export const userAdmin = () => getRequest(`/rest/user/admin`);
export const getEditMeeti = (meetiId: number) => getRequest(`/rest/user/meeti/edit/${meetiId}`);
export const getMeeti = (meetiId: string) => getRequest(`/rest/user/meeti/${meetiId}`);
export const getUser = () => getRequest("/rest/user");

// Post requests
export const registerUser = (data: FormData) => postRequest('/rest/auth/register', data);
export const editGroup = (data: FormData, id: string) => postRequest(`/rest/user/group/edit/${id}`, data);
export const createMeeti = (data: FormData) => postRequest(`/rest/user/meeti/create`, data);
export const editMeeti = (
	data: FormData, meetiId: number
) => postRequest(`/rest/user/meeti/edit/${meetiId}`, data);
export const editUserProfile = (data: FormData) => postRequest("/rest/user/profile/edit", data);
export const changePassword = (data: FormData) => postRequest("/rest/user/password/reset", data);

// Multipart
// Can't be uploaded normally there are two alternative ways
// 1) Directly uploading it(Not using server side nextjs api, directly from the client instead)
// 2) Store locally and then send to the server
// Reference/s:
// https://stackoverflow.com/questions/71647581/how-do-i-pass-through-a-file-upload-request-from-a-next-js-api-to-another-api
export const createGroup = (data: FormData) => multipartRequest("/rest/user/group/new", data);
export const updateGroupImage = (
	data: FormData, groupId: string
) => multipartRequest(`/rest/user/group/image/${groupId}`, data);
export const profilePicture = (data: FormData) => multipartRequest("/rest/user/profile/picture", data);

// Delete requests
export const deleteUserGroup = (groupId: string) => deleteRequest(`/rest/user/group/delete/${groupId}`);
export const deleteMeeti = (meetiId: string) => deleteRequest(`/rest/user/meeti/${meetiId}`);
