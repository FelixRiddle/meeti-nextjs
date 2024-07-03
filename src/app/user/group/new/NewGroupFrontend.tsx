"use client";

import { createGroup } from "@/api/requestTypes";
import { requestWasSuccessful } from "@/app/auth/login/LoginFrontend";
import Messages from "@/components/Messages";
import apiUrl from "@/lib/config/apiUrl";
import { Category } from "@/types/Category";
import { redirect } from "next/navigation";
import { useRef, useState } from "react";

/**
 * 
 */
export default function NewGroupFrontend({
	categories,
}: {
	categories: Array<Category>,
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
		
		const data = await createGroup(formData);
		
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
			<Messages messages={messages}/>
			
			<main className="contenedor contenedor-formulario no-padding">
				<link rel="stylesheet" href={`${url}/public/package/trix@2.1.1/dist/trix.css`} />
				
				<script src={`${url}/public/package/trix@2.1.1/dist/trix.umd.js`}></script>
				
				<h1>New group</h1>
				
				<form action={`${url}/user/group/new`} className="default-form" method="POST" ref={form}>
					<div className="campo">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" placeholder="Group name" />
					</div>
					
					<div className="campo descripcion">
						<label htmlFor="description">Description</label>
						<div className="contenedor-editor">
							<input type="hidden" name="description" id="description" />
							<trix-editor input="description"></trix-editor>
						</div>
					</div>
					
					<div className="campo">
						<label htmlFor="category">Category</label>
						<select name="category" id="category">
							<option value="" selected disabled>- Select one -</option>
							{categories.map((category) => {
								return (
									<option value={`${category.id}`}>{category.name}</option>
								)
							})}
						</select>
					</div>
					
					<div className="campo">
						<label htmlFor="image">Image</label>
						<input type="file" name="image" placeholder="Group image" disabled={true} />
					</div>
					
					<div className="campo">
						<label htmlFor="url">URL</label>
						<input type="url" name="url" placeholder="Website" />
					</div>
					
					<div className="campo enviar">
						<input type="submit" value="Create group" className="btn btn-rosa" onClick={submitForm} />
					</div>
				</form>
			</main>
		</div>
	);
}
