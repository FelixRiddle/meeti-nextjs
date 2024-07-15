"use client";

import { Category } from "@/types/Category";
import { formToJSON } from "axios";
import { useRef } from "react";
import { ISearchMeeti } from "../search/page";

export default function HomeSearchBar({
	categories
}: {
	categories: Array<Category>
}) {
	const form = useRef(null);
	
	async function submitForm(e: any) {
		e.preventDefault();
		
		const formData: ISearchMeeti = formToJSON(form.current);
		
		let queryParams = "";
		if(formData.category) {
			queryParams += `category=${formData.category}&`;
		}
		
		if(formData.title) {
			queryParams += `title=${formData.title}&`;
		}
		
		if(formData.city) {
			queryParams += `city=${formData.city}&`;
		}
		
		if(formData.country) {
			queryParams += `country=${formData.country}`;
		}
		
		const newLocation = `/search?${queryParams}`;
		
		location.href = newLocation;
	}
	
	return (
		<div className="buscador-inicio">
			<div className="contenedor">
				<h2>Find a group in your city</h2>
				<form ref={form}>
					<select
						name="category"
						id="category"
						className="categoria"
						defaultValue={""}
					>
						<option value="">All categories</option>
						{categories.map((category) => {
							return (
								<option
									value={category.id}
									key={category.id}
								>{category.name}</option>
							);
						})}
					</select>
					<input type="text" name="title" id="title" placeholder="Meeti title" />
					<input type="text" name="city" placeholder="City" />
					<select name="country" id="country" defaultValue={""}>
						<option value="">All countries</option>
						<option value="MEX">Mexico</option>
						<option value="COL">Colombia</option>
						<option value="ARG">Argentina</option>
						<option value="ESP">Spain</option>
						<option value="USA">United States</option>
						<option value="PER">Peru</option>
					</select>
					<input
						type="submit"
						defaultValue="Search"
						className="btn btn-rosa"
						onClick={submitForm}
					/>
				</form>
			</div>
		</div>
	);
}
