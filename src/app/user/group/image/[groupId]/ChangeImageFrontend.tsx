"use client";

import { updateGroupImage } from "@/api/requestTypes";
import Messages from "@/components/Messages";
import apiUrl from "@/lib/config/apiUrl";
import { requestWasSuccessful } from "@/lib/status";
import { Group } from "@/types/Group";
import { useRef, useState } from "react";

/**
 * Change image
 */
export default function ChangeImageFrontend({
	group
}: {
	group: Group
}) {
	const url = apiUrl();
	const form = useRef(null);
	const [messages, setMessages] = useState([]);
	
	async function submitForm(e: any) {
		e.preventDefault();
		
		console.log(`Update image`);
		
		if(!form) {
			return;
		}
		
		const formData = new FormData(form.current);
		
		const data = await updateGroupImage(formData, group.id);
		
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
		<main className="contenedor contenedor-formulario no-padding">
			<h1>{group.name}</h1>
			
			<Messages messages={messages} />
			
			<form className="default-form" method="POST" encType="multipart/form-data" ref={form}>
				<div className="campo">
					<label htmlFor="image">Image</label>
					<input type="file" name="image" placeholder="Group image" />
				</div>
				
				{group.image && (
					<div className="campo">
						<label htmlFor="">Current image</label>
						<img src={`${url}/public/uploads/groups/${group.image}`} alt="Group image" width="400" />
					</div>
				) || (
					<p>This group has no image</p>
				)}
				
				<div className="campo enviar">
					<input type="submit" value="Update image" className="btn btn-rosa" onClick={submitForm} />
				</div>
			</form>
		</main>
	);
}
