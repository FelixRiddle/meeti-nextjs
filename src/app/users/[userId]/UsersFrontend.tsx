"use client";

import { Group } from "@/types/Group";
import { User } from "@/types/User";
import GroupRow from "./GroupRow";
import apiUrl from "@/lib/config/apiUrl";

/**
 * Users frontend
 */
export default function UsersFrontend({
	user,
	groups,
}: {
	user: User;
	groups: Array<Group>
}) {
	const url = apiUrl();
	
	return (
		<div>
			<link rel="stylesheet" href={`${url}/public/css/user/userInfo.css`} />
			<link rel="stylesheet" href={`${url}/public/css/group/group.css`} />
			
			<main className="participants contenedor">
				<h1>{user.name}</h1>
				<div className="userInfo">
					<div className="image">
						{user.pfp && (
							<img
								src={`${url}/public/user/${user.id}/${user.pfp}`}
								alt={`${user.name} profile picture`}
							/>
						)}
					</div>
					
					<div className="text" dangerouslySetInnerHTML={{__html: user.description}}>
					</div>
				</div>
				
				{groups.length > 0 && (
					<div>
						<h2>Groups of this user</h2>
						<ul>
							{groups.map((group: any) => {
								return (
									<GroupRow
										group={group}
									/>
								)
							})}
						</ul>
					</div>
				)}
			</main>
		</div>
	)
}
