"use client";

import { registerUser } from "@/api/requestTypes";
import Messages from "@/components/Messages";
import { useRef, useState } from "react";
import { requestWasSuccessful } from "../login/LoginFrontend";
import { redirect } from "next/navigation";

/**
 * Register frontend
 */
export default function RegisterFrontend() {
	const form = useRef(null);
	const [messages, setMessages] = useState([]);
	
	async function submitForm(e: any) {
		e.preventDefault();
		
		if(!form) {
			return;
		}
		
		const formData = new FormData(form.current);
		
		const data = await registerUser(formData);
		
		console.log(`Response: `, data);
		
		if(data.messages) {
			setMessages(data.messages);
		}
		
		// Redirect to login
		if(requestWasSuccessful(data)) {
			location.href = "/auth/login";
		}
	}
	
	return (
		<div>
			<Messages messages={messages}/>
			
			<main className="contenedor contenedor-formularios">
				<h1>Register</h1>
				
				<form
					method="POST"
					className="default-form"
					ref={form}
				>
					<div className="campo">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" placeholder="Email" required />
					</div>
					
					<div className="campo">
						<label htmlFor="name">Name</label>
						<input type="text" id="name" name="name" placeholder="Name" required />
					</div>
					
					<div className="campo">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" name="password" placeholder="Password" required />
					</div>
					
					<div className="campo">
						<label htmlFor="confirmPassword">Confirm password</label>
						<input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm password" required />
					</div>
					
					<div className="campo">
						<input type="submit" value="Create account" className="btn btn-rosa" onClick={submitForm}/>
					</div>
				</form>
			</main>
		</div>
	);
}

