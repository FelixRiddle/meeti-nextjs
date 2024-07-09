"use server";

import { getUser } from "@/api/requestTypes";
import ResourceFailed from "@/components/ResourceFailed";
import { requestWasSuccessful } from "@/lib/status";
import PictureFrontend from "./PictureFrontend";

/**
 * Upload profile picture
 */
export default async function ProfilePicture() {
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
			<PictureFrontend
				user={user}
			/>
		</div>
	);
}
