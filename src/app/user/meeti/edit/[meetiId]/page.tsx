"use server";

import Messages from "@/components/Messages";
import EditMeetiFrontend from "./EditMeetiFrontend";
import { getEditMeeti } from "@/api/requestTypes";
import { Group } from "@/types/Group";
import Meeti from "@/types/Meeti";

/**
 * Edit page
 */
export default async function EditMeeti({
	params: {
		meetiId,
	}
}: {
	params: {
		meetiId: number,
	}
}) {
	const editMeetiResponse = await getEditMeeti(meetiId);
	console.log(`Edit meeti response: `, editMeetiResponse);
	
	let messages = [];
	if(editMeetiResponse) {
		messages = editMeetiResponse.messages;
	} else {
		messages = [{
			message: "Couldn't fetch meeti data, maybe the server is offline",
			type: "error"
		}];
	}
	
	const groups: Array<Group> | undefined = undefined;
	const meeti: Meeti = editMeetiResponse.meeti;
	
	return (
		<div>
			{messages && (
				<Messages messages={messages} />
			)}
			
			<EditMeetiFrontend
				groups={groups}
				meeti={meeti}
			/>
		</div>
	)
}
