"use server";

import ResourceFailed from "@/components/ResourceFailed";
import GroupFrontend from "./GroupFrontend";
import { requestWasSuccessful } from "@/lib/status";
import { getGroupInfo } from "@/api/requestTypes";
import Meeti from "@/types/Meeti";
import { Group } from "@/types/Group";
import apiUrl from "@/lib/config/apiUrl";

/**
 * Show group page
 */
export default async function ShowGroupPage({
	params: {
		groupId
	}
}: {
	params: {
		groupId: string;
	}
}) {
	const groupInfoResponse = await getGroupInfo(groupId);
	
	// Check if it's successful
	const isSuccess = requestWasSuccessful(groupInfoResponse);
	if(!isSuccess) {
		const messages = [{
			message: "Couldn't fetch group data, maybe the server is offline or it doesn't exists",
			type: "error"
		}];
		
		return (
			<main className="contenedor">
				<ResourceFailed messages={messages} />
			</main>
		);
	}
	
	// Meeti information
	const group: Group = groupInfoResponse.group;
	const meetis: Array<Meeti> = groupInfoResponse.meetis
	if(!group) {
		const messages = [{
			message: "Couldn't fetch group data, maybe the server is offline",
			type: "error"
		}];
		
		return (
			<main className="contenedor">
				<ResourceFailed messages={messages} />
			</main>
		);
	}
	
	const url = apiUrl();
	
	return (
		<div>
			<link rel="stylesheet" href={`${url}/public/css/user/userInfo.css`} />
			
			<GroupFrontend
				group={group}
				meetis={meetis}
			/>
		</div>
	);
}
