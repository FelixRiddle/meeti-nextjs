"use client";

import { Group } from "@/types/Group";
import { User } from "@/types/User";
import GroupRow from "./GroupRow";

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
	return (
		<div>
			<link rel="stylesheet" href="/public/css/user/userInfo.css" />
			
			<main className="participants contenedor">
				<h1>{user.name}</h1>
				<div className="userInfo">
					<div className="image">
						{user.pfp && (
							<img
								src="/public/user/<%- userProfile.id %>/<%- userProfile.pfp %>"
								alt="<%- userProfile.name %> profile picture"
							/>
						)}
					</div>
					
					<div className="text">
						{user.description}
					</div>
				</div>
				
				{groups.length > 0 && (
					<div className="groupInfo">
						<h2>Groups of this user</h2>
						<ul className="groupList">
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
