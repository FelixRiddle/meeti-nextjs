"use server";

import { getCategories } from "@/api/requestTypes";
import NewGroupFrontend from "./NewGroupFrontend";

/**
 * New group
 */
export default async function Page() {
	
	const categoriesResponse = await getCategories();
	
	const categories = categoriesResponse.categories;
	
	return (
		<div>
			<NewGroupFrontend categories={categories} />
		</div>
	);
}
