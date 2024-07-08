"use server";

import EditMeetiFrontend from "./EditMeetiFrontend";
import { getEditMeeti } from "@/api/requestTypes";
import { Group } from "@/types/Group";
import Meeti from "@/types/Meeti";
import EditMeetiFailedFrontend from "./EditMeetiFailedFrontend";
import { requestWasSuccessful } from "@/lib/status";
import Address from "@/types/Address";

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
	
	// Check if it's successful
	const isSuccess = requestWasSuccessful(editMeetiResponse);
	if(!isSuccess) {
		const messages = [{
			message: "Couldn't fetch meeti data, maybe the server is offline",
			type: "error"
		}];
		
		return (
			<main className="contenedor">
				<EditMeetiFailedFrontend messages={messages} />
			</main>
		);
	}
	
	const groups: Array<Group> | undefined = editMeetiResponse.groups;
	const meeti: Meeti = editMeetiResponse.meeti;
	const address = meeti.address;
	
	if(!meeti || !address) {
		const messages = [{
			message: "Couldn't fetch meeti data and/or address, maybe the server is offline",
			type: "error"
		}];
		
		return (
			<main className="contenedor">
				<EditMeetiFailedFrontend messages={messages} />
			</main>
		);
	}
	
	return (
		<div>
			<EditMeetiFrontend
				groups={groups}
				meeti={meeti}
				address={address}
			/>
		</div>
	);
}
