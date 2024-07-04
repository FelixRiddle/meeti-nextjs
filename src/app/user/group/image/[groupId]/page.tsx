"use server";

import { singleUserOwnedGroup } from "@/api/requestTypes";
import ChangeImageFrontend from "./ChangeImageFrontend";
import Messages from "@/components/Messages";
import { Group } from "@/types/Group";

/**
 * Change image
 */
export default async function ChangeImagePage({
	params: {
		groupId
	}
}: {
	params: {
		groupId: string;
	}
}) {
	// Get group
	const data = await singleUserOwnedGroup(groupId);
	
	let messages = undefined;
	let group: Group | undefined = undefined;
	if(!data) {
		messages = [{
			message: "Unexpected error, the server may be offline",
			type: "error"
		}];
	} else {
		messages = data.messages;
		group = data.group;
	}
	
	return (
		<div>
			{messages && (
				<Messages messages={messages} />
			)}
			
			{group && (
				<ChangeImageFrontend group={group} />
			) || (
				<main className="contenedor">
					<p>No group obtained from the server, either it doesn't exists, or you don't own it.</p>
				</main>
			)}
		</div>
	);
}
