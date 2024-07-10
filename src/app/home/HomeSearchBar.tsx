"use client";

import { Category } from "@/types/Category";

export default function HomeSearchBar({
	categories
}: {
	categories: Array<Category>
}) {
	
	return (
		<div className="buscador-inicio">
			<div className="contenedor">
				<h2>Find a group in your city</h2>
				<form action="#">
					<select
						name="category"
						id="category"
						className="categoria"
						defaultValue={""}
					>
						<option defaultValue="" disabled={true}>-- Select one --</option>
						{categories.map((category) => {
							return (
								<option defaultValue={category.id}>{category.name}</option>
							);
						})}
					</select>
					<input type="text" name="name" id="name" placeholder="Meeti name" />
					<input type="text" name="city" placeholder="City" />
					<input type="text" name="country" placeholder="Country" />
					<input type="submit" defaultValue="Search" className="btn btn-rosa" />
				</form>
			</div>
		</div>
	);
}
