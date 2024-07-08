"use client";

import Meeti from "@/types/Meeti";


/**
 * Delete Meeti frontend
 */
export default function DeleteMeetiFrontend({
	meeti,
}: {
	meeti: Meeti,
}) {
	
	return (
		<main className="contenedor contenedor-formularios">
			<h1>Delete {meeti.title}</h1>
			<form action="/user/meeti/delete" method="POST" className="default-form">
				<legend>
					Delete Meeti? This action cannot be reverted.
				</legend>
				<div className="campo enviar">
					<input type="submit" value="Delete Meeti" className="btn btn-rosa" />
				</div>
			</form>
		</main>
	);
}

