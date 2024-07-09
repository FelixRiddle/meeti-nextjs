"use client";

import { changePassword } from "@/api/requestTypes";
import Messages from "@/components/Messages";
import apiUrl from "@/lib/config/apiUrl";
import { requestWasSuccessful } from "@/lib/status";
import { useRef, useState } from "react";

/**
 * Reset password frontend
 */
export default function ResetPasswordFrontend() {
	const url = apiUrl();
	const form = useRef(null);
	const [messages, setMessages] = useState([]);
	
	async function submitForm(e: any) {
		e.preventDefault();
		
		if(!form) {
			return;
		}
		
		const formData = new FormData(form.current);
		
		const data = await changePassword(formData);
		
		if(!data || typeof data === "string") {
			return;
		}
		
		if(data.messages) {
			setMessages(data.messages);
		}
		
		const isSuccess = requestWasSuccessful(data);
		
		// Redirect to admin panel
		if(isSuccess) {
			location.href = "/user/admin";
		}
	}
	
	return (
		<main className="contenedor contenedor-formularios no-padding">
			<Messages messages={messages}/>
			
			<h1>Reset password formulary</h1>
			
			<form action="/user/password/reset" className="default-form" method="POST">
				<div className="campo">
					<label htmlFor="password">Actual password</label>
					<input type="text" name="password" id="password" placeholder="Actual password" />
				</div>
				
				<div className="campo">
					<label htmlFor="newPassword">New password</label>
					<input type="text" name="newPassword" id="newPassword" placeholder="New password" />
				</div>
				
				<div className="campo">
					<label htmlFor="confirmPassword">Repeat password</label>
					<input
						type="text"
						name="confirmPassword"
						id="confirmPassword"
						placeholder="Confirm password"
					/>
				</div>
				
				<div className="campo enviar">
					<input type="submit" value="Save changes" className="btn btn-rosa" />
				</div>
			</form>
		</main>
	);
}
