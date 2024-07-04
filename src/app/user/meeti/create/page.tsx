"use server";

import { userOwnedGroups } from "@/api/requestTypes";
import CreateMeetiFrontend from "./CreateMeetiFrontend";
import { Group } from "@/types/Group";
import Messages from "@/components/Messages";

/**
 * Create Meeti
 */
export default async function CreateMeeti() {
	const userGroupsResponse = await userOwnedGroups();
	
	let messages = undefined;
	let groups: Array<Group> | undefined = undefined;
	if(!userGroupsResponse) {
		messages = [{
			message: "Unexpected error, the server may be offline",
			type: "error"
		}];
	} else {
		messages = userGroupsResponse.messages;
		groups = userGroupsResponse.groups;
	}
	
	
	
	return (
		<div>
			{messages && (
				<Messages messages={messages} />
			)}
			
			<CreateMeetiFrontend userGroups={groups} />
		</div>
	);
}
