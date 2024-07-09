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
	const form = useRef(null);
	const [messages, setMessages] = useState([]);
	
	async function submitForm(e: any) {
		e.preventDefault();
		
		if(!form) {
			return;
		}
		
		const formData = new FormData(form.current);
		
		const data = await profilePicture(formData);
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
					<label htmlFor="image">Image</label>
					<input type="file" name="image" placeholder="Group image" />
				</div>
				
				{user.pfp && (
					<div className="campo">
						<label htmlFor="">Current image</label>
						<UserImage user={user} />
					</div>
				) || (
					<p>This group has no image</p>
				)}
				
				<div className="campo enviar">
					<input
						type="submit"
						value="Update image"
						className="btn btn-rosa"
						onClick={submitForm}
					/>
				</div>
			</form>
		</main>
	);
}
