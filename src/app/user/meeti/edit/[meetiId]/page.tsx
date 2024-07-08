"use server";

import EditMeetiFrontend from "./EditMeetiFrontend";
import { getEditMeeti } from "@/api/requestTypes";
import { Group } from "@/types/Group";
import Meeti from "@/types/Meeti";
import EditMeetiFailedFrontend from "./EditMeetiFailedFrontend";
import { requestWasSuccessful } from "@/lib/status";

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
	
	let messages = [];
	if(editMeetiResponse) {
		messages = editMeetiResponse.messages;
	} else {
		messages = [{
			message: "Couldn't fetch meeti data, maybe the server is offline",
			type: "error"
		}];
	}
	
	// Check if it's successful
	const isSuccess = requestWasSuccessful(editMeetiResponse);
	if(!isSuccess) {
		return (
			<main className="contenedor">
				<EditMeetiFailedFrontend messages={messages} />
			</main>
		);
	}
	
	const groups: Array<Group> | undefined = editMeetiResponse.groups;
	const meeti: Meeti = editMeetiResponse.meeti;
	
	return (
		<div>
			<EditMeetiFrontend
				groups={groups}
				meeti={meeti}
			/>
		</div>
	);
}
