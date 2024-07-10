"use client";

import loginRequest from "@/api/auth/loginRequest";
import Messages from "@/components/Messages";
import apiUrl from "@/lib/config/apiUrl";
import { requestWasSuccessful } from "@/lib/status";
import { useRef, useState } from "react";

/**
 * Login page
 */
export default function LoginFrontend() {
	const url = apiUrl();
	const form = useRef(null);
	const [messages, setMessages] = useState([]);
	
	async function submitForm(e: any) {
		e.preventDefault();
		
		if(!form) {
			return;
		}
		
		const formData = new FormData(form.current);
		
		// Login to NextJS api backend
		// Because of a problem with uploading files, we've got to login directly too
		const [
			apiResponse,
		] = await Promise.all([
			loginRequest(formData),
		]);
		
		// const directApiResponse = await fetch(`${url}/rest/auth/login`, {
		// 	headers: {
		// 		"Content-Type": "application/json"
		// 	},
		// 	body: formData,
		// 	method: "POST"
		// })
		// const fetchData = await directApiResponse.json();
		
		// Messages
		const messages = apiResponse.messages;
		if(messages) {
			setMessages(messages);
		}
		
		// Redirect to home
		if(requestWasSuccessful(apiResponse)) {
			location.href = "/";
		}
	}
	
	return (
		<div>
			<Messages messages={messages}/>
			
			<main className="contenedor contenedor-formularios">
				<h1>Login</h1>
				
				<form
					action="/auth/login"
					method="POST"
					className="default-form"
					ref={form}
				>
					<div className="campo">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" placeholder="Email" required />
					</div>
					
					<div className="campo">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" name="password" placeholder="Password" required />
					</div>
					
					<div className="campo">
						<input type="submit" value="Login" className="btn btn-rosa" onClick={submitForm} />
					</div>
				</form>
			</main>
		</div>
	);
}

