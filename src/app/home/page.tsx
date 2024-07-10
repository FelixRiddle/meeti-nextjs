"use server";

import apiUrl from "@/lib/config/apiUrl";

/**
 * Home
 */
export default async function Home() {
	const url = apiUrl();
	
	return (
		<div>
			<div className="hero">
				<h1>Find or create a group to share what you like</h1>
				<a href="/auth/register" className="btn btn-amarillo">Create account</a>
			</div>
			
			<div className="buscador-inicio">
				<div className="contenedor">
					<h2>Find a group in your city</h2>
					<form action="#">
						<select name="category" id="category" className="categoria">
							<option value="" disabled selected>-- Select one --</option>
							<option value="programming" className="programacion">Programming</option>
							<option value="design" className="diseno">Design</option>
							<option value="books" className="libros">Books</option>
						</select>
						<input type="text" name="name" id="name" placeholder="Meeti name" />
						<input type="text" name="city" placeholder="City" />
						<input type="text" name="country" placeholder="Country" />
						<input type="submit" value="Search" className="btn btn-rosa" />
					</form>
				</div>
			</div>
			
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
						<li>
							<a href="#">
								<img
									src={`${url}/public/img/category/programming.jpg`}
									alt="Tech and programming"
								/>
								<p>Tech and programming</p>
							</a>
						</li>
						<li>
							<a href="#">
								<img src={`${url}/public/img/category/design.jpg`} alt="Design" />
								<p>Design</p>
							</a>
						</li>
						<li>
							<a href="#">
								<img
									src={`${url}/public/img/category/business.jpg`}
									alt="Business and Entrepneurship"
								/>
								<p>
									Business and Entrepneurship
								</p>
							</a>
						</li>
						<li>
							<a href="#">
								<img
									src={`${url}/public/img/category/modelling.jpg`}
									alt="Modelling and style"
								/>
								<p>Modelling and style</p>
							</a>
						</li>
						<li>
							<a href="#">
								<img
									src={`${url}/public/img/category/health.jpg`}
									alt="Health and exercise"
								/>
								<p>Health and exercise</p>
							</a>
						</li>
						<li>
							<a href="#">
								<img
									src={`${url}/public/img/category/photography.jpg`}
									alt="Photography and travel"
								/>
								<p>Photography and travel</p>
							</a>
						</li>
						<li>
							<a href="#">
								<img src={`${url}/public/img/category/food.jpg`} alt="Food and drinks" />
								<p>Food and drinks</p>
							</a>
						</li>
						<li>
							<a href="#">
								<img
									src={`${url}/public/img/category/architecture.jpg`}
									alt="Design and architecture" />
								<p>Design and architecture</p>
							</a>
						</li>
						<li>
							<a href="#">
								<img src={`${url}/public/img/category/coffee.jpg`} alt="Coffee" />
								<p>Coffee</p>
							</a>
						</li>
						<li>
							<a href="#">
								<img
									src={`${url}/public/img/category/movies.jpg`}
									alt="Movies and theater"
								/>
								<p>Movies and theater</p>
							</a>
						</li>
						<li>
							<a href="#">
								<img src={`${url}/public/img/category/books.jpg`} alt="Books" />
								<p>Books</p>
							</a>
						</li>
						<li>
							<a href="#">
								<img src={`${url}/public/img/category/learning.jpg`} alt="Learning" />
								<p>Learning</p>
							</a>
						</li>
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

