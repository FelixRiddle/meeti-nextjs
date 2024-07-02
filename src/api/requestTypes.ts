"use server";

import getRequest from "./lib/request/getRequest";
import sendRequest from "./lib/request/sendRequest";

// Here I'll register specific endpoint functions
export const registerUser = (data: FormData) => sendRequest('/rest/auth/register', data);
export const getCategories = () => getRequest("/rest/group/categories");
