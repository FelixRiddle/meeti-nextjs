"use server";

import ICardMeeti from "@/types/ICardMeeti";
import SearchFrontend from "./SearchFrontend";
import { requestWasSuccessful } from "@/lib/status";
import ResourceFailed from "@/components/ResourceFailed";
import { searchMeeti } from "@/api/requestTypes";
import { objectToFormData } from "@/lib/misc";
import apiUrl from "@/lib/config/apiUrl";

export interface ISearchMeeti {
	category: string;
	title: string;
	city: string;
	country: string;
}

/**
 * Search
 */
export default async function SearchPage({
	searchParams: {
		category,
		title,
		city,
		country
	}
}: {
	searchParams: {
		category: string;
		title: string;
		city: string;
		country: string;
	}
}) {
	const searchObject: ISearchMeeti = {
		category,
		title,
		city,
		country
	};
	
	const completeMeetiResponse = await searchMeeti(objectToFormData(searchObject));
	
	// Check if it's successful
	const isSuccess = requestWasSuccessful(completeMeetiResponse);
	if(!isSuccess) {
		const messages = [{
			message: "Couldn't fetch meetis, maybe the server is offline",
			type: "error"
		}];
		
		return (
			<main className="contenedor">
				<ResourceFailed messages={messages} />
			</main>
		);
	}
	
	const meetis: Array<ICardMeeti> = completeMeetiResponse.meetis;
	if(!meetis) {
		const messages = [{
			message: "Couldn't fetch meetis, maybe the server is offline",
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
			<link
				rel="stylesheet"
				href={`${url}/public/css/meeti/index.css`}
			/>
			
			<SearchFrontend
				meetis={meetis}
			/>
		</div>
	);
}

