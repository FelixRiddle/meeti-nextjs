"use server";

import sendRequest from "./lib/request/sendRequest";

// Here I'll register specific endpoint functions
export const registerUser = (data: FormData) => sendRequest('/rest/auth/register', data);
export const loginUser = (data: FormData) => sendRequest("/rest/auth/login", data);
