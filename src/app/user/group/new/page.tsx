"use server";

import { getCategories } from "@/api/requestTypes";
import NewGroupFrontend from "./NewGroupFrontend";

/**
 * New group
 */
export default async function Page() {
	
	const categoriesResponse = await getCategories();
	
	console.log(`Response: `, categoriesResponse);
	
	const categories = categoriesResponse.categories;
	
	return (
		<div>
			<NewGroupFrontend categories={categories} />
		</div>
	);
}
