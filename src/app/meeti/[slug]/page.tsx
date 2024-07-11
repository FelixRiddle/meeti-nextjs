"use server";

import { getCompleteMeeti } from "@/api/requestTypes";
import ResourceFailed from "@/components/ResourceFailed";
import { requestWasSuccessful } from "@/lib/status";
import Address from "@/types/Address";
import { Group } from "@/types/Group";
import { User } from "@/types/User";
import MeetiFrontend from "./MeetiFrontend";

/**
 * 
 */
export default async function MeetiPage({
	params: {
		slug
	}
}: {
	params: {
		slug: string;
	}
}) {
	const completeMeetiResponse = await getCompleteMeeti(slug);
	
	// Check if it's successful
	const isSuccess = requestWasSuccessful(completeMeetiResponse);
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
	
	const completeMeeti = completeMeetiResponse.meeti;
	
	// Meeti information
	const group: Group = completeMeeti.group;
	const user: User = completeMeeti.user;
	const participants: Array<User> = completeMeeti.participants;
	const address: Address = completeMeeti.address;
	
	if(!group || !user || !participants || !address) {
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
			<MeetiFrontend
				meeti={completeMeeti}
			/>
		</div>
	);
}

