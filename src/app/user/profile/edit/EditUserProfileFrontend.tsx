"use client";

import { editUserProfile } from "@/api/requestTypes";
import Messages from "@/components/Messages";
import apiUrl from "@/lib/config/apiUrl";
import { requestWasSuccessful } from "@/lib/status";
import { User } from "@/types/User";
import Script from "next/script";
import { useRef, useState } from "react";

/**
 * Edit user profile
 */
export default function EditUserProfileFrontend({
	user
}: {
	user: User
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
		
		const data = await editUserProfile(formData);
		
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
			<link rel="stylesheet" href={`${url}/public/package/trix@2.1.1/dist/trix.css`} />
			<Script src={`${url}/public/package/trix@2.1.1/dist/trix.umd.js`}></Script>
			
			<Messages messages={messages}>
			</Messages>
			
			<h1>Edit user profile</h1>
			
			<form action="" className="default-form" ref={form}>
				<div className="campo">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" placeholder="Name" defaultValue={user.name}/>
				</div>
				<div className="campo descripcion">
					<label htmlFor="description">A brief of you</label>
					<div className="contenedor-editor">
						<input
							type="hidden"
							name="description"
							placeholder="Description"
							id="description"
							defaultValue={user.description}
						/>
						<trix-editor input="description"></trix-editor>
					</div>
				</div>
				<div className="campo">
					<label htmlFor="email">Email</label>
					<input type="text" name="email" placeholder="Email" value={user.email} />
				</div>
				<div className="campo enviar">
					<input
						type="submit"
						value="Save changes"
						className="btn btn-rosa"
						onClick={submitForm}
					/>
				</div>
			</form>
		</main>
	);
}

