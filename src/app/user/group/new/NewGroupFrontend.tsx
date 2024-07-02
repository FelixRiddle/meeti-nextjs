"use client";

import apiUrl from "@/lib/config/apiUrl";

/**
 * 
 */
export default function NewGroupFrontend() {
	const url = apiUrl();
	
	return (
		<div>
			<main className="contenedor contenedor-formulario no-padding">
				<link rel="stylesheet" href={`${url}/public/package/trix@2.1.1/dist/trix.css`} />
				
				<script src={`${url}/public/package/trix@2.1.1/dist/trix.umd.js`}></script>
				
				<h1>New group</h1>
				
				<form action={`${url}/user/group/new`} className="default-form" method="POST">
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
						<input type="submit" value="Create group" className="btn btn-rosa" />
					</div>
				</form>
			</main>
		</div>
	);
}
