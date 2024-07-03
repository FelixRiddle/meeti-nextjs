"use server";

import { getGroupAndCategories } from "@/api/requestTypes";
import Messages from "@/components/Messages";
import EditPageFrontend from "./EditPageFrontend";

/**
 * Edit page
 */
export default async function EditPage({
	params: {
		groupId
	}
}: {
	params: {
		groupId: string;
	}
}) {
	const data = await getGroupAndCategories(groupId);
	
	const messages = data.messages;
	const categories = data.categories;
	const group = data.group;
	
	return (
		<div>
			{messages && (
				<Messages messages={messages} />
			)}
			
			{group && categories && (
				<EditPageFrontend
					categories={categories}
					group={group}
				/>
			)}
		</div>
	);
}
