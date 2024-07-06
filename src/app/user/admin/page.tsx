"use server";

import { userAdmin, userOwnedGroups } from "@/api/requestTypes";
import AdminFrontend from "./AdminFrontend";
import Messages from "@/components/Messages";

/**
 * 
 */
export default async function Admin() {
	
	// // Get groups
	// const userGroupsResponse = await userOwnedGroups();
	
	// // Unwrap without throwing an error
	// const userGroups = userGroupsResponse?.groups;
	
	const adminResponse = await userAdmin();
	
	let messages = undefined;
	if(!adminResponse) {
		messages = [{
			message: "Unexpected error, the server may be offline",
			type: "error"
		}];
	} else {
		messages = adminResponse.messages;
	}
	
	const groups = adminResponse.groups;
	const futureMeetis = adminResponse.futureMeetis;
	const pastMeetis = adminResponse.pastMeetis;
	
	return (
		<div>
			{messages && (
				<Messages messages={messages} />
			)}
			
			<AdminFrontend
				userGroups={groups}
				futureMeetis={futureMeetis}
				pastMeetis={pastMeetis}
			/>
		</div>
	)
}
