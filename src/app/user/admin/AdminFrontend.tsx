import { Group } from "@/types/Group";
import Meeti from "@/types/Meeti";
import Link from "next/link";
import MeetiRowView from "./MeetiRowView";

/**
 * Admin frontend
 */
export default function AdminFrontend({
	userGroups,
	meetis,
}: {
	userGroups: Array<Group> | undefined,
	meetis: Array<Meeti> | undefined,
}) {
	return (
		<div>
			<main className="contenedor panel-administracion">
				<h1>Admin dashboard</h1>
				
				<div className="contenedor-botones">
					<a href="/user/group/new" className="btn btn-amarillo">
						New group
					</a>
					<a href="/user/meeti/create" className="btn btn-azul">Create Meeti</a>
					<a href="/user/profile/edit" className="btn btn-rosa">Edit profile</a>
					<a href="/user/profile/image/edit" className="btn btn-verde">Change pfp</a>
				</div>
				
				<div className="seccion-admin">
					<h2>Your Meeti's</h2>
						{meetis ? (
							<ul>
								{meetis.map((meeti) => {
									return (
										<MeetiRowView
											meeti={meeti}
										/>
									);
								})}
							</ul>
						) : (
							<p>You haven't created any meeti</p>
						)}
				</div>
				
				<div className="seccion-admin">
					<h2>Your groups</h2>
					
					{userGroups && userGroups.length > 0 && (
						<ul>
							{userGroups.map((group) => {
								return (
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
								);
							})}
						</ul>
					) || (
						<div>
							<p style={{display: "inline", marginRight: "3px"}}>You don't have any groups, 
							</p>
							<Link href="/user/group/new">
								create one
							</Link>
						</div>
					)}
				</div>
			</main>
		</div>
	)
}
