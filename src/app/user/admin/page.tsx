"use server";

import { userOwnedGroups } from "@/api/requestTypes";
import AdminFrontend from "./AdminFrontend";

/**
 * 
 */
export default async function Admin() {
	
	// Get groups
	const userGroupsResponse = await userOwnedGroups();
	const userGroups = userGroupsResponse.groups;
	
	return (
		<div>
			<AdminFrontend userGroups={userGroups} />
		</div>
	)
}
