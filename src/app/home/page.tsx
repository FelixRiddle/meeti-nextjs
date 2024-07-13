"use server";

import apiUrl from "@/lib/config/apiUrl";
import HomeSearchBar from "./HomeSearchBar";
import { getHome } from "@/api/requestTypes";
import moment from "moment";
import MeetiCard from "./MeetiCard";
import ICardMeeti from "@/types/ICardMeeti";

/**
 * Home
 */
export default async function Home() {
	const url = apiUrl();
	
	const [
		response,
	] = await Promise.all([
		getHome()
	]);
	
	const categories = response && response.categories || [];
	const meetis: Array<ICardMeeti> = response && response.meetis || [];
	
	moment.locale("en");
	
	return (
		<div>
			<link rel="stylesheet" href={`${url}/public/css/meeti/index.css`} />
			
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
							<MeetiCard
								meeti={meeti}
							/>
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
									<a href={`/category/${category.nameId}`}>
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

