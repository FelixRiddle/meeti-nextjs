"use server";

import { getUser } from "@/api/requestTypes";
import ResourceFailed from "@/components/ResourceFailed";
import { requestWasSuccessful } from "@/lib/status";
import ProfileFrontend from "./ProfileFrontend";

/**
 * Profile backend
 */
export default async function Profile() {
	const userResponse = await getUser();
	
	// Check if it's successful
	const isSuccess = requestWasSuccessful(userResponse);
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
	
	// Check if the user exists
	const user = userResponse.user;
	if(!user) {
		const messages = [{
			message: "Couldn't fetch meeti data and/or address, maybe the server is offline",
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
			<ProfileFrontend
				user={user}
			/>
		</div>
	);
}
