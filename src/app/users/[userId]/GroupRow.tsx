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
		<li>
			<div className="image">
				{group.image && (
					<img
						src={`${url}/public/uploads/groups/${group.id}`}
						alt={`${group.name} image`}
					/>
				) || (
					<img
						src={`${url}/public/img/meeti.png`}
						alt="Meeti logo"
					/>
				)}
			</div>
			
			<div className="text">
				<a href={`/groups/${group.id}`}>
					{group.name}
				</a>
			</div>
		</li>
	);
}
