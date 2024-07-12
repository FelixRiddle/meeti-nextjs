"use server";

import ResourceFailed from "@/components/ResourceFailed";
import UsersFrontend from "./UsersFrontend";
import { requestWasSuccessful } from "@/lib/status";
import { userProfile } from "@/api/requestTypes";

/**
 * Show user profile
 */
export default async function Users({
	params: {
		userId
	}
}: {
	params: {
		userId: string;
	}
}) {
	const userResponse = await userProfile(userId);
	
	// Check if it's successful
	const isSuccess = requestWasSuccessful(userResponse);
	if(!isSuccess) {
		const messages = [{
			message: "Couldn't fetch user data, maybe the server is offline",
			type: "error"
		}];
		
		return (
			<main className="contenedor">
				<ResourceFailed messages={messages} />
			</main>
		);
	}
	
	// Check if the user exists
	const user = userResponse.userProfile;
	const groups = userResponse.groups || [];
	if(!user) {
		const messages = [{
			message: "Couldn't fetch user data, maybe the server is offline",
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
			<UsersFrontend
				groups={groups}
				user={user}
			/>
		</div>
	);
}
