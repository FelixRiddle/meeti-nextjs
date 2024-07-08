"use server";

import { getMeeti } from "@/api/requestTypes";
import ResourceFailed from "@/components/ResourceFailed";
import { requestWasSuccessful } from "@/lib/status";
import Meeti from "@/types/Meeti";
import DeleteMeetiFrontend from "./DeleteMeetiFrontend";

/**
 * Delete meeti page
 */
export default async function DeletePage({
	params: {
		meetiId,
	}
}: {
	params: {
		meetiId: string,
	}
}) {
	const editMeetiResponse = await getMeeti(meetiId);
	
	// Check if it's successful
	const isSuccess = requestWasSuccessful(editMeetiResponse);
	if(!isSuccess) {
		const messages = [{
			message: "Couldn't fetch meeti data, maybe the server is offline",
			type: "error"
		}];
		
		return (
			<main className="contenedor">
				<ResourceFailed messages={messages} />
			</main>
		);
	}
	
	const meeti: Meeti = editMeetiResponse.meeti;
	if(!meeti) {
		const messages = [{
			message: "Couldn't fetch meeti data, maybe the server is offline",
			type: "error"
		}];
		
		return (
			<main className="contenedor">
				<ResourceFailed messages={messages} />
			</main>
		);
	}
	
	return (
		<div>
			<DeleteMeetiFrontend
				meeti={meeti}
			/>
		</div>
	);
}
