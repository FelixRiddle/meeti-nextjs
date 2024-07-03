"use client";

import loginRequest from "@/api/auth/loginRequest";
import Messages from "@/components/Messages";
import { redirect } from "next/navigation";
import { useRef, useState } from "react";

/**
 * Check if a request was successful
 */
export function requestWasSuccessful(responseData: any) {
	if(!responseData) {
		throw Error("Response data is required");
	}
	
	for(const message of responseData.messages) {
		if(message.error) {
			return false;
		}
	}
	
	return true;
}

/**
 * Login page
 */
export default function LoginFrontend() {
	const form = useRef(null);
	const [messages, setMessages] = useState([]);
	
	async function submitForm(e: any) {
		e.preventDefault();
		
		if(!form) {
			return;
		}
		
		const formData = new FormData(form.current);
		
		const data = await loginRequest(formData);
		
		if(data.messages) {
			setMessages(data.messages);
		}
		
		// Redirect to home
		if(requestWasSuccessful(data)) {
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

