"use server";

import { userAdmin } from "@/api/requestTypes";
import AdminFrontend from "./AdminFrontend";
import Messages from "@/components/Messages";

/**
 * 
 */
export default async function Admin() {
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
