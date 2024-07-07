"use client";

import { editGroup } from "@/api/requestTypes";
import Messages from "@/components/Messages";
import apiUrl from "@/lib/config/apiUrl";
import { requestWasSuccessful } from "@/lib/status";
import { Category } from "@/types/Category";
import { Group } from "@/types/Group";
import { useRef, useState } from "react";

/**
 * Edit page frontend
 */
export default function EditPageFrontend({
	categories,
	group
}: {
	categories: Array<Category>,
	group: Group
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
		
		const data = await editGroup(formData, group.id);
		
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
			<Messages messages={messages}/>
			
			<main className="contenedor contenedor-formulario no-padding">
				<link rel="stylesheet" href={`${url}/public/package/trix@2.1.1/dist/trix.css`} />
				
				<script src={`${url}/public/package/trix@2.1.1/dist/trix.umd.js`}></script>
				
				<h1>New group</h1>
				
				<form action={`${url}/user/group/new`} className="default-form" method="POST" ref={form}>
					<div className="campo">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" placeholder="Group name" defaultValue={group.name} />
					</div>
					
					<div className="campo descripcion">
						<label htmlFor="description">Description</label>
						<div className="contenedor-editor">
							<input type="hidden" name="description" id="description" defaultValue={group.description} />
							<trix-editor input="description"></trix-editor>
						</div>
					</div>
					
					<div className="campo">
						<label htmlFor="category">Category</label>
						<select name="category" id="category" defaultValue={group.socialCategoryId}>
							<option value="" defaultValue="">- Select one -</option>
							{categories.map((category) => {
								return (
									<option value={category.id} key={category.id}>{category.name}</option>
								)
							})}
						</select>
					</div>
					
					<div className="campo">
						<label htmlFor="url">URL</label>
						<input type="url" name="url" placeholder="Website" defaultValue={group.url} />
					</div>
					
					<div className="campo enviar">
						<input type="submit" value="Save changes" className="btn btn-rosa" onClick={submitForm} />
					</div>
				</form>
			</main>
		</div>
	);
}
