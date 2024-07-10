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
					<select name="category" id="category" className="categoria">
						<option value="" disabled selected>-- Select one --</option>
						{categories.map((category) => {
							return (
								<option value={category.id}>{category.name}</option>
							);
						})}
					</select>
					<input type="text" name="name" id="name" placeholder="Meeti name" />
					<input type="text" name="city" placeholder="City" />
					<input type="text" name="country" placeholder="Country" />
					<input type="submit" value="Search" className="btn btn-rosa" />
				</form>
			</div>
		</div>
	);
}
