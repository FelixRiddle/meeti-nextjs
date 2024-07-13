"use client";

import apiUrl from "@/lib/config/apiUrl";
import { Group } from "@/types/Group";

export default function GroupRow({
	group
}: {
	group: Group
}) {
	const url = apiUrl();
	
	return (
		<li className="group">
			<a href={`/groups/${group.id}`}>
				<div className="groupImage">
					{group.image && (
						<img
							src={`${url}/public/uploads/groups/${group.id}`}
							alt={`${group.name} image`}
							width="360"
							height="180"
						/>
					) || (
						<img
							src={`${url}/public/img/meeti.png`}
							alt="Meeti logo"
							width="360"
							height="180"
						/>
					)}
				</div>
				
				<div className="text">
						{group.name}
				</div>
			</a>
		</li>
	);
}
