"use client";

import { profilePicture } from "@/api/requestTypes";
import Messages from "@/components/Messages";
import UserImage from "@/components/user/UserImage/Index";
import apiUrl from "@/lib/config/apiUrl";
import { requestWasSuccessful } from "@/lib/status";
import { User } from "@/types/User";
import { useRef, useState } from "react";

/**
 * Picture frontend
 */
export default function PictureFrontend({
	user
}: {
	user: User,
}) {
	const url = apiUrl();
	const form = useRef(null);
	const [messages, setMessages] = useState([]);
	
	async function submitForm(e: any) {
		e.preventDefault();
		
		if(!form) {
			return;
		}
		
		const formData = new FormData(form.current);
		
		// This would work if I stored cookies in the frontend
		const apiUrl = `${url}/rest/user/profile/picture`;
		const directApiResponse = await fetch(apiUrl, {
			headers: {
				"Content-Type": "multipart/form-data"
			},
			body: formData,
			method: "POST"
		});
		const data = await directApiResponse.json();
		
		if(!data || typeof data === "string") {
			return;
		}
		
		if(data.messages) {
			setMessages(data.messages);
		}
		
		const isSuccess = requestWasSuccessful(data);
		
		// Redirect to admin panel
		if(isSuccess) {
			window.history.go(-1);
		}
	}
	
	return (
		<main className="contenedor contenedor-formularios no-padding">
			<Messages messages={messages} />
			
			<h1>Profile picture</h1>
			
			<form className="default-form" method="POST" encType="multipart/form-data" ref={form}>
				<legend>
					Upload a profile picture
				</legend>
				
				<div className="campo">
					<label htmlFor="pfp">Image</label>
					<input type="file" name="pfp" placeholder="Profile picture" />
				</div>
				
				{user.pfp && (
					<div className="campo">
						<label htmlFor="">Current image</label>
						<UserImage user={user} />
					</div>
				) || (
					<p>You don't have a profile picture</p>
				)}
				
				<div className="campo enviar">
					<input
						type="submit"
						defaultValue="Update profile picture"
						className="btn btn-rosa"
						onClick={submitForm}
					/>
				</div>
			</form>
		</main>
	);
}
