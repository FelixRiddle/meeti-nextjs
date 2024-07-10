"use server";

import apiUrl from "@/lib/config/apiUrl";
import HomeSearchBar from "./HomeSearchBar";
import { getCategories } from "@/api/requestTypes";

/**
 * Home
 */
export default async function Home() {
	const url = apiUrl();
	
	const [
		categoriesResponse
	] = await Promise.all([
		getCategories(),
	]);
	
	const categories = categoriesResponse.categories;
	
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
					<div className="card">
						<img src={`${url}/public/img/imagen1.jpg`} alt="Business and Entrepneurship" />
						<div className="card-texto">
							<p className="fecha">Thursday, September 11, 2025 10:35 AM</p>
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
					
					<div className="card">
						<img
							src={`${url}/public/img/imagen2.jpg`}
							alt="Bitcoin and cryptocurrencies"
						/>
						<div className="card-texto">
							<p className="fecha"> Thursday, December 18, 2025 10:44 AM </p>
							<a href="#">
								<h3>
									Bitcoin and cryptocurrencies
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
					
					<div className="card">
						<img src={`${url}/public/img/imagen3.jpg`} alt="Food and drinks" />
						<div className="card-texto">
							<p className="fecha"> Thursday, December 12, 2025 10:44 AM </p>
							<a href="#">
								<h3>
									Food and drinks
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

