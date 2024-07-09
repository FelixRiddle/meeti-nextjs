"use client";

import { Group } from "@/types/Group";

/**
 * Group row view
 */
export default function GroupRowView({
	group
}: {
	group: Group
}) {
	
	return (
		<div>
			<li key={group.id}>
				<div className="informacion-admin">
					<h3>{group.name}</h3>
				</div>
				<div className="acciones contenedor-bottones">
					<a href={`/user/group/edit/${group.id}`} className="btn btn-verde">Edit</a>
					<a href={`/user/group/image/${group.id}`} className="btn btn-azul2">Image</a>
					<a href={`/user/group/delete/${group.id}`} className="btn btn-rojo">Delete</a>
				</div>
			</li>
		</div>
	);
}
