"use client";

import { deleteUserGroup } from "@/api/requestTypes";
import Messages from "@/components/Messages";
import { requestWasSuccessful } from "@/lib/status";
import { Group } from "@/types/Group";
import { useState } from "react";

/**
 * Delete frontend
 */
export default function DeleteFrontend({
	group,
}: {
	group: Group;
}) {
	const [messages, setMessages] = useState([]);
	
	async function submitForm(e: any) {
		e.preventDefault();
		
		const data = await deleteUserGroup(group.id);
		
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
		<div>
			<Messages messages={messages} />
			
			<main className="contenedor contenedor-formularios">
				<h1>Delete {group.name}</h1>
				
				<form className="default-form">
					<legend>Delete group? Once the action is performed it cant be undone.</legend>
					
					<div className="campo enviar">
						<input type="submit" value="Delete group" className="btn btn-rosa" onClick={submitForm} />
					</div>
				</form>
			</main>
		</div>
	);
}

