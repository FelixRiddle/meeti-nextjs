"use client";

import MeetiCard from "../home/MeetiCard";
import ICardMeeti from "@/types/ICardMeeti";

/**
 * Search frontend
 */
export default function SearchFrontend({
	meetis
}: {
	meetis: Array<ICardMeeti>
}) {
	return (
		<div className="contenedor proximos-eventos">
			<h1>Search results</h1>
			
			<div className="grid columnas-md-3">
				{meetis.length > 0 && meetis.map((meeti) => {
					return (
							<MeetiCard
								key={meeti.id}
								meeti={meeti}
							/>
					);
				}) || (
					<p>There are no meetis in this category</p>
				)}
			</div>
		</div>
	)
}
