"use client";

import { Group } from "@/types/Group";

/**
 * Delete frontend
 */
export default function DeleteFrontend({
	group,
}: {
	group: Group;
}) {
	
	return (
		<main className="contenedor contenedor-formularios">
			<h1>Delete {group.name}</h1>
			
			<form method="DELETE" className="default-form">
				<legend>Delete group? Once the action is performed it cant be undone.</legend>
				
				<div className="campo enviar">
					<input type="submit" value="Delete group" className="btn btn-rosa" />
				</div>
			</form>
		</main>
	);
}

