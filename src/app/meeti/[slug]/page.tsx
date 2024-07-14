"use server";

import { getCompleteMeeti } from "@/api/requestTypes";
import ResourceFailed from "@/components/ResourceFailed";
import { requestWasSuccessful } from "@/lib/status";
import Address from "@/types/Address";
import { Group } from "@/types/Group";
import { User } from "@/types/User";
import MeetiFrontend from "./MeetiFrontend";
import apiUrl from "@/lib/config/apiUrl";
import IUserComment from "@/types/IUserComment";

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
	
	const comments: Array<IUserComment> = completeMeetiResponse.comments;
	
	// Meeti information
	const group: Group = completeMeeti.group;
	// Logged in user
	const user: User = completeMeeti.user;
	const participants: Array<User> = completeMeeti.participants;
	const address: Address = completeMeeti.address;
	if(!group || !user || !participants || !address || !comments) {
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
	
	const participating = completeMeetiResponse.userParticipates;
	const url = apiUrl();
	
	return (
		<div>
			<link rel="stylesheet" href={`${url}/public/css/meeti/index.css`} />
			<link rel="stylesheet" href={`${url}/public/css/comment.css`} />
			
			<MeetiFrontend
				user={user}
				meeti={completeMeeti}
				participating={participating}
				comments={comments}
			/>
		</div>
	);
}

