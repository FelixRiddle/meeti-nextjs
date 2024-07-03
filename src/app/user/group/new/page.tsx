"use server";

import { getCategories, userOwnedGroups } from "@/api/requestTypes";
import NewGroupFrontend from "./NewGroupFrontend";

/**
 * New group
 */
export default async function Page() {
	
	// Get categories
	const categoriesResponse = await getCategories();
	const categories = categoriesResponse.categories;
	
	return (
		<div>
			<NewGroupFrontend categories={categories} />
		</div>
	);
}
