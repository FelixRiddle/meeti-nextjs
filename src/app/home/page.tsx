"use server";

import apiUrl from "@/lib/config/apiUrl";
import HomeSearchBar from "./HomeSearchBar";
import { getCategories, getHome } from "@/api/requestTypes";
import Meeti from "@/types/Meeti";
import moment from "moment";

/**
 * Home
 */
export default async function Home() {
	const url = apiUrl();
	
	const [
		// categoriesResponse,
		response,
	] = await Promise.all([
		// getCategories(),
		getHome()
	]);
	
	console.log(`Response: `, response);
	const categories = response.categories || [];
	const meetis: Array<Meeti> = response.meetis || [];
	
	moment.locale("en");
	
	return (
		<div>
			<div className="hero">
				<h1>Find or create a group to share what you like</h1>
				<a href="/auth/register" className="btn btn-amarillo">Create account</a>
			</div>
			
			<HomeSearchBar
				categories={categories}
			/>
			
			<div className="contenedor">
				<h2>Upcoming Meeti's</h2>
				<div className="grid columnas-md-3">
					{meetis.map((meeti) => {
						return (
							<div className="card">
								<img
									src={`${url}/public/uploads/groups/${meeti.group.image}`}
									alt={meeti.title} />
								<div className="card-texto">
									<p className="fecha">{
										moment(`${meeti.date} ${meeti.time}`).format("LLLL")
									}</p>
									<a href="#">
										<h3>
											Business and Entrepneurship
										</h3>
									</a>
									<div className="info-autor">
										<div className="image">
										</div>
										<div className="informacion">
											<p>Organized by:</p>
											<p className="autor">
												Felix Riddle
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			
			<main className="bg-gris categorias">
				<h2>Find group by categories</h2>
				
				<div className="contenedor">
					<ul className="lista-categorias grid columnas-2 columnas-md-3">
						{categories.map((category: any) => {
							return (
								<li>
									<a href="#">
										<img
											src={`${url}/public/img/category/${category.nameId}.jpg`}
											alt={category.name}
										/>
										<p>{category.name}</p>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</main>
			
			<div className="meeti-bg">
				<div className="contenedor meeti grid columnas-md-2">
					<section>
						<h3>Create a group</h3>
						<p>
							Share your passions and what you like with people,
							create your group today free of charge
						</p>
					</section>
					<section>
						<h3>Join a group</h3>
						<p>
							Meet people alike, join a group and receive notifications about upcoming events
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}

