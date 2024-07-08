"use client";

import { deleteMeeti } from "@/api/requestTypes";
import Messages from "@/components/Messages";
import apiUrl from "@/lib/config/apiUrl";
import { requestWasSuccessful } from "@/lib/status";
import Meeti from "@/types/Meeti";
import { useRef, useState } from "react";


/**
 * Delete Meeti frontend
 */
export default function DeleteMeetiFrontend({
	meeti,
}: {
	meeti: Meeti,
}) {
	const [messages, setMessages] = useState([]);
	
	async function submitForm(e: any) {
		e.preventDefault();
		
		const data = await deleteMeeti(meeti.id.toString());
		
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
		<main className="contenedor contenedor-formularios">
			<Messages
				messages={messages}
			/>
			
			<h1>Delete {meeti.title}</h1>
			<form className="default-form">
				<legend>
					Delete Meeti? This action cannot be reverted.
				</legend>
				<div className="campo enviar">
					<input
						type="submit"
						value="Delete Meeti"
						className="btn btn-rosa"
						onClick={submitForm}
					/>
				</div>
			</form>
		</main>
	);
}

