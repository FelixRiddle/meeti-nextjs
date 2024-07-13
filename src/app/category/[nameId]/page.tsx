"use server";

import { categoryMeetis } from "@/api/requestTypes";
import ResourceFailed from "@/components/ResourceFailed";
import { requestWasSuccessful } from "@/lib/status";
import Meeti from "@/types/Meeti";
import CategoryFrontend from "./CategoryFrontend";
import { Category } from "@/types/Category";

/**
 * 
 */
export default async function CategoryPage({
	params: {
		nameId,
	}
}: {
	params: {
		nameId: string;
	}
}) {
	const categoryMeetisResponse = await categoryMeetis(nameId);
	
	// Check if it's successful
	const isSuccess = requestWasSuccessful(categoryMeetisResponse);
	if(!isSuccess) {
		const messages = [{
			message: "Couldn't fetch category meetis, maybe the server is offline or it doesn't exists",
			type: "error"
		}];
		
		return (
			<main className="contenedor">
				<ResourceFailed messages={messages} />
			</main>
		);
	}
	
	// Meeti information
	const meetis: Array<Meeti> = categoryMeetisResponse.meetis || [];
	const category: Category = categoryMeetisResponse.category;
	if(!meetis || !categoryMeetisResponse) {
		const messages = [{
			message: "Couldn't fetch category meetis, maybe the server is offline",
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
			<CategoryFrontend
				category={category}
				meetis={meetis}
			/>
		</div>
	);
}
