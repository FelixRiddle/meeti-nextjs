"use server";

import { meetiParticipants } from "@/api/requestTypes";
import ParticipantsFrontend from "./ParticipantsFrontend";
import { requestWasSuccessful } from "@/lib/status";
import ResourceFailed from "@/components/ResourceFailed";

/**
 * Participants
 */
export default async function Participants({
	params: {
		slug,
	}
}: {
	params: {
		slug: string;
	}
}) {
	const meetiResponse = await meetiParticipants(slug);
	
	// Check if it's successful
	const isSuccess = requestWasSuccessful(meetiResponse);
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
	
	const meeti = meetiResponse.meeti;
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
			<ParticipantsFrontend
				meeti={meeti}
			/>
		</div>
	);
}
