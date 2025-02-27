"use client";

import Script from "next/script";
import { useRef, useState } from "react";

import { createGroup } from "@/api/requestTypes";
import Messages from "@/components/Messages";
import apiUrl from "@/lib/config/apiUrl";
import { requestWasSuccessful } from "@/lib/status";
import { Category } from "@/types/Category";

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
			
			<main className="contenedor contenedor-formularios no-padding">
				<link rel="stylesheet" href={`${url}/public/package/trix@2.1.1/dist/trix.css`} />
				<Script src={`${url}/public/package/trix@2.1.1/dist/trix.umd.js`}></Script>
				
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
							<option value="" defaultValue="">- Select one -</option>
							{categories.map((category) => {
								return (
									<option
										value={`${category.id}`}
										key={category.id}
									>{category.name}</option>
								);
							})}
						</select>
					</div>
					
					<div className="campo">
						<label htmlFor="image">Image</label>
						<input type="file" name="image" placeholder="Group image" />
					</div>
					
					<div className="campo">
						<label htmlFor="url">URL</label>
						<input type="url" name="url" placeholder="Website" />
					</div>
					
					<div className="campo enviar">
						<input
							type="submit"
							value="Create group"
							className="btn btn-rosa"
							onClick={submitForm}
						/>
					</div>
				</form>
			</main>
		</div>
	);
}
