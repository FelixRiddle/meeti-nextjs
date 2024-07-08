"use server";

import { userAdmin } from "@/api/requestTypes";
import AdminFrontend from "./AdminFrontend";
import Messages from "@/components/Messages";
import { requestWasSuccessful } from "@/lib/status";
import ResourceFailed from "@/components/ResourceFailed";

/**
 * 
 */
export default async function Admin() {
	const adminResponse = await userAdmin();
	
	let messages = undefined;
	if(!adminResponse) {
		messages = [{
		}];
	} else {
		messages = adminResponse.messages;
	}
	
	// Check if it's successful
	const isSuccess = requestWasSuccessful(adminResponse);
	if(!isSuccess) {
		// console.log(`Request not successful`);
		const messages = [{
			message: "Unexpected error, the server may be offline",
			type: "error"
		}];
		
		return (
			<main className="contenedor">
				<ResourceFailed
					messages={messages}
					redirectTo="/home"
				/>
			</main>
		);
	}
	
	// Extract data
	const groups = adminResponse.groups;
	const futureMeetis = adminResponse.futureMeetis;
	const pastMeetis = adminResponse.pastMeetis;
	if(groups && futureMeetis && pastMeetis) {
		const messages = [{
			message: "Couldn't fetch meeti data, maybe the server is offline",
			type: "error"
		}];
		
		return (
			<main className="contenedor">
				<ResourceFailed
					messages={messages}
					redirectTo="/home"
				/>
			</main>
		);
	}
	
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
