"use client";

import moment from "moment";
import MeetiCard from "./MeetiCard";
import { Category } from "@/types/Category";
import Meeti from "@/types/Meeti";

/**
 * Category page
 */
export default function CategoryFrontend({
	category,
	meetis,
}: {
	category: Category;
	meetis: Array<Meeti>;
}) {
	moment.locale('en');
	
	return (
		<div className="contenedor proximos-eventos">
			{/* Category names */}
			<h1>{category.name}</h1>
			
			{/* Show meetis */}
			{meetis.length > 0 && (
				<div className="grid columnas-md-3">
					{meetis.map((meeti) => {
						return (
							<MeetiCard
								meeti={meeti}
							/>
						);
					})}
				</div>
			) || (
				<p>There are no meetis in this category</p>
			)}
		</div>
	);
}

