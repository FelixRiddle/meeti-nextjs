"use server";

import { singleUserOwnedGroup } from "@/api/requestTypes";
import DeleteFrontend from "./DeleteFrontend";
import Messages from "@/components/Messages";

/**
 * 
 */
export default async function Delete({
	params: {
		groupId
	}
}: {
	params: {
		groupId: string;
	}
}) {
	const data = await singleUserOwnedGroup(groupId);
	
	const messages = data.messages;
	const group = data.group;
	
	return (
		<div>
			{messages && (
				<Messages messages={messages} />
			)}
			
			{group && (
				<DeleteFrontend group={group} />
			) || (
				<main className="contenedor">
					<p>No group obtained from the server, either it doesn't exists, or you don't own it.</p>
				</main>
			)}
		</div>
	);
}
