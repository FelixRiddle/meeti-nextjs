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
	
	const messages = data.messages;
	const group: Group | undefined = data.group;
	
	return (
		<div>
			{messages && (
				<Messages messages={messages} />
			)}
			
			{group && (
				<ChangeImageFrontend group={group} />
			) || (
				<div>
					<p>No group obtained from the server, either it doesn't exists, or you don't own it.</p>
				</div>
			)}
		</div>
	)
}
