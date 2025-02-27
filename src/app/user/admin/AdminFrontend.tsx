import { Group } from "@/types/Group";
import Meeti from "@/types/Meeti";
import Link from "next/link";
import MeetiRowView from "./MeetiRowView";
import GroupRowView from "./GroupRowView";

/**
 * Admin frontend
 */
export default function AdminFrontend({
	userGroups,
	futureMeetis,
	pastMeetis
}: {
	userGroups: Array<Group> | undefined,
	futureMeetis: Array<Meeti> | undefined,
	pastMeetis: Array<Meeti> | undefined,
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
				</div>
				
				{/* Future meetis */}
				<div className="seccion-admin">
					<h2>Your future Meeti's</h2>
						{futureMeetis && futureMeetis.length > 0 ? (
							<ul>
								{futureMeetis.map((meeti) => {
									return (
										<MeetiRowView
											meeti={meeti}
										/>
									);
								})}
							</ul>
						) : (
							<p>There are no Meeti's in this section</p>
						)}
				</div>
				
				<div className="seccion-admin">
					<h2>Your groups</h2>
					
					{userGroups && userGroups.length > 0 && (
						<ul>
							{userGroups.map((group) => {
								return (
									<GroupRowView
										key={group.id}
										group={group}
									/>
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
				
				{/* Past meetis */}
				<div className="seccion-admin">
					<h2>Your past Meeti's</h2>
						{pastMeetis && pastMeetis.length > 0 ? (
							<ul>
								{pastMeetis.map((meeti) => {
									return (
										<MeetiRowView
											isFuture={false}
											meeti={meeti}
										/>
									);
								})}
							</ul>
						) : (
							<p>There are no Meeti's in this section</p>
						)}
				</div>
			</main>
		</div>
	)
}
