"use client";

import { loginUser } from "@/api/requestTypes";
import Messages from "@/components/Messages";
import { useRef, useState } from "react";

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
		
		const data = await loginUser(formData);
		
		if(data.messages) {
			setMessages(data.messages);
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

